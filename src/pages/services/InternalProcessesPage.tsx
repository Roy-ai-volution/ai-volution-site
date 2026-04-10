import { Helmet } from 'react-helmet-async'
import Layout from '../../components/Layout'
import KlantenScroll from '../../components/KlantenScroll'
import Marquee from '../../components/Marquee'
import CTABox from '../../components/CTABox'
import FAQ from '../../components/FAQ'
import ProcessFlow from '../../components/ProcessFlow'
import RibbonCanvas from '../../components/RibbonCanvas'
import RibbonCanvas2 from '../../components/RibbonCanvas2'
import { useOpenModal } from '../../hooks/useModalContext'

const ribbonBundles = [
  { r: 26, g: 121, b: 255, lines: 20, spread: 30, baseY: 0.30, speed: 0.50, amp: 140, freq: 0.003, twist: 0.007, opacity: 0.11, lineWidth: 0.7 },
  { r: 139, g: 92, b: 246, lines: 16, spread: 22, baseY: 0.50, speed: 0.42, amp: 120, freq: 0.0025, twist: 0.005, opacity: 0.08, lineWidth: 0.6 },
  { r: 236, g: 72, b: 153, lines: 14, spread: 20, baseY: 0.40, speed: 0.38, amp: 100, freq: 0.0035, twist: 0.006, opacity: 0.06, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'DOCUMENTEN' },
  { text: 'RAPPORTAGE', ghost: true },
  { text: 'PLANNING' },
  { text: 'HR PROCESSEN', ghost: true },
]

const moduleCards = [
  { num: '01', title: 'Document Automatisering', sub: 'Van papier naar digitale workflows in minuten', desc: 'Handmatig documenten verwerken kost tijd en bevat fouten. Onze AI Workforces scannen, categoriseren en verwerken automatisch contracten, facturen en formulieren.', bullets: ['PDF en Word documenten automatisch uitlezen', 'Data extractie met AI-powered OCR technologie', 'Automatische categorisering op document type', 'Directe integratie met bestaande systemen'], result: 'Resultaat: 70% snellere verwerking, 95% minder fouten, complete audit trail.' },
  { num: '02', title: 'Rapportage Automatisering', sub: 'Real-time inzichten zonder handmatig werk', desc: 'Excel sheets samenstellen, data verzamelen en rapporten maken kost uren. Onze AI-dashboards genereren automatisch actuele rapporten uit al je systemen.', bullets: ['Data verzameling uit verschillende bronnen', 'Automatische berekeningen en KPI tracking', 'Visuele dashboards met real-time updates', 'Scheduled rapportages naar stakeholders'], result: 'Resultaat: Van 4 uur naar 10 minuten per rapport, altijd actuele data, betere beslissingen.' },
  { num: '03', title: 'Planning & Scheduling', sub: 'Optimale resource planning zonder conflicten', desc: 'Handmatige planning leidt tot dubbele boekingen en ineffici\u00ebnte resource verdeling. AI verbetert automatisch schema\'s en voorkomt conflicten.', bullets: ['AI-algoritmes voor optimale resource verdeling', 'Automatische conflict detectie en oplossing', 'Integratie met agenda\'s en planning tools', 'Real-time updates en notificaties'], result: 'Resultaat: 50% effici\u00ebntere planning, geen dubbele boekingen meer, betere resource benutting.' },
  { num: '04', title: 'HR Proces Automatisering', sub: 'Van onboarding tot performance management', desc: 'HR processen zijn vaak handmatig en tijdrovend. Automatiseer het complete employee journey van sollicitatie tot uitdiensttreding.', bullets: ['Geautomatiseerde onboarding workflows', 'Digitale verlof en tijd registratie', 'Performance review scheduling en tracking', 'Employee self-service portals'], result: 'Resultaat: 60% snellere HR processen, betere employee experience, volledige compliance.' },
  { num: '05', title: 'Data Synchronisatie', sub: 'E\u00e9n waarheid voor alle systemen', desc: 'Data inconsistentie tussen systemen zorgt voor fouten en verwarring. Houd alle systemen automatisch gesynchroniseerd met real-time data sync.', bullets: ['Bidirectionele synchronisatie tussen systemen', 'Real-time data validation en cleaning', 'Conflict resolution algoritmes', 'Audit trails voor alle data wijzigingen'], result: 'Resultaat: 100% data consistentie, 90% minder handmatige invoer, volledige data integriteit.' },
  { num: '06', title: 'Workflow Automatisering', sub: 'Van handmatige stappen naar slimme flows', desc: 'Complexe goedkeuringsprocessen en handmatige workflows vertragen het bedrijf. Automatiseer complete processen van begin tot eind.', bullets: ['Visual workflow designer voor proces mapping', 'Regel-gebaseerde decision making', 'Multi-level approval workflows', 'Exception handling en escalation'], result: 'Resultaat: 80% snellere doorlooptijden, geen bottlenecks meer, volledige proces transparantie.' },
]

const processSteps = [
  { num: '01', icon: '\uD83D\uDD0D', title: 'Analyse', description: 'We brengen je interne processen in kaart: taakoverdracht, rapportages, planning, communicatie.' },
  { num: '02', icon: '\uD83C\uDFAF', title: 'Ontwerp', description: 'We identificeren welke processen direct geautomatiseerd kunnen worden zonder je workflow te verstoren.' },
  { num: '03', icon: '\u26A1', title: 'Bouw', description: 'Binnen 4-6 weken draaien je eerste geautomatiseerde workflows.' },
  { num: '04', icon: '\uD83E\uDDEA', title: 'Test', description: 'Je team test, geeft feedback, wij passen aan. Tot het voelt alsof het er altijd was.' },
  { num: '05', icon: '\uD83D\uDE80', title: 'Live', description: 'Minder Excelsheets, minder ad-hoc werk, meer tijd voor het werk dat ertoe doet.' },
]

const faqItems = [
  { question: 'Hoeveel kost interne proces automatisering voor Nederlandse bedrijven?', answer: 'Elke situatie is maatwerk. We starten altijd met een audit waarin we je processen analyseren en een concreet plan met ROI-berekening opleveren. Zo weet je precies wat het oplevert voordat je investeert.' },
  { question: 'Welke interne proces automatisering tools gebruikt AI Volution?', answer: 'AI Volution werkt primair met n8n en Make, maar kan eigenlijk met alle bekende softwarepakketten automatiseren die een API hebben. Ons sterke punt: je hoeft geen nieuwe software aan te schaffen maar kunt blijven werken met je huidige tools als je daar tevreden mee bent. We integreren met Microsoft 365, Google Workspace, Exact Online, SAP, en custom AI Workforces via OpenAI GPT-4 en Claude.' },
  { question: 'Hoe lang duurt implementatie van interne proces automatisering?', answer: 'Standaard implementatie: 4-6 weken. Complexe multi-departement automation: 6-8 weken. AI Volution gebruikt agile methodiek met wekelijkse sprints. Eerste resultaten zichtbaar binnen 14 dagen.' },
  { question: 'Wat zijn bewezen resultaten van interne proces automatisering?', answer: 'Bedrijven die AI inzetten voor interne processen zien meetbare verbeteringen in snelheid, operationele nauwkeurigheid en kosteneffici\u00ebntie (Bron: McKinsey, 2025). AI Volution past deze technologie toe op de Nederlandse markt met lokale compliance en AVG-naleving.' },
  { question: 'Werkt interne proces automatisering voor kleine Nederlandse bedrijven?', answer: 'AI Volution werkt ook voor bedrijven vanaf 5 medewerkers. Elke opdracht begint met een audit zodat we alleen starten als we concrete waarde kunnen leveren. Minimale technische kennis vereist. Specialisatie: Nederlandse MKB+ markt.' },
  { question: 'Welke interne processen kunnen geautomatiseerd worden?', answer: 'AI Volution automatiseert: Document verwerking (PDF/Word extractie), rapportage generatie, HR workflows (onboarding/verlof), data synchronisatie tussen systemen, planning & scheduling, factuurverwerking, email routing, compliance checks, AVG-compliant data handling.' },
]

function InternalContent() {
  const openModal = useOpenModal()

  return (
    <>
      <Helmet>
        <title>Interne Proces Automatisering | AI Volution</title>
        <meta name="description" content="AI Volution automatiseert interne processen: workflows, rapportages en planning met AI Workforces. Minder handwerk, meer focus. Ontdek de mogelijkheden." />
        <link rel="canonical" href="https://ai-volution.nl/diensten/interne-processen" />
        <meta property="og:title" content="Interne Proces Automatisering | AI Volution" />
        <meta property="og:description" content="AI Volution automatiseert interne processen: workflows, rapportages en planning met AI Workforces. Minder handwerk, meer focus. Ontdek de mogelijkheden." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/diensten/interne-processen" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Interne Proces Automatisering",
          "description": "AI Volution automatiseert interne processen: workflows, rapportages en planning met AI Workforces. Minder handwerk, meer focus. Ontdek de mogelijkheden.",
          "serviceType": "Interne Proces Automatisering",
          "provider": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" },
          "areaServed": { "@type": "Country", "name": "Nederland" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-internal">
          <div className="container">
            <span className="hero-emoji" aria-hidden="true">&#9881;&#65039;</span>
            <div className="section-eyebrow">Interne Processen</div>
            <h1>Professionele Interne Proces Automatisering</h1>
            <p>88% van bedrijven zet AI inmiddels regelmatig in, maar slechts 6% haalt er echt waarde uit op schaal (Bron: McKinsey, 2025). Wij bouwen AI Workforces die jouw interne processen daadwerkelijk versnellen. Van documentverwerking tot rapportages -- geen pilots, maar werkende systemen.</p>
            <div className="hero-badge"><span className="badge-icon">&#9200;</span> 12+ uur/week bespaard</div>
          </div>
        </section>
        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">Complete Interne Proces Automatisering Oplossingen</h2>
          <p>AI Volution biedt 6 gespecialiseerde interne proces automatisering modules voor Nederlandse bedrijven. Implementatie: 4-6 weken.</p>
        </div>
      </section>

      <section className="grid-diagonal">
        <div className="container">
          <div className="dienst-cards">
            {moduleCards.map((card, i) => (
              <div key={i} className="dienst-card reveal">
                <div className="dienst-num">{card.num}</div>
                <h3>{card.title}</h3>
                <div className="dienst-sub-text">{card.sub}</div>
                <p>{card.desc}</p>
                <ul>{card.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                <div className="module-result">{card.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stat-break reveal">
        <div className="container">
          <div className="stat-strip">
            <div className="stat-item"><div className="stat-num">88%</div><div className="stat-label">Van bedrijven gebruikt AI regelmatig (Bron: McKinsey, 2025)</div></div>
            <div className="stat-item"><div className="stat-num">6%</div><div className="stat-label">Haalt er daadwerkelijk waarde op schaal uit (Bron: McKinsey, 2025)</div></div>
            <div className="stat-item"><div className="stat-num">20%+</div><div className="stat-label">Budget naar AI bij koplopers (Bron: McKinsey, 2025)</div></div>
          </div>
        </div>
      </section>

      <ProcessFlow
        title="Zo bouwen we jouw Operations Workforce"
        steps={processSteps}
        timeline={['Week 1: analyse + prioritering', 'Week 2-4: bouw + test', 'Week 5-6: live + doorontwikkeling']}
      />

      <section className="faq-section reveal" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Veelgestelde vragen</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABox
        heading="Bereken hoeveel uur jouw team verspilt aan handwerk"
        text="De meeste teams besteden meer dan de helft van hun week aan herhaalbaar werk. Plan een gratis proces-scan en ontdek welke taken je kunt automatiseren."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function InternalProcessesPage() {
  return <Layout><InternalContent /></Layout>
}
