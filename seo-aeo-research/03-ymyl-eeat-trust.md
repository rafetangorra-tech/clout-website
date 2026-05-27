# Clout — YMYL · E-E-A-T · Trust

> **Mortgages are YMYL (Your Money, Your Life). 96% of AI Overview citations on YMYL queries come from sources with strong E-E-A-T signals.** Without trust infrastructure, every other SEO/AEO move underperforms.

This doc captures the trust system for Clout. The framework reuses Cliffco's research at the principle level but rewires for Clout's wholesale-direct dual-audience model: a brand-new entity, no 36-year story to lean on, and B2B broker trust signals layered on top of B2C borrower trust signals.

---

## YMYL framework (2026)

Google's March 2026 update raised the E-E-A-T bar for YMYL topics:

- **Experience** — first-hand or directly observed knowledge of the topic
- **Expertise** — formal credentials, education, certifications
- **Authoritativeness** — recognition by others as a trusted source
- **Trust** — verifiable identity, transparency, compliance posture

For a mortgage lender, all four must be provable on every product page, state page, and bio.

---

## Clout's E-E-A-T problem (and edge)

**The problem:** Clout is a new brand. No 36-year history. No legacy press. No accumulated reviews. From a YMYL ranking standpoint, it starts at zero.

**The edge:** Clout is the **wholesale spinoff of Cliffco Mortgage Bankers**, founded 1989, NMLS #65328. Three decades of Non-QM expertise transfer to the new brand through:

1. Schema.org `parentOrganization` link from every page
2. About-page narrative explicitly framing Clout as "the wholesale + investor-direct channel for Cliffco's Non-QM expertise"
3. Wikidata + Crunchbase entries showing parent relationship
4. Leadership bios that cite Cliffco tenure (where applicable)
5. Press references to "Cliffco's wholesale division Clout" in the early months

This works for E-E-A-T because Google's quality raters explicitly evaluate "company history and reputation"; a documented parent-org relationship counts.

---

## E-E-A-T for Non-QM lending — deconstructed

### Experience
- First-hand origination volume (publish loan count, total funded, by product)
- Named scenarios (anonymized but specific: "Houston broker placed $850K DSCR for 1.05 DSCR Spring TX property")
- Real LO/AE bios with years in mortgage and specialty depth
- Parent Cliffco experience explicitly cited

### Expertise
- NMLS license enumeration (company + every LO/AE)
- Continuing education credits (CE) per LO published
- Specialty certifications (CMB, ACB, etc.) listed
- Speaking engagements at REIAs, trade conferences
- Published guides + scenarios establish topical expertise

### Authoritativeness
- Press placements (HousingWire, NMP, Scotsman, Bankrate, BiggerPockets, Inman)
- Industry awards (Scotsman Guide rankings, Best Wholesale Lender awards)
- Trade-association membership (NAMB, MBA, state associations)
- Backlinks from .gov / .edu / national pubs / industry associations
- Co-mention with established Non-QM brands (Kiavi, Angel Oak, Lima One)

### Trust
- NMLS Consumer Access link in footer + every product page
- State licensing enumerated transparently
- Privacy policy + accessibility statement + TCPA compliance
- Reviews on Google Business Profile, Experience.com, Zillow, Bankrate
- No CFPB enforcement actions (verify quarterly)
- Clean BBB record (claim and monitor)
- Corporate structure transparency (LLC, parent-org, ownership)
- Honest "what's the catch" content on Non-QM trade-offs

---

## Two audiences — two trust playbooks

### B2B broker trust signals

What brokers care about (research-validated):

| Signal | How to demonstrate |
|---|---|
| **Speed of close** | Published average turn-times by product (e.g., "DSCR avg 18 days, BS 22 days"); refreshed quarterly |
| **Account-exec responsiveness** | AE name + direct dial + response-time SLA on every product page; testimonials from named brokers |
| **Program flexibility** | Underwriting overlays published; exception process documented |
| **Compensation transparency** | Wholesale comp grid visible to vetted brokers in partner portal; high-level "Your Loan = Your Comp" messaging public |
| **Pull-through rate** | Approval-to-funding ratio if available |
| **Tech stack** | LOS/POS visible; e-signature, e-disclosure capability called out |
| **Partner support resources** | Training docs, rate sheets, SOP flowcharts, scenario library accessible to brokers |
| **Trade-pub credibility** | Scotsman Guide rankings, HousingWire features, NMP write-ups |
| **AE bios** | Each AE has bio with NMLS, tenure, specialty, broker testimonials |
| **State-specific licensing** | Each state's broker-channel agreement template + state license clearly posted |

### B2C investor trust signals

What investors care about:

| Signal | How to demonstrate |
|---|---|
| **Closing speed** | Same turn-time data, framed differently for investors ("15–25 day close on DSCR") |
| **No-tax-return process** | Step-by-step flow with screenshots / videos |
| **Investor scenarios** | Anonymized closings library — monthly refresh |
| **BiggerPockets / REIA standing** | Verified BP account, REIA sponsorship list, podcast appearances |
| **Investor influencer endorsements** | Sponsored / earned content with REI influencers (FTC-compliant disclosure) |
| **Calculator transparency** | Calculator methodology crawlable, not gated |
| **Real LOs, not call centers** | LO bio + direct dial on every page |
| **Honest rates** | Published rate ranges with effective dates, not "rates starting at" bait |
| **Reviews** | Google Business Profile, Zillow, Experience.com, Bankrate aggregated |
| **State licensing** | Visible per state |
| **Equal Housing + Fair Lending** | Logos + statement on every page |
| **Disclosure depth** | TILA / RESPA / ECOA compliance language posted at `/compliance/` |

---

## LO / AE bios — the highest-leverage E-E-A-T artifact

**Decision Clout must make:** "named LOs/AEs" OR "faceless wholesale brand"?

| Approach | Pros | Cons |
|---|---|---|
| **Named LOs/AEs** | Maximum E-E-A-T lift; Person schema everywhere; broker/investor relationships humanized | Requires LO/AE buy-in, content production per person, ongoing maintenance |
| **Faceless wholesale** | Lower content overhead; positions Clout as institutional | Sacrifices E-E-A-T; harder to win AIO citations on YMYL |

**Recommendation:** **Named** — at least for 4–6 senior AEs / LOs at launch. Build bios with the structure below. If team won't invest, fall back to a strong "Leadership" page with the same depth applied at the executive level.

### Bio anatomy

```
PHOTO (real, not stock; bright/neutral background, professional but human)

NAME · TITLE · NMLS #XXXXXXX (link to NMLS Consumer Access)

5–7 line narrative:
- Years in mortgage / years at Clout
- Specialty (e.g., "DSCR and bank statement programs across Texas and Florida")
- One credibility marker (volume, award, certification)
- One human detail (where they live, family, off-work passion — keeps it real)

LICENSES (states + NMLS numbers)
SPECIALTIES (bulleted: products + investor types served)
LANGUAGES (English, Spanish, etc.)
CREDENTIALS (CMB, ACB, etc.)

CONTACT
- Direct phone
- Email
- LinkedIn link
- Calendly / book a call link

ANONYMIZED SCENARIOS (2–4)
Real closings with names/addresses removed but specific details preserved.

REVIEWS (Experience.com / GBP aggregated; not raw paste)

SCHEMA: Person + worksFor → Clout + sameAs → NMLS + LinkedIn
```

### Bio template (300-word example)

> **Jordan Marks** · Senior Wholesale Account Executive · NMLS #XXXXXXX
> 
> Jordan joined Clout's wholesale team in 2023 after 11 years originating Non-QM loans for self-employed borrowers and real estate investors across the Northeast and Florida corridor. Since launch, Jordan has placed over $180M in DSCR and bank statement loans for partner brokers, with average broker turn-time of 16 days. He holds a Certified Mortgage Banker (CMB) designation and serves on the NAMB Non-QM Best Practices working group.
> 
> Jordan lives in Garden City, NY with his wife and two kids. He coaches Long Island Little League and is a regular at the Texas REIAs Houston chapter twice a year.
> 
> **Specialties:** DSCR · Bank Statement · 1099 Only · Foreign National (LATAM)
> 
> **Licensed:** NY · NJ · PA · FL · CT · TX
> 
> **Languages:** English · Spanish (conversational)
> 
> **Contact:** Direct: 516-XXX-XXXX · jordan@cloutwmb.com · [LinkedIn](...) · [Book a call](...)
> 
> **Recent broker closings (anonymized):**
> - Houston broker, $650K DSCR on STR Galveston, closed in 14 days, 1.08 DSCR
> - Stamford broker, $1.2M asset-qualifier on Fairfield County 2nd home, jumbo
> - Miami broker, $480K foreign-national DSCR on Doral condo (Mexican investor)
> 
> **Reviewed reviews (Experience.com):** ⭐⭐⭐⭐⭐ 4.94 (53 reviews) → [view all](...)

Apply the same template to investor-facing LO bios.

---

## About / Corporate page

URL: `/about/`

Sections (in order):

1. **Hero:** "Clout is the wholesale + investor-direct lender for Non-QM borrowers in 6 states — built on three decades of Cliffco Non-QM expertise."
2. **Origin:** Why Clout exists; the broker-and-investor problem Cliffco couldn't solve at retail scale
3. **Parent connection:** Clout as Cliffco's wholesale + investor channel; explicit parent-org acknowledgment
4. **Mission · Vision · Values** (separate from Cliffco's MVV — see [project_clout_site memory](../../.claude/projects/-Users-rtangorra/memory/project_clout_site.md) for guidance)
5. **Leadership:** Photos + bios (CEO/President, Head of Wholesale, Head of Investor Direct, Head of Operations)
6. **Offices:** HQ in Uniondale, NY (add others if Clout opens them); remote AE coverage map
7. **States licensed:** All 6 with license #s and links
8. **Compliance row:** NMLS link, Equal Housing logo, BBB rating (when claimed)
9. **In the press:** Logo strip + linked press placements
10. **Awards / rankings:** Once accumulated (Scotsman, NMP, HousingWire, etc.)
11. **Community / partnerships:** REIA sponsorships, association memberships

**Schema:** `Organization` (full), `Person` per leader, `Place` per office.

---

## Reviews + reputation

### Platform priority (2026)

| Rank | Platform | Why |
|---|---|---|
| 1 | **Google Business Profile** | #1 platform for finance review citation in LLMs |
| 2 | **Zillow** | High-intent borrower research; widely scraped |
| 3 | **Experience.com / Bankrate Lender Reviews** | Industry-recognized aggregator |
| 4 | **BBB** | Trust signal + complaint resolution channel |
| 5 | **Facebook** | Wider mention surface |
| 6 | **Trustpilot** | Less weighted but cited by some engines |
| 7 | **Yelp** | Mortgage less relevant; still claim |
| 8 | **LendingTree / NerdWallet** | Listicle review aggregation |

### Operationalization

- **Post-close automation** — Experience.com or Birdeye sends review request 7 days after funding
- **Goal:** 100+ reviews per platform within 12 months; 4.7+ average across all
- **Velocity matters** — slow steady > burst (Google detects fake bursts)
- **Distribution** — diversify across LOs, products, states
- **Response rate** — respond to every review within 48 hours; positive reviews get a "thank-you," negative reviews get acknowledgment + offline path

### Review schema compliance

- **Don't paste raw reviews on Clout's site** — Google penalizes
- Use **`AggregateRating`** from Experience.com via API (third-party aggregator)
- Cross-link to Experience.com / GBP for verification

### Negative-review playbook

- Respond within 48 hours
- Acknowledge specific issue
- Offer offline resolution path (named contact, direct line)
- Document internally for process improvement
- **Never fake-review** — algorithmic detection + permanent reputational damage

---

## Press + PR strategy

### Three-tier publication strategy

**Tier 1 — Industry / Trade**
- HousingWire — Op-eds, rankings, breaking news
- National Mortgage Professional (NMP) — Broker-channel focus
- Scotsman Guide — Wholesale + Non-QM rankings (target inclusion)
- Broker World Magazine — B2B broker readership
- MortgagePoint — Industry features
- Inman — Real estate + lending
- Mortgage News Daily — Rate commentary
- HousingWire podcasts

**Tier 2 — National Financial**
- Bankrate — Listicle inclusion ("Best DSCR lenders 2026")
- NerdWallet — Same
- Money.com — Same
- Investopedia — Expert contributor + glossary references
- Forbes — Op-ed (Forbes Council membership a possibility)
- MarketWatch / CNBC / WSJ / NYT — Earned-only, hard to crack but high-leverage

**Tier 3 — Local Business Journals (per state)**
- Crain's New York Business · Long Island Business News
- NJBiz · ROI-NJ
- Philadelphia Business Journal · Pittsburgh Business Times
- South Florida Agent Magazine · Tampa Bay Business Journal · Orlando Business Journal · Jacksonville Business Journal · Miami Herald
- Hartford Business Journal · Stamford Advocate
- Texas Real Estate Today · D Magazine · Houstonia · Austin Business Journal

**HARO replacements (2026):**
- Featured.com
- Connectively (formerly HARO)
- Qwoted
- Help A B2B Writer
- SourceBottle
- Source of Sources

LOs/AEs subscribe to relevant categories (mortgage, real estate, Non-QM, investor finance) and respond within 4 hours.

### Podcast strategy
- Target podcasts with **published transcripts** (so LLMs can index)
- BiggerPockets Real Estate · BiggerPockets Investing · BiggerPockets Money
- The Lender Lounge
- Real Estate Rookie · The Real Estate Investing Podcast
- Lessons from the Mortgage Game
- Mortgage Marketing Radio
- Capital Markets Outlook (HousingWire)

---

## Compliance disclosures — non-negotiables

Every page footer:

```
Clout · NMLS #65328 (NMLS Consumer Access)
Equal Housing Lender
Licensed in NY · NJ · PA · FL · CT · TX
Privacy Policy · Accessibility · TCPA Compliance · Fair Lending
© 2026 Clout. A division of Cliffco Mortgage Bankers.
```

Plus state-specific disclosures within each state page (per [04-local-seo-territories.md](./04-local-seo-territories.md)).

### Recommended (not legally required) but high-trust

- **Editorial policy page** — "How we review and update content; AI usage policy"
- **AI-usage statement** — "Articles drafted with AI assistance are reviewed and verified by named LO/AE; raw AI output is not published"
- **Rate-update cadence** — "Rates updated weekly; effective date displayed on each rate panel"
- **Fair-lending statement** — "Clout serves borrowers regardless of [protected classes]; lending decisions based solely on creditworthiness and program eligibility"

### Federal regs to cite by name (where relevant in content)

- **RESPA** — closing process, settlement service relationships
- **TILA / Reg Z** — APR / cost disclosures (with Non-QM exemption notes where applicable)
- **ECOA / Reg B** — fair credit access
- **HMDA** — data reporting
- **Fair Housing Act** — equal access
- **FCRA** — credit reporting accuracy
- **GLBA** — financial privacy
- **SAFE Act** — NMLS licensing
- **Reg X** — RESPA implementation
- **TRID** — TILA-RESPA integrated disclosures (Non-QM business-purpose generally exempt; clarify on DSCR pages)
- **UDAAP** — unfair / deceptive / abusive practice prohibition; informs marketing copy review

---

## Content trust signals (the small things that add up)

| Signal | Implementation |
|---|---|
| Author byline | Link to LO/AE bio with Person schema |
| Date published + last updated | Visible on every article + product page |
| "Reviewed by [LO, NMLS]" stamp | Top of every product / educational page |
| Inline citations | Link to NMLS, CFPB, state regulator, primary sources |
| Sources section | Footer of long-form articles |
| Plain-language definitions | Glossary entries cross-linked from product copy |
| Real numbers | Replace "low rates" with "rates from 6.5%–9.5% APR" |
| Disclaimers | Effective date on rates; "subject to underwriting approval" |
| No AI sludge | Human review of every published page |
| Stock-photo avoidance | Real LO/AE photos or context-relevant illustration |

---

## Backlink profile — weighted hierarchy

Where backlinks have most YMYL weight:

| Tier | Source type | Examples |
|---|---|---|
| 1 | .gov / .edu | State financial regulators, HUD, CFPB, university research |
| 2 | National financial media | Bankrate, NerdWallet, Money, Forbes, MarketWatch, CNBC |
| 3 | Industry associations | NAMB, MBA, state mortgage banker associations |
| 4 | Trade pubs | HousingWire, NMP, Scotsman, Broker World, MortgagePoint, Inman |
| 5 | Realtor / CPA / attorney partner sites | Co-marketing referral pages (RESPA-compliant) |
| 6 | BBB / Chamber of Commerce / local industry associations | Local credibility |
| 7 | Local business journals | Per state |
| 8 | Charity / community sponsorship pages | REIA sponsorships, local charity sponsors |

**Avoid:**
- Bulk directory submissions
- Link trades
- Guest-post networks
- PBNs
- Paid review sites
- "Sponsored content" without disclosure

---

## Negative-signal management

### Quarterly audits

| Source | What to check |
|---|---|
| **CFPB Consumer Complaint Database** | Any Clout-named complaints; respond + remediate |
| **NMLS Consumer Access** | Any enforcement actions; address publicly if any |
| **BBB** | Complaints + responses; maintain accreditation |
| **Google Reviews** | Negative review velocity (>3 in 30 days = investigate) |
| **Reddit + BiggerPockets** | Brand mentions sentiment; engage where appropriate |
| **Trustpilot / Yelp** | Same |

### Reputation cleanup (pre-launch)

Before public launch, search:
- "Clout mortgage scam" / "Clout mortgage complaint" / "Clout WMB review"
- Reddit + Quora for any Clout mentions
- BBB / Trustpilot / CFPB
- Negative news mentions

Assess any findings, plan response or rebuttal, push positive content (LO bios, anonymized scenarios, awards) to bury if appropriate.

---

## Trust-signal pre-launch audit checklist

- [ ] NMLS Consumer Access link in footer of every page
- [ ] Equal Housing Lender logo + statement
- [ ] State licensing enumerated (6 states) with specific license numbers
- [ ] Privacy Policy + CCPA / CT / FL / TX state-privacy compliant
- [ ] Accessibility Statement (WCAG 2.2 AA conformance)
- [ ] TCPA SMS consent on every lead form
- [ ] CAN-SPAM compliance on email programs
- [ ] At least 4 LO/AE bios live with Person schema + NMLS sameAs
- [ ] About / Corporate page complete with leadership
- [ ] Editorial policy page
- [ ] AI-usage statement page
- [ ] "Reviewed by" stamps on top of every product + educational page
- [ ] First reviews flowing in (Experience.com automation live)
- [ ] Google Business Profile claimed + Apple Business Connect + Bing Places + Facebook + LinkedIn Company
- [ ] BBB profile claimed (apply for accreditation)
- [ ] CFPB + NMLS + BBB audited (no open issues)

---

## Top 6 highest-impact trust moves (do first)

1. **NMLS sameAs link on every page** — schema + visible footer
2. **4–6 LO/AE bios with Person schema** — E-E-A-T compounding immediately
3. **"Reviewed by" stamp on top of every product page** — trust signal + author authority
4. **Reviews automation (Experience.com)** — flywheel from day 1 of funding
5. **Compliance disclosure block standardized** — uniform across all 6 states
6. **First trade-pub placement (HousingWire / NMP / Bankrate)** — third-party authority anchor

---

## Reuses from Cliffco research

- YMYL framework + March 2026 E-E-A-T emphasis
- LO bio anatomy + template (adapted above for Clout AE/LO mix)
- About page section list (adapted to remove 36-year Cliffco-specific elements)
- Reviews platform tier ranking
- Review velocity / recency / distribution / response rules
- Press tier strategy (added Broker World + BiggerPockets for Clout)
- HARO replacement tools
- Compliance disclosure list
- Federal regs catalog
- Backlink profile weighting
- Negative-signal audit cadence

---

## See also

- [STRATEGY.md](./STRATEGY.md)
- [01-technical-seo.md](./01-technical-seo.md) — schema implementation
- [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md) — E-E-A-T → AEO citation pipeline
- [04-local-seo-territories.md](./04-local-seo-territories.md) — state-specific compliance
- [05-product-content-strategy.md](./05-product-content-strategy.md) — product page trust elements
- Cliffco's `/Users/rtangorra/cliffco-site/seo-aeo-research/03-ymyl-eeat-trust.md` for the unmodified framework
