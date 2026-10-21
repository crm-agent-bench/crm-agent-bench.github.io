# Homepage figure sources

These are vector exports of the current Salesforce preprint PDFs, not newly drawn figures. Text is converted to paths so the SVGs do not depend on installed fonts. Original content and colors, including existing revision colors, are preserved.

Regenerate with `python3 build_assets.py` (requires PyMuPDF). Use `--paper-root /path/to/salesforce_preprint` to select a paper explicitly.

Source lookup first checks the ancestor project identified by `instance.json`, then the sibling `salesforce_preprint` directory in an Overleaf export. The Salesforce architecture, Travel, and Marketing diagrams include corrections absent from their historical Publication copies and always take priority.

`catalog.json` and `catalog.js` contain display metadata; `manifest.json` records source locations, SHA-256 hashes, output hashes, editable source references, the export method, and the PyMuPDF version.

The atlas shows representative journeys rather than every tool in a domain. Evaluation checks apply only when declared in the task contract. The tool row is the union of tools invoked across the illustrated turns. Marketing declares no negative assertions (N=0); Travel reports the confirmed itinerary to the user.

Tabler Icons v3.48.0 notices are retained under `licenses/tabler-icons-v3.48.0/`. Model-family marks and their original provenance notes are copied without changes to `../model-logos/`. Trademarks remain with their respective owners.

## Asset source index

- `assets/diagrams/overview.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/crm_agent_bench_system_overview_appendix.pdf` (writing-project; SHA-256 `d1256bd9963f88b6e3f7f3d23db11126a7e685fdf2837363f3d961069b69b7bc`).
- `assets/diagrams/interaction.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/crm_agent_bench_main_figure.pdf` (writing-project; SHA-256 `3bdbcfe1d7074ef5f0e99d436282c991546a7c83083c4064c65c33df5abaa7db`).
- `assets/diagrams/01_retail.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/01_retail.pdf` (writing-project; SHA-256 `bce57715454e34a6fa36056f66d196865878176f5c65f2753c7afaad08a76352`).
- `assets/diagrams/02_customer_support.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/02_customer_support.pdf` (writing-project; SHA-256 `98229e5a4c88f30050c6faac8f302e191a8b88c365a7b440fe6ac0b93ac7b3f8`).
- `assets/diagrams/03_field_service.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/03_field_service.pdf` (writing-project; SHA-256 `6b9ecc2b3a03c7d0cdff4f0caac65e10cbae47d463a339dcf6edcd57ebb163cb`).
- `assets/diagrams/04_itsm.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/04_itsm.pdf` (writing-project; SHA-256 `195071c37ef6e61e4b27aed5018a9aa304a00676d3865bb5b7c974e3f1636423`).
- `assets/diagrams/05_payments.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/05_payments.pdf` (writing-project; SHA-256 `6103902c5f55019e39d1304c6862d7fab917dd7c9f43f0ead53dd47f75a7ed75`).
- `assets/diagrams/06_travel.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/06_travel.pdf` (writing-project; SHA-256 `dabd2760f56bdff12ab152f96704eb52bf1030d1dd4d1eaa1aaebccb5c9ebbde`).
- `assets/diagrams/07_onboarding.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/07_onboarding.pdf` (writing-project; SHA-256 `72767a0d2cb9a0ff3441807c6c1b34ef38119837b67146befa81f1c521ba2b14`).
- `assets/diagrams/08_sales.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/08_sales.pdf` (writing-project; SHA-256 `7f02d3900a452f50b69fb54656cabc1a9086c8e67f5ba0347cd3b268b5ca214b`).
- `assets/diagrams/09_marketing.svg` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/system_flows/09_marketing.pdf` (writing-project; SHA-256 `1e67c5efc968b7bc2f77ef9113886d1b49b9addcbb854761fec3a87532042b44`).
- `assets/model-logos/gemini.png` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/model_logos/gemini.png` (writing-project; SHA-256 `5cdec4a494ffae48e729b7ea0fbd0cbd261d92a11035a6653e66b09c1aeceeeb`).
- `assets/model-logos/claude.png` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/model_logos/claude.png` (writing-project; SHA-256 `716eb551b55b10d4be76ce3b5607b226f9c784f2ae71675ffd2935cf1cecb603`).
- `assets/model-logos/openai.png` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/model_logos/openai.png` (writing-project; SHA-256 `469a0c970a73d1d70a9c9a5eb93f846c3b5f831ad10e3c9525c56e5dd23dc2b7`).
- `assets/model-logos/inkling.png` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/model_logos/inkling.png` (writing-project; SHA-256 `1913f96adf96b0db678af798067073c5ec8a77cb4ae12ba6e1c5cc4f89c98158`).
- `assets/model-logos/muse.png` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/model_logos/muse.png` (writing-project; SHA-256 `12905739c79092378faf2a9fecb25e8f6a94338832cecbab94e4428c8eb74760`).
- `assets/model-logos/nemotron.png` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/model_logos/nemotron.png` (writing-project; SHA-256 `b3fcd140a6ab355100cb4582f71d9a540ce52cbcd6e23051079c97b7313f4281`).
- `assets/model-logos/SOURCES.md` ← `manuscript/iclr2027_CRMbench/salesforce_preprint/figures/model_logos/SOURCES.md` (writing-project; SHA-256 `0d8cbbcd8b5a3b942b9afd2646aaabcdcd9ae941fc8ff5d568060ab60117da0c`).
