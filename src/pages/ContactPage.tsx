import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import KlantenScroll from '../components/KlantenScroll'
import Marquee from '../components/Marquee'
import GHLForm from '../components/GHLForm'
import RibbonCanvas, { RibbonBundle } from '../components/RibbonCanvas'
import RibbonCanvas2 from '../components/RibbonCanvas2'

const ribbonBundles: RibbonBundle[] = [
  { r: 51, g: 166, b: 255, lines: 16, spread: 24, baseY: 0.32, speed: 0.42, amp: 120, freq: 0.003, twist: 0.005, opacity: 0.09, lineWidth: 0.7 },
  { r: 139, g: 92, b: 246, lines: 12, spread: 18, baseY: 0.52, speed: 0.38, amp: 100, freq: 0.0028, twist: 0.004, opacity: 0.06, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'LATEN WE STARTEN' },
  { text: 'GRATIS CONSULT', ghost: true },
  { text: 'AI VOLUTION' },
  { text: 'JOUW AI PARTNER', ghost: true },
]

export default function ContactPage() {
  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>Contact | AI Volution</title>
        <meta name="description" content="Neem contact op met AI Volution voor een gratis AI-consult. Ontdek welke processen je kunt automatiseren en bespaar direct tijd. Plan een gratis scan." />
        <link rel="canonical" href="https://ai-volution.nl/contact.html" />
        <meta property="og:title" content="Contact - Gratis AI Consult | AI Volution" />
        <meta property="og:description" content="Neem contact op met AI Volution voor een gratis AI-consult. Ontdek welke processen je kunt automatiseren en bespaar direct tijd. Plan een gratis scan." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/contact.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - Gratis AI Consult | AI Volution" />
        <meta name="twitter:description" content="Neem contact op met AI Volution voor een gratis AI-consult. Ontdek welke processen je kunt automatiseren en bespaar direct tijd. Plan een gratis scan." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "ContactPage",
          "name": "Contact AI Volution",
          "description": "Neem contact op met AI Volution voor een gratis AI-consult",
          "mainEntity": {
            "@type": "Organization", "name": "AI Volution",
            "telephone": "+3197010275159", "email": "info@ai-volution.nl",
            "address": { "@type": "PostalAddress", "streetAddress": "De Vriesstraat 26", "addressLocality": "Oud-Beijerland", "postalCode": "3261 PC", "addressCountry": "NL" }
          }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Contact</div>
            <h1>Laten we kennismaken</h1>
            <p>Plan een gratis en vrijblijvend consult of stuur ons een bericht. We reageren binnen 24 uur.</p>
          </div>
        </section>
      </div>

      {/* CONTACT FORM + INFO */}
      <section className="contact-section grid-wave" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-grid">
            <div className="contact-form-wrapper reveal" id="contact-form" style={{ minHeight: '468px' }}>
              <GHLForm formId="3c7RZK0i0Hs1p2iUMbOO" formName="Contact Formulier Site" height={468} />
            </div>

            <div className="contact-info reveal">
              <h3>Contactgegevens</h3>
              <div className="contact-info-item">
                <div className="contact-info-icon">&#9993;</div>
                <div className="contact-info-text">
                  <h4>E-mail</h4>
                  <a href="mailto:info@ai-volution.nl">info@ai-volution.nl</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">&#9742;</div>
                <div className="contact-info-text">
                  <h4>Telefoon</h4>
                  <a href="tel:+3197010275159">+31 970 102 75159</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">&#9873;</div>
                <div className="contact-info-text">
                  <h4>Kantoor</h4>
                  <p>De Vriesstraat 26<br />3261 PC Oud-Beijerland</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">&#9202;</div>
                <div className="contact-info-text">
                  <h4>Openingstijden</h4>
                  <p>Ma - Vr: 9:00 - 17:00</p>
                </div>
              </div>
              <div className="contact-consult-box">
                <h4>Gratis AI Consult</h4>
                <p>In 30 minuten bespreken we jouw uitdagingen en laten we zien welke AI-oplossingen direct impact maken op je bedrijf.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KlantenScroll />

      {/* WAT JE KUNT VERWACHTEN */}
      <section className="expect-section">
        <div className="container">
          <div className="section-eyebrow">Wat je kunt verwachten</div>
          <h2>Na je eerste gesprek</h2>
          <div className="expect-grid">
            <div className="expect-card reveal">
              <div className="expect-num">01</div>
              <h3>Helder inzicht</h3>
              <p>Je weet precies welke processen het meeste opleveren om te automatiseren.</p>
            </div>
            <div className="expect-card reveal">
              <div className="expect-num">02</div>
              <h3>Concreet voorstel</h3>
              <p>Een plan met tijdlijn, verwachte ROI en duidelijke deliverables.</p>
            </div>
            <div className="expect-card reveal">
              <div className="expect-num">03</div>
              <h3>Geen verplichtingen</h3>
              <p>100% vrijblijvend. Je beslist zelf of je verder wilt.</p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />
    </Layout>
  )
}
