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
  { text: 'AI AUDIT' },
  { text: 'IMPLEMENTATIE', ghost: true },
  { text: 'TRAINING' },
  { text: 'DOORONTWIKKELING', ghost: true },
]

export default function AanpakPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>Onze Aanpak: 4 Fasen naar AI | AI Volution</title>
        <meta name="description" content="AI Volution werkt in 4 fasen: audit, implementatie, training en doorontwikkeling. Binnen weken live met ROI-garantie voor MKB+ bedrijven. Ontdek onze aanpak." />
        <link rel="canonical" href="https://ai-volution.nl/aanpak.html" />
        <meta property="og:title" content="Onze Aanpak: 4 Fasen naar AI | AI Volution" />
        <meta property="og:description" content="AI Volution werkt in 4 fasen: audit, implementatie, training en doorontwikkeling. Binnen weken live met ROI-garantie voor MKB+ bedrijven. Ontdek onze aanpak." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/aanpak.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Onze Aanpak: 4 Fasen naar AI | AI Volution" />
        <meta name="twitter:description" content="AI Volution werkt in 4 fasen: audit, implementatie, training en doorontwikkeling. Binnen weken live met ROI-garantie voor MKB+ bedrijven. Ontdek onze aanpak." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "Onze Aanpak: 4 Fasen naar AI", "url": "https://ai-volution.nl/aanpak.html",
          "description": "AI Volution werkt in 4 fasen: audit, implementatie, training en doorontwikkeling. Binnen weken live met ROI-garantie voor MKB+ bedrijven. Ontdek onze aanpak.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Onze Aanpak</div>
            <h1>Praktisch &amp; resultaatgericht</h1>
            <p>Geen lange trajecten, maar stapsgewijze oplevering met maximale grip op ROI</p>
          </div>
        </section>

        <KlantenScroll />

        {/* VIDEO */}
        <section style={{ padding: '0 0 60px', background: 'transparent' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,.08)', border: '1px solid var(--border)' }}>
              <div style={{ position: 'relative', paddingTop: '56.25%', background: 'center / contain no-repeat url(https://fast.wistia.com/embed/medias/6wr8b926yf/swatch)', filter: 'blur(5px)' }}>
                <iframe
                  src="https://fast.wistia.com/embed/iframe/6wr8b926yf?seo=false"
                  title="AI Volution Aanpak Video"
                  allow="autoplay; fullscreen"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', filter: 'none' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="aanpak-intro">
          <div className="container">
            <h2>Van strategie naar resultaten in weken, niet maanden</h2>
            <p>We doen niet aan eindeloze pilots. Met AI Volution ga je binnen enkele weken na de audit live. Direct meetbare ROI, terwijl je in eigen tempo kunt opschalen.</p>
          </div>
        </section>
      </div>

      {/* 4 STAPPEN */}
      <section className="steps-section grid-flow">
        <div className="container">
          <div className="steps-list">
            <div className="step-item reveal">
              <div className="step-num">01</div>
              <div className="step-content">
                <h3>AI Audit</h3>
                <p>We starten met een grondige AI-audit van jouw processen om automatiseringskansen te identificeren.</p>
              </div>
            </div>
            <div className="step-item reveal">
              <div className="step-num">02</div>
              <div className="step-content">
                <h3>AI Implementatie</h3>
                <p>We ontwikkelen en implementeren slimme AI-oplossingen die naadloos integreren met je bestaande systemen.</p>
              </div>
            </div>
            <div className="step-item reveal">
              <div className="step-num">03</div>
              <div className="step-content">
                <h3>AI Training</h3>
                <p>We trainen jouw team om de AI-oplossingen optimaal te gebruiken en te onderhouden.</p>
              </div>
            </div>
            <div className="step-item reveal">
              <div className="step-num">04</div>
              <div className="step-content">
                <h3>AI Doorontwikkeling &amp; Partnership</h3>
                <p>We zorgen voor continue verbetering en bieden langdurige partnership voor maximaal rendement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* SUCCESFACTOREN */}
      <section className="succesfactoren reveal" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Waarom onze AI-aanpak succesvol is</h2>
          <p className="section-intro">Met onze bewezen 4-fasen methodiek realiseren we concrete resultaten en meetbare besparingen voor jouw organisatie.</p>
          <div className="succesfactoren-grid">
            {[
              'AI-audit identificeert de processen met hoogste ROI-potentieel',
              'Gefaseerde implementatie zorgt voor snelle time-to-value',
              'Praktijkgerichte training garandeert succesvolle adoptie',
              'Continue doorontwikkeling maximaliseert langetermijn waarde',
              'MKB+ bedrijven besparen gemiddeld $6.000-$24.000/jaar met AI-tools (Bron: Intuit/ICIC, 2025)',
              'Partnership model zorgt voor duurzame automatisering',
            ].map((text, i) => (
              <div className="succesfactor-item" key={i}>
                <div className="succesfactor-check">&#10003;</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ROI GARANTIE AUDIT */}
      <section className="roi-audit reveal">
        <div className="container">
          <h2>Jouw Automatiserings ROI, Gegarandeerd in 10 Dagen</h2>
          <p>We starten elk project met een grondige AI ROI Garantie Audit om precies te bepalen welke automatiseringen de grootste impact hebben voor jouw bedrijf. Zo investeer je gegarandeerd in de juiste oplossingen met bewezen ROI.</p>

          <div className="roi-card">
            <h3>AI ROI Garantie Audit (v.a. 5.000 euro)</h3>
            <p>Wij garanderen dat je een concreet AI ROI-plan ontvangt met direct toepasbare verbeteringen om kosten te verlagen of omzet te verhogen. Vinden wij die verbeteringen niet, dan krijg je je 5.000 euro volledig terug.</p>

            <h4>Wat je krijgt</h4>
            <ul className="roi-list">
              <li>Complete analyse van al jouw bedrijfsprocessen</li>
              <li>Concrete automatiseringsvoorstellen met ROI berekening</li>
              <li>Geprioriteerde implementatieroadmap (quick wins tot AI-agents)</li>
              <li>Fysieke analyse op locatie van je werkprocessen en systemen</li>
              <li>Analyse van de audit wordt op locatie uitgevoerd</li>
              <li>Persoonlijke presentatie van alle mogelijkheden</li>
            </ul>

            <div className="roi-result">
              <p>Resultaat: exacte kostprijs en tijdlijn voor jouw automatiseringsproject, of je krijgt je investering terugbetaald.</p>
            </div>

            <div className="roi-na-audit">
              <h4>Na de audit weet je precies</h4>
              <ul>
                <li>Welke AI-Agent automatiseringen jullie direct geld zullen besparen</li>
                <li>Wat de investering en doorlooptijd per project is</li>
                <li>Hoe wij jouw specifieke processen gaan automatiseren</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARANTE PRICING */}
      <section className="pricing-section reveal">
        <div className="container">
          <h2>Transparante AI-automatisering pricing</h2>
          <p className="section-intro">Na de AI-audit bepalen we samen de exacte kosten voor het ontwikkelen van jouw AI Workforce automatisering plus de maandelijkse onderhoudskosten.</p>

          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Audit bepaalt exacte pricing</h3>
              <p>Door de grondige analyse weten we precies welke automatisering je nodig hebt en wat dit kost om te ontwikkelen.</p>
            </div>
            <div className="pricing-card">
              <h3>Voorspelbare ontwikkelkosten</h3>
              <p>Vaste prijs voor het bouwen van jouw AI Workforce automatisering -- geen verrassingen achteraf.</p>
            </div>
            <div className="pricing-card">
              <h3>Duidelijke onderhoudskosten</h3>
              <p>Transparante maandelijkse kosten voor beheer, updates en doorlopende verbetering van je AI-systemen.</p>
            </div>
            <div className="pricing-card">
              <h3>ROI-gebaseerde investering</h3>
              <p>De audit toont precies hoeveel je gaat besparen, zodat je kunt zien dat de investering zichzelf terugverdient.</p>
            </div>
          </div>

          <div className="pricing-timeline">
            <h3>4-fasen pricing overview</h3>
            {[
              { num: '1', title: 'AI ROI Garantie Audit (v.a. 5.000 euro)', desc: 'Analyse van jouw processen en bepaling van exacte ontwikkelkosten.' },
              { num: '2', title: 'AI Implementatie', desc: 'Vaste prijs op basis van audit voor het bouwen van jouw AI Workforce automatisering.' },
              { num: '3', title: 'AI Training', desc: 'Onderdeel van implementatie -- training van jouw team voor optimaal gebruik.' },
              { num: '4', title: 'AI Doorontwikkeling & Partnership', desc: 'Maandelijkse kosten voor beheer, updates en doorlopende verbetering.' },
            ].map((item) => (
              <div className="timeline-item" key={item.num}>
                <div className="timeline-num">{item.num}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <KlantenScroll />

      <CTABox
        heading="Plan jouw gratis AI ROI Audit"
        text="Plan een gratis en vrijblijvend consult en ontdek welke resultaten we voor jullie kunnen verbeteren."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
