# Clout — Technical SEO

> **Most of the technical foundation is borrowed from Cliffco's research; this doc captures Clout-specific deltas and call-outs.** Where this file says "see Cliffco doc," refer to `/Users/rtangorra/cliffco-site/seo-aeo-research/01-technical-seo.md` for the unchanged framework.

---

## Stack decision

**Astro (SSG-first) + Sanity (headless CMS) + Vercel (hosting)** — same as Cliffco. Rationale unchanged:

- Astro: ships zero JS by default, perfect for AEO-crawler accessibility (LLMs need rendered HTML)
- Sanity: structured content, easy schema generation, multi-locale support for Spanish builds
- Vercel: edge functions for personalization (broker vs investor IP routing); ISR for rate-sheet updates

**Override considerations specific to Clout:**

| Section | Recommendation |
|---|---|
| Marketing pages, product pillars, state pages, blog | **Astro SSG** — fully prerendered, fastest TTFB, crawlable |
| Calculator UIs | **Astro Island** (Preact/React island) — interactive but page itself is SSG; **calculator methodology stays in static HTML** so LLMs can crawl it |
| Broker partner portal / login | **Separate subdomain** (`partner.cloutwmb.com`) — Next.js or remix-stack; not crawled (Disallow in robots.txt) |
| Rate sheets | **Sanity-driven, ISR with 1-hr revalidate** — crawlable + fresh |
| Lead forms | **Server actions** (Astro/Vercel) for security + reCAPTCHA |

---

## Information architecture

### Top-level URL structure

```
cloutwmb.com/
├── /                                          # Homepage
├── /loan-options/                             # Product hub
│   ├── /bank-statement/                       # Pillar
│   │   ├── /12-vs-24-month/                  # Spoke
│   │   ├── /personal-vs-business/
│   │   ├── /income-calculation-methodology/
│   │   ├── /new-york/                        # Geo-product
│   │   ├── /florida/
│   │   ├── /texas/
│   │   └── /...
│   ├── /dscr/
│   ├── /1099-only/
│   ├── /foreign-national/
│   ├── /asset-qualifier/
│   ├── /non-agency-second-home/
│   ├── /pl-only/
│   ├── /lite-doc/
│   ├── /wvoe/
│   └── /full-doc/
├── /locations/                                # State hub
│   ├── /new-york/                             # State pillar
│   │   ├── /new-york-city/                   # Sub-metro
│   │   ├── /long-island/
│   │   ├── /brooklyn/
│   │   └── /...
│   ├── /new-jersey/
│   ├── /pennsylvania/
│   │   ├── /philadelphia/
│   │   ├── /pittsburgh/
│   │   └── /...
│   ├── /florida/
│   ├── /connecticut/
│   └── /texas/
├── /brokers/                                  # Broker partner content
│   ├── /how-to-partner/
│   ├── /programs-at-a-glance/
│   ├── /rate-sheet/
│   ├── /turn-times/
│   └── /partner-resources/
├── /investors/                                # Investor direct content
│   ├── /how-clout-works/
│   ├── /scenarios/
│   ├── /calculators/
│   └── /investor-faq/
├── /resources/                                # Education + blog
│   ├── /guides/
│   ├── /scenarios/
│   ├── /market-commentary/
│   └── /glossary/
├── /calculators/                              # Tool hub
│   ├── /dscr/
│   ├── /bank-statement-income/
│   ├── /asset-depletion/
│   └── /str-roi/
├── /about/                                    # Company
│   ├── /our-story/
│   ├── /leadership/
│   └── /careers/
├── /compliance/                               # Required disclosures
│   ├── /licensing/
│   ├── /privacy/
│   ├── /accessibility/
│   └── /tcpa/
├── /es/                                       # Spanish locale
│   └── [parallel structure]
└── /sitemap.xml
```

### URL rules

- Lowercase, hyphens, no trailing slash redirect inconsistency (pick one; recommend trailing slash to match Astro convention)
- Max 3 path segments after the `/loan-options/[product]/` level
- No date stamps in URLs (rate content updates frequently; permalinks must remain stable)
- Spanish locale via subdirectory `/es/` (not subdomain — easier for entity-SEO consolidation)

### Cross-grain internal linking

Every product page links to:
- The 6 state pages for that product
- The 2 closest adjacent products (e.g., Bank Statement → DSCR, 1099 Only)
- The relevant calculator
- 1–2 anonymized scenarios
- The compliance footer

Every state page links to:
- Top 5 products for that state (per [04-local-seo-territories.md](./04-local-seo-territories.md) ranking)
- Sub-metro pages for that state
- State licensing disclosure

This creates the hub-and-spoke + cross-grain pattern that lifts AI citations ~3.5×.

---

## Schema.org markup

Same library as Cliffco, with Clout-specific implementations.

### Organization (every page, in `<head>`)

```json
{
  "@context": "https://schema.org",
  "@type": ["FinancialService", "Organization"],
  "name": "Clout",
  "legalName": "Clout Wholesale Mortgage Bankers",
  "alternateName": ["Clout WMB", "CloutWMB"],
  "parentOrganization": {
    "@type": "Organization",
    "name": "Cliffco Mortgage Bankers",
    "url": "https://cliffcomortgage.com"
  },
  "url": "https://cloutwmb.com",
  "logo": "https://cloutwmb.com/brand/logo.svg",
  "image": "https://cloutwmb.com/brand/social-card.png",
  "telephone": "+1-844-477-3111",
  "email": "PowerUp@CLOUTwmb.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "70 Charles Lindbergh Blvd, Suite 200",
    "addressLocality": "Uniondale",
    "addressRegion": "NY",
    "postalCode": "11553",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "State", "name": "New York"},
    {"@type": "State", "name": "New Jersey"},
    {"@type": "State", "name": "Pennsylvania"},
    {"@type": "State", "name": "Florida"},
    {"@type": "State", "name": "Connecticut"},
    {"@type": "State", "name": "Texas"}
  ],
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "NMLS",
    "value": "65328"
  },
  "sameAs": [
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/65328",
    "https://www.linkedin.com/company/clout",
    "https://www.facebook.com/cloutwmb",
    "https://www.crunchbase.com/organization/clout",
    "https://www.wikidata.org/wiki/QXXXXXXX"
  ],
  "knowsAbout": [
    "Non-Qualified Mortgage",
    "DSCR Loan",
    "Bank Statement Loan",
    "1099 Mortgage",
    "Foreign National Mortgage",
    "Asset Depletion",
    "Wholesale Mortgage Lending",
    "Real Estate Investor Lending"
  ]
}
```

### LocalBusiness (HQ + any other office)

Layer over Organization for the Uniondale HQ. Use `parentOrganization` reciprocal. Don't fabricate satellite offices.

### MortgageLoan (every product page)

```json
{
  "@context": "https://schema.org",
  "@type": "MortgageLoan",
  "name": "DSCR Loan",
  "description": "Non-QM mortgage for real estate investors that qualifies based on the property's cash flow (debt service coverage ratio), not the borrower's personal income.",
  "loanType": "Non-Qualified Mortgage / DSCR",
  "loanTerm": ["P30Y", "P40Y"],
  "interestRate": {
    "@type": "QuantitativeValue",
    "minValue": 6.5,
    "maxValue": 9.5,
    "unitCode": "P1",
    "name": "APR range"
  },
  "amount": {
    "@type": "MonetaryAmount",
    "minValue": 100000,
    "maxValue": 3500000,
    "currency": "USD"
  },
  "loanRepaymentType": "Fully Amortized / Interest Only Available",
  "downPayment": {
    "@type": "MonetaryAmount",
    "minValue": 20,
    "unitCode": "%",
    "currency": "USD"
  },
  "lender": {
    "@id": "https://cloutwmb.com#organization"
  },
  "areaServed": ["NY", "NJ", "PA", "FL", "CT", "TX"]
}
```

### FAQPage (every product, state, scenario page)

Mandatory. 12–18 Q&A blocks per page. Use exact-match query patterns from [02-aeo-llm-optimization.md priority prompt panel](./02-aeo-llm-optimization.md).

### Article (long-form explainers)

For the explanatory body of pillars, use `Article` with `author` (Person with NMLS sameAs), `datePublished`, `dateModified`, `reviewedBy` (Person), `mainEntityOfPage`.

### Person (LO/AE bios)

Each bio: `Person` schema with `worksFor` → Clout, `identifier` with NMLS, `sameAs` → LinkedIn + NMLS Consumer Access + (optional) Twitter, `knowsAbout` (specialties), `award`s, `homeLocation`, `alumniOf`.

### BreadcrumbList (every page)

Standard breadcrumb schema. Trail: Home → Loan Options → [Product] → [State or Scenario].

### HowTo (decision-tree + process pages)

E.g., "How to apply for a Clout DSCR loan." Crawlable HowTo schema is a citation magnet.

### Speakable (voice search — optional, low priority)

Mark TL;DR sections as `Speakable` for Google Assistant / Alexa voice queries.

### Review / AggregateRating

**Only third-party aggregated reviews** (Experience.com, Google Business Profile, Zillow). Never paste raw reviews onto Clout's site with Review schema — that violates Google's policy.

---

## XML sitemaps

### Master sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://cloutwmb.com/sitemap-pages.xml</loc>
    <lastmod>2026-05-27T12:00:00-05:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://cloutwmb.com/sitemap-products.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://cloutwmb.com/sitemap-locations.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://cloutwmb.com/sitemap-resources.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://cloutwmb.com/sitemap-es.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://cloutwmb.com/sitemap-images.xml</loc>
  </sitemap>
</sitemapindex>
```

**`lastmod` accuracy is enforced by Google in 2026.** Don't update `lastmod` for trivial edits; do update for content additions, schema changes, or rate refreshes.

---

## Core Web Vitals (2026 targets)

Cliffco research applies 1:1. Targets:

| Metric | Target | Notes |
|---|---|---|
| LCP | ≤ 2.5s (P75) | Preload hero image; SSG-rendered |
| INP | ≤ 200ms (P75) | Calculator islands carefully scoped |
| CLS | ≤ 0.1 (P75) | Reserve space for fonts, images, calculator embeds |
| TTFB | ≤ 600ms (P75) | Vercel edge; ISR for dynamic pages |

Measurement stack: web-vitals.js → custom analytics endpoint; Lighthouse CI in deploy pipeline; CrUX dashboard weekly.

---

## Image / video / font

Same as Cliffco. Highlights:

- **Image cascade:** AVIF → WebP → JPEG; `<picture>` element with `srcset`
- **LCP image:** `<link rel="preload" as="image" fetchpriority="high">` for hero
- **Fonts:** WOFF2, self-hosted, subset, `font-display: swap`, preload critical weights
- **Video:** YouTube `<iframe>` lazy-loaded (or self-host MP4 with poster); transcripts always indexed inline
- **Decorative images:** `alt=""`; meaningful images: descriptive alt with topical keywords (no stuffing)

---

## Accessibility — WCAG 2.2 AA

Required by law (ADA + Section 508 + state-specific). Same nine 2.2 criteria as Cliffco:

- Focus not obscured (minimum)
- Focus not obscured (enhanced)
- Dragging movements alternatives
- Target size minimum 24×24px
- Help consistency
- Redundant entry prevention
- Accessible authentication
- Focus appearance
- Page break navigation (mobile)

**Mortgage-specific accessibility risk areas:**

| Area | Specific risk |
|---|---|
| Lead forms | Field labels visible, error messages screen-reader-friendly, no autofocus traps |
| Calculators | ARIA `live` regions for result updates; full keyboard nav |
| PDF disclosures | Tagged PDFs only; provide HTML alternative |
| Live chat | VPAT from vendor; no chat-only contact path |
| Color contrast | 4.5:1 minimum text, 3:1 large text/UI; brand teal `#018076` on white: 5.55:1 ✓; brand teal on `#EFF5F9`: 5.31:1 ✓ |
| Rate tables | Proper `<th>` scope, captions, summary |

Publish **Accessibility Statement** at `/compliance/accessibility/`. Include contact for accessibility issues, conformance level, last-audit date, known issues + remediation timeline.

---

## Security / privacy

Same baseline as Cliffco:

- **HTTPS + HSTS preload** (1-year max-age, includeSubdomains, preload)
- **CSP with nonce** — no `unsafe-inline`; whitelist analytics + chat vendor
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **Cookie banner:** GDPR + CCPA + state-privacy compatible; categories (necessary, analytics, marketing); pre-blocking until consent
- **Form security:** reCAPTCHA v3 (invisible) + honeypot + rate limit
- **PII handling:** SSN never logged, never persisted unencrypted; lead-form data → encrypted at rest + in transit
- **TCPA SMS consent:** explicit opt-in checkbox + record-keeping; broker + investor flows handled separately

### State-specific privacy

| State | Law | Action |
|---|---|---|
| CA | CCPA / CPRA | Compliance even though Clout doesn't lend in CA — site visitors may be CA residents |
| NY | NY SHIELD | Standard breach-notification + data security |
| CT | CTDPA | Privacy notice update |
| FL | FL Digital Bill of Rights | Privacy notice update |
| TX | TDPSA | Privacy notice update |

Single, unified privacy policy at `/compliance/privacy/` covering all jurisdictions.

---

## Crawl budget + canonicalization

Same patterns as Cliffco. Specific Clout call-outs:

| Page type | Indexable? | Canonical? |
|---|---|---|
| Product pillars | Yes | Self-canonical |
| Product spokes (e.g., 12 vs 24 month BS) | Yes | Self-canonical |
| State product pages (e.g., DSCR Texas) | Yes | Self-canonical |
| Sub-metro pages | Yes | Self-canonical |
| Spanish pages | Yes | Self-canonical with hreflang reciprocal |
| Calculators | Yes | Self-canonical |
| Internal search results | **noindex, follow** | None |
| UTM-tagged URLs | Canonical to non-UTM | |
| Paginated archives (blog) | Yes pages 1–3; rel=prev/next | |
| Author archives | noindex if thin | |
| Tag archives | noindex | |
| Login pages | noindex, nofollow | |
| Partner portal subdomain | Blocked in robots.txt | N/A |

---

## 2026 algorithm context

Cliffco research covers HCU, March 2026 E-E-A-T update, site-reputation-abuse, spam updates, AI Overviews, GSC policy speedup. All apply 1:1 to Clout.

**Clout-specific risk:**

- **New-domain risk:** Clout is essentially a new brand SEO-wise. Expect Google sandbox-like behavior for 3–6 months; AEO can move faster than SEO during this period.
- **Cliffco parent link:** explicit `parentOrganization` in schema + about-page mention helps Clout inherit some Cliffco entity authority signal.
- **No reverse mortgage:** any Cliffco content templates with reverse mortgage language must be scrubbed before reuse.
- **DBA hygiene:** Cliffco uses "Swish Capital" as FL DBA. Clout must NOT use that DBA — verify Clout's own FL DBA before publishing FL pages.

---

## Tooling stack

| Tool | Purpose |
|---|---|
| Google Search Console | Indexation, queries, AIO appearances |
| Bing Webmaster Tools | Same for Bing/Copilot |
| Screaming Frog | Site-wide crawl, broken links, redirect chains, schema audit |
| Ahrefs / Semrush | Backlink monitoring, competitive intel, keyword tracking |
| Rank tracker (Ahrefs / SEMrush / SerpRobot) | Daily rank monitoring per state + product |
| Profound Growth | AEO citation tracking (4 engines) |
| Otterly.AI | LLM mention tracking |
| Brand24 / Mention.com | Unlinked brand mentions |
| Web-vitals.js + Lighthouse CI | CWV in CI/CD |
| Schema.org Validator + Google Rich Results Test | Pre-publish schema check |
| Whitespark / BrightLocal | NAP citation audit |
| Hotjar / Microsoft Clarity | Heatmaps + session recordings |
| GA4 + GTM | Analytics + tag management |
| Calendly / HubSpot / Salesforce | Lead capture + CRM |

---

## 30 / 60 / 90 day technical checklist

### Days 1–30 — Discovery + skeleton
- [ ] Astro + Sanity + Vercel skeleton scaffolded
- [ ] Domain DNS + HTTPS + HSTS configured
- [ ] robots.txt (per [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md))
- [ ] llms.txt
- [ ] sitemap.xml + sub-sitemaps
- [ ] Organization + LocalBusiness JSON-LD live on every page (even before content)
- [ ] GSC + Bing WMT verified
- [ ] GA4 + GTM configured (consent-gated)
- [ ] Web-vitals.js endpoint live
- [ ] Lighthouse CI in deploy pipeline (fail builds below threshold)
- [ ] Brand fonts subset + WOFF2
- [ ] WCAG 2.2 AA baseline audit
- [ ] Privacy + accessibility + TCPA pages live
- [ ] Cookie banner

### Days 31–60 — Content scaffolding
- [ ] All 10 product pillars structured (even if content thin)
- [ ] All 6 state pillars structured
- [ ] FAQPage schema deployed on all pillars
- [ ] MortgageLoan schema deployed on product pillars
- [ ] BreadcrumbList everywhere
- [ ] Image cascade (AVIF/WebP/JPEG) deployed
- [ ] LCP preload patterns applied
- [ ] First Schema.org Validator + Rich Results Test passes
- [ ] First Screaming Frog crawl: zero 5xx, <5% 4xx (intentional only)

### Days 61–90 — Optimization + scaling
- [ ] State × product local pages (top 18) live
- [ ] Sub-metro pages (top 6) live
- [ ] Calculators live (DSCR, Bank Statement, Asset Depletion)
- [ ] Spanish `/es/` Bank Statement + DSCR pillars live with hreflang reciprocal
- [ ] LO/AE bios with Person schema + NMLS sameAs
- [ ] AggregateRating schema connected to Experience.com / GBP via JSON
- [ ] CWV passing on 95%+ of crawled URLs
- [ ] Internal-link cross-grain matrix validated (every product → every relevant state, every state → top 5 products)

---

## Reuses from Cliffco research (refer there for full detail)

- Core Web Vitals 2026 targets + measurement methodology
- Image cascade + LCP preload patterns
- Font handling (WOFF2 self-hosting strategy)
- WCAG 2.2 AA criteria detail
- Security/privacy stack (HSTS, CSP, referrer policy)
- robots.txt template (extended in [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md))
- Sitemap structure (image, video sitemaps for media)
- Canonicalization decision tree
- 2026 algorithm update calendar
- Tooling stack rationale
- HCU "Information Gain" mathematical interpretation

---

## See also

- [STRATEGY.md](./STRATEGY.md)
- [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md)
- [03-ymyl-eeat-trust.md](./03-ymyl-eeat-trust.md)
- [04-local-seo-territories.md](./04-local-seo-territories.md)
- [05-product-content-strategy.md](./05-product-content-strategy.md)
- Cliffco's `/Users/rtangorra/cliffco-site/seo-aeo-research/01-technical-seo.md` for the unmodified framework
