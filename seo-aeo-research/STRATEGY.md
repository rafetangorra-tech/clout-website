# Clout SEO/AEO Strategy

**Status:** v1 · 2026-05-27
**Owner:** Rafe Tangorra · `rtangorra@cliffcomortgage.com`
**Scope:** Roadmap for making Clout the cited authority for wholesale Non-QM lending and direct-to-investor lending across NY, NJ, PA, FL, CT, TX — in both Google and large language model search.

---

## North star

> **For every Non-QM query a mortgage broker or real estate investor asks in our six states — in Google, ChatGPT, Claude, Gemini, or Perplexity — Clout is one of the cited answers.**

This is a position, not a goal. The work behind it is a content + entity + technical system designed to be machine-readable, expert-grade, and provable to both algorithms and underwriters.

## Where Clout starts (May 2026 baseline)

- New brand under Cliffco Mortgage Bankers (NMLS #65328); see [project context](../../.claude/projects/-Users-rtangorra/memory/project_clout_site.md)
- Current public site `cloutwmb.com`: wholesale-focused, ~10 Non-QM programs published, weak SEO posture, no AEO posture
- Audience scope expanding from broker-only (B2B) to **broker + real estate investor (B2B + B2C dual path)**
- Six licensed states; HQ in Uniondale, NY
- Zero organic equity for the new positioning; we are building from zero on the investor side

## The four flywheels (adapted from Cliffco)

Every initiative below feeds one of these. Anything that doesn't is noise.

### 1. Author + entity authority
Provable expertise tied to named people and a documented company entity. **Clout twist:** wholesale leadership + investor-credibility figures (not just LOs). Wikidata entry, Crunchbase, LinkedIn Company, NAP consistency, NMLS Consumer Access cross-link from every page.

### 2. Information-gain content
Content that says something the rest of the internet doesn't. **Clout twist:** anonymized broker scenarios ("how a CT broker closed a 1099-only Stamford 3-unit"), investor scenarios ("Orlando DSCR with 1.05 DSCR ratio — what we approved"), and proprietary data (turn-time benchmarks, approval-rate by product).

### 3. Local depth
State + metro + sub-metro pages with unique local proof, not boilerplate. **Clout twist:** TX, PA, CT are open ground (no Cliffco precedent); FL/NJ/NY have Cliffco material to adapt but Clout's investor angle is fresh.

### 4. Off-site authority
Citations, brand mentions, and reviews on the surfaces LLMs read. **Clout twist:** broker channels (Broker World, NMP, Scotsman, LinkedIn) + investor channels (BiggerPockets, REIA presence, Inman, HousingWire) — two parallel networks, not one.

## Audience split

| | **Brokers (B2B)** | **Real estate investors (B2C)** |
|---|---|---|
| Primary intent | Find the wholesale lender that closes Non-QM fastest with broker-friendly comp | Find a lender that funds my next investment property without W-2s |
| Top queries | "best wholesale non-QM lender," "DSCR wholesale rates [state]," "1099 wholesale program" | "DSCR loan [city]," "bank statement loan self-employed," "fix and flip lender [state]" |
| Trust signals that matter | Speed of close, account-exec responsiveness, program flexibility, comp transparency | Closing speed, no-tax-return process, investor scenarios, BiggerPockets/REIA reputation |
| Where they research | LinkedIn, broker Facebook groups, Scotsman/NMP/Broker World, broker portals | Google, ChatGPT, Perplexity, BiggerPockets, YouTube, REIA meetings |
| AEO leverage | Medium — brokers do less LLM research, more direct outreach | **High — investors are heavy LLM users for product research** |

**Implication:** investor AEO is the higher-leverage AEO channel in 2026. Broker channel still matters but converts more through direct sales motion + trade-pub presence than search.

## Product priorities (content investment ranking)

Based on search volume (US monthly estimates from current research), competitive density, and Clout differentiation potential:

| Tier | Product | Why this tier |
|---|---|---|
| **1 (foundation)** | DSCR | 30-45K monthly searches, strongest investor AEO, Clout's strongest dual-audience product |
| **1 (foundation)** | Bank Statement | 40-60K monthly, self-employed flagship, both broker and investor angles |
| **2 (high)** | Fix & Flip / Bridge | Investor evergreen, Kiavi dominates but local angles open |
| **2 (high)** | 1099 Only | Growing gig-economy demographic, Griffin/LendFriend lead; Clout can challenge with positioning |
| **2 (high)** | Foreign National | High-value transactions, FL/TX angle, low LLM competition |
| **3 (medium)** | Asset Qualifier / Depletion | High-net-worth niche, longer-tail, but high LTV |
| **3 (medium)** | Non-Agency Second Home | Niche but defensible, especially in FL/CT vacation markets |
| **3 (medium)** | P&L Only | Specific subset of self-employed, often confused with bank statement; differentiation angle |
| **4 (maintenance)** | Lite Doc | Niche, often a fallback program |
| **4 (maintenance)** | Written VOE Only | Narrow use case; ensure indexable but minimal investment |
| **4 (maintenance)** | Full Doc Non-QM | Commodity offering; ensure parity with competitors |

See [05-product-content-strategy.md](./05-product-content-strategy.md) for deep dives on each.

## Territory priorities

| Tier | State | Why this tier |
|---|---|---|
| **1 (build first)** | **TX** | Largest investor market, no Cliffco precedent, REIA network strong, Austin/Houston/Dallas all hot DSCR markets |
| **1 (build first)** | **FL** | Top investor state, Miami/Orlando/Tampa STR boom, Cliffco has FL but Clout-specific investor angle is fresh |
| **2 (build next)** | NY + NJ | Cliffco precedent reusable for borrower side; rebuild for investor angle (NYC investors buying TX/FL) |
| **2 (build next)** | **PA** | Philly + Pittsburgh both strong rental markets, no Cliffco material — pure new ground |
| **3 (sustain)** | **CT** | Smaller but Constitution Lending (CT-based, investor-founded) sets the floor; Hartford insurance corridor + Fairfield County wealth differentiator |

See [04-local-seo-territories.md](./04-local-seo-territories.md) for state deep dives.

## 30 / 90 / 180-day execution

### Days 1–30 — Foundation
1. Stand up the Astro + Sanity + Vercel skeleton (see [01-technical-seo.md](./01-technical-seo.md))
2. Publish `robots.txt` allowing all major AI crawlers + `llms.txt` routing (see [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md))
3. Publish Organization + LocalBusiness JSON-LD schema with NMLS sameAs, full NAP
4. Create Wikidata entry, claim Google Knowledge Panel, fix Crunchbase + LinkedIn Company
5. Write the two pillar pages: DSCR + Bank Statement (each 2,500–3,500 words, inverted pyramid, 40–60 word lead, question-led H2s, entity-dense, anonymized scenarios)
6. Six state hub pages (NY, NJ, PA, FL, CT, TX) — local proof, market data, anonymized closings, FAQ schema
7. AEO baseline measurement: test 30 priority prompts across ChatGPT, Claude, Perplexity, Gemini for current Clout citation share (probably 0%)
8. Compliance footer with NMLS link, Equal Housing, state license enumeration, accessibility statement

### Days 31–90 — Cluster expansion
1. Spoke content for DSCR and Bank Statement (8–12 spokes each: product variations, state-specific, scenario-driven, calculators)
2. Pillar pages for 1099 Only + Foreign National + Fix & Flip (priority tier 2)
3. State × product matrix: build 6 states × top 3 products = 18 high-priority local-product pages (e.g., "DSCR Loans in Houston, TX")
4. Calculators ship: DSCR calculator, Bank Statement income estimator, fix-flip ARV/profit calculator
5. LO / Account Executive bios (Person schema + NMLS sameAs) for visible reps; if Clout opts for "faceless wholesale" positioning, double down on company-entity content instead
6. Off-site authority push: first listicle pitches to Bankrate / NerdWallet / Money / South Florida Agent / Texas Real Estate Today; first guest contributions to HousingWire / NMP / Broker World; first BiggerPockets forum + podcast appearances
7. YouTube channel launch: 6 videos (3 broker-education, 3 investor-education); full transcripts indexed
8. AEO measurement week 12 vs baseline

### Days 91–180 — Authority & scale
1. Remaining product pillars (Asset Qualifier, Non-Agency Second Home, P&L Only)
2. Complete state × product matrix: 6 × 9 = up to 54 local-product pages (some lower-tier products may skip some states)
3. Spanish-language `/es/` build for top products in FL + NJ + NY + TX + PA + CT (where Latino investor/contractor density warrants it)
4. Sub-metro pages (NYC, Long Island, Houston, Austin, Dallas, Philadelphia, Pittsburgh, Hartford, Stamford, Miami, Orlando, Tampa)
5. Custom GPT: "Clout Wholesale Partner" (broker-focused) + "Clout Investor Advisor" (investor-focused) — both with knowledge upload + public listings
6. Reviews flywheel: post-close review prompts (broker satisfaction surveys → G2-style; investor reviews → Google Business Profile + Experience.com + Zillow + Bankrate)
7. Press placements: target 8–12 placements across HousingWire / NMP / Scotsman / Broker World / BiggerPockets / Inman / South Florida Agent / Texas Real Estate Today
8. AEO measurement: target 15%+ share-of-voice on priority prompts by day 180

## Budget order of magnitude

For internal planning only. Actual costs depend on team mix (in-house vs agency vs freelance).

| Stream | 6-month order of magnitude |
|---|---|
| Technical build (Astro/Sanity/Vercel + dev) | $25K–$60K |
| Content production (pillars + spokes + calculators) | $40K–$90K |
| Off-site authority + PR | $25K–$60K |
| Tooling (Profound, Brand24, GSC paid, Whitespark, BrightLocal, Ahrefs, Screaming Frog) | $8K–$18K (annualized) |
| Spanish-language localization | $8K–$20K |
| Reviews infrastructure (Experience.com, Birdeye) | $6K–$15K (annualized) |
| **Total range** | **$112K–$263K** over 6 months |

ROI framing: a single Non-QM closing (avg ~$500K loan × ~1.5 pts wholesale comp) is ~$7,500 in revenue. ~15 incremental closings repays mid-range investment. AEO leads are typically late-funnel and convert higher than cold-traffic SEO.

## Risks + mitigation

| Risk | Mitigation |
|---|---|
| New brand, no organic equity | Lean on Cliffco's 36-year parent expertise; entity-SEO blitz day 1; Wikidata + Crunchbase + LinkedIn before content launches |
| Compliance disclosures across 6 states (especially TX, FL) | Compliance footer block per page; legal review of state-specific disclosure language; canonical compliance doc stored in repo; quarterly review |
| Broker channel doesn't research via LLM (so AEO is wasted on B2B) | Measurement validates this; if confirmed, redirect B2B budget to direct sales + trade-pub presence; AEO budget concentrates on investor B2C |
| LLM citation behavior changes mid-build (engines pivot weighting) | Diversification across engines; entity authority hedges; quarterly engine-mix review |
| Cliffco-Clout brand confusion (consumers think they're the same) | Clear "wholesale spinoff of Cliffco" framing where relevant; separate Wikidata entries; separate NMLS context; explicit positioning on About page |
| Pure rust/tan or off-brand visual choices on Cliffco site cross-contaminating Clout | Hard separation per [project_clout_site memory](../../.claude/projects/-Users-rtangorra/memory/project_clout_site.md) |
| AI Overviews shift toward Google's own products over third-party citations | Optimize for the 5 engines as portfolio; don't single-thread |
| Texas market entrenchment (Mbanc, Griffin, Lone Star already strong) | Differentiate on speed + program breadth + investor-direct positioning; don't try to outspend incumbents on generic terms |

## What this strategy IS NOT

- Not a generic mortgage SEO play — Clout is Non-QM-specialty; we don't compete with Rocket / UWM on conforming
- Not a single-audience play — broker AND investor; the two strategies are parallel, not unified
- Not "wait for traffic" — AEO + entity authority requires off-site work from day 1
- Not Cliffco-cloned — Cliffco is retail; Clout is wholesale + direct-to-investor; many decisions diverge (see [Reuse Map](../../cliffco-site/seo-aeo-research/STRATEGY.md) inventory in the project memory)

---

## See also

- [01-technical-seo.md](./01-technical-seo.md) — stack, schema, performance, accessibility
- [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md) — AI crawler strategy, llms.txt, content patterns
- [03-ymyl-eeat-trust.md](./03-ymyl-eeat-trust.md) — YMYL/E-E-A-T, broker + investor trust signals
- [04-local-seo-territories.md](./04-local-seo-territories.md) — six-state deep dives
- [05-product-content-strategy.md](./05-product-content-strategy.md) — nine-product content strategy
