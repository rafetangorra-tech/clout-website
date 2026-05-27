# Clout

Brand, content strategy, and skeleton website for **Clout** — the wholesale Non-QM and direct-to-investor channel of [Cliffco Mortgage Bankers](https://cliffcomortgage.com) (NMLS #65328).

## Repo layout

```
clout-website/
├── branding/                  Brand exploration & locked assets
│   ├── icon/                   Icon variant set (Variant B locked as primary)
│   ├── logo/                   Wordmark variant set (Variant B locked as primary)
│   ├── palette.html|pdf|png    Locked brand palette
│   └── ...
├── seo-aeo-research/          SEO + AEO playbook (6 docs, ~3,650 lines)
│   ├── STRATEGY.md             Top-level roadmap
│   ├── 01-technical-seo.md
│   ├── 02-aeo-llm-optimization.md
│   ├── 03-ymyl-eeat-trust.md
│   ├── 04-local-seo-territories.md      Per-state deep dives (NY, NJ, PA, FL, CT, TX)
│   ├── 05-product-content-strategy.md   Per-product cluster strategy (10 products)
│   └── 06-skeleton-architecture-spec.md Skeleton-site build spec
├── website/                   Astro skeleton site
│   ├── src/                    Pages, layouts, components, schema generators
│   ├── public/                 robots.txt · llms.txt · brand SVGs
│   ├── astro.config.mjs        Dual target (cloutwmb.com prod, GitHub Pages preview)
│   └── package.json
├── scripts/
│   └── postbuild-pages.mjs    Rewrites internal hrefs for the /clout-website Pages base path
└── .github/workflows/
    └── deploy-pages.yml        CI deploy to GitHub Pages on push to main
```

## Brand

**Locked palette — teal anchor + rust accent**

| Role | Hex |
|---|---|
| Primary brand | `#018076` |
| Primary deep | `#004146` |
| Bright accent | `#03BFB5` |
| Warmth accent (5% editorial) | `#C4572A` |
| Neutral dark | `#1A1F22` |
| Surface light | `#EFF5F9` |

**Logo + icon primary variant:** B — teal + dark (`#018076` + `#1A1F22`)

See `branding/palette.pdf` and the variant overviews under `branding/{logo,icon}/overview.pdf`.

## Website — local dev

```sh
cd website
npm install
npm run dev      # http://localhost:4321
npm run build    # → website/dist/
npm run preview
```

## Website — Pages preview deploy

Push to `main` triggers `.github/workflows/deploy-pages.yml`, which builds with `DEPLOY_TARGET=pages` (Astro config picks up the `/clout-website` base path) and deploys to:

> **https://rafetangorra-tech.github.io/clout-website/**

## Coverage

- **States:** NY, NJ, PA, FL, CT, TX
- **Products (current site):** DSCR, Bank Statement, 1099 Only, Foreign National, Asset Qualifier, Non-Agency Second Home, P&L Only, Lite Doc, Written VOE Only, Full Doc Non-QM
- **Audiences:** Mortgage brokers (wholesale) + Real estate investors (direct)

## Status

Skeleton-stage. DSCR pillar is built out as the AEO reference page; the other nine product pillars and six state hubs are stubs that establish IA + schema + URL structure. Full content per the strategy in `seo-aeo-research/STRATEGY.md` is in progress.
