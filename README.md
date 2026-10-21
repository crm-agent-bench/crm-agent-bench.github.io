# CRM-Agent-Bench project website

Public project homepage: <https://crm-agent-bench.github.io/>

Benchmark code: <https://github.com/salesforce-misc/crm-agent-bench>

This repository contains the published static website. No build step, package
installation, backend, or external JavaScript service is required. GitHub Pages
serves the files directly from the root of the default branch.

## Preview locally

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. The interactive leaderboard and workflow gallery
also include bundled data for opening `index.html` locally.

## Update the published page

Replace the static HTML, CSS, JavaScript, and assets, then commit to the default
branch. Keep `data/results.json` and `data/results.js` synchronized when updating
scores. The schemaVersion 2 data contains success rates and three-round domain
means; published score values retain the benchmark evaluation convention.
The result importer previews changes only in the current browser tab;
it does not publish scores. The bundled preprint is `assets/paper.pdf`.

Diagram and model-logo provenance and third-party notices are retained under
`assets/diagrams/` and `assets/model-logos/`. Trademarks belong to their respective
owners.
