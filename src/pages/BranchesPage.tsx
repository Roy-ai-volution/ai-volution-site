import { Link } from 'react-router-dom'
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
  { text: 'B2B TECH SAAS' },
  { text: 'LOGISTIEK', ghost: true },
  { text: '(B2B) E-COMMERCE' },
  { text: 'DIENSTVERLENERS', ghost: true },
]

export default function BranchesPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>AI Automatisering per Branche | AI Volution</title>
        <meta name="description" content="AI Workforces op maat per branche: B2B SaaS, logistiek, e-commerce en dienstverleners. Branche-specifieke AI-automatisering door AI Volution. Bekijk onze aanpak." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://ai-volution.nl/branches.html" />
        <meta property="og:title" content="AI Automatisering per Branche | AI Volution" />
        <meta property="og:description" content="AI Workforces op maat per branche: B2B SaaS, logistiek, e-commerce en dienstverleners. Branche-specifieke AI-automatisering door AI Volution. Bekijk onze aanpak." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/branches.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automatisering per Branche | AI Volution" />
        <meta name="twitter:description" content="AI Workforces op maat per branche: B2B SaaS, logistiek, e-commerce en dienstverleners. Branche-specifieke AI-automatisering door AI Volution. Bekijk onze aanpak." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AI Automatisering per Branche",
          "url": "https://ai-volution.nl/branches.html",
          "description": "AI Workforces op maat per branche: B2B SaaS, logistiek, e-commerce en dienstverleners. Branche-specifieke AI-automatisering door AI Volution. Bekijk onze aanpak.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Branches</div>
            <h1>AI voor bedrijven: branches die wij bedienen</h1>
            <p>Onze AI agents voor bedrijven zijn afgestemd op de unieke behoeften van verschillende industrie&euml;n. Van B2B SaaS tot logistiek en e-commerce.</p>
          </div>
        </section>

        <KlantenScroll />
      </div>

      {/* BRANCHES */}
      <section className="branches grid-hex" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="branches-grid">
            <div className="branch-card reveal">
              <h3>B2B Tech high-touch SaaS bedrijven</h3>
              <p className="branch-full">SaaS-bedrijven groeien niet door meer features, maar door slimmere processen. We nemen je onboarding, support en sales voorbereiding over met AI Workforces die klantdata verzamelen, antwoorden geven en alles klaarzetten voor je team, nog voordat iemand op een ticket reageert.</p>
              <Link to="/branches/b2b-saas" className="branch-link">Bekijk AI voor B2B SaaS bedrijven &rarr;</Link>
            </div>
            <div className="branch-card reveal">
              <h3>Logistiek &amp; Supply Chain</h3>
              <p className="branch-full">Orderstatus checken, pakketnummers opzoeken, carriers matchen, leveranciers mailen - honderden uren per maand aan handmatig proceswerk. Onze AI Workforces automatiseren de complete supply chain operatie zodat je team zich richt op uitzonderingen, niet op routine.</p>
              <Link to="/branches/logistiek" className="branch-link">Bekijk AI voor Logistiek &amp; Supply Chain &rarr;</Link>
            </div>
            <div className="branch-card reveal">
              <h3>(B2B) E-commerce</h3>
              <p className="branch-full">Meer orders. Minder frictie. AI regelt de rest. We automatiseren orderverwerking, klantvragen, betalingen en retouren met AI Workforces die 24/7 draaien. Geen verloren leads, geen wachttijd, geen handmatige processen. Je conversie stijgt en klanten blijven terugkomen.</p>
              <Link to="/branches/ecommerce" className="branch-link">Bekijk AI voor E-commerce &rarr;</Link>
            </div>
            <div className="branch-card reveal">
              <h3>Dienstverleners</h3>
              <p className="branch-full">Minder administratie. Meer aandacht voor je klant. We automatiseren de complete klantreis: van intake tot loyaliteit, van facturatie tot 24/7 bereikbaarheid. Klantvragen worden direct beantwoord, voortgang helder gecommuniceerd, zonder tussenkomst van je team.</p>
              <Link to="/branches/dienstverleners" className="branch-link">Bekijk AI voor Dienstverleners &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-mark">"</div>
          <blockquote>
            Elke branche heeft unieke uitdagingen. Wij bouwen AI Workforces die precies passen bij jouw sector.
          </blockquote>
          <div className="quote-attribution">AI Volution</div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <CTABox
        heading="Ontdek wat AI voor jouw branche kan betekenen"
        text="Plan een gratis en vrijblijvend consult en ontdek welke resultaten we voor jullie kunnen verbeteren."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
