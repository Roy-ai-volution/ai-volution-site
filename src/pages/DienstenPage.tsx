import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import KlantenScroll from '../components/KlantenScroll'
import Marquee from '../components/Marquee'
import CTABox from '../components/CTABox'
import RibbonCanvas from '../components/RibbonCanvas'
import RibbonCanvas2 from '../components/RibbonCanvas2'
import { useOpenModal } from '../hooks/useModalContext'

const ribbonBundles = [
  { r: 51, g: 166, b: 255, lines: 16, spread: 24, baseY: 0.32, speed: 0.42, amp: 120, freq: 0.003, twist: 0.005, opacity: 0.09, lineWidth: 0.7 },
  { r: 139, g: 92, b: 246, lines: 12, spread: 18, baseY: 0.52, speed: 0.38, amp: 100, freq: 0.0028, twist: 0.004, opacity: 0.06, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'AUTOMATE SALES' },
  { text: 'AUTOMATE MARKETING', ghost: true },
  { text: 'AI WORKFORCES' },
  { text: 'AUTOMATE FINANCE', ghost: true },
]

const dienstCards = [
  {
    num: '01', title: 'Automate Sales', sub: 'Meer focus. Meer deals. Minder handmatig werk.',
    desc: 'AI bereidt je sales voor, schrijft je offertes en volgt automatisch op. Zonder handmatig werk, maar wel meer show-ups, scherpere calls en hogere conversie.',
    bullets: ['Automatische salesvoorbereiding per prospect', 'AI-gegenereerde offertes en proposals', 'Geautomatiseerde follow-ups en reminders', 'Hogere conversie door slimmere opvolging'],
    link: '/diensten/sales-automatisering', linkText: 'Bekijk hoe Sales Automatisering werkt \u2192',
  },
  {
    num: '02', title: 'Automate Marketing', sub: 'Slimme content, minder handwerk, betere leads.',
    desc: 'We automatiseren je marketing rond een doel: kwalitatieve klanten aantrekken. Van lead scoring tot hyperpersoonlijke nurturing - elke boodschap sluit aan op gedrag, timing en behoefte. Je team krijgt meer gesprekken die tellen.',
    bullets: ['Geautomatiseerde lead scoring en kwalificatie', 'Hyperpersoonlijke nurturing flows', 'Content creatie en distributie op autopilot', 'Data-gedreven campagne verbetering'],
    link: '/diensten/marketing-automatisering', linkText: 'Bekijk hoe Marketing Automatisering werkt \u2192',
  },
  {
    num: '03', title: 'Automate Internal Processes', sub: 'Minder handwerk. Meer focus. Betere service.',
    desc: 'We automatiseren je interne processen zoals taakoverdracht, rapportages en planning. Geen losse Excels of ad-hoc werk meer. Alles loopt soepel en voorspelbaar, zodat je team beter levert en klanten tevredener zijn.',
    bullets: ['Geautomatiseerde taakoverdracht en workflows', 'Realtime rapportages en dashboards', 'Slimme planning en resourceallocatie', 'Eliminatie van handmatige data-invoer'],
    link: '/diensten/interne-processen', linkText: 'Bekijk hoe Procesautomatisering werkt \u2192',
  },
  {
    num: '04', title: 'Automate Finance', sub: 'Snellere cashflow. Minder handmatig werk.',
    desc: 'We automatiseren je financiele processen: factuurverwerking, incasso-opvolging, betalingsbewaking en rapportage. Geen handmatige invoer meer, geen gemiste betalingen, geen eindeloze Excel-exercities. Alles realtime en foutloos.',
    bullets: ['Automatische factuurverwerking en scan-en-herken', 'Directe incasso-opvolging via voice en WhatsApp', 'Realtime betalingsbewaking en cashflow monitoring', 'Geautomatiseerde financiele rapportage'],
    link: '/diensten/finance-automatisering', linkText: 'Bekijk hoe Finance Automatisering werkt \u2192',
  },
  {
    num: '05', title: 'Automate Support', sub: '24/7 bereikbaar. Altijd persoonlijk. Zonder extra FTE.',
    desc: 'We automatiseren je klantenservice en support: mail triage, ticketing, retourafhandeling en 24/7 bereikbaarheid via telefoon, WhatsApp en chat. Altijd in het Nederlands, altijd met klantcontext, altijd direct.',
    bullets: ['24/7 native Nederlandse klantenservice AI', 'Automatische mail classificatie en routing', 'Geautomatiseerde retour- en klachtafhandeling', 'Intelligente escalatie en ticket management'],
    link: '/diensten/klantenservice-automatisering', linkText: 'Bekijk hoe Klantenservice Automatisering werkt \u2192',
  },
  {
    num: '06', title: 'AI Agents', sub: 'Geen chatbot. Geen tool. Een volledig autonome AI Workforce.',
    desc: 'Onze Agentic AI Agents gaan verder dan automatisering. Ze denken mee, nemen beslissingen, schakelen tussen afdelingen en leren continu bij. Dit is de volgende fase van AI - en wij zetten er nu al vol op in.',
    bullets: ['Autonome AI Workforces die afdelingen aansturen', 'Agentic AI: agents die zelfstandig redeneren en handelen', 'Cross-departementale samenwerking tussen agents', 'Continu lerend en zelfverbeterend systeem'],
    link: '/diensten/ai-agents', linkText: 'Bekijk hoe AI Agents werken \u2192',
  },
]

function DienstenContent() {
  const openModal = useOpenModal()

  return (
    <>
      <Helmet>
        <title>AI Automatisering Diensten | AI Volution</title>
        <meta name="description" content="Ontdek 6 AI Workforce diensten van AI Volution: sales, marketing, support, finance en interne processen automatiseren. Resultaat binnen 4-6 weken. Bekijk onze aanpak." />
        <link rel="canonical" href="https://ai-volution.nl/diensten" />
        <meta property="og:title" content="AI Automatisering Diensten | AI Volution" />
        <meta property="og:description" content="Ontdek 6 AI Workforce diensten van AI Volution: sales, marketing, support, finance en interne processen automatiseren. Resultaat binnen 4-6 weken. Bekijk onze aanpak." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/diensten" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "AI Automatisering Diensten",
          "description": "Ontdek 6 AI Workforce diensten van AI Volution: sales, marketing, support, finance en interne processen automatiseren. Resultaat binnen 4-6 weken.",
          "serviceType": "AI Automatisering",
          "provider": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" },
          "areaServed": { "@type": "Country", "name": "Nederland" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Onze Diensten</div>
            <h1>AI automatisering diensten voor MKB+ bedrijven</h1>
            <p>Van sales automatisering tot klantenservice automatisering -- wij bouwen AI Workforces die jouw team versterken en je omzet per medewerker verhogen. Procesautomatisering met AI die vanaf dag een resultaat levert.</p>
          </div>
        </section>

        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      {/* DIENST CARDS */}
      <section className="grid-diagonal" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="dienst-cards">
            {dienstCards.map((card, i) => (
              <div key={i} className="dienst-card reveal">
                <div className="dienst-num">{card.num}</div>
                <h3>{card.title}</h3>
                <div className="dienst-sub-text">{card.sub}</div>
                <p>{card.desc}</p>
                <ul>
                  {card.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <Link to={card.link} className="btn-primary">{card.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERGELIJKING */}
      <section className="comparison-block reveal">
        <div className="container">
          <div className="section-eyebrow">Het verschil</div>
          <h2 className="section-title">Handmatig vs. AI Workforce</h2>
          <div className="comparison-grid">
            <div className="comparison-col manual">
              <h3>Handmatig</h3>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Responstijd</div><div className="comparison-value">4-24 uur</div></div></div>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Beschikbaarheid</div><div className="comparison-value">Kantooruren (8u/dag)</div></div></div>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Foutmarge</div><div className="comparison-value">5-15% bij handmatige invoer</div></div></div>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Schaalbaarheid</div><div className="comparison-value">Meer werk = meer mensen</div></div></div>
            </div>
            <div className="comparison-col ai">
              <h3>AI Workforce</h3>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Responstijd</div><div className="comparison-value">Onder 30 seconden</div></div></div>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Beschikbaarheid</div><div className="comparison-value">24/7, 365 dagen per jaar</div></div></div>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Foutmarge</div><div className="comparison-value">Onder 1%</div></div></div>
              <div className="comparison-row"><span className="comparison-dot"></span><div><div className="comparison-label">Schaalbaarheid</div><div className="comparison-value">Meer werk = zelfde kosten</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BREAK */}
      <section className="stat-break reveal">
        <div className="container">
          <div className="stat-strip">
            <div className="stat-item">
              <div className="stat-num">12u</div>
              <div className="stat-label">Bespaard per week met AI-tools (Bron: HubSpot, 2025)</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">88%</div>
              <div className="stat-label">Van bedrijven gebruikt AI regelmatig (Bron: McKinsey, 2025)</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">353%</div>
              <div className="stat-label">Gemiddelde ROI automation (Bron: Forrester, 2025)</div>
            </div>
          </div>
        </div>
      </section>

      <CTABox
        heading="Ontdek welke 3 processen jij morgen al kunt automatiseren"
        text="In een gratis scan van 30 minuten laten we zien waar jouw team de meeste uren verliest en hoe snel we dat oplossen. Inclusief concrete tijdlijn en ROI-berekening."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function DienstenPage() {
  return (
    <Layout>
      <DienstenContent />
    </Layout>
  )
}
