/* CRM-Agent-Bench project page. Plain JavaScript; no external dependencies. */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const percent = (rate) => `${(rate * 100).toFixed(2)}%`;
  const money = (value) => value === null ? 'n/a' : `$${value.toFixed(2)}`;
  const state = { view: '1', query: '', family: 'all', sort: 'score', direction: 'desc', imported: false };
  const artwork = window.CRM_BENCH_FIGURES;
  const domainFigures = artwork && Array.isArray(artwork.domains) ? artwork.domains : [];
  let overviewView = 'interaction';
  let workflowId = 'payments';
  let data;
  let publishedData;

  function requireValue(condition, message) { if (!condition) throw new Error(message); }
  function finite(value) { return typeof value === 'number' && Number.isFinite(value); }
  function integer(value, minimum = 0) { return Number.isInteger(value) && value >= minimum; }
  function text(value) { return typeof value === 'string' && value.trim().length > 0 && value.length < 1000; }
  function close(a, b) { return finite(a) && Math.abs(a - b) < 0.000001; }
  function safeUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    const url = value.trim();
    if (/^(https?:\/\/)/i.test(url)) return url;
    if (/^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('//') || /[\\\u0000-\u001f]/.test(url)) return null;
    return url;
  }

  function validateData(input) {
    requireValue(input && typeof input === 'object' && input.schemaVersion === 2, 'Use a results JSON file with schemaVersion 2.');
    requireValue(/^\d{4}-\d{2}-\d{2}$/.test(input.updatedAt), 'updatedAt must use YYYY-MM-DD.');
    const updatedDate = new Date(`${input.updatedAt}T12:00:00Z`);
    requireValue(!Number.isNaN(updatedDate.getTime()) && updatedDate.toISOString().slice(0, 10) === input.updatedAt, 'updatedAt must be a valid calendar date.');
    requireValue(input.project && text(input.project.title) && text(input.project.shortTitle), 'Project title and shortTitle are required.');
    const benchmark = input.benchmark;
    requireValue(benchmark && integer(benchmark.tasks, 1) && integer(benchmark.capabilityTags, 1), 'Benchmark task and capability counts must be positive integers.');
    requireValue(Array.isArray(benchmark.domains) && benchmark.domains.length > 0 && benchmark.domains.length <= 100, 'Provide the benchmark domains.');
    const domainIds = new Set();
    let domainTotal = 0;
    benchmark.domains.forEach((domain) => {
      requireValue(text(domain.id) && text(domain.name) && integer(domain.tasks, 1) && !domainIds.has(domain.id), 'Each domain needs a unique id, name, and positive task count.');
      domainIds.add(domain.id); domainTotal += domain.tasks;
    });
    requireValue(domainTotal === benchmark.tasks, 'Domain task counts must sum to the benchmark task count.');
    requireValue(Array.isArray(input.models) && input.models.length > 0 && input.models.length <= 1000, 'Provide between 1 and 1,000 model results.');
    const isRate = (value) => finite(value) && value >= 0 && value <= 1;
    const validateDomainRates = (rates, modelName) => {
      requireValue(rates && typeof rates === 'object' && Object.keys(rates).length === domainIds.size && [...domainIds].every((id) => isRate(rates[id])), `${modelName}: provide a success rate for every domain.`);
    };
    const ids = new Set();
    input.models.forEach((model) => {
      requireValue(text(model.id) && !ids.has(model.id) && text(model.name) && text(model.family), 'Models need unique ids, names, and family labels.');
      ids.add(model.id);
      requireValue(Array.isArray(model.rounds) && model.rounds.length === 3, `${model.name}: provide exactly three rounds.`);
      const roundIds = new Set();
      const rates = model.rounds.map((round) => {
        requireValue([1, 2, 3].includes(round.round) && !roundIds.has(round.round), `${model.name}: rounds must be numbered 1, 2, and 3.`);
        roundIds.add(round.round);
        requireValue(isRate(round.rate), `${model.name}: round success rates must be between 0 and 1.`);
        return round.rate;
      });
      const mean = rates.reduce((sum, value) => sum + value, 0) / 3;
      const sd = Math.sqrt(rates.reduce((sum, value) => sum + (value - mean) ** 2, 0) / 2) * 100;
      requireValue(close(model.meanRate, mean) && close(model.sampleSdPp, sd), `${model.name}: the mean or sample SD does not match the three round rates.`);
      requireValue(model.pass3 && isRate(model.pass3.rate), `${model.name}: all-three success must be a rate between 0 and 1.`);
      if (model.meanDomainRates || model.roundDomainRates) {
        validateDomainRates(model.meanDomainRates, model.name);
        requireValue(Array.isArray(model.roundDomainRates) && model.roundDomainRates.length === 3 && new Set(model.roundDomainRates.map((round) => round.round)).size === 3 && model.roundDomainRates.every((round) => [1, 2, 3].includes(round.round)), `${model.name}: provide three domain-level rounds.`);
        model.roundDomainRates.forEach((round) => validateDomainRates(round.rates, model.name));
        domainIds.forEach((id) => requireValue(close(model.meanDomainRates[id], model.roundDomainRates.reduce((sum, round) => sum + round.rates[id], 0) / 3), `${model.name}: domain means must give each round equal weight.`));
      }
      const first = model.firstRound;
      requireValue(first && (first.costUsd === null || (finite(first.costUsd) && first.costUsd >= 0)) && ['latencySeconds', 'tokens', 'toolCalls'].every((key) => finite(first[key]) && first[key] >= 0), `${model.name}: first-round operational metrics must be nonnegative numbers; unpriced cost is null.`);
    });
    const result = JSON.parse(JSON.stringify(input));
    result.benchmark.systems = result.models.length;
    return result;
  }

  function roundFor(model) { return model.rounds.find((round) => round.round === Number(state.view)); }
  function scoreFor(model) { return state.view === 'mean' ? model.meanRate : roundFor(model).rate; }

  function logoFor(model) {
    const allowed = new Set(['gemini', 'claude', 'openai', 'inkling', 'muse', 'nemotron']);
    if (allowed.has(model.logoKey)) return model.logoKey;
    if (model.family === 'Gemini') return 'gemini';
    if (model.family === 'Claude') return 'claude';
    if (model.family === 'GPT') return 'openai';
    if (model.id.startsWith('inkling-')) return 'inkling';
    if (model.id.startsWith('muse-')) return 'muse';
    if (model.id.startsWith('nemotron-')) return 'nemotron';
    return null;
  }

  function renderOverview(view) {
    if (!artwork || !artwork[view]) return;
    overviewView = view;
    const figure = artwork[view];
    const image = $('benchmark-diagram');
    image.src = figure.path; image.alt = figure.title;
    image.width = figure.width; image.height = figure.height;
    $('benchmark-diagram-caption').textContent = figure.caption;
    $('benchmark-diagram-link').href = figure.path;
    document.querySelectorAll('[data-overview]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.overview === view)));
  }

  function renderWorkflow(id) {
    const figure = domainFigures.find((item) => item.id === id);
    if (!figure) return;
    workflowId = id;
    $('workflow-domain').value = id;
    $('workflow-name').textContent = `${figure.name} · ${figure.tasks} tasks`;
    const image = $('workflow-diagram');
    image.src = figure.path; image.alt = `${figure.name}: ${figure.caption}`;
    image.width = figure.width; image.height = figure.height;
    $('workflow-caption').textContent = figure.caption;
    $('workflow-diagram-link').href = figure.path;
    $('workflow-counter').textContent = `${domainFigures.findIndex((item) => item.id === id) + 1} / ${domainFigures.length}`;
  }

  function renderArtwork() {
    if (!artwork || !domainFigures.length) {
      $('benchmark-figures').hidden = true; $('workflows').hidden = true;
      return;
    }
    $('workflow-domain').innerHTML = domainFigures.map((figure) => `<option value="${escapeHtml(figure.id)}">${escapeHtml(figure.name)}</option>`).join('');
    renderOverview(overviewView);
    renderWorkflow(domainFigures.some((figure) => figure.id === workflowId) ? workflowId : domainFigures[0].id);
  }

  function renderMetadata() {
    $('stat-tasks').textContent = data.benchmark.tasks.toLocaleString('en-US');
    $('stat-domains').textContent = data.benchmark.domains.length;
    $('stat-tags').textContent = data.benchmark.capabilityTags;
    $('stat-systems').textContent = data.models.length;
    $('paper-title').textContent = data.project.title;
    document.querySelectorAll('.paper-link').forEach((link) => { link.href = safeUrl(data.project.paperUrl) || 'assets/paper.pdf'; });
    const codeUrl = safeUrl(data.project.codeUrl);
    $('code-title').textContent = codeUrl ? 'Code & benchmark' : 'Public release forthcoming';
    $('code-description').textContent = codeUrl ? 'Access the benchmark, task definitions, tools, and evaluation code.' : 'The public repository link will be added here when available.';
    document.querySelectorAll('.code-link, #code-link').forEach((link) => {
      link.hidden = !codeUrl;
      if (codeUrl) link.href = codeUrl;
    });
    const date = new Date(`${data.updatedAt}T12:00:00Z`);
    const formatted = Number.isNaN(date.getTime()) ? data.updatedAt : new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(date);
    $('snapshot-date').textContent = `Data snapshot · ${formatted}`;
    $('data-badge').textContent = state.imported ? 'Imported preview' : 'Published snapshot';
    $('data-badge').classList.toggle('preview', state.imported);

    const largest = Math.max(...data.benchmark.domains.map((domain) => domain.tasks));
    $('domain-list').innerHTML = data.benchmark.domains.map((domain) => {
      const hasDiagram = domainFigures.some((figure) => figure.id === domain.id);
      const tag = hasDiagram ? 'button' : 'div';
      return `<${tag} class="domain-row"${hasDiagram ? ` type="button" data-domain="${escapeHtml(domain.id)}" aria-label="View ${escapeHtml(domain.name)} workflow, ${domain.tasks} tasks"` : ''}><span>${escapeHtml(domain.name)}</span><span class="domain-track" aria-hidden="true"><span class="domain-fill" style="width:${(domain.tasks / largest * 100).toFixed(3)}%"></span></span><span class="domain-count">${domain.tasks}</span></${tag}>`;
    }).join('');
    const families = [...new Set(data.models.map((model) => model.family))];
    if (!families.includes(state.family)) state.family = 'all';
    $('family-filter').innerHTML = '<option value="all">All families</option>' + families.map((family) => `<option value="${escapeHtml(family)}">${escapeHtml(family)}</option>`).join('');
    $('family-filter').value = state.family;
  }

  function sortHeading(label, key) {
    const selected = state.sort === key;
    const arrow = selected ? (state.direction === 'desc' ? '↓' : '↑') : '↕';
    return `<th scope="col"${selected ? ` aria-sort="${state.direction === 'desc' ? 'descending' : 'ascending'}"` : ''}><button type="button" class="sort-button" data-sort="${key}">${label}<span class="sort-arrow" aria-hidden="true">${arrow}</span></button></th>`;
  }

  function renderTable() {
    const meanView = state.view === 'mean';
    document.querySelectorAll('[data-view]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.view === state.view)));
    const descriptions = {
      '1': 'Round 1 is the paper’s official full-suite leaderboard.',
      '2': 'Second execution on the same benchmark under the common evaluation standard.',
      '3': 'Third execution on the same benchmark under the common evaluation standard.',
      'mean': 'Equal-weight mean of the three round-level rates. SD is the sample standard deviation in percentage points.'
    };
    $('view-description').textContent = descriptions[state.view];
    $('table-caption').textContent = `${meanView ? 'Three-round mean strict success' : `Round ${state.view} strict success`} across ${data.models.length} systems.`;
    $('result-footnote').textContent = meanView
      ? 'All-three success uses tasks scoreable in every round. Round success rates are shown as R1 · R2 · R3. The official leaderboard remains Round 1.'
      : 'Latency and cost describe Round 1, even when another round is selected. Latency is mean tested-agent LLM time per task; cost is estimated tested-agent cost for the full suite. “n/a” denotes an unmetered self-hosted run.';
    $('results-head').innerHTML = `<tr><th scope="col">Rank</th>${sortHeading('Model', 'name')}${sortHeading(meanView ? 'Mean strict success' : 'Strict success', 'score')}${meanView ? '<th scope="col">Sample SD (pp)</th><th scope="col">All-three success</th><th scope="col">R1 · R2 · R3 (%)</th>' : '<th scope="col">R1 LLM time / task</th><th scope="col">R1 suite cost</th>'}</tr>`;

    const fullOrder = data.models.map((model, index) => ({ model, index })).sort((a, b) => scoreFor(b.model) - scoreFor(a.model) || a.index - b.index);
    const rankMap = new Map();
    let previousScore = null;
    let rank = 0;
    fullOrder.forEach(({ model }, index) => {
      const score = scoreFor(model);
      if (previousScore === null || Math.abs(score - previousScore) > 1e-12) rank = index + 1;
      rankMap.set(model.id, rank); previousScore = score;
    });
    const rankCounts = new Map();
    rankMap.forEach((value) => rankCounts.set(value, (rankCounts.get(value) || 0) + 1));
    const query = state.query.trim().toLocaleLowerCase();
    const visible = fullOrder.filter(({ model }) => (state.family === 'all' || model.family === state.family) && (!query || `${model.name} ${model.family}`.toLocaleLowerCase().includes(query)));
    visible.sort((a, b) => {
      const comparison = state.sort === 'name' ? a.model.name.localeCompare(b.model.name) : scoreFor(a.model) - scoreFor(b.model);
      return comparison === 0 ? a.index - b.index : comparison * (state.direction === 'asc' ? 1 : -1);
    });
    $('results-body').innerHTML = visible.map(({ model }) => {
      const score = scoreFor(model);
      const modelRank = rankMap.get(model.id);
      const rankLabel = `${modelRank}${rankCounts.get(modelRank) > 1 ? '=' : ''}`;
      const logoKey = logoFor(model);
      const logo = logoKey ? `<img class="model-logo" src="assets/model-logos/${logoKey}.png" width="24" height="24" alt="" aria-hidden="true" decoding="async">` : '<span class="model-logo-placeholder" aria-hidden="true">·</span>';
      const common = `<td class="rank">${rankLabel}</td><th scope="row"><div class="model-cell">${logo}<div><span class="model-name">${escapeHtml(model.name)}</span><span class="family-name">${escapeHtml(model.family)}</span></div></div></th><td class="score-cell"><span class="score-value">${percent(score)}</span><span class="score-track" aria-hidden="true"><span class="score-fill" style="width:${(score * 100).toFixed(4)}%"></span></span></td>`;
      if (meanView) {
        const rounds = [...model.rounds].sort((a, b) => a.round - b.round);
        return `<tr>${common}<td>${model.sampleSdPp.toFixed(2)}</td><td>${percent(model.pass3.rate)}</td><td><span class="round-rates">${rounds.map((round) => (round.rate * 100).toFixed(2)).join(' · ')}</span></td></tr>`;
      }
      return `<tr>${common}<td>${model.firstRound.latencySeconds.toFixed(2)} s</td><td>${money(model.firstRound.costUsd)}</td></tr>`;
    }).join('') || `<tr><td colspan="${meanView ? 6 : 5}" class="empty-result">No models match these filters. Try another name or choose all families.</td></tr>`;
    $('result-count').textContent = `${visible.length} of ${data.models.length} systems`;
    renderDomainTable(visible.map(({ model }) => model));
  }

  function domainColor(rate) {
    const stops = [[243, 237, 220], [220, 229, 206], [141, 169, 139]];
    const position = Math.max(0, Math.min(1, rate)) * 2;
    const index = Math.min(1, Math.floor(position));
    const weight = position - index;
    return `rgb(${stops[index].map((value, channel) => Math.round(value + (stops[index + 1][channel] - value) * weight)).join(', ')})`;
  }

  function renderDomainTable(models) {
    const labels = {customer_support:'Customer support',field_service:'Field service',itsm:'IT service mgmt.'};
    $('domain-results-head').innerHTML = '<tr><th scope="col">Model</th>' + data.benchmark.domains.map((domain) => `<th scope="col">${escapeHtml(labels[domain.id] || domain.name)}</th>`).join('') + '</tr>';
    $('domain-results-body').innerHTML = models.map((model) => {
      const key = logoFor(model);
      const logo = key ? `<img class="model-logo" src="assets/model-logos/${key}.png" width="24" height="24" alt="" aria-hidden="true" decoding="async">` : '';
      const cells = data.benchmark.domains.map((domain) => {
        const rate = model.meanDomainRates && model.meanDomainRates[domain.id];
        return finite(rate) ? `<td class="domain-score" style="--cell-color:${domainColor(rate)}">${percent(rate)}</td>` : '<td class="domain-score domain-score-missing">—</td>';
      }).join('');
      return `<tr><th scope="row"><div class="model-cell">${logo}<span class="model-name">${escapeHtml(model.name)}</span></div></th>${cells}</tr>`;
    }).join('') || `<tr><td colspan="${data.benchmark.domains.length + 1}" class="empty-result">No models match these filters.</td></tr>`;
  }

  function render() { renderMetadata(); renderTable(); }
  function resetControls() { state.query = ''; state.family = 'all'; state.sort = 'score'; state.direction = 'desc'; $('model-search').value = ''; }

  function showMessage(message, error = false) {
    $('data-message').textContent = message;
    $('data-message').classList.toggle('error', error);
  }

  async function fetchPublished() {
    if (location.protocol === 'file:') return validateData(window.CRM_BENCH_DATA);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    try {
      const response = await fetch('data/results.json', { cache: 'no-store', signal: controller.signal });
      if (!response.ok) throw new Error('The published results file could not be loaded.');
      return validateData(await response.json());
    } finally { clearTimeout(timeout); }
  }

  function setCheckout(mode) {
    const duplicate = mode === 'duplicate';
    document.querySelectorAll('[data-checkout]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.checkout === mode)));
    $('final-balance').innerHTML = `${duplicate ? '310' : '155'} <small>pts</small>`;
    $('state-verdict').textContent = duplicate ? 'Fail' : 'Pass';
    $('state-verdict').className = `verdict ${duplicate ? 'fail' : 'pass'}`;
    $('strict-verdict').textContent = duplicate ? 'Not satisfied' : 'Satisfied';
    $('strict-verdict').className = duplicate ? 'fail-text' : 'pass-text';
    $('demo-status').textContent = duplicate ? 'Observed duplicate: two checkouts, twice the loyalty credit.' : 'Expected behavior: one checkout, one 155-point loyalty credit.';
  }

  function setTheme(theme) {
    const selected = theme === 'gray' ? 'gray' : 'warm';
    document.body.dataset.theme = selected;
    document.querySelectorAll('button[data-theme]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.theme === selected)));
    try { localStorage.setItem('crm-bench-theme', selected); } catch (_) { /* A theme preference is optional. */ }
  }

  function bindEvents() {
    $('round-controls').addEventListener('click', (event) => {
      const button = event.target.closest('[data-view]');
      if (!button) return;
      state.view = button.dataset.view; state.sort = 'score'; state.direction = 'desc'; renderTable();
    });
    $('results-head').addEventListener('click', (event) => {
      const button = event.target.closest('[data-sort]');
      if (!button) return;
      const key = button.dataset.sort;
      state.direction = state.sort === key ? (state.direction === 'desc' ? 'asc' : 'desc') : (key === 'name' ? 'asc' : 'desc');
      state.sort = key; renderTable();
    });
    $('model-search').addEventListener('input', (event) => { state.query = event.target.value; renderTable(); });
    $('family-filter').addEventListener('change', (event) => { state.family = event.target.value; renderTable(); });
    document.querySelectorAll('[data-checkout]').forEach((button) => button.addEventListener('click', () => setCheckout(button.dataset.checkout)));
    document.querySelectorAll('[data-overview]').forEach((button) => button.addEventListener('click', () => renderOverview(button.dataset.overview)));
    $('workflow-domain').addEventListener('change', (event) => renderWorkflow(event.target.value));
    $('previous-workflow').addEventListener('click', () => {
      const index = domainFigures.findIndex((figure) => figure.id === workflowId);
      if (domainFigures.length) renderWorkflow(domainFigures[(index - 1 + domainFigures.length) % domainFigures.length].id);
    });
    $('next-workflow').addEventListener('click', () => {
      const index = domainFigures.findIndex((figure) => figure.id === workflowId);
      if (domainFigures.length) renderWorkflow(domainFigures[(index + 1) % domainFigures.length].id);
    });
    $('domain-list').addEventListener('click', (event) => {
      const button = event.target.closest('[data-domain]');
      if (!button) return;
      renderWorkflow(button.dataset.domain);
      $('workflows').scrollIntoView({ block: 'start' });
    });
    document.querySelectorAll('button[data-theme]').forEach((button) => button.addEventListener('click', () => setTheme(button.dataset.theme)));
    $('open-data-tools').addEventListener('click', () => { showMessage(''); $('data-dialog').showModal(); });
    $('close-data-tools').addEventListener('click', () => $('data-dialog').close());
    $('restore-results').addEventListener('click', () => {
      data = validateData(publishedData); state.imported = false; resetControls(); render();
      showMessage('Published snapshot restored.');
    });
    $('refresh-results').addEventListener('click', async () => {
      $('refresh-results').disabled = true; showMessage('Loading the published results…');
      try {
        publishedData = await fetchPublished(); data = validateData(publishedData); state.imported = false; resetControls(); render();
        showMessage(location.protocol === 'file:' ? 'Bundled snapshot restored. Open the HTTP preview to fetch an edited results.json.' : 'Published results refreshed.');
      } catch (_) { showMessage('Could not refresh the published results. Your current preview is unchanged.', true); }
      finally { $('refresh-results').disabled = false; }
    });
    $('results-file').addEventListener('change', async (event) => {
      const input = event.currentTarget;
      const file = input.files[0];
      if (!file) return;
      try {
        requireValue(file.size <= 2 * 1024 * 1024, 'Choose a JSON file smaller than 2 MB.');
        let imported;
        try { imported = JSON.parse(await file.text()); } catch (_) { throw new Error('This is not a valid JSON file.'); }
        const validated = validateData(imported);
        data = validated; state.imported = true; resetControls(); render();
        showMessage(`Loaded ${data.models.length} models. This preview resets when you reload.`);
      } catch (error) { showMessage(error.message || 'The results file could not be loaded.', true); }
      finally { input.value = ''; }
    });
  }

  async function boot() {
    bindEvents();
    renderArtwork();
    try { setTheme(localStorage.getItem('crm-bench-theme') || 'warm'); } catch (_) { setTheme('warm'); }
    try { publishedData = validateData(window.CRM_BENCH_DATA); data = validateData(publishedData); render(); }
    catch (_) {
      $('results-body').innerHTML = '<tr><td class="empty-result">Results could not be loaded. Please reload the page or read the paper in Resources.</td></tr>';
      $('data-badge').textContent = 'Data unavailable';
    }
    if (location.protocol !== 'file:') {
      try {
        publishedData = await fetchPublished();
        if (!state.imported) { data = validateData(publishedData); render(); }
      } catch (_) { /* The bundled snapshot keeps the page usable offline. */ }
    }
  }

  boot();
})();
