import dynamic from "next/dynamic";

// Build-time switch: static export (GitHub Pages) gets the client-only demo form;
// the normal server build gets the real Server Action form. The unused branch's
// dynamic import() is dead-code-eliminated, so the static build never pulls in
// the "use server" module.
const WaitlistForm =
  process.env.NEXT_PUBLIC_STATIC === "1"
    ? dynamic(() => import("@/components/WaitlistFormDemo"))
    : dynamic(() => import("@/components/WaitlistForm"));

/* 12 weeks of sample sentiment — clearly a product preview, not a real-customer claim. */
const SENTIMENT: { pos: number; neg: number }[] = [
  { pos: 62, neg: 18 },
  { pos: 58, neg: 22 },
  { pos: 66, neg: 16 },
  { pos: 60, neg: 20 },
  { pos: 70, neg: 14 },
  { pos: 64, neg: 19 },
  { pos: 72, neg: 12 },
  { pos: 68, neg: 15 },
  { pos: 76, neg: 11 },
  { pos: 74, neg: 13 },
  { pos: 82, neg: 9 },
  { pos: 80, neg: 10 },
];

const THEMES: { name: string; pct: number; trend: string; neg?: boolean }[] = [
  { name: "Staff friendliness", pct: 91, trend: "↑ 6" },
  { name: "Breakfast quality", pct: 86, trend: "↑ 9" },
  { name: "Room cleanliness", pct: 82, trend: "↑ 3" },
  { name: "Noise at night", pct: 52, trend: "↓ 4", neg: true },
  { name: "Wi-Fi reliability", pct: 44, trend: "↓ 7", neg: true },
  { name: "Check-in speed", pct: 38, trend: "↓ 12", neg: true },
];

export default function Home() {
  return (
    <>
      {/* ───────────────── Nav ───────────────── */}
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Khma home">
            Khma <span className="geo">ხმა</span>
          </a>
          <input type="checkbox" id="nav-check" className="nav-check" aria-hidden="true" />
          <nav className="nav-links" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-secondary" href="#waitlist">
              Sign in
            </a>
            <a className="btn btn-primary" href="#waitlist">
              Request access
            </a>
            <label className="nav-toggle" htmlFor="nav-check" aria-label="Toggle menu">
              <span className="bars" aria-hidden="true" />
            </label>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ───────────────── Hero ───────────────── */}
        <section className="hero container">
          <span className="eyebrow reveal">
            <span className="dot" aria-hidden="true" />
            Now onboarding the first venues in Tbilisi &amp; Batumi
          </span>
          <h1 className="display-xxl reveal reveal-1">Hear every guest. See every pattern.</h1>
          <p className="lead reveal reveal-2">
            Khma reads your reviews from Google, Booking.com, TripAdvisor and 2GIS — in Georgian,
            English and Russian — and turns 1,000+ comments a month into the three things worth
            fixing this week.
          </p>
          <div className="hero-ctas reveal reveal-3">
            <a className="btn btn-primary" href="#waitlist">
              Request early access
            </a>
            <a className="btn btn-secondary" href="#dashboard">
              See a sample dashboard
            </a>
          </div>
          <p className="hero-note reveal reveal-3">
            Free during the pilot · No integration work · Set up in an afternoon
          </p>

          {/* Dashboard mockup — the app's own UI (no fake browser chrome) */}
          <div className="mock-wrap reveal reveal-3" id="dashboard">
            <div className="dash" role="img" aria-label="Sample Khma dashboard for a hotel in Tbilisi showing sentiment trends, top feedback themes and a live review stream.">
              <div className="dash-bar">
                <span className="dash-prop">
                  <span className="avatar" aria-hidden="true">
                    O
                  </span>
                  Old Tiflis Rooms · Tbilisi
                </span>
                <span className="dash-pill">Last 90 days</span>
                <span className="dash-pill">All sources</span>
                <span className="dash-tag-sample">Sample data</span>
              </div>

              <div className="dash-body">
                <div className="dash-kpis">
                  <div className="kpi">
                    <div className="label">Reviews read</div>
                    <div className="value">1,284</div>
                    <div className="delta up">▲ 18% vs prev.</div>
                  </div>
                  <div className="kpi">
                    <div className="label">Avg. sentiment</div>
                    <div className="value">4.3/5</div>
                    <div className="delta up">▲ 0.2</div>
                  </div>
                  <div className="kpi">
                    <div className="label">Response rate</div>
                    <div className="value">71%</div>
                    <div className="delta up">▲ 9%</div>
                  </div>
                  <div className="kpi">
                    <div className="label">NPS</div>
                    <div className="value">52</div>
                    <div className="delta up">▲ 6</div>
                  </div>
                </div>

                <div className="panel">
                  <h4>
                    Sentiment over time <span>weekly</span>
                  </h4>
                  <div className="chart" aria-hidden="true">
                    {SENTIMENT.map((w, i) => (
                      <div className="col" key={i}>
                        <span className="pos" style={{ height: `${w.pos}%` }} />
                        <span className="neg" style={{ height: `${w.neg}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="chart-x">
                    <span>12 wks ago</span>
                    <span>This week</span>
                  </div>
                </div>

                <div className="panel">
                  <h4>
                    Top themes <span>auto-detected</span>
                  </h4>
                  {THEMES.map((t) => (
                    <div className={`theme-row${t.neg ? " neg" : ""}`} key={t.name}>
                      <span className="name">{t.name}</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <span className="bar" aria-hidden="true">
                          <i style={{ width: `${t.pct}%` }} />
                        </span>
                        <span className={`trend ${t.neg ? "down" : "up"}`}>{t.trend}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="panel stream">
                  <h4>
                    Live feedback <span>4 new today</span>
                  </h4>

                  <div className="review">
                    <div className="review-meta">
                      <span className="src google">Google</span>
                      <span className="stars" aria-label="5 out of 5">
                        ★★★★★
                      </span>
                      <time>2h ago</time>
                    </div>
                    <p>
                      “The room was spotless and the staff were so warm.”{" "}
                      <span className="orig">— ოთახი იყო სუფთა და პერსონალი ძალიან თბილი.</span>
                    </p>
                    <div className="review-tags">
                      <span className="chip pos">Cleanliness +</span>
                      <span className="chip pos">Staff +</span>
                    </div>
                  </div>

                  <div className="review">
                    <div className="review-meta">
                      <span className="src booking">Booking.com</span>
                      <span className="stars" aria-label="3 out of 5">
                        ★★★☆☆
                      </span>
                      <time>5h ago</time>
                    </div>
                    <p>“Check-in took 40 minutes — the evening queue was long.”</p>
                    <div className="review-tags">
                      <span className="chip neg">Check-in speed −</span>
                    </div>
                  </div>

                  <div className="review">
                    <div className="review-meta">
                      <span className="src twogis">2GIS</span>
                      <span className="stars" aria-label="4 out of 5">
                        ★★★★☆
                      </span>
                      <time>Yesterday</time>
                    </div>
                    <p>
                      “The khinkali was delicious, but the wine list is a little pricey.”{" "}
                      <span className="orig">— ხინკალი გემრიელი იყო, ღვინო ცოტა ძვირია.</span>
                    </p>
                    <div className="review-tags">
                      <span className="chip pos">Food +</span>
                      <span className="chip neg">Price −</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── Context / sources ───────────────── */}
        <section className="context">
          <div className="container section context-inner" style={{ paddingBlock: "var(--space-xxl)" }}>
            <p>Khma reads the places your guests already leave reviews:</p>
            <div className="sources" aria-label="Supported review sources">
              <span className="source-mark">Google</span>
              <span className="source-mark">Booking.com</span>
              <span className="source-mark">TripAdvisor</span>
              <span className="source-mark">2GIS</span>
              <span className="source-mark">Facebook</span>
              <span className="source-mark">In-stay QR</span>
            </div>
          </div>
        </section>

        {/* ───────────────── Bento features ───────────────── */}
        <section className="section container" id="features">
          <div className="section-head center" style={{ marginBottom: "var(--space-xxl)" }}>
            <p className="kicker">What Khma does</p>
            <h2 className="display-lg">Everything your guests tell you, in one place.</h2>
          </div>

          <div className="bento">
            <article className="cell span-3 row-2">
              <span className="cell-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h18M3 12h18M3 17h12" strokeLinecap="round" />
                </svg>
              </span>
              <h3>One inbox for every source</h3>
              <p>
                Connect your public links once. Khma pulls the full history and every new review
                after — no copy-pasting, no spreadsheets, no logins to juggle.
              </p>
              <div className="lang-demo" aria-hidden="true">
                {["Google", "Booking.com", "TripAdvisor", "2GIS", "Facebook", "In-stay QR"].map(
                  (s) => (
                    <div className="lang-line" key={s}>
                      <span style={{ color: "var(--color-success)" }}>✓</span>
                      <span>{s}</span>
                      <span className="muted" style={{ marginLeft: "auto", fontSize: 12 }}>
                        connected
                      </span>
                    </div>
                  )
                )}
              </div>
            </article>

            <article className="cell spotlight violet span-3">
              <h3 className="display-md">Built for three languages</h3>
              <p>
                Most tools choke on Georgian. Khma reads ქართული, English and русский natively —
                even when one review mixes all three.
              </p>
              <div className="lang-demo">
                <div className="lang-line">
                  <span className="flag">ka</span>
                  <span>ძალიან კომფორტული</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                  <span style={{ opacity: 0.85 }}>Comfort +</span>
                </div>
                <div className="lang-line">
                  <span className="flag">en</span>
                  <span>slow breakfast service</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                  <span style={{ opacity: 0.85 }}>Service −</span>
                </div>
                <div className="lang-line">
                  <span className="flag">ru</span>
                  <span>прекрасный вид на море</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                  <span style={{ opacity: 0.85 }}>View +</span>
                </div>
              </div>
            </article>

            <article className="cell span-3">
              <span className="cell-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Themes, not star averages</h3>
              <p>
                A 4.3 average hides the story. Khma clusters thousands of comments into named themes —
                “check-in speed”, “breakfast”, “noise” — and tracks each one week over week.
              </p>
            </article>

            <article className="cell span-2">
              <h3>A weekly to-do, ranked</h3>
              <p>Open the dashboard Monday and see the top three fixes, ordered by how many guests they’d affect.</p>
            </article>

            <article className="cell span-2">
              <h3>Spot it before the 1-star</h3>
              <p>When negative mentions of a theme spike, Khma pings you by email or Slack — usually days before the rating drops.</p>
            </article>

            <article className="cell span-2">
              <h3>All your venues, side by side</h3>
              <p>Compare Batumi against Tbilisi, summer against winter, this branch against that one — on one screen.</p>
            </article>

            <article className="cell spotlight orange span-3">
              <h3 className="display-md">Reply in the guest’s own words</h3>
              <p>
                Khma drafts a reply in the same language the review was written in. You read it,
                tweak it, and hit send — nothing is posted without you.
              </p>
            </article>

            <article className="cell span-3">
              <span className="cell-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3h9l5 5v13H6z" strokeLinejoin="round" />
                  <path d="M14 3v6h6M9 13h6M9 17h4" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Reports your GM will read</h3>
              <p>
                A clean weekly summary lands in your inbox — what moved, what slipped, what to do —
                short enough to read before the morning shift.
              </p>
            </article>
          </div>
        </section>

        {/* ───────────────── How it works ───────────────── */}
        <section className="section container" id="how">
          <div className="section-head center">
            <p className="kicker">How it works</p>
            <h2 className="display-lg">Three steps from reviews to decisions.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">Step 1</div>
              <h3>Add your venue</h3>
              <p>
                Paste your Google, Booking.com, TripAdvisor and 2GIS links. That’s the whole setup —
                no developers, no plugins, no point-of-sale integration.
              </p>
            </div>
            <div className="step">
              <div className="num">Step 2</div>
              <h3>Khma reads everything</h3>
              <p>
                It pulls the full review history, groups comments into themes, and scores sentiment
                in Georgian, English and Russian — usually within a day.
              </p>
            </div>
            <div className="step">
              <div className="num">Step 3</div>
              <h3>Act on the weekly list</h3>
              <p>
                Each Monday you get the three highest-impact fixes. Assign them, ship them, and watch
                the trend line move the next week.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────── Deep-dive split ───────────────── */}
        <section className="section container">
          <div className="split">
            <div>
              <p className="kicker">Inside the dashboard</p>
              <h2 className="display-lg">From 1,284 comments to three decisions.</h2>
              <ul className="feature-list">
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h4>Automatic theme detection</h4>
                    <p>“Check-in”, “breakfast”, “noise”, “value” surface on their own — nobody tags reviews by hand.</p>
                  </div>
                </li>
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h4>Trends that prove the fix worked</h4>
                    <p>See whether last month’s change actually moved sentiment, instead of guessing.</p>
                  </div>
                </li>
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h4>Branch &amp; season filters</h4>
                    <p>Slice by venue, room type, or time of year — Batumi in August reads very differently from Tbilisi in February.</p>
                  </div>
                </li>
                <li>
                  <span className="tick" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h4>Alerts when a theme spikes</h4>
                    <p>A ping the moment negative mentions climb — not a surprise at the end of the month.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="alert-card" aria-label="Example alerts">
              <span className="muted" style={{ fontSize: 12, fontWeight: 500 }}>
                This week at your venues
              </span>
              <div className="alert warn">
                <span className="badge" aria-hidden="true">
                  !
                </span>
                <div className="body">
                  <strong>Check-in speed is slipping</strong>
                  <p>14 new mentions at Old Tiflis Rooms · Tbilisi this week, clustered between 18:00 and 21:00.</p>
                </div>
              </div>
              <div className="alert good">
                <span className="badge" aria-hidden="true">
                  ↑
                </span>
                <div className="body">
                  <strong>Breakfast sentiment up 12%</strong>
                  <p>Your new menu is landing well in Batumi — guests mention the khachapuri by name.</p>
                </div>
              </div>
              <div className="alert warn">
                <span className="badge" aria-hidden="true">
                  !
                </span>
                <div className="body">
                  <strong>Wi-Fi complaints returning</strong>
                  <p>7 mentions in 4 days, mostly on the upper floors. Same pattern as last March.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── Industries ───────────────── */}
        <section className="section container">
          <div className="section-head center">
            <p className="kicker">Who it’s for</p>
            <h2 className="display-lg">Made for Georgian hospitality.</h2>
          </div>
          <div className="industries-grid">
            <div className="industry">
              <div className="ico" aria-hidden="true">
                🏨
              </div>
              <h3>Hotels &amp; guesthouses</h3>
              <p>Learn which floor, shift or season your reviews are really about — and fix the right one.</p>
            </div>
            <div className="industry">
              <div className="ico" aria-hidden="true">
                🍽
              </div>
              <h3>Restaurants</h3>
              <p>Separate the food from the service from the wait — by dish and by hour of the day.</p>
            </div>
            <div className="industry">
              <div className="ico" aria-hidden="true">
                🍷
              </div>
              <h3>Wine bars &amp; cafés</h3>
              <p>Catch the quiet complaints from your regulars before they simply stop coming back.</p>
            </div>
            <div className="industry">
              <div className="ico" aria-hidden="true">
                🧭
              </div>
              <h3>Tour operators</h3>
              <p>Tie feedback back to specific guides, routes and pickups — not just an overall score.</p>
            </div>
          </div>
        </section>

        {/* ───────────────── Pricing ───────────────── */}
        <section className="section container pricing" id="pricing">
          <div className="section-head center">
            <p className="kicker">Pricing</p>
            <h2 className="display-lg">Simple plans, in lari.</h2>
            <div className="billing" role="group" aria-label="Billing period">
              <input type="radio" name="billing" id="bill-monthly" defaultChecked />
              <input type="radio" name="billing" id="bill-annual" />
              <label htmlFor="bill-monthly">Monthly</label>
              <label htmlFor="bill-annual">
                Annual<span className="save">2 months free</span>
              </label>
            </div>
          </div>

          <div className="tiers">
            <article className="tier">
              <div className="tier-head">
                <h3>Starter</h3>
              </div>
              <div className="price">
                <span className="price-monthly">₾90</span>
                <span className="price-annual">₾75</span>
                <span className="per"> /mo</span>
              </div>
              <p className="tier-desc">One venue finding its feet with reviews.</p>
              <ul>
                <li>1 venue</li>
                <li>Up to 500 reviews / month</li>
                <li>3 review sources</li>
                <li>Weekly email digest</li>
                <li>Georgian · English · Russian</li>
              </ul>
              <a className="btn btn-secondary" href="#waitlist">
                Start free pilot
              </a>
            </article>

            <article className="tier featured">
              <div className="tier-head">
                <h3>Growth</h3>
                <span className="badge-rec">Most chosen</span>
              </div>
              <div className="price">
                <span className="price-monthly">₾240</span>
                <span className="price-annual">₾200</span>
                <span className="per"> /mo</span>
              </div>
              <p className="tier-desc">Multi-venue teams that act on feedback weekly.</p>
              <ul>
                <li>Up to 5 venues</li>
                <li>Up to 3,000 reviews / month</li>
                <li>All review sources</li>
                <li>AI themes + spike alerts</li>
                <li>Reply drafts in 3 languages</li>
                <li>Slack &amp; email alerts</li>
              </ul>
              <a className="btn btn-primary" href="#waitlist">
                Start free pilot
              </a>
            </article>

            <article className="tier">
              <div className="tier-head">
                <h3>Group</h3>
              </div>
              <div className="price">Custom</div>
              <p className="tier-desc">Hotel groups and chains across cities.</p>
              <ul>
                <li>Unlimited venues</li>
                <li>Branch &amp; region roles</li>
                <li>API &amp; data export</li>
                <li>Dedicated onboarding</li>
                <li>Priority support</li>
              </ul>
              <a className="btn btn-secondary" href="#waitlist">
                Talk to us
              </a>
            </article>
          </div>
          <p className="muted" style={{ fontSize: 13, textAlign: "center", marginTop: "var(--space-xl)" }}>
            Prices in GEL, excl. VAT. Free for every venue during the pilot — the first partners
            onboard at no cost.
          </p>
        </section>

        {/* ───────────────── FAQ ───────────────── */}
        <section className="section container" id="faq">
          <div className="section-head center" style={{ marginBottom: "var(--space-xl)" }}>
            <p className="kicker">FAQ</p>
            <h2 className="display-lg">Questions, answered plainly.</h2>
          </div>
          <div className="faq">
            <details>
              <summary>
                Which review sources can Khma read?
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>
                Google, Booking.com, TripAdvisor and 2GIS today, with Facebook and in-stay QR
                feedback next. You add your venue’s public links and Khma pulls the full history.
              </p>
            </details>
            <details>
              <summary>
                Does it actually understand Georgian?
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>
                Yes. Khma reads Georgian, English and Russian natively — including reviews that mix
                languages or write Georgian in Latin letters.
              </p>
            </details>
            <details>
              <summary>
                Do I need to install or integrate anything?
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>
                No. There’s nothing to plug into your booking system or POS. You add your public
                links and the dashboard fills in, usually within a day.
              </p>
            </details>
            <details>
              <summary>
                How is this different from just reading my Google reviews?
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>
                Reading 30 reviews is easy. Reading 1,200 across four sites every month, in three
                languages, and noticing that “check-in” complaints jumped 40% this week — that’s the
                part Khma does for you.
              </p>
            </details>
            <details>
              <summary>
                Where is my data stored?
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>
                On EU-based infrastructure. Khma never posts or replies on your behalf — a draft only
                goes out when you click send.
              </p>
            </details>
            <details>
              <summary>
                When can my venue start?
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>
                We’re onboarding the first venues in Tbilisi and Batumi now. Join the list and we’ll
                reach out as your city opens.
              </p>
            </details>
          </div>
        </section>

        {/* ───────────────── Waitlist CTA ───────────────── */}
        <section className="section container" id="waitlist">
          <div className="waitlist-card">
            <div className="waitlist-grid">
              <div className="waitlist-copy">
                <h2 className="display-lg">Be one of the first venues on Khma.</h2>
                <p>
                  We’re onboarding hotels, restaurants and guesthouses in Tbilisi and Batumi first.
                  Free during the pilot — you help shape the product, we help you read every guest.
                </p>
                <ul className="perks">
                  <li>Free for the length of your pilot</li>
                  <li>Onboarding help, in Georgian or English</li>
                  <li>A direct line to the people building it</li>
                </ul>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      {/* ───────────────── Footer ───────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="brand" href="#top">
                Khma <span className="geo">ხმა</span>
              </a>
              <p>AI feedback analytics for hospitality. Hear every guest, in any language. Made in Tbilisi.</p>
            </div>
            <div className="footer-col">
              <h5>Product</h5>
              <a href="#features">Features</a>
              <a href="#dashboard">Dashboard</a>
              <a href="#pricing">Pricing</a>
              <a href="#how">How it works</a>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <a href="#waitlist">Early access</a>
              <a href="#faq">FAQ</a>
              <a href="mailto:hello@khma.ge">Contact</a>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <a href="#waitlist">Privacy</a>
              <a href="#waitlist">Terms</a>
              <a href="#waitlist">Data &amp; security</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Khma · Tbilisi, Georgia</span>
            <span className="made">Hear every guest. See every pattern.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
