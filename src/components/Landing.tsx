"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { dict, isLang, type Lang } from "@/lib/i18n";
import { FlagGB, FlagGE } from "@/components/Flag";

// Build-time switch: static export (GitHub Pages) gets the client-only demo form;
// the normal server build gets the real Server Action form. The unused branch's
// dynamic import() is dead-code-eliminated, so the static build pulls in no
// server-only code.
const WaitlistForm =
  process.env.NEXT_PUBLIC_STATIC === "1"
    ? dynamic(() => import("@/components/WaitlistFormDemo"))
    : dynamic(() => import("@/components/WaitlistForm"));

// Sentiment bars are pure numbers — language-independent.
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

// Language-demo lines inside the "three languages" card — a demonstration of the
// engine, intentionally multilingual in both UI languages.
const LANG_DEMO = [
  { flag: "ka", text: "ძალიან კომფორტული", label: "Comfort +" },
  { flag: "en", text: "slow breakfast service", label: "Service −" },
  { flag: "ru", text: "прекрасный вид на море", label: "View +" },
];

const SOURCES = ["Google", "Booking.com", "TripAdvisor", "2GIS", "Facebook"];

export default function Landing() {
  const [lang, setLang] = useState<Lang>("en");
  const t = dict[lang];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("khma-lang");
      if (isLang(saved)) {
        setLang(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, []);

  function changeLang(l: Lang) {
    setLang(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("khma-lang", l);
    } catch {
      /* ignore */
    }
  }

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
            <a href="#features">{t.nav.features}</a>
            <a href="#how">{t.nav.how}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>
          <div className="nav-actions">
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={`lang-btn${lang === "en" ? " active" : ""}`}
                aria-pressed={lang === "en"}
                onClick={() => changeLang("en")}
              >
                <FlagGB />
                EN
              </button>
              <button
                type="button"
                className={`lang-btn${lang === "ka" ? " active" : ""}`}
                aria-pressed={lang === "ka"}
                onClick={() => changeLang("ka")}
              >
                <FlagGE />
                GE
              </button>
            </div>
            <a className="btn btn-secondary" href="#waitlist">
              {t.nav.signIn}
            </a>
            <a className="btn btn-primary" href="#waitlist">
              {t.nav.requestAccess}
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
            {t.hero.eyebrow}
          </span>
          <h1 className="display-xxl reveal reveal-1">{t.hero.h1}</h1>
          <p className="lead reveal reveal-2">{t.hero.lead}</p>
          <div className="hero-ctas reveal reveal-3">
            <a className="btn btn-primary" href="#waitlist">
              {t.hero.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="#dashboard">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <p className="hero-note reveal reveal-3">{t.hero.note}</p>

          {/* Dashboard mockup — the app's own UI (no fake browser chrome) */}
          <div className="mock-wrap reveal reveal-3" id="dashboard">
            <div className="dash" role="img" aria-label={t.hero.dashAria}>
              <div className="dash-bar">
                <span className="dash-prop">
                  <span className="avatar" aria-hidden="true">
                    O
                  </span>
                  {t.dash.prop}
                </span>
                <span className="dash-pill">{t.dash.pill1}</span>
                <span className="dash-pill">{t.dash.pill2}</span>
                <span className="dash-tag-sample">{t.dash.sample}</span>
              </div>

              <div className="dash-body">
                <div className="dash-kpis">
                  {t.dash.kpis.map((k) => (
                    <div className="kpi" key={k.label}>
                      <div className="label">{k.label}</div>
                      <div className="value">{k.value}</div>
                      <div className={`delta ${k.dir}`}>{k.delta}</div>
                    </div>
                  ))}
                </div>

                <div className="panel">
                  <h4>
                    {t.dash.sentimentTitle} <span>{t.dash.sentimentSub}</span>
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
                    <span>{t.dash.weeksAgo}</span>
                    <span>{t.dash.thisWeek}</span>
                  </div>
                </div>

                <div className="panel">
                  <h4>
                    {t.dash.themesTitle} <span>{t.dash.themesSub}</span>
                  </h4>
                  {t.dash.themes.map((th) => (
                    <div className={`theme-row${th.neg ? " neg" : ""}`} key={th.name}>
                      <span className="name">{th.name}</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <span className="bar" aria-hidden="true">
                          <i style={{ width: `${th.pct}%` }} />
                        </span>
                        <span className={`trend ${th.neg ? "down" : "up"}`}>{th.trend}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="panel stream">
                  <h4>
                    {t.dash.feedbackTitle} <span>{t.dash.feedbackSub}</span>
                  </h4>
                  {t.dash.reviews.map((r, i) => (
                    <div className="review" key={i}>
                      <div className="review-meta">
                        <span className={`src ${r.srcClass}`}>{r.src}</span>
                        <span className="stars" aria-label={r.starsAria}>
                          {r.stars}
                        </span>
                        <time>{r.time}</time>
                      </div>
                      <p>
                        {r.text}{" "}
                        {r.orig && <span className="orig">{r.orig}</span>}
                      </p>
                      <div className="review-tags">
                        {r.tags.map((tag) => (
                          <span className={`chip ${tag.kind}`} key={tag.label}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── Context / sources ───────────────── */}
        <section className="context">
          <div
            className="container section context-inner"
            style={{ paddingBlock: "var(--space-xxl)" }}
          >
            <p>{t.context.text}</p>
            <div className="sources" aria-label="Supported review sources">
              {SOURCES.map((s) => (
                <span className="source-mark" key={s}>
                  {s}
                </span>
              ))}
              <span className="source-mark">{t.context.qr}</span>
            </div>
          </div>
        </section>

        {/* ───────────────── Bento features ───────────────── */}
        <section className="section container" id="features">
          <div className="section-head center" style={{ marginBottom: "var(--space-xxl)" }}>
            <p className="kicker">{t.features.kicker}</p>
            <h2 className="display-lg">{t.features.heading}</h2>
          </div>

          <div className="bento">
            <article className="cell span-3 row-2">
              <span className="cell-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h18M3 12h18M3 17h12" strokeLinecap="round" />
                </svg>
              </span>
              <h3>{t.features.c1Title}</h3>
              <p>{t.features.c1Body}</p>
              <div className="lang-demo" aria-hidden="true">
                {[...SOURCES, t.context.qr].map((s) => (
                  <div className="lang-line" key={s}>
                    <span style={{ color: "var(--color-success)" }}>✓</span>
                    <span>{s}</span>
                    <span className="muted" style={{ marginLeft: "auto", fontSize: 12 }}>
                      {t.features.connected}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="cell spotlight violet span-3">
              <h3 className="display-md">{t.features.c2Title}</h3>
              <p>{t.features.c2Body}</p>
              <div className="lang-demo">
                {LANG_DEMO.map((l) => (
                  <div className="lang-line" key={l.flag}>
                    <span className="flag">{l.flag}</span>
                    <span>{l.text}</span>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                    <span style={{ opacity: 0.85 }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="cell span-3">
              <span className="cell-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" />
                </svg>
              </span>
              <h3>{t.features.c3Title}</h3>
              <p>{t.features.c3Body}</p>
            </article>

            <article className="cell span-2">
              <h3>{t.features.c4Title}</h3>
              <p>{t.features.c4Body}</p>
            </article>

            <article className="cell span-2">
              <h3>{t.features.c5Title}</h3>
              <p>{t.features.c5Body}</p>
            </article>

            <article className="cell span-2">
              <h3>{t.features.c6Title}</h3>
              <p>{t.features.c6Body}</p>
            </article>

            <article className="cell spotlight orange span-3">
              <h3 className="display-md">{t.features.c7Title}</h3>
              <p>{t.features.c7Body}</p>
            </article>

            <article className="cell span-3">
              <span className="cell-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3h9l5 5v13H6z" strokeLinejoin="round" />
                  <path d="M14 3v6h6M9 13h6M9 17h4" strokeLinecap="round" />
                </svg>
              </span>
              <h3>{t.features.c8Title}</h3>
              <p>{t.features.c8Body}</p>
            </article>
          </div>
        </section>

        {/* ───────────────── How it works ───────────────── */}
        <section className="section container" id="how">
          <div className="section-head center">
            <p className="kicker">{t.how.kicker}</p>
            <h2 className="display-lg">{t.how.heading}</h2>
          </div>
          <div className="steps">
            {t.how.steps.map((s) => (
              <div className="step" key={s.num}>
                <div className="num">{s.num}</div>
                <h3>{s.h3}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────── Deep-dive split ───────────────── */}
        <section className="section container">
          <div className="split">
            <div>
              <p className="kicker">{t.deep.kicker}</p>
              <h2 className="display-lg">{t.deep.heading}</h2>
              <ul className="feature-list">
                {t.deep.features.map((f) => (
                  <li key={f.h4}>
                    <span className="tick" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <h4>{f.h4}</h4>
                      <p>{f.p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="alert-card" aria-label={t.deep.alertsLabel}>
              <span className="muted" style={{ fontSize: 12, fontWeight: 500 }}>
                {t.deep.alertsLabel}
              </span>
              {t.deep.alerts.map((a) => (
                <div className={`alert ${a.kind}`} key={a.strong}>
                  <span className="badge" aria-hidden="true">
                    {a.badge}
                  </span>
                  <div className="body">
                    <strong>{a.strong}</strong>
                    <p>{a.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── Industries ───────────────── */}
        <section className="section container">
          <div className="section-head center">
            <p className="kicker">{t.industries.kicker}</p>
            <h2 className="display-lg">{t.industries.heading}</h2>
          </div>
          <div className="industries-grid">
            {t.industries.items.map((it) => (
              <div className="industry" key={it.h3}>
                <div className="ico" aria-hidden="true">
                  {it.ico}
                </div>
                <h3>{it.h3}</h3>
                <p>{it.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────── Pricing ───────────────── */}
        <section className="section container pricing" id="pricing">
          <div className="section-head center">
            <p className="kicker">{t.pricing.kicker}</p>
            <h2 className="display-lg">{t.pricing.heading}</h2>
            <div className="billing" role="group" aria-label="Billing period">
              <input type="radio" name="billing" id="bill-monthly" defaultChecked />
              <input type="radio" name="billing" id="bill-annual" />
              <label htmlFor="bill-monthly">{t.pricing.monthly}</label>
              <label htmlFor="bill-annual">
                {t.pricing.annual}
                <span className="save">{t.pricing.save}</span>
              </label>
            </div>
          </div>

          <div className="tiers">
            {t.pricing.tiers.map((tier) => (
              <article className={`tier${tier.featured ? " featured" : ""}`} key={tier.name}>
                <div className="tier-head">
                  <h3>{tier.name}</h3>
                  {tier.badge && <span className="badge-rec">{tier.badge}</span>}
                </div>
                {tier.custom ? (
                  <div className="price">{tier.price}</div>
                ) : (
                  <div className="price">
                    <span className="price-monthly">{tier.price}</span>
                    <span className="price-annual">{tier.priceAnnual}</span>
                    <span className="per"> {t.pricing.per}</span>
                  </div>
                )}
                <p className="tier-desc">{tier.desc}</p>
                <ul>
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className={`btn ${tier.featured ? "btn-primary" : "btn-secondary"}`} href="#waitlist">
                  {tier.cta}
                </a>
              </article>
            ))}
          </div>
          <p
            className="muted"
            style={{ fontSize: 13, textAlign: "center", marginTop: "var(--space-xl)" }}
          >
            {t.pricing.note}
          </p>
        </section>

        {/* ───────────────── FAQ ───────────────── */}
        <section className="section container" id="faq">
          <div className="section-head center" style={{ marginBottom: "var(--space-xl)" }}>
            <p className="kicker">{t.faq.kicker}</p>
            <h2 className="display-lg">{t.faq.heading}</h2>
          </div>
          <div className="faq">
            {t.faq.items.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span className="plus" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────────────── Waitlist CTA ───────────────── */}
        <section className="section container" id="waitlist">
          <div className="waitlist-card">
            <div className="waitlist-grid">
              <div className="waitlist-copy">
                <h2 className="display-lg">{t.waitlist.h2}</h2>
                <p>{t.waitlist.p}</p>
                <ul className="perks">
                  {t.waitlist.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <WaitlistForm lang={lang} />
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
              <p>{t.footer.brandP}</p>
            </div>
            <div className="footer-col">
              <h5>{t.footer.productH}</h5>
              <a href="#features">{t.footer.lFeatures}</a>
              <a href="#dashboard">{t.footer.lDashboard}</a>
              <a href="#pricing">{t.footer.lPricing}</a>
              <a href="#how">{t.footer.lHow}</a>
            </div>
            <div className="footer-col">
              <h5>{t.footer.companyH}</h5>
              <a href="#waitlist">{t.footer.lEarly}</a>
              <a href="#faq">{t.footer.lFaq}</a>
              <a href="mailto:hello@khma.ge">{t.footer.lContact}</a>
            </div>
            <div className="footer-col">
              <h5>{t.footer.legalH}</h5>
              <a href="#waitlist">{t.footer.lPrivacy}</a>
              <a href="#waitlist">{t.footer.lTerms}</a>
              <a href="#waitlist">{t.footer.lSecurity}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t.footer.copyright}</span>
            <span className="made">{t.footer.made}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
