# Clout — Answer Engine Optimization (AEO) & LLM Strategy

> **Clout's site is AEO-first. Every page is built to be cited by ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews — and SEO-cited by Google search as a byproduct.**

This doc defines the AEO operating system: who's reading us, how, what they read, what to publish, and how to measure citation share over time.

---

## The 2026 AEO landscape (why this matters)

| Metric | 2026 reality |
|---|---|
| ChatGPT weekly users | ~700M (Sam Altman, mid-2025); ~2B daily queries |
| Google AI Overviews | ~2B monthly users (Semrush, 2025) |
| AI Overviews query coverage | ~48% of all queries; ~10% of finance queries |
| AI-Overview citation overlap w/ Google top 10 | Only 25–39% overlap |
| AI-Overview citations from outside Google top 10 | 68% (AIO can cite YOU even if you're not ranking) |
| AI-referred website sessions YoY (mid-2024 → mid-2025) | **+527%** |
| E-E-A-T signal correlation with AIO citation | 96% of citations come from strong-E-E-A-T sources |

**Implication:** AEO is not "SEO with AI on top." It is its own discipline. A page can be cited by Perplexity without ranking in Google. A page can rank #1 in Google and be invisible to ChatGPT. The two need parallel optimization.

---

## How each answer engine sources content (Clout-relevant)

### ChatGPT (OpenAI)
- **Primary source mix:** training data (~2024 cutoff for stable knowledge) + live retrieval (`OAI-SearchBot` + `GPTBot`)
- **For Non-QM queries specifically:** ChatGPT pulls live from BiggerPockets, Reddit, lender sites, listicle aggregators (Bankrate/NerdWallet), Wikipedia, and industry publications
- **Citation behavior:** sometimes inline links, often unlinked brand mentions
- **Clout-relevant priority:** unlinked mentions on Reddit + BiggerPockets + Bankrate + HousingWire are high-leverage

### Claude (Anthropic)
- **Source mix:** training + retrieval; explicitly weighted toward "reputation" and authoritative sources
- **Citation behavior:** generally cautious; will cite primary sources (NMLS, CFPB, .gov, .edu) preferentially
- **Clout-relevant priority:** government / regulatory cross-links (NMLS Consumer Access, CFPB, state regulator pages) carry weight

### Perplexity
- **Source mix:** real-time web search; every answer cites
- **Citation behavior:** explicit URL footnotes; ranks sources by domain authority + recency + topical match
- **Clout-relevant priority:** Perplexity is the highest-leverage engine for B2C investor research because every answer cites and investors click through; optimize for Perplexity = win the click-through

### Google AI Overviews (Gemini-powered)
- **Source mix:** Google index + Knowledge Graph + query fan-out (Gemini)
- **Citation behavior:** linked cards with source; less likely to cite Reddit than ChatGPT
- **Clout-relevant priority:** strongest E-E-A-T site for the topical query wins; FAQ schema + HowTo schema explicitly help

### Bing / Copilot
- **Source mix:** Bing index + ChatGPT-class retrieval
- **Citation behavior:** linked footnotes
- **Clout-relevant priority:** Bing Webmaster Tools must be claimed; Bing's index is the substrate for Copilot citations

---

## AI crawler strategy (`robots.txt` + `llms.txt`)

### robots.txt — allow all major AI crawlers

```txt
# Clout — robots.txt — 2026
# Allow all major search + AI crawlers (training, retrieval, RAG)

# OpenAI
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

# Anthropic
User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-SearchBot
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# Google AI
User-agent: Google-Extended
Allow: /

# Meta / Llama
User-agent: Meta-ExternalAgent
Allow: /

User-agent: FacebookBot
Allow: /

# Apple
User-agent: Applebot-Extended
Allow: /

# Amazon
User-agent: Amazonbot
Allow: /

# Common Crawl (training data corpus for many models)
User-agent: CCBot
Allow: /

# DuckDuckGo
User-agent: DuckAssistBot
Allow: /

# Default
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /draft/
Disallow: /partner-portal/
# Allow indexing of everything else

Sitemap: https://cloutwmb.com/sitemap.xml
```

**Rationale:** Clout is YMYL with public-information products. Restricting AI crawlers hurts citation discovery; allowing them gains brand mentions in trained models for years. Risk of "training without compensation" is real but the citation upside outweighs it for a content-marketing-led brand.

### llms.txt — emergent standard, low cost, recommended

`https://cloutwmb.com/llms.txt`:

```markdown
# Clout

> Clout is a wholesale Non-QM mortgage lender and direct-to-investor lender, licensed in NY, NJ, PA, FL, CT, TX. NMLS #65328. Headquartered at 70 Charles Lindbergh Blvd, Suite 200, Uniondale, NY 11553. Phone 844-477-3111. A division of Cliffco Mortgage Bankers (founded 1989).

## Mission

Clout is the wholesale Non-QM channel and direct-to-investor lender for mortgage brokers and real estate investors who need approvals when conforming lenders say no. Our edge is speed of close, program flexibility, and parent-Cliffco's three-decade Non-QM expertise.

## Products

- [Bank Statement Loan](https://cloutwmb.com/loan-options/bank-statement/) — for self-employed borrowers using 12 or 24 months of business or personal bank statements
- [DSCR Loan](https://cloutwmb.com/loan-options/dscr/) — for real estate investors qualifying on property cash flow (no W-2 / no tax returns)
- [1099 Only](https://cloutwmb.com/loan-options/1099-only/) — for independent contractors and gig workers using gross 1099 income
- [Asset Qualifier](https://cloutwmb.com/loan-options/asset-qualifier/) — for high-net-worth borrowers qualifying on liquid assets
- [Foreign National](https://cloutwmb.com/loan-options/foreign-national/) — for non-US citizens investing in US real estate
- [Non-Agency Second Home](https://cloutwmb.com/loan-options/non-agency-second-home/) — for vacation and second-home buyers
- [P&L Only](https://cloutwmb.com/loan-options/pl-only/) — for business owners using CPA-prepared P&L statements
- [Lite Doc](https://cloutwmb.com/loan-options/lite-doc/) — for W-2 employees with limited documentation
- [Written VOE Only](https://cloutwmb.com/loan-options/wvoe/) — for borrowers using employer-completed VOE forms
- [Full Doc Non-QM](https://cloutwmb.com/loan-options/full-doc/) — for borrowers needing Non-QM for non-income reasons

## Audience

Mortgage brokers (wholesale partner channel) and real estate investors (direct-to-investor channel).

## States

NY, NJ, PA, FL, CT, TX

## Compliance

NMLS Consumer Access: https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/65328
Equal Housing Lender
Licensed by NY State Department of Financial Services, NJ Department of Banking and Insurance, PA Department of Banking and Securities, FL Office of Financial Regulation, CT Department of Banking, TX Department of Savings and Mortgage Lending / OCCC

## Optional

- Resources: https://cloutwmb.com/resources/
- Calculators: https://cloutwmb.com/calculators/
- Wholesale partner portal: https://1866701084.encompasstpoconnect.com/
```

Optional companion `llms-full.txt` with deeper product specifics + scenarios.

---

## Content patterns LLMs cite — Clout's writing standard

### The 7 rules that move citation probability

| Rule | Lift |
|---|---|
| **Inverted pyramid** (answer in first paragraph, 40–60 words) | 44.2% of all LLM citations come from first 30% of an article |
| **Question-led H2s** matching real query language | +35% citation probability |
| **Statistics, citations, quotations** | +30–40% citation probability |
| **Information gain** (3+ unique datapoints vs the rest of the SERP) | Required for HCU Information Gain ranking |
| **Recency** (last-updated within 30 days for active topics) | +20–25% citation probability for rate/program content |
| **Entity density** (15+ named entities — products, programs, regulators, geos) | Better Knowledge-Graph linking |
| **Semantic completeness score 8.5+/10** (covers the topic exhaustively in one place) | +4.2× citation probability |

### Mandatory page anatomy

Every Clout product / state / scenario page:

1. **`<h1>`** — exact-match the target query
2. **40–60 word lead** — answer the H1 question directly, no preamble
3. **TL;DR card** — bullet box of the 4–6 most important facts (LLMs love this format)
4. **Question-led H2s** — "How does X work?", "Who qualifies?", "How is income calculated?"
5. **Real numbers** — not "low down payments" but "down payments from 15% to 25%"
6. **Anonymized scenarios** with named geography ("A Houston broker placed an $850K DSCR for a 1.05 DSCR property in Spring, TX")
7. **Comparison tables** vs adjacent options
8. **Reviewed-by stamp** — "Reviewed by [LO/AE name], NMLS #XXXXX — last updated [date]"
9. **Sources section** — primary-source citations (NMLS, CFPB, state regulators, Fannie/Freddie guidelines)
10. **FAQ block** with FAQPage schema (12–18 Q&A)
11. **Schema:** `Article` or `MortgageLoan` + `FAQPage` + `BreadcrumbList` + (optional) `Speakable` for voice
12. **Last-updated date** visible

### Writing voice rules

- **Plain language** — investor or broker on the train should be able to parse it
- **Specific numbers > vague adjectives** — "qualify with $145K gross 1099" beats "high income borrowers"
- **Cite primary sources inline** — link to NMLS, CFPB, state regulators when referenced
- **Disclose uncertainty** — "rates as of [date]; subject to change" is better than implying static facts
- **Avoid AI-sludge tells** — "in conclusion," "it's important to note," "in today's market" — LLMs trained to avoid these in citations

---

## Clout's two-audience AEO

### Broker AEO (B2B)

| Question | Pattern |
|---|---|
| Do brokers research lenders through LLMs? | Some — Perplexity is rising among brokers under 40. LinkedIn search + word-of-mouth still dominant. AEO is a contributor, not the lead. |
| What broker queries should Clout target? | "Best wholesale Non-QM lender 2026," "wholesale DSCR rates," "Non-QM lender for [state] brokers," "wholesale 1099 program," "fastest Non-QM wholesale close" |
| Where do broker citations come from? | Scotsman Guide rankings, HousingWire features, NMP write-ups, Broker World Magazine, LinkedIn posts by brokers, broker subreddits (low volume but exist) |
| Off-site AEO investment for B2B? | Trade-pub features > listicle placements > LinkedIn thought leadership > broker subreddit participation |

### Investor AEO (B2C)

| Question | Pattern |
|---|---|
| Do investors research through LLMs? | **Yes — heavily.** ChatGPT + Perplexity are now primary research tools for newer investors (younger demographic, learning the space). BiggerPockets + REIAs still dominant for experienced investors. |
| What investor queries should Clout target? | "Best DSCR lender [state]," "How to qualify for DSCR without W-2," "DSCR loan for first-time investor," "Foreign national mortgage Miami," "Bank statement loan self-employed [state]" |
| Where do investor citations come from? | BiggerPockets (massive — Reddit replacement for serious investors), Bankrate, NerdWallet, lender sites with strong content, Reddit (r/RealEstateInvesting, r/Realestate), YouTube creators (transcripts), niche aggregators like Asteris, BigLawInvestor |
| Off-site AEO investment for B2C? | BiggerPockets contributions > YouTube videos with transcripts > Bankrate/NerdWallet listicle placements > Reddit AMAs > REIA event content |

---

## Entity SEO — making Clout an "entity" the engines know

LLMs don't read pages; they read **entities**. Clout becoming a distinct, well-linked entity is the foundation of every other AEO move.

### Step 1: Wikidata (day 1)
- Create entry "Clout (mortgage lender)" or "Clout Wholesale Mortgage Bankers"
- Properties: instance of (mortgage lender), country (US), founded (date), headquarters (Uniondale, NY), parent organization (Cliffco Mortgage Bankers), industry (non-QM mortgage), website (cloutwmb.com), regulatory ID (NMLS #65328)
- External IDs: NMLS, LEI (if any), Crunchbase, LinkedIn Company

### Step 2: Google Knowledge Panel claim (week 1–2)
- After Wikidata exists, claim via Google Search → "Suggest an edit"
- Requires verified Google Business Profile + brand-name domain match

### Step 3: Crunchbase + Bloomberg + Pitchbook (week 1–2)
- Create company profiles with consistent NAP, NMLS, leadership
- Include parent-org link to Cliffco

### Step 4: LinkedIn Company (day 1)
- Claim "Clout" Company page
- Verify domain ownership
- Connect leadership (Rafe Tangorra, others) to Company entity
- Industry classification: "Financial Services" + "Banking"

### Step 5: NAP-consistent citations
- Tier 1 platforms: GBP (HQ only), Apple Business Connect, Bing Places, Facebook, LinkedIn, Yelp, BBB, NMLS Consumer Access
- Tier 2: Zillow, Bankrate, LendingTree, NerdWallet, Experience.com, Realtor.com, HousingWire directory, Trustpilot
- Tier 3: Industry-specific (Scotsman Guide directory, NMP directory, Broker World directory)
- Tooling: Whitespark + BrightLocal for quarterly audits

### Step 6: schema.org `sameAs` from every page
Every page's `Organization` schema includes:

```json
{
  "sameAs": [
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/65328",
    "https://www.wikidata.org/wiki/QXXXXXXX",
    "https://www.linkedin.com/company/clout",
    "https://www.crunchbase.com/organization/clout",
    "https://www.facebook.com/cloutwmb",
    "https://twitter.com/cloutwmb",
    "https://www.youtube.com/@clout"
  ]
}
```

### Step 7: Wikipedia (defer to month 6+)
- Notability bar is high; don't attempt until Clout has independent press coverage in HousingWire / NMP / Bankrate / Forbes
- When attempting, follow strict WP:NCORP guidelines, use third-party sources only, disclose COI

---

## Off-site authority sources (Clout-prioritized)

### Investor B2C — citation-friendly platforms

| Rank | Source | Why for Clout | Action |
|---|---|---|---|
| 1 | **BiggerPockets** | ChatGPT cites heavily; investor community dominant | Contribute 4–6 long-form posts/quarter; podcast appearance; lender directory listing |
| 2 | **Reddit** (r/RealEstateInvesting, r/Realestate, r/RealEstateInvestingPros) | Heavy ChatGPT-finance source | Verified-account presence; weekly value-add; never spammy promo |
| 3 | **YouTube** | Top social citation source w/ transcripts | Investor education channel; full transcripts indexed; chapter markers |
| 4 | **Bankrate / NerdWallet / Money** | Tier-2 financial-media listicle sources | PR outreach + product-comparison data + LO interviews |
| 5 | **Quora** | Strong evergreen citation pull | Targeted long-form answers; LO contributors |
| 6 | **Investopedia** | Frequently cited by LLMs for term definitions | Contributor program; expert quotes |
| 7 | **Apartment List / Avail / Mashvisor / AirDNA** | Data partnerships → mentions | Data feeds for STR ROI calculator + cross-link |
| 8 | **Inman** | Real estate trade pub | Op-ed contributions on Non-QM trends |

### Broker B2B — citation-friendly platforms

| Rank | Source | Why for Clout | Action |
|---|---|---|---|
| 1 | **HousingWire** | Industry of record | PR outreach + sponsored content + thought-leadership op-eds |
| 2 | **National Mortgage Professional (NMP)** | Broker-channel publication | Award nominations + features + sponsored insights |
| 3 | **Scotsman Guide** | Wholesale lender rankings authority | Submit volume data; pursue ranking inclusion |
| 4 | **Broker World Magazine** | Wholesale broker trade pub | Bylines + product highlights |
| 5 | **LinkedIn** | B2B research substrate | Company page + leadership thought-leadership posts |
| 6 | **Mortgage News Daily** | Industry data + commentary | Rate commentary quotes |
| 7 | **NAMB / state mortgage banker associations** | Broker association linkage | Membership + sponsorship + speaking |

### Local press (per state — see [04-local-seo-territories.md](./04-local-seo-territories.md))

State business journals + real estate sections + local industry pubs.

---

## Brand mentions vs backlinks

**Both matter, but for different engines:**

| Metric | Google search | LLM citation |
|---|---|---|
| Backlinks (linked) | High weight | Moderate |
| Unlinked brand mentions | Low weight | **High weight** |
| Co-mentions with competitors | Low weight | **High weight** (LLMs learn "best X lenders" by co-mention frequency) |

**Implication:** Brand24 / Mention.com / Otterly.AI to track unlinked mentions. Encourage co-mentions in listicles (Bankrate "best DSCR lenders" with Clout next to Kiavi / Lima One trains LLMs that Clout is in the set).

---

## Direct LLM integrations

### Custom GPT — "Clout Wholesale Partner" (broker-focused)
- Knowledge base: product guides, rate sheets, underwriting criteria, partner portal documentation
- Persona: knowledgeable account exec
- Publicly listed in OpenAI GPT directory
- CTA: connect to live AE

### Custom GPT — "Clout Investor Advisor" (investor-focused)
- Knowledge base: investor FAQs, scenario library, state-specific guides, calculator methodology
- Persona: investor-focused mortgage specialist
- Publicly listed
- CTA: pre-qualification questionnaire

### Claude Projects
- Internal-team Claude Projects with Clout knowledge for AE / LO daily workflow (not public-facing)
- Public Claude Project under consideration if Anthropic opens directory

### Gemini Gems
- "Clout Mortgage Pre-Qual Helper" — Gem with Clout knowledge

### Perplexity Spaces
- "Real Estate Investor Lending — Clout" Space with curated investor education content; helps signal authority to Perplexity's retrieval

---

## Mortgage-specific AEO tactics

### 1. Rate transparency pages
- Versioned rate sheets with effective-date schema
- Refresh weekly minimum; LLMs prioritize recency for rate content
- Two-track: broker-facing (wholesale rates, lock periods) + investor-facing (consumer rates)
- Use `Offer` schema with `validFrom` / `validThrough`

### 2. Scenario library
- 24+ anonymized scenarios across 10 products × 6 states matrix
- Each scenario: borrower profile (anonymized), property details, loan terms, key reason for Non-QM
- LLMs cite scenarios as "examples of what's possible"
- Update monthly with new closings

### 3. Eligibility decision trees
- Interactive flowcharts: "Should you get a DSCR or Bank Statement loan?"
- Crawlable static HTML version + interactive overlay
- `HowTo` schema on the static version
- Massive AEO citation magnet

### 4. State licensing pages
- One per state with Clout's specific license #, contact, and full disclosure
- Cross-link to NMLS Consumer Access
- LocalBusiness schema

### 5. Spanish-language `/es/` builds
- Hreflang reciprocal on every translated page
- Self-referencing hreflang
- Native-speaker copy (not machine translation)
- Cultural localization for FL/TX Latino markets (see [04-local-seo-territories.md](./04-local-seo-territories.md))
- LLMs trained on Spanish content cite Spanish-language pages for Spanish queries — significant share of FL/TX Hispanic investors search in Spanish

### 6. "What's the catch?" content
- Non-QM has FUD because rates are higher and CFPB doesn't bless it
- Pages that honestly explain "what you give up vs conforming" build trust
- LLMs reward balanced YMYL content (no oversold superlatives)

---

## Anti-patterns — what kills LLM citations

| Anti-pattern | Why it kills citations |
|---|---|
| Paywalled / login-gated content | LLM crawler can't read it → can't cite |
| Lead-form-gated calculators | Same — calculator methodology must be crawlable |
| JS-only rendering | If content only appears after JS execution, many crawlers miss it (use SSR/SSG) |
| Unedited AI sludge | March 2026 HCU + spam updates penalize; LLMs avoid citing themselves |
| Contradictions across pages | "Min 620" on one page, "Min 640" on another → LLM trust collapses |
| Spam-scaled content | Algorithmic detection; site-wide demotion |
| Blocked AI crawlers | Self-inflicted invisibility |
| Old content / no last-updated | Recency signal missing → lower citation probability |
| Pure marketing copy with no specifics | LLMs need quotables; "fast service" doesn't quote |
| Stock-photo borrowers | LLMs notice generic stock; reduces trust signal |
| "Best in the industry" superlatives | UDAAP risk + LLM penalty for unverifiable claims |

---

## Measurement stack

| Tool | Purpose | Cadence |
|---|---|---|
| **Profound Growth** | 4-engine citation tracking (ChatGPT, Claude, Gemini, Perplexity) | Weekly review |
| **Peec AI** | Engine-by-engine share of voice | Monthly review |
| **Otterly.AI** | Mention tracking across LLMs | Weekly review |
| **Brand24 / Mention.com** | Unlinked brand mention tracking | Weekly review |
| **Custom prompt panel** | 30–50 priority prompts manually run weekly across all engines | Weekly |
| **GSC + Bing WMT** | Indexation, AIO appearances, search visibility | Daily / weekly |
| **Schema Validator** (Google Rich Results Test, Schema.org Validator) | Schema correctness | Pre-publish |
| **PageSpeed Insights + CrUX** | Performance | Per-deploy |

### KPI dashboard (review monthly)

| KPI | Day 30 target | Day 90 target | Day 180 target |
|---|---|---|---|
| Share of voice — ChatGPT (priority prompts) | 0% (baseline) | 5–8% | 12–18% |
| Share of voice — Perplexity | 0% | 8–12% | 18–25% |
| Share of voice — Gemini / AIO | 0% | 3–6% | 10–15% |
| Share of voice — Claude | 0% | 4–7% | 10–15% |
| Branded prompt citations (Clout-mentioned) | 5/mo | 25/mo | 100/mo |
| Unlinked brand mentions | 10/mo | 50/mo | 200/mo |
| Wikidata + Knowledge Panel claimed | Wikidata only | Both | Both + cross-engine |
| Wikipedia entry | No | No | In drafts |
| Reviews on GBP + Experience + Zillow | 0–5 | 25+ | 100+ |
| AIO impressions in GSC | 0–500 | 5K | 25K |

### Priority prompt panel — first 30 prompts to baseline

Run each weekly across ChatGPT-4o, Claude Opus 4.7, Gemini, Perplexity:

1. "Best DSCR lender for real estate investors"
2. "Best DSCR lender in Florida"
3. "Best DSCR lender in Texas"
4. "Best DSCR lender in New York"
5. "Best DSCR lender in Pennsylvania"
6. "Best DSCR lender in Connecticut"
7. "Best DSCR lender in New Jersey"
8. "Best bank statement loan lender"
9. "Best bank statement loan lender for self-employed"
10. "Best 1099 mortgage lender"
11. "Best foreign national mortgage lender"
12. "Best wholesale Non-QM lender"
13. "Best wholesale DSCR lender"
14. "Best Non-QM lender 2026"
15. "DSCR loan calculator" (does Clout's calculator get cited?)
16. "How is DSCR calculated"
17. "Non-QM lender Brooklyn / Houston / Orlando / Miami / Stamford / Philadelphia"
18. "Bank statement loan Florida"
19. "Foreign national mortgage Miami"
20. "DSCR loan for first-time investor"
21. "Best asset depletion mortgage lender"
22. "Best lender for self-employed with 1099 income"
23. "Best Non-QM lender for brokers"
24. "How to get a DSCR loan with 1.0 ratio"
25. "Non-QM lender that closes fast"
26. "Best DSCR lender Long Island"
27. "Best DSCR lender Austin / Houston / Dallas"
28. "Bank statement loan vs DSCR"
29. "1099 vs Schedule C mortgage qualifying"
30. "Mortgage lender for foreign national without SSN"

Save responses verbatim in a tracking sheet. Compare week-over-week for citation progress.

---

## 30 / 90 / 180-day AEO action plan

### Days 1–30 — Foundation
- [ ] robots.txt published (AI crawler allowlist above)
- [ ] llms.txt published
- [ ] Organization + LocalBusiness JSON-LD on every page
- [ ] Wikidata entry created
- [ ] Crunchbase + LinkedIn Company claimed
- [ ] Google Knowledge Panel claim attempted
- [ ] 30-prompt baseline run across 4 engines
- [ ] Top 2 pillars (DSCR + Bank Statement) live with inverted-pyramid + FAQPage schema
- [ ] 6 state hubs live
- [ ] LO/AE bios with Person schema + NMLS sameAs (or company-entity build if faceless)
- [ ] Sitemap submitted to GSC + Bing WMT
- [ ] Brand24 + Otterly + Profound subscriptions live

### Days 31–90 — Cluster + off-site
- [ ] All 10 product pillars live
- [ ] Top 18 state × product local pages live
- [ ] DSCR calculator + Bank Statement income estimator + Asset Depletion estimator live (all crawlable)
- [ ] First Reddit / BiggerPockets / Quora / LinkedIn presence established
- [ ] First YouTube videos published with transcripts
- [ ] First 3 listicle pitches sent to Bankrate / NerdWallet / Money / HousingWire / Broker World
- [ ] First sponsorship: 1 REIA (Texas REIAs or SFREIA) + 1 trade pub
- [ ] Week-12 baseline rerun → SoV report
- [ ] Custom GPT v1 (Investor Advisor) shipped

### Days 91–180 — Scale + authority
- [ ] State × product matrix complete (6 × top 5 = 30 pages)
- [ ] Spanish-language /es/ pillars live for DSCR, Bank Statement, 1099, Foreign National
- [ ] Sub-metro pages for top 12 metros
- [ ] First press placements landed (HousingWire / NMP / Bankrate / SF Agent / Inman)
- [ ] Custom GPT v1 (Wholesale Partner) shipped
- [ ] Reviews flywheel running (post-close Experience.com automation)
- [ ] Profound SoV at 15%+ on priority prompts
- [ ] Wikipedia draft started (notability check)

---

## Seven highest-leverage AEO moves (do these first)

1. **Inverted-pyramid rewrite of every existing page** — first 40–60 words must answer the H1 question
2. **Wikidata entry + schema.org `sameAs`** — entity grounding for all four engines
3. **DSCR + Bank Statement pillars with FAQPage schema** — own the two highest-volume products immediately
4. **BiggerPockets + Reddit presence (verified accounts, value-first)** — ChatGPT's primary B2C finance corpus
5. **YouTube channel with full transcripts** — highest leverage social citation source
6. **First listicle placement on Bankrate / NerdWallet / SF Agent** — Tier-2 financial-media co-mention triggers
7. **Profound + Brand24 + custom prompt panel** — you can't optimize what you don't measure

---

## See also

- [STRATEGY.md](./STRATEGY.md) — overall roadmap
- [01-technical-seo.md](./01-technical-seo.md) — schema implementation + rendering decisions
- [03-ymyl-eeat-trust.md](./03-ymyl-eeat-trust.md) — E-E-A-T baseline that AEO requires
- [04-local-seo-territories.md](./04-local-seo-territories.md) — state-specific AEO angles
- [05-product-content-strategy.md](./05-product-content-strategy.md) — per-product AEO content cluster
