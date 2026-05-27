# Clout — Skeleton Site Architecture Spec

> **The translation layer between the strategy docs and the actual build.** Concrete decisions a developer (or agent) can implement: routes, schema templates, rendering modes, content-type fields, llms.txt, robots.txt, performance budget.

This is a SPEC, not running code. It describes the skeleton site that we will build; engineering will translate it.

---

## High-level architecture

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Astro 4.x | Zero-JS-by-default, SSG-first, crawler-friendly, Sanity integration |
| **CMS** | Sanity v3 | Structured content, GROQ querying, multi-locale support, schema-as-code |
| **Hosting** | Vercel | Edge functions, ISR, instant global cache invalidation |
| **Forms** | Astro actions + reCAPTCHA v3 + honeypot | Server-side validation; PII never client-only |
| **CRM destination** | TBD (HubSpot / Salesforce / Encompass TPO) | Lead handoff to existing infra |
| **Analytics** | GA4 + GTM (consent-gated) + web-vitals.js → custom endpoint | Standard + CWV monitoring |
| **Search index** | Algolia or Pagefind (SSG-friendly) | On-site search for product/state matrix |
| **Multilingual** | Astro built-in i18n with `/es/` subdirectory | Spanish locale; hreflang reciprocal |
| **A11y QA** | axe-core in CI + manual VPAT | WCAG 2.2 AA |
| **Schema validation** | Schema.org validator in CI + Rich Results Test pre-publish | Catch breaks before deploy |

---

## Rendering decision tree (per route)

```
Is the route:
├─ Marketing / product / state / about / compliance?
│  └─ SSG (Astro prerender) — fastest, fully crawlable
├─ Rate sheet with daily/weekly update?
│  └─ ISR with 1-hr revalidate — fresh but fast
├─ Calculator UI?
│  └─ SSG page + Astro island (Preact/React) for interactivity
│     ⚠️ Calculator METHODOLOGY (formulas + examples) must be in static HTML
├─ Lead form with PII?
│  └─ SSG page + server action (Vercel) for submit
├─ Broker partner portal?
│  └─ Separate subdomain partner.cloutwmb.com — NOT crawled — Next.js or remix-stack
├─ Search results, filters, internal-tool views?
│  └─ noindex (robots meta) — don't pollute index
```

**Hard rule:** Anything intended for LLM citation MUST render its content in static HTML on first byte. JavaScript-only content is invisible to most AI crawlers.

---

## Route map (full skeleton)

### Public routes

```
/                                                    # Homepage
/loan-options/                                       # Product hub
  /loan-options/bank-statement/                      # Pillar (10x like this)
    /loan-options/bank-statement/12-vs-24-month/    # Spoke
    /loan-options/bank-statement/personal-vs-business/
    /loan-options/bank-statement/income-calculation-methodology/
    /loan-options/bank-statement/[state]/            # ×6 states
      /loan-options/bank-statement/new-york/
      /loan-options/bank-statement/new-jersey/
      /loan-options/bank-statement/pennsylvania/
      /loan-options/bank-statement/florida/
      /loan-options/bank-statement/connecticut/
      /loan-options/bank-statement/texas/
  /loan-options/dscr/                                # repeat the pattern for all 10 products
  /loan-options/1099-only/
  /loan-options/foreign-national/
  /loan-options/asset-qualifier/
  /loan-options/non-agency-second-home/
  /loan-options/pl-only/
  /loan-options/lite-doc/
  /loan-options/wvoe/
  /loan-options/full-doc/

/locations/                                          # State hub
  /locations/new-york/
    /locations/new-york/new-york-city/
    /locations/new-york/long-island/
    /locations/new-york/brooklyn/
    /locations/new-york/buffalo/
  /locations/new-jersey/
    /locations/new-jersey/jersey-city/
    /locations/new-jersey/jersey-shore/
  /locations/pennsylvania/
    /locations/pennsylvania/philadelphia/
    /locations/pennsylvania/pittsburgh/
  /locations/florida/
    /locations/florida/miami/
    /locations/florida/orlando/
    /locations/florida/tampa/
    /locations/florida/jacksonville/
  /locations/connecticut/
    /locations/connecticut/hartford/
    /locations/connecticut/new-haven/
    /locations/connecticut/stamford/
  /locations/texas/
    /locations/texas/houston/
    /locations/texas/dallas-fort-worth/
    /locations/texas/austin/
    /locations/texas/san-antonio/
    /locations/texas/el-paso/

/brokers/                                            # Broker channel hub
  /brokers/how-to-partner/
  /brokers/programs-at-a-glance/
  /brokers/turn-times/
  /brokers/rate-sheet/                               # ISR
  /brokers/account-executives/
    /brokers/account-executives/[ae-slug]/           # AE bio pages
  /brokers/partner-resources/
  /brokers/scenarios/                                # Anonymized broker closings
  /brokers/faq/

/investors/                                          # Investor channel hub
  /investors/how-clout-works/
  /investors/scenarios/                              # Anonymized investor closings
  /investors/calculators/                            # Calc hub
  /investors/faq/
  /investors/cross-state-funnel/
    /investors/cross-state-funnel/ny-to-fl/
    /investors/cross-state-funnel/nj-to-tx/
    # additional cross-state combinations

/calculators/                                        # Tool hub
  /calculators/dscr/
  /calculators/bank-statement-income/
  /calculators/asset-depletion/
  /calculators/str-roi/
  /calculators/1099-income/

/resources/                                          # Education + blog
  /resources/guides/
    /resources/guides/[slug]/
  /resources/scenarios/
    /resources/scenarios/[slug]/
  /resources/market-commentary/
    /resources/market-commentary/[slug]/
  /resources/glossary/
    /resources/glossary/[term-slug]/

/about/
  /about/our-story/
  /about/leadership/
    /about/leadership/[person-slug]/
  /about/careers/
  /about/press/

/compliance/
  /compliance/licensing/
    /compliance/licensing/new-york/
    /compliance/licensing/new-jersey/
    /compliance/licensing/pennsylvania/
    /compliance/licensing/florida/
    /compliance/licensing/connecticut/
    /compliance/licensing/texas/
  /compliance/privacy/
  /compliance/accessibility/
  /compliance/tcpa/
  /compliance/fair-lending/
  /compliance/editorial-policy/
  /compliance/ai-usage/

/contact/

/es/                                                 # Spanish locale
  [parallel structure for top products, top states]
```

### Utility routes

```
/robots.txt
/sitemap.xml                                         # Index
/sitemap-pages.xml
/sitemap-products.xml
/sitemap-locations.xml
/sitemap-resources.xml
/sitemap-es.xml
/sitemap-images.xml
/llms.txt
/llms-full.txt
/404
/500
/feed.xml                                            # RSS for /resources
/.well-known/security.txt
```

### Excluded from index (noindex, follow)

- `/search/*`
- `/filter/*`
- `/?q=*` (UTM-tagged URLs canonical to base)
- `/draft/*`
- `/admin/*`

### Disallowed in robots.txt

- `/api/*`
- `/admin/*`
- `/draft/*`
- `partner.cloutwmb.com/*` (separate subdomain)

---

## Sanity content types (schema-as-code)

### Core types

```ts
// productType: 'product'
{
  name: string                       // "DSCR Loan"
  slug: { current: string }          // "dscr"
  pillarTitle: string                // "DSCR Loans for Real Estate Investors"
  lead: text (40–60 word answer-first paragraph)
  tldr: array<{ label, value }>      // 4–6 bullets
  sections: array<sectionRef>
  faqs: array<{ question, answer }>
  competitors: array<competitorRef>
  scenarios: array<scenarioRef>
  calculators: array<calculatorRef>
  metaTitle: string
  metaDescription: string
  ogImage: image
  schema: object                     // Generated from fields
  reviewedBy: reference<person>
  publishedAt: datetime
  updatedAt: datetime
  locale: 'en' | 'es'
  hreflangSiblings: array<reference>
}

// productType: 'productSpoke'
{
  parent: reference<product>
  slug: { current: string }
  title: string
  lead: text
  sections: array<sectionRef>
  faqs: array<{ question, answer }>
  scenarios: array<scenarioRef>
  // ... (inherits product fields)
}

// productType: 'productLocation' (state × product page)
{
  product: reference<product>
  state: reference<state>
  metro: reference<metro>?           // Optional for sub-metro pages
  uniqueLocalContent: text (must be ≥800 words unique)
  localScenarios: array<scenarioRef>
  localCompetitors: array<competitorRef>
  localPress: array<{ name, url }>
  metaTitle: string
  metaDescription: string
}

// productType: 'state'
{
  name: 'New York' | 'New Jersey' | 'Pennsylvania' | 'Florida' | 'Connecticut' | 'Texas'
  slug: { current: string }
  marketCharacteristics: text
  topMetros: array<reference<metro>>
  topProductsRanked: array<reference<product>>
  reiAssociations: array<{ name, url, contact }>
  pressTargets: array<{ name, url }>
  spanishPriority: 'critical' | 'high' | 'medium' | 'low'
  contentAngles: array<string>
  licenseNumber: string
  licenseRegulator: string
  complianceDisclosures: array<{ type, text }>
}

// productType: 'metro'
{
  name: string
  state: reference<state>
  slug: { current: string }
  population: number?
  marketCharacteristics: text
  zoningNotes: text?
  reiVibe: text                      // STR-friendly, BRRRR, jumbo, etc.
}

// productType: 'person' (LO, AE, leadership)
{
  name: string
  slug: { current: string }
  title: string
  role: 'wholesale-ae' | 'investor-lo' | 'leadership' | 'operations'
  nmlsId: string?                    // Required for licensed roles
  photo: image
  narrative: text
  yearsAtClout: number
  yearsInMortgage: number
  states: array<reference<state>>
  specialties: array<string>
  languages: array<string>
  credentials: array<string>
  phone: string
  email: string
  linkedinUrl: string?
  bookCallUrl: string?               // Calendly etc.
  scenarios: array<scenarioRef>
  reviewsAggregateUrl: string?
}

// productType: 'scenario'
{
  title: string                      // "1099 contractor, $145K gross"
  product: reference<product>
  state: reference<state>
  metro: reference<metro>?
  brokerOrInvestor: 'broker' | 'investor'
  borrowerProfile: text (anonymized)
  propertyDetails: text
  loanAmount: number
  loanTerms: text
  keyChallenge: text
  outcome: text
  closingDays: number
  closedAt: datetime
  loOrAe: reference<person>
}

// productType: 'competitor'
{
  name: string
  url: string
  strength: text
  weaknessVsClout: text
  states: array<reference<state>>
  products: array<reference<product>>
}

// productType: 'calculator'
{
  name: string
  slug: { current: string }
  type: 'dscr' | 'bank-statement' | 'asset-depletion' | 'str-roi' | '1099-income'
  methodology: text (PUBLIC — must be crawlable)
  formulas: array<{ name, latex, plainEnglish }>
  examples: array<{ input, output }>
  uiComponentId: string              // Astro island reference
}

// productType: 'guide'
{
  title: string
  slug: { current: string }
  lead: text
  body: portableText
  author: reference<person>
  reviewedBy: reference<person>
  publishedAt: datetime
  updatedAt: datetime
  category: string
  relatedProducts: array<reference<product>>
  relatedStates: array<reference<state>>
}

// productType: 'rateSheet'
{
  product: reference<product>
  effectiveFrom: datetime
  effectiveThrough: datetime
  rates: array<{ scenario, rate, points, ltv, fico }>
  disclosures: text
  audience: 'broker' | 'consumer' | 'both'
}

// productType: 'pressPlacement'
{
  publication: string
  title: string
  url: string
  publishedAt: datetime
  excerpt: text
  category: 'trade-tier-1' | 'national-tier-2' | 'local-tier-3'
}
```

### Sanity rules / validation

- `lead` field: validate 40–60 words on save
- `tldr`: must have 4–6 items
- `faqs`: minimum 12, recommended 18
- `scenarios`: minimum 2 per product page
- `nmlsId`: required for `person.role` in (`wholesale-ae`, `investor-lo`)
- `slug` must be lowercase-hyphen, no special chars
- `metaDescription`: 150–160 chars
- `pillarTitle`: 50–60 chars
- Spanish locale entries must reference their English sibling via `hreflangSiblings`

---

## Schema.org generation rules

Schema is generated from Sanity fields at build time. Per page type:

### Product pillar pages

Output JSON-LD blocks:
1. `Organization` (global, in `<head>` of every page)
2. `MortgageLoan` (product-specific)
3. `FAQPage` (from `faqs` array)
4. `Article` (body content, with author + reviewedBy)
5. `BreadcrumbList`

### State × product pages

1. `Organization`
2. `MortgageLoan` with `areaServed` populated
3. `FAQPage`
4. `Article`
5. `BreadcrumbList`
6. `LocalBusiness` (HQ reference) + `areaServed`

### LO/AE bio pages

1. `Organization`
2. `Person` with `worksFor`, `identifier` (NMLS), `sameAs` (NMLS Consumer Access + LinkedIn)
3. `BreadcrumbList`

### Scenario pages

1. `Organization`
2. `Article`
3. `BreadcrumbList`

### Calculator pages

1. `Organization`
2. `WebPage` with `mainEntity` referencing the calculator description
3. `HowTo` (calculation steps)
4. `FAQPage`
5. `BreadcrumbList`

### State licensing pages

1. `Organization`
2. `LocalBusiness` with `areaServed` (state)
3. `BreadcrumbList`
4. `GovernmentLicense` (state-specific)

---

## Content patterns enforced in the build

### Inverted pyramid

- `lead` Sanity field is rendered as the first paragraph
- A `<div class="answer-first">` wraps it for clarity
- Word-count validator on save fails outside 40–60

### Question-led H2s

- `sections[].heading` Sanity field expects question form
- Lint rule: heading must contain question mark or start with "how / what / why / who / when / where"
- (Warning-only, not blocking)

### TL;DR card

- Rendered above the body
- 4–6 bullets max
- High-contrast styling (border + slightly different background)

### "Reviewed by" stamp

```html
<div class="reviewed-by">
  Reviewed by <a href="/about/leadership/{person.slug}">{person.name}</a>,
  NMLS #{person.nmlsId} — last updated {updatedAt | date}
</div>
```

Rendered immediately under H1 on product, state, and educational pages.

### FAQ rendering

- Each FAQ Q&A is rendered with `itemtype="https://schema.org/Question"` markup
- Also emitted as JSON-LD `FAQPage` schema
- Accordion UI is **progressive enhancement** — all Q&A text is in DOM by default

### Anonymized scenarios

Component: `<ScenarioCard>` with:
- Borrower profile line
- Property details
- Loan terms (amount, LTV, FICO, DSCR ratio if applicable)
- Closing timeline
- LO/AE attribution
- Schema: `Article` excerpt

---

## llms.txt template

Generated at build time from Sanity:

```markdown
# Clout

> Clout is a wholesale Non-QM mortgage lender and direct-to-investor lender, licensed in NY, NJ, PA, FL, CT, TX. NMLS #65328.

## Products

{for each product in Sanity:}
- [{product.name}]({absoluteUrl}) — {product.shortDescription}

## States

{for each state:}
- [{state.name} Loans]({state.url}) — Clout's {state.name} programs

## Resources

- [Calculators](/calculators/)
- [Glossary](/resources/glossary/)
- [Scenarios](/investors/scenarios/)
- [Broker FAQ](/brokers/faq/)
- [Investor FAQ](/investors/faq/)

## Optional

- [Wholesale Partner Portal](https://partner.cloutwmb.com)
- [NMLS Consumer Access](https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/65328)
```

Plus a `llms-full.txt` with deeper context per product (concatenated lead + tldr + FAQs).

---

## robots.txt (per [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md))

Generated as static file, deployed to `/robots.txt`. Allow all major AI crawlers + standard search bots; disallow admin, API, partner subdomain, drafts.

---

## XML sitemap structure

Sitemap index at `/sitemap.xml` with sub-sitemaps:
- `sitemap-pages.xml` — static pages (about, compliance, contact)
- `sitemap-products.xml` — product pillars + spokes
- `sitemap-locations.xml` — state + metro pages
- `sitemap-product-locations.xml` — state × product pages
- `sitemap-resources.xml` — guides + scenarios + market commentary + glossary
- `sitemap-people.xml` — LO/AE bios + leadership
- `sitemap-es.xml` — Spanish locale
- `sitemap-images.xml` — hero + featured images for visual search

`lastmod` derived from Sanity `updatedAt` field; only updated on content changes, not trivial edits.

---

## Performance budget

| Metric | Budget | Failing the build at |
|---|---|---|
| HTML size (pre-gzip) | ≤ 80 KB | ≥ 150 KB |
| CSS (initial render) | ≤ 30 KB gzipped | ≥ 60 KB |
| JS (initial) | ≤ 50 KB gzipped (target ≤ 20 KB for content pages; islands only) | ≥ 100 KB |
| LCP (P75 lab) | ≤ 2.0s | ≥ 2.5s |
| INP (P75 lab) | ≤ 150ms | ≥ 200ms |
| CLS | ≤ 0.05 | ≥ 0.1 |
| Total page weight (excl. images) | ≤ 200 KB | ≥ 400 KB |
| Largest image (WebP) | ≤ 150 KB | ≥ 300 KB |
| Web fonts | ≤ 2 weights / format | ≥ 4 |

Lighthouse CI enforces in deploy pipeline.

---

## Accessibility build-time gates

- axe-core run on every PR; fails build on any AA violation
- Manual VPAT audit per release
- Color contrast tokens locked in design system
- All interactive elements: minimum 24×24px hit area
- Form fields: label+aria-describedby for errors
- Skip-to-main link on every page
- Focus-visible states styled
- Reduced-motion respected (`prefers-reduced-motion`)

---

## Forms — patterns

### Lead form (investor + broker)

- Server action (Astro/Vercel) — no client-only submission
- reCAPTCHA v3 (invisible) + honeypot
- Field validation: client + server
- TCPA consent: explicit checkbox, language stored with timestamp
- PII (SSN, etc.): never logged; transmitted over HTTPS only; written directly to CRM destination
- Error messages: announced via aria-live
- Success: stateful (no redirect required); option to redirect to "Thanks" page with conversion event

### Newsletter signup

- Double opt-in
- Unsubscribe link in every email
- CAN-SPAM compliance

---

## Personalization (light-touch)

Use Vercel edge functions for:
- **IP-based state detection** → soft-suggest "Looking for [state] Non-QM?" banner
- **Referrer detection** → if from LinkedIn or trade pub URL, surface broker-channel CTA first
- **Returning visitor** → if cookie set, show "Last time you looked at DSCR" prompt

**Do not personalize:**
- Main page body content (breaks consistency + LLM crawler view ≠ user view)
- Schema markup (must match crawled HTML)
- Rates (always visible; never gated)

---

## Analytics + measurement

| Track | Tool |
|---|---|
| Page views, sessions, conversions | GA4 (consent-gated) |
| Tag management | GTM |
| CWV per page | web-vitals.js → custom endpoint → BigQuery |
| Heatmaps / session recording | Microsoft Clarity (privacy-friendly) |
| Form abandonment | GA4 + Clarity |
| Calculator usage | Custom events to GA4 |
| AEO citation share | Profound Growth (offsite tool) |
| LLM mention tracking | Otterly.AI + Brand24 |

### Conversion event taxonomy

- `lead_started` — form opened
- `lead_submitted` — form successful
- `calculator_completed`
- `phone_clicked`
- `ae_book_clicked`
- `lo_book_clicked`
- `partner_portal_clicked`

---

## Skeleton-first build sequence

### Phase 0 — Pre-build (week 0)
- Verify NMLS state licenses per Clout — confirm Clout's specific FL DBA (NOT "Swish Capital"), CT/TX/PA license numbers
- Audit cloutwmb.com current site for redirects to preserve
- Finalize Sanity content type schemas (above)
- Set up Vercel project, Sanity project, domain

### Phase 1 — Skeleton + framework (weeks 1–2)
- Astro site scaffolded
- Sanity content models defined (all types above)
- Global layout: header, footer, compliance row
- Schema generators (Organization, LocalBusiness, BreadcrumbList) live
- robots.txt + sitemap.xml + llms.txt deployed
- /404, /500, /about (stub), /compliance (real)

### Phase 2 — Top of funnel content (weeks 3–4)
- Homepage v1
- 10 product pillars (skeleton with TLDR + lead + 6 FAQs each)
- 6 state pillars (skeleton)
- About / Leadership (with 4–6 person bios at minimum)
- Compliance pages: licensing per state, privacy, accessibility, TCPA, fair lending, editorial policy, AI usage

### Phase 3 — Product depth + first localizations (weeks 5–8)
- DSCR + Bank Statement spoke clusters (top spokes per [05-product-content-strategy.md](./05-product-content-strategy.md))
- DSCR calculator + Bank Statement income estimator (live, with methodology pages)
- Top 18 state × product local pages
- First Spanish pillars (DSCR, Bank Statement)

### Phase 4 — Calculators + scenario library + brokers (weeks 9–12)
- All 5 calculators live
- Investor scenario library (12–24 anonymized scenarios)
- Broker scenario library (anonymized)
- Broker channel pages: partner-resources, turn-times, programs-at-a-glance
- Rate sheet (ISR)

### Phase 5 — Scale + sub-metros + AEO push (weeks 13–24)
- Sub-metro pages for top 12 metros
- Remaining product pillars + spokes (1099, Foreign National, Asset Qualifier, Non-Agency 2nd, P&L, Lite Doc, WVOE, Full Doc)
- Spanish-language expansion (FL/TX/NJ/NY/PA/CT priority)
- Resources / guides (long-form education content)
- Press placements (off-site, drives backlinks)
- Reviews automation (Experience.com)

---

## Pre-launch checklist

- [ ] All 10 product pillars live with full schema
- [ ] All 6 state pillars live with `LocalBusiness` schema
- [ ] Compliance pages live (privacy, accessibility, TCPA, fair lending, licensing, editorial policy, AI usage)
- [ ] LO/AE bios (4+) with Person schema + NMLS sameAs
- [ ] About page with `parentOrganization` Cliffco link
- [ ] robots.txt + llms.txt + sitemap index live
- [ ] Organization schema with Wikidata + NMLS + LinkedIn sameAs
- [ ] CWV passing on 95%+ of crawled URLs (Lighthouse CI)
- [ ] axe-core passing (zero AA violations)
- [ ] Schema Validator passing
- [ ] reCAPTCHA + honeypot on every form
- [ ] TCPA consent on every lead form
- [ ] Cookie banner (state-privacy-aware)
- [ ] GA4 + Clarity + web-vitals.js firing
- [ ] GSC + Bing WMT verified, sitemap submitted
- [ ] CRM destination connected (HubSpot / Encompass / etc.)
- [ ] Brand24 + Otterly + Profound subscriptions
- [ ] First 30-prompt baseline run across ChatGPT/Claude/Gemini/Perplexity
- [ ] Wikidata entry created
- [ ] LinkedIn Company verified
- [ ] Crunchbase entry created
- [ ] GBP / Apple BC / Bing Places claimed for HQ
- [ ] BBB profile claimed

---

## Open questions for the user

These need stakeholder input before we lock decisions:

1. **CRM destination** — HubSpot, Salesforce, Encompass TPO, custom? Affects form integration.
2. **LO/AE bio strategy** — named (recommended) or faceless wholesale? Affects bio content production scope.
3. **Investor-direct path** — pursue DTC investors equally in all 6 states, or focus DTC on FL + TX first?
4. **Spanish-language scope at launch** — minimum (FL + TX) or maximum (all 6 states)?
5. **Calculator gating** — open vs gated behind lead form? Spec says open per AEO; need confirmation.
6. **Rate visibility** — show wholesale rate ranges publicly, or gate behind partner portal? Spec says show ranges with effective date.
7. **Press budget** — earned-only or sponsored content (Bankrate, Forbes Council)?
8. **Reviews automation vendor** — Experience.com (mortgage-specific) or Birdeye (general)? Affects rep schema setup.
9. **Partner portal architecture** — keep existing Encompass TPO Connect login, or rebuild on `partner.cloutwmb.com`?
10. **Photo budget** — bespoke LO/AE photography vs stock vs illustration?

---

## What this spec is NOT

- Not a list of pages to fill with content (that's [05-product-content-strategy.md](./05-product-content-strategy.md))
- Not a strategy doc (that's [STRATEGY.md](./STRATEGY.md))
- Not a marketing roadmap
- Not the actual code (this is a spec; engineering implements)

---

## See also

- [STRATEGY.md](./STRATEGY.md)
- [01-technical-seo.md](./01-technical-seo.md)
- [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md)
- [03-ymyl-eeat-trust.md](./03-ymyl-eeat-trust.md)
- [04-local-seo-territories.md](./04-local-seo-territories.md)
- [05-product-content-strategy.md](./05-product-content-strategy.md)
