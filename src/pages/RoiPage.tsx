import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import KlantenScroll from '../components/KlantenScroll'
import Marquee from '../components/Marquee'
import CTABox from '../components/CTABox'
import RibbonCanvas, { RibbonBundle } from '../components/RibbonCanvas'
import RibbonCanvas2 from '../components/RibbonCanvas2'
import { useModal } from '../hooks/useModalContext'

const ribbonBundles: RibbonBundle[] = [
  { r: 51, g: 166, b: 255, lines: 16, spread: 24, baseY: 0.32, speed: 0.42, amp: 120, freq: 0.003, twist: 0.005, opacity: 0.09, lineWidth: 0.7 },
  { r: 139, g: 92, b: 246, lines: 12, spread: 18, baseY: 0.52, speed: 0.38, amp: 100, freq: 0.0028, twist: 0.004, opacity: 0.06, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'BEREKEN JE ROI' },
  { text: '10+ UUR BESPAARD', ghost: true },
  { text: 'DIRECT RESULTAAT' },
  { text: 'AI WORKFORCES', ghost: true },
]

export default function RoiPage() {
  const { openModal } = useModal()

  const [medewerkers, setMedewerkers] = useState(10)
  const [uren, setUren] = useState(8)
  const [uurloon, setUurloon] = useState(45)
  const [pct, setPct] = useState(60)

  const weekBesparing = Math.round(medewerkers * uren * (pct / 100) * uurloon)
  const maandBesparing = Math.round(weekBesparing * 4.33)
  const jaarBesparing = maandBesparing * 12
  const urenBespaard = Math.round(medewerkers * uren * (pct / 100))

  const formatEuro = (n: number) => '\u20AC' + n.toLocaleString('nl-NL')

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>AI ROI Calculator | AI Volution</title>
        <meta name="description" content="Bereken hoeveel tijd en geld je bedrijf bespaart met AI Workforces. Gratis ROI calculator voor Nederlandse MKB+ bedrijven. Zie direct je besparing." />
        <link rel="canonical" href="https://ai-volution.nl/roi.html" />
        <meta property="og:title" content="AI ROI Calculator | AI Volution" />
        <meta property="og:description" content="Bereken hoeveel tijd en geld je bedrijf bespaart met AI Workforces. Gratis ROI calculator voor Nederlandse MKB+ bedrijven. Zie direct je besparing." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/roi.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI ROI Calculator | AI Volution" />
        <meta name="twitter:description" content="Bereken hoeveel tijd en geld je bedrijf bespaart met AI Workforces. Gratis ROI calculator voor Nederlandse MKB+ bedrijven. Zie direct je besparing." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "AI ROI Calculator", "url": "https://ai-volution.nl/roi.html",
          "description": "Bereken hoeveel tijd en geld je bedrijf bespaart met AI Workforces. Gratis ROI calculator voor Nederlandse MKB+ bedrijven. Zie direct je besparing.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">ROI Calculator</div>
            <h1>Bereken je AI ROI</h1>
            <p>Ontdek hoeveel tijd en geld je bespaart met AI-automatisering. Verschuif de sliders en zie direct je potentiele besparing.</p>
          </div>
        </section>

        <KlantenScroll />
      </div>

      {/* WAAROM ROI */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }}>
            <div className="reveal" style={{ textAlign: 'center', padding: '32px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>&#9201;</div>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: '17px', fontWeight: 900, marginBottom: '8px' }}>Tijd terug</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-sec)', lineHeight: 1.7 }}>Gemiddeld 10+ uur per week terug voor je team door repetitieve taken te automatiseren.</p>
            </div>
            <div className="reveal" style={{ textAlign: 'center', padding: '32px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>&#128176;</div>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: '17px', fontWeight: 900, marginBottom: '8px' }}>Kosten omlaag</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-sec)', lineHeight: 1.7 }}>Minder handmatig werk betekent lagere operationele kosten en hogere marges.</p>
            </div>
            <div className="reveal" style={{ textAlign: 'center', padding: '32px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>&#128200;</div>
              <h3 style={{ fontFamily: 'var(--font-d)', fontSize: '17px', fontWeight: 900, marginBottom: '8px' }}>Schaalbaar groeien</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-sec)', lineHeight: 1.7 }}>Groei zonder evenredig meer personeel. AI Workforces schalen mee met je bedrijf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="roi-section grid-graph" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="roi-grid">
            {/* INPUTS */}
            <div className="roi-inputs reveal">
              <div className="roi-slider-group">
                <label>Aantal medewerkers <span>{medewerkers}</span></label>
                <input type="range" min={1} max={100} value={medewerkers} onChange={(e) => setMedewerkers(Number(e.target.value))} />
              </div>
              <div className="roi-slider-group">
                <label>Uren handmatig werk per week (per medewerker) <span>{uren}</span></label>
                <input type="range" min={1} max={40} value={uren} onChange={(e) => setUren(Number(e.target.value))} />
              </div>
              <div className="roi-slider-group">
                <label>Gemiddeld uurloon (&euro;) <span>{uurloon}</span></label>
                <input type="range" min={15} max={150} value={uurloon} onChange={(e) => setUurloon(Number(e.target.value))} />
              </div>
              <div className="roi-slider-group">
                <label>AI automatiseringspercentage <span>{pct}%</span></label>
                <input type="range" min={10} max={90} value={pct} onChange={(e) => setPct(Number(e.target.value))} />
              </div>
            </div>

            {/* RESULT */}
            <div className="roi-result reveal">
              <h3>Jouw potentiele besparing</h3>
              <div className="roi-stat">
                <div className="label">Besparing per week</div>
                <div className="value highlight">{formatEuro(weekBesparing)}</div>
              </div>
              <div className="roi-divider"></div>
              <div className="roi-stat">
                <div className="label">Besparing per maand</div>
                <div className="value">{formatEuro(maandBesparing)}</div>
              </div>
              <div className="roi-divider"></div>
              <div className="roi-stat">
                <div className="label">Besparing per jaar</div>
                <div className="value highlight">{formatEuro(jaarBesparing)}</div>
              </div>
              <div className="roi-divider"></div>
              <div className="roi-stat">
                <div className="label">Uren bespaard per week</div>
                <div className="value">{urenBespaard} uur</div>
              </div>
              <a
                href="#"
                className="btn-cta"
                onClick={(e) => { e.preventDefault(); openModal() }}
                style={{ marginTop: '32px', display: 'inline-flex' }}
              >
                Gratis Consult
              </a>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <CTABox
        heading="Benieuwd naar de exacte ROI voor jouw bedrijf?"
        text="Plan een gratis consult en we berekenen samen de concrete besparing op basis van jouw processen."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
