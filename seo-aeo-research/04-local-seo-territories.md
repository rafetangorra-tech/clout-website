# Clout — Local SEO & Territory Strategy

**Six licensed states · Six different stories.** Clout serves NY, NJ, PA, FL, CT, TX. The local SEO playbook is not "publish a state page and call it done" — each state has its own competitive landscape, REIA ecosystem, investor demographics, Spanish-language density, and editorial press targets. This document is the source-of-truth per-state.

---

## Local SEO landscape, 2026 — what's different

- **AI Overviews fire on ~48% of all queries; ~10% of finance queries** (lower than retail). When they fire on local finance, ~96% of citations come from sources with strong E-E-A-T signals.
- **Vicinity (proximity weighting)** still rules Google Local Finder; but Clout's wholesale-direct model means GBP proximity isn't the highest leverage — entity authority + topical relevance + local-proof content carry more weight for our intent shape.
- **Doorway pages are penalized algorithmically** as of the March 2026 HCU update. Every state/metro/product page must have ≥80% unique content vs siblings; no city-name swap templates.
- **YMYL E-E-A-T applies to every local page.** State licensing must be visible; NMLS Consumer Access link required; LO/AE bios with Person schema preferred but optional.
- **NAP consistency** still load-bearing for citations (Whitespark, BrightLocal). Mortgage lenders historically score 60–70% — the bar is low and Clout can beat it day one.

## Three audiences per state — three content jobs

Every state hub serves three intents simultaneously:

1. **Broker (in-state)** — "non-QM wholesale lender in [state]" — wholesale partner pitch
2. **Investor (in-state)** — "DSCR lender [state]" — direct-to-investor pitch
3. **Investor (out-of-state)** — "DSCR lender for buying STR in [state]" — cross-state investor funnel (e.g., NY/NJ investors buying FL/TX rentals)

The third intent is the most overlooked AND highest-leverage. Florida and Texas are net-importers of investor capital; PA and CT are net-mixed; NY/NJ are net-exporters. Build for all three on every state page.

---

## NEW YORK

**Posture:** Cliffco's home turf. Clout is HQ'd in Uniondale (70 Charles Lindbergh Blvd, Suite 200). NMLS #65328. Cliffco research is heavily NY-focused and reusable for borrower content; Clout adds investor angle.

### Market characteristics

- NYC: jumbo territory; co-op financing nuances (board approval, post-closing liquidity rules); CEMA savings on refis; attorney-closing state; foreign national buyer activity in Manhattan/Brooklyn/Queens condos
- Long Island: Cliffco's home; high-net-worth pockets (North Shore, Hamptons); investor activity in Nassau (multi-family) + Suffolk (STR / second-home)
- Westchester / Hudson Valley: high-income commuters; STR activity north of I-84
- Upstate: Buffalo, Rochester, Syracuse, Albany — affordable rental markets, BRRRR-friendly, Section 8 dense in Buffalo

### Top investor metros (rank by DSCR opportunity)

1. NYC (Brooklyn 2-4 unit + Queens MF)
2. Buffalo (BRRRR + affordable cash-flow)
3. Long Island (Nassau MF + Suffolk STR/second-home)
4. Albany / Hudson Valley
5. Rochester / Syracuse

### Top non-QM competitors active in NY

- Angel Oak Mortgage Solutions (wholesale-dominant)
- Carrington Mortgage Services
- Griffin Funding (consumer-direct)
- Newrez (wholesale + retail)
- Local NY brokers placing through wholesale (Defy, A&D, LoanStream)

### REIA presence

- **NYC REIA** (smaller, fragmented) — mostly meetups via Meetup.com
- **Long Island Real Estate Investors Association (LIREIA)** — established, monthly meetings
- **WNYREIA** (Buffalo) — strong BRRRR community
- **Hudson Valley Real Estate Investors** — Mid-Hudson meetups

### Local press targets

- Crain's New York Business
- Long Island Business News
- The Real Deal (national, NYC-heavy)
- Buffalo Business First
- Rochester Business Journal
- Albany Times Union (real estate column)

### Spanish-language priority

**High.** ~30% of NYC is Hispanic; Bronx, Northern Manhattan, Queens corridor especially. Translate top 3 products (Bank Statement, 1099 Only, DSCR) into `/es/` per [02-aeo-llm-optimization.md Spanish strategy](./02-aeo-llm-optimization.md).

### Content angles unique to NY

- "DSCR loans for Brooklyn 2-4 unit" (massive search demand, Cliffco doesn't cover)
- "Buffalo BRRRR lender" (long-tail but converting)
- "Co-op financing under non-QM" (unique NY problem)
- "Foreign national investor: NYC condo" (high-LTV niche)
- "NY attorney-closing process explained" (LLM citation magnet)

### Schema notes

- LocalBusiness schema with parent organization (Cliffco) link via `parentOrganization`
- Use `areaServed` array with State + County + City for the metros above
- `MortgageLoan` schema with `availableInRegion` for each NY metro

### NY-specific compliance hooks

- NY Banking Department licensing disclosure
- NMLS Consumer Access link
- Equal Housing Opportunity logo + statement
- Anti-predatory lending statement (NY has specific HOEPA/Subprime rules; Non-QM brokers must verify Section 6-l compliance)

---

## NEW JERSEY

**Posture:** Cliffco serves NJ; Clout adapts. Attorney-closing state, high property taxes drive Non-QM eligibility complications, dense Hispanic/foreign-born populations in north/central NJ.

### Market characteristics

- Northern NJ: NYC commuter belt; high jumbo activity; gold-coast Hudson County condos
- Central NJ: Princeton/Edison/Middlesex; growing investor activity
- Jersey Shore: STR market (LBI, Cape May, Wildwood) — DSCR-friendly
- South Jersey: lower-cost, BRRRR-friendly markets near Philly suburbs

### Top investor metros

1. Jersey City / Hoboken / Newark (urban MF)
2. Jersey Shore (LBI, Ocean City, Cape May — STR)
3. Atlantic City corridor (cash-flow BRRRR)
4. Edison / Princeton (suburban SFR rental)

### Top non-QM competitors active in NJ

- Same wholesale set as NY (Angel Oak, A&D, LoanStream, Defy)
- Garden State Home Loans
- Loan Funder (NJ-based investor lender)
- Asset-Based Lending LLC (NJ-based hard money)

### REIA presence

- **MAREI** (Mid-Atlantic Real Estate Investors) — NJ chapters
- **NJ REIA / NorthJerseyREIA** — Bergen/Hudson/Essex meetings
- **Jersey Shore Investor Network** — coastal STR focus

### Local press targets

- NJBiz (statewide business journal)
- ROI-NJ
- The Press of Atlantic City (Jersey Shore)
- NJ.com (general)

### Spanish-language priority

**High.** ~22% of NJ population is Hispanic; Hudson, Passaic, Union counties dense. Spanish-language Bank Statement + 1099 + DSCR content.

### Content angles unique to NJ

- "Jersey Shore STR DSCR loan: Cape May, LBI, Wildwood, Ocean City"
- "Hudson County non-warrantable condo financing"
- "South Jersey BRRRR lender" (Philly proximity arbitrage)
- "NJ attorney closing: timeline for Non-QM"
- "NJ high-property-tax DTI workarounds" (genuinely useful info gain)

### Schema + compliance

- NJ DOBI licensing disclosure
- Anti-predatory lending statement (NJ has specific high-cost loan rules)
- LocalBusiness `areaServed` covering top counties

---

## PENNSYLVANIA

**Posture:** New territory — no Cliffco precedent. Build from scratch. Philly + Pittsburgh are both strong rental markets with very different characters. Easy Street Capital, HouseMax (Forbes-named 2024-2025), LendingOne, NQM Funding, Griffin Funding, LYNK Capital are the most active non-QM competitors.

### Market characteristics

- **Philadelphia:** large rental + BRRRR market; row-house portfolio plays; Section 8 dense; gentrification corridors (Fishtown, Point Breeze, West Philly); high investor demand from out-of-state (NY/NJ buying for cash-flow); strong Latino population
- **Pittsburgh:** affordable; multi-family + small portfolio plays; tech-driven Oakland/Shadyside rental demand; smaller out-of-state inflow than Philly
- **Allentown / Lehigh Valley:** suburban rental, warehouse/logistics economy driving demand
- **Harrisburg + Lancaster:** smaller markets, BRRRR-friendly, government employment base

### Top investor metros (rank by DSCR opportunity)

1. Philadelphia (city + suburbs)
2. Pittsburgh
3. Allentown / Lehigh Valley
4. Harrisburg / Lancaster

### Top non-QM competitors active in PA

| Lender | Posture | Notes |
|---|---|---|
| Easy Street Capital | Strong | Rates from 5.75%, up to 80% LTV, statewide |
| HouseMax Funding | Strong | Forbes 2024 + 2025 Best Hard Money Lender, transparent rates |
| LendingOne | Strong | Specifically calls out Philly + Pittsburgh + Allentown |
| NQM Funding | Medium | Wholesale-focused, multi-family emphasis |
| Griffin Funding | Strong | Statewide DSCR, jumbo-friendly |
| LYNK Capital | Medium | Up to 80% LTV, 30-year fixed DSCR |
| New American Funding | Medium | General DSCR coverage |

### REIA presence

- **Philadelphia REIA (PAREIA)** — established 2009; events 100+ attendees; 2nd Wednesday at 7 PM, 901 N Penn St Philadelphia; **www.philadelphiareia.com** · 610-994-9740
- **Greater Philadelphia REIA** — Facebook-centric, overlapping audience
- **Pittsburgh REIA (Western PA REIA)** — **www.pittsburghreia.com** · 412-592-2146 — strong BRRRR community
- **ACRE of Pittsburgh** — Instagram presence @acreofpittsburgh, newer
- **Lehigh Valley REIA** — Allentown chapter

### Local press targets

- Philadelphia Business Journal
- Philadelphia Inquirer (real estate section)
- Pittsburgh Business Times
- Pittsburgh Post-Gazette (real estate)
- LehighValleyLive.com
- Central Penn Business Journal (Harrisburg)
- Multifamily Executive Magazine (national, PA-relevant for MF investors)

### Spanish-language priority

**Medium-high.** ~8% of PA is Hispanic, concentrated in Allentown (~50%), Reading (~67%), Lancaster (~20%), and Philadelphia (~16%). Spanish-language content for Lehigh Valley investor market is differentiated — almost no major non-QM lender publishes Spanish content for PA.

### Content angles unique to PA

- "Philadelphia row-house BRRRR DSCR loan" (specific to Philly's housing stock)
- "Pittsburgh multi-family DSCR financing"
- "Out-of-state investor: Philly DSCR from NY/NJ"
- "Section 8 rent + DSCR qualifying" (Philly is heavy Section 8)
- "Allentown / Lehigh Valley DSCR: warehouse-economy rental thesis"
- "Pennsylvania closing timeline for Non-QM" (PA-specific procedural content)
- "Lancaster Amish-country investor opportunities" (long-tail but unique)

### Schema + compliance

- PA Department of Banking and Securities licensing disclosure
- Mortgage Licensee identifier on every page footer
- `areaServed` with PA counties (Philadelphia, Allegheny, Lehigh, Dauphin, Lancaster, Berks)

### PA market notes (research source)

Population of Philly metro ~6.2M; Pittsburgh metro ~2.4M. Per the research, average DSCR rates in PA tracked in 5.5–8% range mid-2026. LendingOne notes "consistent tenant demand from Philadelphia to Pittsburgh creating opportunities for long-term property investment."

---

## FLORIDA

**Posture:** Cliffco has FL coverage; Clout adapts heavily for investor angle. The most important state for STR / fix-flip / DSCR / foreign national. Cliffco's FL DBA is "Swish Capital" — **DO NOT use Swish Capital for Clout**; Clout has its own FL licensing under NMLS #65328 (verify Clout's FL DBA before publishing).

### Market characteristics

- **Miami / Miami-Dade / Broward / Palm Beach:** foreign national capital of the US; Latin American buyer flow; condo-heavy; high LTV foreign national + DSCR demand
- **Orlando:** STR / Airbnb capital; ~80M+ tourist visitors/year; Polk County STR-friendly zones (Davenport, Kissimmee, Champion's Gate); Disney-area condo + SFR
- **Tampa / St. Pete:** balanced rental + STR; mid-size MF strong; LGBTQ-friendly investor market
- **Jacksonville:** affordable; Section 8 + BRRRR; military / Navy population stable
- **Naples / Fort Myers / Cape Coral:** retiree + second-home; insurance crisis affecting DTI calcs
- **Tallahassee / Gainesville:** college-town rental, FSU + UF demand

### Top investor metros (rank by DSCR opportunity)

1. Orlando + Polk County STR corridor
2. Miami / South Florida (foreign national + condo)
3. Tampa / St. Pete
4. Jacksonville
5. Naples / Fort Myers
6. Tallahassee / Gainesville

### Top non-QM competitors active in FL

| Lender | Posture | Notes |
|---|---|---|
| Griffin Funding | Strong | Florida investment property loans, all metros |
| Easy Street Capital | Strong | Rates 5.75%+, statewide DSCR |
| Mbanc | Strong | Top-3 bank statement state by volume |
| First Florida Financial | Medium | FL-based broker, non-conventional investor focus |
| Ridge Street Capital | Medium-Small | Miami-based private lender |
| New American Funding | Strong | DSCR coverage all metros |
| Foundation Mortgage Corporation | Strong | Foreign national specialist (FL-based) |
| Truss Financial Group | Strong | Self-employed + investor focus |

### REIA presence

- **South Florida Real Estate Investors Association (SFREIA)** — Miami/Broward/Palm Beach, strong network
- **Central Florida Real Estate Investors Association** — Orlando-centered, STR-heavy
- **Tampa Bay REIA** — Tampa/St. Pete chapter
- **Jacksonville REIA** — JAX chapter
- **Florida REIA (statewide)** — annual summit
- **Disney REIA** — STR-focused, Polk County investors

### Local press targets

- **South Florida Agent Magazine** — explicitly named "Best DSCR lenders in Florida" 2026 listicle target
- Miami Herald (real estate section)
- Orlando Business Journal
- Tampa Bay Business Journal
- Jacksonville Business Journal
- The Real Deal (South Florida edition)

### Spanish-language priority

**Critical.** ~27% of FL is Hispanic; Miami-Dade is ~70% Hispanic; ~70% of Doral, Hialeah, parts of Hollywood and Kendall are Spanish-dominant. Spanish-language content for FL is non-negotiable for Bank Statement, 1099, DSCR, Foreign National, and Asset Qualifier programs. Hreflang `/es-us/` or `/es/` per [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md).

### Content angles unique to FL

- "Orlando STR DSCR loan: Disney-area rental" (high search volume, owns Polk County STR queries)
- "Foreign national mortgage Miami: how to qualify with no SSN" (massive niche, Foundation Mortgage owns it currently)
- "Florida insurance + DSCR: how new wind/hurricane premiums affect cash flow" (information gain — most lenders haven't published this)
- "Miami condo financing under Non-QM" (post-Surfside compliance complexity)
- "Tampa STR + DSCR: Pinellas County zoning"
- "Jacksonville military rental DSCR" (NAS JAX proximity)
- "Florida homestead exemption + DSCR investor properties" (compliance nuance)

### Schema + compliance

- FL Office of Financial Regulation (OFR) licensing
- "Mortgage Broker / Lender License #XXXX" — verify Clout's FL OFR number
- Equal Housing
- `areaServed` covering Miami-Dade, Broward, Palm Beach, Orange, Hillsborough, Pinellas, Duval, Lee, Collier, Leon counties

### FL market notes (research source)

Florida non-QM volume: Mbanc reports FL as top-3 bank statement state. Foreign national mortgages: typical 25–40% down, 70% LTV max, 12 months reserves, assets seasoned 60 days. Orlando STR market: Miami/Orlando/Tampa rank among top Airbnb/VRBO markets nationally; insurance crisis is reshaping investor underwriting in FL through 2026.

---

## CONNECTICUT

**Posture:** Smallest of Clout's six states but Constitution Lending (CT-based, founded by real estate investors) sets a strong local benchmark. Hartford insurance corridor + Fairfield County wealth corridor are the two distinct sub-economies. Stamford is a financial-services hub with Manhattan-spillover investor activity.

### Market characteristics

- **Fairfield County (Greenwich / Stamford / Norwalk / Westport):** highest-income county in US in some sub-metros; jumbo + foreign national activity; condo + luxury SFR
- **Hartford / West Hartford:** insurance industry HQ corridor; mid-tier rental MF; Insurance City branding
- **New Haven:** Yale + medical economy; multi-unit near Yale heavily rented; Section 8 mixed
- **Bridgeport / Waterbury:** affordable; BRRRR-friendly
- **Eastern CT (Norwich / New London):** smaller, casino-adjacent (Foxwoods/Mohegan), STR/event-rental angle

### Top investor metros

1. Fairfield County (Stamford/Greenwich premium; Bridgeport/Norwalk cash-flow)
2. New Haven
3. Hartford / West Hartford
4. Waterbury / Bridgeport (BRRRR)

### Top non-QM competitors active in CT

| Lender | Posture | Notes |
|---|---|---|
| **Constitution Lending** | Strong (CT-based) | Founded by RE investors; hundreds of millions in CT DSCR funded; CT market knowledge benchmark |
| Mr. Rate | Medium | Non-QM broker, DSCR-focused |
| Lendmire | Medium | Nationwide broker with explicit CT scenarios (Stamford exec rental, New Haven Yale MF, Hartford insurance corridor) |
| Griffin Funding | Strong | Up to $20M financing, all metros |
| HardMoneyMan | Medium-Small | Hard money + DSCR, fast approvals |
| New American Funding | Medium | DSCR statewide |

### REIA presence

- **CT REIA (CTREIA)** — **largest apartment owners + RE investors association in the Northeast**; 1,000+ members; 415 Silas Deane Highway Suite 304, Wethersfield, CT; **www.ctreia.com** · (860) 265-4414
- **Connecticut Real Estate Investors Expo** — Stamford, October 18, 2025 (annual)
- Monthly meetups: Stamford + Hartford + Waterbury + New Haven

### Local press targets

- Hartford Business Journal
- Hartford Courant (real estate)
- Stamford Advocate (Hearst CT)
- New Haven Register
- CT Insider
- CT Mirror (statewide policy + business)

### Spanish-language priority

**Medium-high.** ~17% of CT is Hispanic, concentrated in Hartford (~45%), New Britain, Bridgeport, Waterbury. Spanish-language Bank Statement + 1099 + DSCR specifically for Hartford and Bridgeport/Waterbury markets is differentiated.

### Content angles unique to CT

- "Connecticut DSCR loan Fairfield County" (high-LTV jumbo)
- "Stamford investor: NYC-spillover rental thesis"
- "New Haven multi-unit near Yale: DSCR financing"
- "Hartford insurance-corridor rental"
- "Bridgeport BRRRR DSCR" (long-tail affordability)
- "Connecticut foreclosure auction + DSCR refi"
- "CT closing process for Non-QM" (CT is attorney-required closing state)

### Schema + compliance

- CT Department of Banking licensing
- "Connecticut Mortgage Lender License #XXXX" — verify Clout's CT DOB number
- Anti-predatory lending CT statute (CGS 36a-746a)
- `areaServed` Fairfield, Hartford, New Haven, Litchfield, Middlesex, New London, Tolland, Windham

### CT market notes (research source)

CTREIA holds 1,000+ members and is the dominant local REIA. Connecticut Real Estate Investors Expo at Stamford is the largest annual event. Constitution Lending's investor-founded positioning is the local benchmark for "lender who understands CT investors." Clout's positioning can differentiate by: speed of close, six-state portfolio (CT investors increasingly buy FL/TX), and parent-Cliffco's Northeast Non-QM expertise.

---

## TEXAS

**Posture:** Brand-new territory for Clout (no Cliffco precedent). The single largest investor opportunity by population + REI volume. Three major metros (Austin, Houston, Dallas-Fort Worth) plus San Antonio + El Paso. Mbanc, Griffin Funding, Lone Star Financing, Texas Premier, Asteris, LendFriend are the incumbents — each with specific strengths to study and out-position.

### Market characteristics

- **Austin:** tech-driven; high price, lower cap rates; STR / mid-term rental near downtown and South Congress; high foreign + out-of-state investor inflow
- **Houston:** energy-economy; multi-family heavy; flood-zone underwriting nuance; sprawling investor portfolios common
- **Dallas-Fort Worth (DFW):** broadest investor market; SFR rental + BRRRR + new-build investor demand; corporate-relocation rental thesis
- **San Antonio:** affordable; Military + medical economy; Section 8 friendly; growing
- **El Paso:** affordable + cross-border foreign national angle (Mexico buyers); smaller market but defensible niche
- **Other metros:** Killeen (Fort Cavazos military); College Station (A&M); Lubbock; Tyler — all secondary BRRRR markets

### Top investor metros (rank by DSCR opportunity)

1. Houston (largest by volume — energy + MF density)
2. DFW (SFR portfolio focus)
3. Austin (premium STR / luxury rental)
4. San Antonio
5. El Paso (foreign national + cross-border)
6. Killeen / College Station (secondary military + college)

### Top non-QM competitors active in TX

| Lender | Posture | Notes |
|---|---|---|
| **Mbanc** | Dominant | **TX is Mbanc's highest-volume DSCR state by transaction count and top-3 bank statement state**. Max $4M, 85% LTV |
| **Griffin Funding** | Strong | Statewide; specializes Austin/Dallas/Houston/SA, jumbo-friendly |
| **Lone Star Financing** | Strong (TX-native) | No-income-doc DSCR, scaling portfolios; local brand strength |
| **Texas Premier Mortgage** | Strong (TX-native) | TX-specific positioning |
| **Asteris Lending** | Medium | Full Non-QM spectrum |
| **LendFriend Mortgage** | Strong | TX-based broker, top broker for DSCR + Non-QM nationally |
| **Select Home Loans** | Medium | DFW/Houston/Austin/SA/Gulf Coast; 15–25 day close, 6.5–8% rates, 20% down |
| **New American Funding** | Strong | Statewide |
| **1st Northwest Mortgage** | Medium | Foreign national + DSCR |

### REIA presence (Texas REIAs network)

- **Texas REIAs** — largest network in TX, run by Shenoah Grove and Phill Grove since 2003; chapters in Austin, Houston, Dallas, San Antonio, El Paso · **texasreias.com**
- **REIA Dallas** — DFW chapter · reiadallas.com
- **REIA Houston** — Houston chapter · reiahouston.com
- **REIA Austin** — Austin chapter · reiaaustin.com
- **REIA DFW** — separate DFW group · reiadfw.com
- **Dallas REIA** (Texas Wealth Network) — older, established · dallas-reia.com
- **Texas Wealth Network** — umbrella for multiple Dallas-area groups
- **Flipper Force REI Groups** — Texas listings

### Local press targets

- **Texas Real Estate Today** (statewide)
- Dallas Business Journal
- Houston Business Journal
- Austin Business Journal
- San Antonio Business Journal
- D Magazine (Dallas)
- Houstonia
- The Real Deal Texas
- Houston Chronicle (real estate)
- Dallas Morning News (real estate)
- Austin American-Statesman (real estate)

### Spanish-language priority

**Critical.** ~40% of TX is Hispanic; Houston (~45%), San Antonio (~64%), El Paso (~83%), DFW (~30%), Austin (~33%). Spanish-language content for TX is non-negotiable for Bank Statement, 1099, Foreign National, DSCR, P&L Only. Hreflang `/es/` builds for top products from launch.

### Content angles unique to TX

- "Houston multi-family DSCR loan: energy-economy rental thesis"
- "Austin STR DSCR financing: short-term rental zoning"
- "DFW SFR rental portfolio: new-build investor financing"
- "San Antonio Section 8 + DSCR qualifying"
- "El Paso cross-border foreign national mortgage" (Mexico buyer angle)
- "Texas no-state-income-tax effect on DSCR qualifying" (information gain — tax-state implications most lenders skip)
- "Killeen / Fort Cavazos military rental DSCR"
- "Texas flood-zone underwriting on DSCR" (Houston-specific)
- "Texas property tax + DSCR ratio: how high TX taxes affect cash flow" (genuine info gain — most lenders gloss over this)

### Schema + compliance

- TX OCCC / Department of Banking licensing — Clout needs verified TX licensing posture
- "Texas Mortgage Banker License #XXXX" — verify Clout's TX license number
- Texas SAFE Act compliance disclosure
- Texas Recovery Fund disclosure (specific to TX)
- `areaServed` Harris, Dallas, Tarrant, Travis, Bexar, El Paso, Collin, Denton, Williamson, Fort Bend, Montgomery counties

### TX market notes (research source)

Per the Texas Premier Mortgage list, TX has 7+ active DSCR specialists. Mbanc explicitly identifies TX as their top DSCR state. Lone Star Financing positions as the "scale portfolios fast" local incumbent. Texas REIAs network is the strongest state-level investor network in the US, owned and operated by Shenoah Grove and Phill Grove since 2003, with 5 major metro chapters. Texas closes loans typically 15–25 days for DSCR.

---

## Cross-state strategic moves

### 1. Out-of-state investor funnel
NY/NJ/CT investors increasingly buying in **TX (Houston/DFW), FL (Orlando/Tampa), PA (Philly)** for cash-flow. Build dedicated landing pages:
- "NY investor buying TX rental" — DSCR + investor scenario page
- "NJ investor buying FL STR" — DSCR + Spanish-language angle
- "CT investor buying PA multi-family"
- These pages convert significantly higher than generic state pages because they target a specific decision moment

### 2. State × product matrix
6 states × top 5 products = **30 high-priority local-product pages** by day 180:

| State | Top 5 products by local search demand |
|---|---|
| NY | DSCR, Bank Statement, Foreign National, 1099, Fix-Flip |
| NJ | DSCR, Bank Statement, Foreign National, 1099, Fix-Flip |
| PA | DSCR, Bank Statement, 1099, Fix-Flip, Asset Qualifier |
| FL | DSCR, Foreign National, Bank Statement, Non-Agency Second Home, Asset Qualifier |
| CT | DSCR, Bank Statement, 1099, Foreign National, Asset Qualifier |
| TX | DSCR, Bank Statement, 1099, Foreign National, Fix-Flip |

### 3. Sub-metro pages (priority list)
Top 12 sub-metro pages worth dedicated content (each 1,200–1,800 words):
1. Houston — DSCR
2. Orlando — DSCR + STR
3. Brooklyn — DSCR + 2-4 unit
4. Dallas — DSCR
5. Miami — Foreign National
6. Austin — DSCR + STR
7. Philadelphia — DSCR + BRRRR
8. Tampa — DSCR
9. Stamford — Asset Qualifier + Bank Statement
10. Pittsburgh — DSCR + multi-family
11. Long Island — Bank Statement + 1099
12. Hartford — DSCR

### 4. Spanish-language priority order
1. **FL** (Miami especially — non-negotiable)
2. **TX** (Houston, SA, El Paso)
3. **NJ** (Hudson/Passaic/Union counties)
4. **NY** (NYC + Long Island Latino corridors)
5. **PA** (Lehigh Valley)
6. **CT** (Hartford + Bridgeport)

### 5. REIA partnership funnel
For each state, pursue 1 sponsorship + 1 speaking slot per quarter:
- Q1: Texas REIAs (Austin chapter), SFREIA (Miami)
- Q2: CT REIA Stamford Expo, Philadelphia REIA
- Q3: LIREIA, Pittsburgh REIA
- Q4: WNYREIA, Tampa Bay REIA

### 6. Local press calendar
Aim for 1 placement per state per quarter; pitch off the back of approved closings, market commentary, or data releases. Trade pubs (HousingWire, NMP, Scotsman, Broker World) cover statewide + national angles; local journals are state-specific.

---

## GBP strategy

Wholesale-direct hybrid model means GBP value is moderate, not the load-bearing channel. Recommendation:

- **Claim and optimize 1 GBP for HQ** (Uniondale, NY 11553) — full categories, services, posts, photos
- **Hold off on multi-location GBPs** unless Clout opens physical offices in other states; remote AE coverage doesn't justify a fake-address GBP (compliance risk)
- **Use citations + LocalBusiness schema with `areaServed`** as the local-signal substitute for non-HQ states
- **Apple Business Connect + Bing Places** — claim for HQ
- **NAP-consistent citation tier:** Tier 1 (GBP, Apple, Bing, Facebook, LinkedIn, Yelp, BBB, NMLS) + Tier 2 (Zillow, Bankrate, LendingTree, NerdWallet, Experience.com, Realtor.com, HousingWire, Trustpilot)
- **Whitespark / BrightLocal** — quarterly NAP audits

## Local schema patterns

```json
{
  "@context": "https://schema.org",
  "@type": "MortgageLoan",
  "name": "DSCR Loan in Houston, TX",
  "loanTerm": "P30Y",
  "loanType": "Non-Qualified Mortgage / DSCR",
  "lender": {
    "@type": "FinancialService",
    "name": "Clout",
    "parentOrganization": { "@type": "Organization", "name": "Cliffco Mortgage Bankers" },
    "url": "https://cloutwmb.com",
    "areaServed": ["Texas", "Harris County", "Houston"],
    "license": { "@type": "GovernmentLicense", "identifier": "NMLS #65328" }
  },
  "areaServed": { "@type": "City", "name": "Houston", "containedInPlace": { "@type": "State", "name": "Texas" } }
}
```

Layer `FAQPage`, `Article` (for the explanatory body), and `BreadcrumbList` on every local-product page.

## Anti-pattern checklist

Do NOT:
- Copy state pages with only city/state name swapped (doorway page algorithmic penalty)
- Claim "we're local in [state]" without provable local proof (closings, partnerships, in-state LO/AE, REIA membership)
- Buy bulk citations from Tier-3 directories (no value; risk dilution)
- Use Cliffco's "Swish Capital" DBA on Clout content (separate brand, separate DBA)
- Run Spanish-language content as machine translation (Google explicitly penalizes; native speakers + native creative)

---

## See also

- [STRATEGY.md](./STRATEGY.md)
- [02-aeo-llm-optimization.md](./02-aeo-llm-optimization.md) — Spanish-language hreflang implementation
- [05-product-content-strategy.md](./05-product-content-strategy.md) — product × state matrix expanded
