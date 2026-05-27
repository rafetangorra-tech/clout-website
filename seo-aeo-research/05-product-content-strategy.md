# Clout — Product Content Strategy

**Ten Non-QM products. Two audiences (broker + investor). Six licensed states.** This doc is the per-product source of truth: persona, keyword landscape, LLM query map, top competitors, content cluster structure, calculators, schema, compliance, and conversion levers for each Clout product.

Source for current product catalog: cloutwmb.com loan options page (verified May 2026).

---

## Product priorities + investment ranking

Ranked by combination of: search volume, dual-audience leverage, competitive differentiation potential, and revenue per closing.

| Tier | Product | Monthly US search vol. (est.) | Key audience | Differentiation lever |
|---|---|---|---|---|
| **1** | DSCR | 30–45K | Investor (B2C) + Broker (B2B) | Speed of close, state coverage, anonymized investor scenarios |
| **1** | Bank Statement | 40–60K | Self-employed + Broker | Income calculation methodology, 12 vs 24 mo flexibility |
| **2** | 1099 Only | 8–15K | Gig/contractor + Broker | Gross-1099 income vs net-Schedule-C positioning |
| **2** | Foreign National | 6–12K | International investor + Broker | FL/TX/NY focus, no-SSN process clarity |
| **3** | Asset Qualifier / Depletion | 4–8K | HNW retiree/investor + Broker | Depletion formula transparency, jumbo capacity |
| **3** | Non-Agency Second Home | 3–6K | Vacation/STR investor + Broker | FL/CT vacation markets, non-warrantable condo |
| **3** | P&L Only | 3–6K | Business owner + Broker | CPA-prepared P&L vs bank statement comparison |
| **4** | Lite Doc | 2–4K | W-2 limited history + Broker | 1-year W2 + VOE positioning |
| **4** | Full Doc (Non-QM) | low intent (folds into general mortgage) | Borrower + Broker | Use as fallback "we have full-doc too" page |
| **4** | Written VOE Only | <2K | Narrow W-2 niche + Broker | Use as supporting page; don't over-invest |

> **Future product (not currently offered but adjacent):** **Fix & Flip / Bridge** is a logical expansion given Clout's investor B2C path and Cliffco's investor exposure. If Clout adds it, content investment immediately moves to Tier 1 alongside DSCR. Don't publish fix-flip pages until the product is licensed and underwriting is live. Placeholder section at the bottom of this doc.

---

## Universal product page template

Every product page (pillar + spoke) follows this skeleton:

1. **40–60 word lead** answering "what is [product]" — inverted pyramid, LLM-citation primer
2. **TL;DR card** — bullet box with: who it's for, min credit, max LTV, max loan, key feature, who it's NOT for
3. **Question-led H2s** matching LLM query patterns ("Who qualifies?", "How does income get calculated?", "What's the down payment?")
4. **Anonymized scenarios** — 2–4 real-world examples with numbers (e.g., "1099 contractor, $145K gross / $98K net, qualified for $580K at 75% LTV")
5. **Comparison table** vs adjacent products (Bank Statement vs 1099 vs P&L vs VOE; DSCR vs Conventional Investment)
6. **State-specific subsection** (if relevant) with `areaServed` schema
7. **Calculator embed** where applicable
8. **Reviewed-by stamp** with LO/AE name + NMLS link (or company-level if faceless wholesale)
9. **FAQ block** (12–18 questions) — FAQPage schema
10. **Compliance disclosure block** — NMLS, Equal Housing, state licenses, product-specific disclaimers
11. **Schema:** `MortgageLoan` + `FAQPage` + `Article` (for the explanatory body) + `BreadcrumbList`

Pillar pages: 2,500–3,500 words; spoke pages: 1,200–1,800 words.

---

## 1. Bank Statement Loan

**Pillar URL:** `/loan-options/bank-statement/`

### Audience personas

| Persona | Profile | Pain point |
|---|---|---|
| **Self-employed Sara** | LLC owner, $185K gross / $80K net after deductions, 720 FICO | Tax returns show low income; turned down by Chase/Wells |
| **Restaurateur Ramon** | 2-restaurant operator, Florida, $400K gross deposits/mo across business accounts, ITIN, Spanish-dominant | Bank doesn't understand restaurant cash-flow seasonality |
| **Broker Brendan** | Mortgage broker placing 5–10 bank-statement loans/quarter | Needs lender who accepts mixed business+personal deposits, fast turn |

### Keyword landscape

| Cluster | Top queries (est. monthly US volume) |
|---|---|
| Core | "bank statement loan" (18–28K), "bank statement mortgage" (8–14K), "12 month bank statement loan" (3–5K), "24 month bank statement loan" (4–6K) |
| Self-employed intent | "self-employed mortgage no tax returns" (8–14K), "no doc mortgage self-employed" (3–5K), "self-employed home loan" (12–18K) |
| Geo | "bank statement loan [state]" (state-level 600–2,500 per state) |
| Comparison | "bank statement vs DSCR" (1.5–2.5K), "bank statement vs 1099" (800–1.5K), "bank statement vs P&L only" (400–800) |
| Broker | "bank statement wholesale lender" (300–600), "wholesale bank statement program" (200–500) |

### LLM query patterns

- "What's a bank statement loan and who qualifies?"
- "How do bank statement lenders calculate income?"
- "Best bank statement loan lenders for self-employed in 2026"
- "Bank statement loan in [Florida / Texas / New York / etc.]"
- "Can I use 12 months of business bank statements only?"
- "Bank statement loan with 620 credit score" (edge case)

### Top competitors

| Lender | Strength | Weakness vs Clout |
|---|---|---|
| **Angel Oak MS** | Bank statement pioneer; $150K–$4M, mixed business+personal | Generic content, no anonymized scenarios, weak state pages |
| **Carrington** | Credit-flexible (down to 550 sometimes) | Slower process, dated UX |
| **NASB** | National coverage, IRS-friendly methodology | Single-channel (direct), no broker-facing content |
| **Truss Financial Group** | Specializes in alt-doc, ranked #2 Non-QM Originator 2026 | High-touch concierge model, not scalable |
| **Mbanc** | Top-3 bank-statement state Florida + Texas | Limited public scenario library |
| **Defy Mortgage** | Direct-to-consumer + wholesale, good content | Generic by state |

### Content cluster (pillar + 14 spokes)

Pillar: `/loan-options/bank-statement/`

| Spoke | URL | Purpose |
|---|---|---|
| 12 vs 24 month BS comparison | `/loan-options/bank-statement/12-vs-24-month/` | Methodology + when each makes sense |
| Personal vs business BS | `/loan-options/bank-statement/personal-vs-business/` | Which to use; mixed-deposit handling |
| How income is calculated | `/loan-options/bank-statement/income-calculation-methodology/` | Step-by-step; CITATION MAGNET for LLMs |
| BS vs DSCR | `/loan-options/bank-statement/vs-dscr/` | Compare programs |
| BS vs 1099 | `/loan-options/bank-statement/vs-1099/` | Compare programs |
| BS vs P&L Only | `/loan-options/bank-statement/vs-pl-only/` | Compare programs |
| Self-employed approval guide | `/loan-options/bank-statement/self-employed-guide/` | Persona-driven |
| NY bank statement loan | `/loan-options/bank-statement/new-york/` | Geo-product page |
| NJ bank statement loan | `/loan-options/bank-statement/new-jersey/` | Geo-product page |
| FL bank statement loan | `/loan-options/bank-statement/florida/` | High priority |
| TX bank statement loan | `/loan-options/bank-statement/texas/` | High priority |
| PA bank statement loan | `/loan-options/bank-statement/pennsylvania/` | Geo-product page |
| CT bank statement loan | `/loan-options/bank-statement/connecticut/` | Geo-product page |
| Spanish-language pillar | `/es/loan-options/bank-statement/` | FL/TX/NJ priority |

### Calculator

**Bank Statement Income Estimator** — input: 12 or 24 months, personal vs business, average monthly deposits, business expense ratio (default 50%). Output: estimated qualifying monthly income; ballpark loan amount at 75/85% LTV. Lead capture optional. Calculator code shipped behind a lead form is NOT crawlable — expose calculation methodology + a simple variant publicly.

### Schema (page-level)

`MortgageLoan` + `FAQPage` (12+ Q&A) + `Article` + `BreadcrumbList`. Use `MortgageLoan.loanTerm`, `MortgageLoan.gracePeriod`, `MortgageLoan.loanType: "Non-Qualified Mortgage"`, `monthlyMinimumRepaymentAmount` where calculable.

### Compliance hooks

- NMLS Consumer Access link
- "This is a Non-QM loan; does not meet CFPB Qualified Mortgage definition"
- Equal Housing
- State licenses
- Income calculation methodology disclaimer (illustrative only, actual qualifying determined by underwriter)

### Conversion levers

- Primary CTA: "Get pre-qualified in 24 hours" (speed-anchored)
- Secondary CTA: "Talk to a Clout AE" (broker channel)
- Tertiary: "Calculate your qualifying income" (calculator)
- LO/AE routing: route by zip; if broker-IP detected, surface AE direct dial

---

## 2. DSCR Loan

**Pillar URL:** `/loan-options/dscr/`

### Audience personas

| Persona | Profile |
|---|---|
| **Investor Marcus** | 6-property STR portfolio in Orlando, 740 FICO, expanding to Tampa |
| **BRRRR Aiyana** | 3 properties Philadelphia + Pittsburgh, refinancing seasoned BRRRRs to pull capital |
| **Cross-state David** | NJ investor buying 2-unit in Houston for cash-flow; first out-of-state purchase |
| **Foreign national Felipe** | Mexican investor, El Paso multifamily, no US credit |
| **Broker Brendan** | Places 8+ DSCR loans/quarter, needs lender comp transparency |

### Keyword landscape

| Cluster | Top queries (est. monthly US volume) |
|---|---|
| Core | "DSCR loan" (40–55K), "DSCR mortgage" (8–14K), "debt service coverage ratio loan" (3–5K) |
| Calculator | "DSCR calculator" (12–18K), "DSCR loan calculator" (4–8K) |
| Geo (top 6) | "DSCR loan [state]" — FL (4–7K), TX (3–6K), NY (2–4K), PA (1.5–3K), CT (700–1.5K), NJ (1–2K) |
| Sub-metro | "DSCR loan Houston" (1–2K), "DSCR loan Orlando" (1.2–2.2K), "DSCR loan Miami" (1–2K), "DSCR loan Brooklyn" (600–1.2K), "DSCR loan Philadelphia" (600–1.2K) |
| Comparison | "DSCR vs conventional" (1.5–2.5K), "DSCR vs hard money" (700–1.2K), "DSCR for first-time investor" (400–800) |
| Investor intent | "no income verification mortgage investment property" (3–5K), "rental property mortgage no W-2" (1.5–3K) |
| Broker | "wholesale DSCR lender" (300–600), "best DSCR wholesale" (200–400) |

### LLM query patterns

- "What's a DSCR loan and how does it work?"
- "Best DSCR lender for real estate investors in 2026"
- "Best DSCR lender in [Florida / Texas / Pennsylvania]"
- "DSCR loan vs conventional investment mortgage"
- "How is DSCR calculated?"
- "Can I get a DSCR loan with a 1.0 ratio?"
- "DSCR loan for first-time investors"
- "DSCR loan for foreign nationals"

### Top competitors

| Lender | Strength | Weakness vs Clout |
|---|---|---|
| **Kiavi** | #1 private lender; $5.5B+ 2025 volume; brand owns the category | Generic across states; not Spanish-language; weaker broker channel |
| **Lima One** | "Scalable growth partner" positioning; brand strong | Investor-direct focused, less broker-channel content |
| **LendingOne** | Specifically calls out Philly/Pittsburgh/Allentown | Generic content; weaker AEO presence |
| **Griffin Funding** | Up to $20M, statewide coverage every Clout state | Direct-to-consumer dominant; weaker investor scenario content |
| **Visio Lending** | Investor-direct, simple process | Limited geographic coverage compared to incumbents |
| **Easy Street Capital** | Texas-based, rates 5.75%+, strong PA presence | Smaller balance sheet, limited program flexibility |
| **Constitution Lending** | CT-based, investor-founded, hundreds of millions funded | CT-focused; weak outside Northeast |
| **Mbanc** | TX top DSCR state by volume | Limited state coverage |

### Content cluster (pillar + 17 spokes)

Pillar: `/loan-options/dscr/`

Top spokes:
- `/loan-options/dscr/calculator/` (calculator + methodology)
- `/loan-options/dscr/how-dscr-is-calculated/` (citation magnet)
- `/loan-options/dscr/for-first-time-investors/`
- `/loan-options/dscr/vs-conventional-investment/`
- `/loan-options/dscr/vs-hard-money/`
- `/loan-options/dscr/for-str-airbnb/`
- `/loan-options/dscr/for-multifamily/`
- `/loan-options/dscr/for-brrrr/`
- `/loan-options/dscr/for-foreign-nationals/`
- `/loan-options/dscr/[state]/` × 6 states
- `/loan-options/dscr/[sub-metro]/` × top 6 metros (Houston, Orlando, Miami, Brooklyn, Philly, Austin)
- `/es/loan-options/dscr/` Spanish pillar
- `/loan-options/dscr/cross-state-investor-funnel/` ("NY investor buying TX rental" thesis page)

### Calculators

- **DSCR Calculator** — monthly rent + monthly P&I+T+I+HOA → DSCR ratio + qualifying assessment
- **STR ROI Calculator** — AirDNA-like estimator (or sourced from AirDNA partner) for Orlando / Miami / Austin
- **Portfolio Analyzer** — multi-property qualifying for portfolio investors

### Schema

`MortgageLoan` + `FAQPage` + `BreadcrumbList` + `Article`; for calculator pages, `WebPage` with `mainEntity` referencing the calculator. Don't expose calculator behind a lead-form gate — that's anti-AEO.

### Compliance hooks

- Non-QM business-purpose lending disclosure
- State licensing enumeration
- TRID exemption note (business-purpose)
- Equal Housing
- "This is investment-property only" (no owner-occupied DSCR)

### Conversion levers

- Calculator-led capture (highest converting)
- "Investor scenarios" carousel (anonymized real closings)
- Speed-anchor: "Approve in 24 hrs, close in 15–25 days"
- BiggerPockets-style content (long-form, specific, numbers-heavy)
- LO/AE routing by investor zip; live chat with investor-specialized AE

---

## 3. 1099 Only

**Pillar URL:** `/loan-options/1099-only/`

### Audience personas

| Persona | Profile |
|---|---|
| **1099 contractor Jordan** | Consultant, $145K 1099 gross / $89K Schedule C net, wants Bank Statement-alternative |
| **Gig economy Mia** | Uber/Lyft/Shipt — multiple 1099s, NJ resident |
| **Sales rep Sasha** | Commission-paid sales, $200K+ gross, written off vehicle/home office |

### Keyword landscape

| Cluster | Top queries |
|---|---|
| Core | "1099 mortgage" (5–9K), "1099 only mortgage" (1.5–3K), "mortgage for 1099 contractor" (2–4K) |
| Self-employed | "1099 mortgage lender" (2–4K), "self-employed 1099 mortgage" (1–2K) |
| Geo | "1099 mortgage [state]" (300–800 per state) |
| Comparison | "1099 vs bank statement loan" (800–1.5K), "1099 vs W2 mortgage" (300–600) |

### LLM query patterns

- "Best 1099 mortgage lender for contractors"
- "How do 1099 mortgage lenders calculate income?" (gross vs net is the key info-gain answer)
- "1099 mortgage with 1 year history" (Clout has 1-year program — competitive advantage)
- "Can a Uber driver get a mortgage?" (gig persona)

### Top competitors

- **Griffin Funding** — gross-1099 positioning (vs net), strong content
- **LendFriend** — #1 self-positioned, broker-channel strong
- **Carrington** — credit-flexible
- **NASB** — 1099-NEC-specific, no-tax-return positioning
- **Angel Oak** — 1099 income program, bundled with non-QM stack

### Differentiation angle

**Clout's 1099 program allows 1 year of 1099s (per published catalog).** Most competitors require 2. This is a real wedge — lead with it.

### Content cluster (pillar + 9 spokes)

Pillar + spokes: methodology (gross vs net), 1 vs 2 year, vs Bank Statement, vs P&L, by state (top 6), Spanish-language pillar.

### Calculator

**1099 Income Estimator** — input gross 1099 amount, optional expenses. Output: qualifying income assumption + ballpark.

### Compliance

Non-QM disclosure, state licenses, NMLS Consumer Access.

### Conversion levers

- "Qualify with 1 year of 1099s" hero
- Comparison table 1099 vs Schedule C / W-2 / Bank Statement
- Calculator
- LO/AE routing

---

## 4. Foreign National

**Pillar URL:** `/loan-options/foreign-national/`

### Audience personas

| Persona | Profile |
|---|---|
| **Latin American investor Felipe** | Mexico City resident, buying Miami condo, ITIN, no US SSN |
| **European investor Anya** | UK resident, second-home in Orlando |
| **Canadian investor Drew** | Snowbird buying Naples vacation property |
| **Asia Pacific investor Wei** | NYC condo, employment in Shanghai |

### Keyword landscape

| Cluster | Top queries |
|---|---|
| Core | "foreign national mortgage" (5–10K), "foreign national home loan" (1.5–3K) |
| Geo | "foreign national mortgage Florida" (1.5–3K), "foreign national mortgage Texas" (700–1.5K), "foreign national mortgage Miami" (1–2K) |
| Process | "how to get US mortgage without SSN" (3–5K), "mortgage for non-US citizen" (4–7K), "ITIN mortgage" (2–4K) |
| Comparison | "DSCR loan for foreign national" (400–800) |

### LLM query patterns

- "Can I buy US real estate without a Social Security Number?"
- "Foreign national mortgage requirements 2026"
- "How much down payment for foreign national mortgage?"
- "Best lender for foreign national mortgage in [Miami / Orlando / NYC]"

### Top competitors

- **Foundation Mortgage Corporation** (FL-based, foreign national pioneer)
- **Angel Oak** (foreign national program nationally)
- **Griffin Funding** (statewide coverage)
- **HomeAbroad** (foreign-buyer marketplace; aggregator, not lender)
- **CTC Mortgage** (foreign national-focused)
- **Vaster** (FL-based, foreign national)
- **A&D Mortgage** (foreign national DSCR specifically)
- **Waltz / GetWaltz** (foreign national DSCR, modern UX)

### Differentiation angle

Clout's foreign national program: full doc + DSCR variant + Asset Qualifier variant — three paths inside one product family. Most competitors only do DSCR variant.

### Content cluster (pillar + 11 spokes)

Pillar + spokes:
- `/loan-options/foreign-national/how-to-qualify-without-ssn/`
- `/loan-options/foreign-national/dscr-for-foreign-nationals/`
- `/loan-options/foreign-national/asset-qualifier-foreign-national/`
- `/loan-options/foreign-national/florida/`
- `/loan-options/foreign-national/texas/`
- `/loan-options/foreign-national/new-york/`
- `/loan-options/foreign-national/miami/`
- `/loan-options/foreign-national/orlando/`
- `/es/loan-options/foreign-national/` (CRITICAL for Latin American buyers)
- `/zh/loan-options/foreign-national/` (Mandarin — for NYC + LA Asian-American + Asia-Pacific buyers; consider phase 2)
- `/pt/loan-options/foreign-national/` (Portuguese — Brazilian buyers in FL; phase 2)

### Schema

`MortgageLoan` + `FAQPage` + `Article`; if multilingual, `inLanguage` correctly set + hreflang reciprocal.

### Compliance hooks

- FinCEN beneficial-ownership disclosure
- OFAC sanctions screening note
- US Bank Secrecy Act compliance
- "Investment / second-home only" (no foreign-national owner-occupied generally)
- Source-of-funds documentation requirements

### Conversion levers

- "Qualify without a US SSN" hero
- Process timeline graphic (no-credit-history path)
- Spanish-language hero variant
- LO/AE with foreign-national specialty + multilingual capability
- WhatsApp / international live chat option

---

## 5. Asset Qualifier / Asset Depletion

**Pillar URL:** `/loan-options/asset-qualifier/`

### Audience personas

| Persona | Profile |
|---|---|
| **Retiree Patricia** | $1.5M IRA + 401(k), low taxable income, Long Island second-home |
| **HNW HNW Howard** | $4M brokerage, capital-gains-only income, Fairfield CT |
| **Business-owner Bella** | $800K liquid, variable income, Houston |

### Keyword landscape

| Cluster | Top queries |
|---|---|
| Core | "asset qualifier loan" (1.5–3K), "asset depletion mortgage" (2–4K), "asset based mortgage" (3–5K) |
| Intent | "mortgage qualify with assets no income" (1–2K), "retirement income mortgage" (800–1.5K) |
| HNW | "jumbo asset qualifier" (300–600), "high net worth mortgage" (700–1.5K) |

### LLM query patterns

- "How does asset depletion mortgage work?"
- "Asset qualifier mortgage formula" (depletion math — info-gain magnet)
- "Best asset-based mortgage lender 2026"
- "Can I use retirement accounts to qualify for a mortgage?"

### Top competitors

- **Griffin Funding** — total liquid assets / 60–84 months
- **NASB** — IRA/401(k) hypothetical depletion over 360 months
- **New American Funding** — human underwriting for complex portfolios
- **Northstar Funding** — up to $4M loan, 90% LTV
- **LendSure** — asset depletion specialist
- **Sammamish Mortgage** — asset-based for HNW

### Differentiation angle

Clout's published terms: up to $3.5M loan, down to 620 FICO, no DTI / no employment verification, IO option on 30/40 year. Position transparency of formula as the differentiation (most lenders are opaque).

### Content cluster (pillar + 8 spokes)

Pillar + spokes:
- `/loan-options/asset-qualifier/depletion-formula-methodology/`
- `/loan-options/asset-qualifier/vs-bank-statement/`
- `/loan-options/asset-qualifier/for-retirees/`
- `/loan-options/asset-qualifier/jumbo/`
- `/loan-options/asset-qualifier/eligible-asset-types/` (what counts: stocks, retirement, savings, etc.)
- `/loan-options/asset-qualifier/[state]/` × top 3 (NY, CT, FL — HNW concentrations)
- `/es/loan-options/asset-qualifier/`

### Calculator

**Asset Depletion Estimator** — input total liquid assets, retirement %, term. Output: monthly qualifying income.

### Compliance

Non-QM disclosure; "assets must be verifiable + seasoned (typically 60+ days)"; FINRA-statement requirements.

### Conversion levers

- Formula transparency calculator (info-gain)
- HNW positioning (Stamford / Long Island / Naples-relevant)
- Concierge LO routing

---

## 6. Non-Agency Second Home

**Pillar URL:** `/loan-options/non-agency-second-home/`

### Audience personas

| Persona | Profile |
|---|---|
| **Snowbird Sandra** | Primary in NJ, buying Naples FL second-home |
| **Vacation investor Vince** | LBI NJ second-home, used 30% personal / 70% STR |
| **Mountain Mike** | Hamptons or Hudson Valley second-home, complex tax structure |

### Keyword landscape

| Cluster | Top queries |
|---|---|
| Core | "second home loan" (10–18K), "second home mortgage" (8–14K), "non-warrantable second home" (300–600) |
| Geo + product | "Florida second home loan" (1.5–3K), "Hamptons second home loan" (200–500) |
| Comparison | "second home vs investment property loan" (700–1.5K), "non-QM second home" (400–800) |

### LLM query patterns

- "Can I get a non-QM loan for a second home?"
- "Second home vs investment property loan differences"
- "Non-warrantable condo second home financing"

### Top competitors

- **Angel Oak** (Non-Agency Second Home program)
- **Carrington**
- **Newrez** (SmartVest variants)
- **Foundation Mortgage** (FL second-home specialist)

### Content cluster (pillar + 6 spokes)

Pillar + spokes:
- `/loan-options/non-agency-second-home/vs-investment-property/`
- `/loan-options/non-agency-second-home/non-warrantable-condo/`
- `/loan-options/non-agency-second-home/florida-vacation/`
- `/loan-options/non-agency-second-home/jersey-shore-lbi/`
- `/loan-options/non-agency-second-home/hudson-valley-hamptons/`
- `/loan-options/non-agency-second-home/connecticut-vacation/`

### Conversion levers

Snowbird / second-home angle, NJ→FL cross-state funnel page.

---

## 7. P&L Only

**Pillar URL:** `/loan-options/pl-only/`

### Audience personas

| Persona | Profile |
|---|---|
| **Business-owner Bella** | LLC owner, CPA-prepared P&L, doesn't want to release bank statements |
| **Professional services Pat** | Law/accounting partner, K-1 income, 12-mo P&L |

### Keyword landscape

| Cluster | Top queries |
|---|---|
| Core | "P&L only mortgage" (1.5–3K), "profit loss statement mortgage" (2–4K), "CPA P&L mortgage" (400–800) |
| Self-employed | "self-employed mortgage no bank statements" (700–1.5K) |
| Comparison | "P&L vs bank statement loan" (400–800) |

### LLM query patterns

- "How does a P&L only mortgage work?"
- "Can I get a mortgage with just a P&L statement?"
- "P&L only vs bank statement loan"

### Top competitors

- **A&D Mortgage** — 2-year CPA P&L program
- **Society Mortgage** — P&L loan brand
- **Gustan Cho** — P&L-only content authority
- **Unconventional Lending** — P&L specialty

### Content cluster (pillar + 5 spokes)

- Pillar
- `/loan-options/pl-only/cpa-requirements/`
- `/loan-options/pl-only/vs-bank-statement/`
- `/loan-options/pl-only/12-vs-24-month/`
- `/loan-options/pl-only/[state]/` × top 3

### Compliance

CPA letter requirements (form template downloadable); "P&L must be prepared by CPA / EA / licensed tax preparer."

---

## 8. Lite Doc

**Pillar URL:** `/loan-options/lite-doc/`

### Audience personas

W-2 with limited history (1-year), VOE + 1 year W-2s + YTD paystubs.

### Keyword landscape

Low: "lite doc mortgage" (300–600), "limited documentation mortgage" (400–800), "1 year W2 mortgage" (700–1.5K).

### Top competitors

- **Quontic Bank** — Lite Doc brand
- **BrokerMortgages** — Lite Doc program guide
- **Various wholesale shops** — typically a fallback program

### Content cluster (pillar + 4 spokes)

Pillar + spokes: vs Full Doc, vs Bank Statement, for new W-2 employees, by state (top 2: NY + TX).

---

## 9. Written VOE Only

**Pillar URL:** `/loan-options/wvoe/`

Narrow product; document for SEO completeness but don't over-invest.

### Keyword landscape

Low: "WVOE loan" (200–400), "VOE only mortgage" (200–400), "Fannie Mae 1005" (1–2K) — informational queries.

### Top competitors

- **A&D Mortgage** (WVOE program)
- **Lendz Financial** (educational content)
- **BCP Mortgage** (WVOE explainer)

### Content

Single pillar + 1–2 explainer pages. Don't build a state matrix.

---

## 10. Full Doc Non-QM

**Pillar URL:** `/loan-options/full-doc/`

### Audience

Borrowers with full documentation but who don't fit conforming for reasons other than income (credit events, property type, jumbo, etc.).

### Use case

Position as the fallback / parallel product to Bank Statement & DSCR. Don't compete head-on with conventional lenders on this; emphasize Non-QM-side reasons to use Clout's Full Doc.

### Content

Single pillar + 2–3 spokes (vs Conforming, vs Jumbo, recent credit events).

---

## Fix & Flip / Bridge — placeholder for future product

If/when Clout licenses fix & flip / bridge lending:

- Audience: investors with property under contract or refinancing rehab
- Keyword volume: "fix and flip loan" (8–18K), "hard money loan" (60–100K), "bridge loan investor" (3–6K)
- Top competitors: Kiavi (#1), Lima One, Anchor Loans, RCN Capital, LendingOne, Easy Street, HouseMax, Constitution Lending
- Content cluster pattern matches DSCR (pillar + state spokes + comparison spokes + ARV/profit calculators)
- Schema: `MortgageLoan` with custom `loanType: "Hard Money / Bridge"` annotation

Do NOT publish before licensing is verified.

---

## 90-day content calendar

### Weeks 1–4 (foundation)
1. DSCR pillar
2. Bank Statement pillar
3. State hubs × 6 (NY, NJ, PA, FL, CT, TX)
4. Foreign National pillar
5. About + LO/AE bios (or company entity if faceless)
6. Compliance footer + state license enumeration

### Weeks 5–8 (cluster expansion)
1. DSCR spokes (state pages × 6 — FL/TX prioritized)
2. Bank Statement spokes (12 vs 24 month, methodology, state pages × 6)
3. 1099 Only pillar + comparison spokes
4. DSCR calculator launch
5. Bank Statement income estimator launch

### Weeks 9–12 (depth + Spanish)
1. Asset Qualifier pillar + depletion calculator
2. Non-Agency Second Home pillar
3. P&L Only pillar
4. Spanish-language pillars (DSCR, Bank Statement, Foreign National)
5. Sub-metro pages (Houston, Orlando, Miami, Brooklyn, Philly)

### Weeks 13–26 (scale)
1. Remaining state × product matrix
2. Lite Doc + WVOE + Full Doc supporting content
3. Investor scenario library (anonymized closings, monthly drumbeat)
4. Cross-state funnel pages (NY-to-FL, NJ-to-TX, etc.)
5. YouTube transcript indexing
6. BiggerPockets / REIA content syndication

---

## Anti-patterns to avoid

- **Lead-gated calculators** — anti-AEO; calculator methodology must be crawlable even if input UI is gated
- **Generic state pages** — algorithmic doorway penalty
- **Same scenario across products** — duplicate content risk; vary scenarios per product
- **AI-generated content without human review** — March 2026 spam/HCU updates penalize sludge
- **Rate quotes without effective date + APR + assumptions** — TILA/Reg Z risk + LLM trust loss
- **"Best rates in the industry" claims** — UDAAP risk; use specific, verifiable claims
- **Stock photo borrowers** — use real LOs/AEs or skip the image; LLMs notice generic stock

---

## See also

- [STRATEGY.md](./STRATEGY.md) for the product priority ranking + tier system
- [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md) for content pattern (inverted pyramid, question-led H2s, citation patterns)
- [03-ymyl-eeat-trust.md](./03-ymyl-eeat-trust.md) for reviewer-stamp + compliance disclosure templates
- [04-local-seo-territories.md](./04-local-seo-territories.md) for state × product matrix and cross-state funnel
