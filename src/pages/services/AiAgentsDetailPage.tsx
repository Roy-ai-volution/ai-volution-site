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
  { text: 'AGENTIC AI' },
  { text: 'AI WORKFORCE', ghost: true },
  { text: 'AUTONOMOUS AGENTS' },
  { text: 'MULTI-AGENT TEAMS', ghost: true },
]

const moduleCards = [
  { num: '01', title: 'Sales AI Agent', sub: 'Van lead tot deal - volledig geautomatiseerd', desc: 'Kwalificeert leads, plant afspraken in, werkt CRM bij en stuurt gepersonaliseerde follow-ups. Zorgt dat je verkoopteam alleen nog hoeft te focussen op sluiten.', bullets: ['Automatische lead kwalificatie op basis van gedrag en profiel', 'Intelligente afspraak planning met optimale timing', 'CRM synchronisatie en data enrichment', 'Gepersonaliseerde follow-up sequences'], result: 'Resultaat: Verhoogt conversie met 40%, bespaart 10-15 uur per week, geen lead meer gemist.' },
  { num: '02', title: 'Content AI Agent', sub: 'Consistent content die converteert', desc: 'Schrijft blogs, social media posts en nieuwsbrieven op basis van jouw tone-of-voice. Plant content automatisch in en past aan op performance data.', bullets: ['AI content generatie in jouw huisstijl en tone-of-voice', 'Automatische content planning en publicatie', 'Performance analyse en content verbetering', 'Multi-platform content aanpassingen'], result: 'Resultaat: Consistente content output, 70% meer engagement, geen writer\'s block meer.' },
  { num: '03', title: 'Customer Service AI Agent', sub: '24/7 klantenservice zonder pauzes', desc: 'Beantwoordt klantenvragen, routeert complexe cases door en werkt kennisbase bij. Beschikbaar 24/7 met menselijke backup wanneer nodig.', bullets: ['Intelligent chat en email support systeem', 'Automatische ticket routing naar juiste afdeling', 'Zelflerend systeem dat kennisbase bijwerkt', 'Escalatie naar menselijke agent bij complexe vragen'], result: 'Resultaat: 85% vragen automatisch opgelost, 24/7 beschikbaarheid, hogere klanttevredenheid.' },
  { num: '04', title: 'Data & Insights AI Agent', sub: 'Jouw persoonlijke business analist die nooit slaapt', desc: 'Analyseert dagelijks alle bedrijfsdata, maakt rapporten en waarschuwt bij afwijkingen. Jouw persoonlijke business analist die nooit slaapt.', bullets: ['Automatische data verzameling uit alle business tools', 'AI-analyse van trends, patronen en afwijkingen', 'Geautomatiseerde rapportage en dashboards', 'Proactieve alerts bij belangrijke wijzigingen'], result: 'Resultaat: Realtime business inzichten, 90% accuratere voorspellingen, proactieve besluitvorming.' },
  { num: '05', title: 'Administratie AI Agent', sub: 'Van factuur tot boekhouding - volledig hands-off', desc: 'Verwerkt inkomende facturen automatisch: scant, controleert op juistheid, koppelt aan inkopen, routeert voor goedkeuring en boekt direct in de administratie. Van ontvangst tot boekhouding volledig hands-off.', bullets: ['OCR scanning van inkomende facturen en documenten', 'Automatische controle op juistheid en duplicaten', 'Koppeling aan inkooporders en contracten', 'Workflow voor goedkeuring en boekhouding'], result: 'Resultaat: 95% minder handmatig werk, geen fouten meer, snellere cashflow.' },
  { num: '06', title: 'Agentic AI Workforce', sub: 'De volgende fase: AI-teams die je bedrijf aansturen', desc: 'Losse agents zijn krachtig. Maar de echte doorbraak zit in Agentic AI: meerdere agents die samenwerken als een team, zelfstandig redeneren over complexe situaties en elkaar inschakelen wanneer nodig. Wij bouwen complete AI Workforces - digitale afdelingen die autonoom opereren.', bullets: ['Multi-agent teams die onderling communiceren en samenwerken', 'Zelfstandig redeneren, plannen en beslissingen nemen', 'Orchestratie-engine die agents aanstuurt op basis van context', 'Continue zelfevaluatie en verbetering zonder menselijke input'], result: 'Resultaat: Complete afdelingen op autopilot, schaalbaarheid zonder extra FTE, de AI Workforce filosofie in de praktijk.' },
]

const processSteps = [
  { num: '01', icon: '\uD83D\uDD0D', title: 'Analyse', description: 'We analyseren welke taken in je bedrijf autonome AI Agents kunnen overnemen.' },
  { num: '02', icon: '\uD83C\uDFAF', title: 'Ontwerp', description: 'We ontwerpen een multi-agent systeem: Agents die samenwerken, data delen en zelfstandig beslissingen nemen.' },
  { num: '03', icon: '\u26A1', title: 'Bouw', description: 'We bouwen en trainen je AI Agents op jouw bedrijfsdata en processen.' },
  { num: '04', icon: '\uD83E\uDDEA', title: 'Test', description: 'Uitgebreide testing: edge cases, foutafhandeling, escalatie naar mensen bij twijfel.' },
  { num: '05', icon: '\uD83D\uDE80', title: 'Live', description: 'Je AI Agent Workforce opereert autonoom. Wij monitoren en schalen op waar nodig.' },
]

const faqItems = [
  { question: 'Wat is Agentic AI en hoe verschilt het van gewone automatisering?', answer: 'Gewone automatisering volgt vaste regels: als X, doe Y. AI Agents gaan een stap verder en nemen zelfstandig beslissingen. Agentic AI is de volgende evolutie: meerdere agents die samenwerken als een team, zelfstandig redeneren over complexe situaties, en elkaar inschakelen wanneer nodig. Denk aan een complete digitale afdeling die autonoom opereert - dat is onze AI Workforce filosofie.' },
  { question: 'Hoe lang duurt het om een AI Agent te implementeren?', answer: 'De meeste AI Agents zijn binnen 1-2 weken operationeel. We starten met een analyse van je huidige processen, bouwen vervolgens de agent op maat en testen deze grondig. Na go-live blijven we 30 dagen monitoren om de agent te verbeteren.' },
  { question: 'Zijn AI Agents veilig en betrouwbaar?', answer: 'Ja, onze AI Agents werken binnen strikte beveiligingsrichtlijnen met multi-layer security, data encryptie en compliance met AVG. Alle agents hebben fallback scenarios en kunnen menselijke interventie inschakelen wanneer nodig. Uptime garantie: 99.7%.' },
  { question: 'Wat gebeurt er als de AI Agent een fout maakt?', answer: 'Onze AI Agents hebben ingebouwde safety mechanisms en leren van fouten. Bij kritieke processen zijn er altijd human-in-the-loop checks. Plus: alle acties zijn gelogd en reversible. We monitoren 24/7 en kunnen direct bijsturen.' },
  { question: 'Kunnen AI Agents integreren met onze bestaande software?', answer: 'Ja, onze AI Agents integreren via API\'s met vrijwel alle business software zoals CRM, ERP, email, calendar, accounting tools etc. We hebben standaard connectoren voor 200+ populaire tools en kunnen custom integraties bouwen.' },
  { question: 'Wat zijn de kosten van AI Agents?', answer: 'Kosten vari\u00ebren per agent en complexiteit, maar gemiddeld betalen klanten zich terug binnen 2-4 maanden door tijdsbesparing en effici\u00ebntieverbetering. We bieden verschillende pricing modellen: vast bedrag, pay-per-use, of revenue sharing.' },
  { question: 'Kunnen we meerdere AI Agents tegelijk inzetten als AI Workforce?', answer: 'Absoluut - dat is precies waar onze AI Workforce aanpak om draait. Veel klanten starten met 1 agent en breiden uit naar een compleet multi-agent team. Een Sales Agent die leads doorgeeft aan een Customer Service Agent, die de Administratie Agent inschakelt voor facturering. De agents communiceren onderling, delen context en nemen gezamenlijk beslissingen. Wij bouwen deze orchestratie zodat het naadloos werkt.' },
  { question: 'Hoe meet je het succes van een AI Agent?', answer: 'We stellen samen KPI\'s vast zoals tijdsbesparing, kostenverlaging, accuraatheid, en klanttevredenheid. Elke agent heeft een real-time dashboard met performance metrics. Maandelijks rapporteren we ROI en verbetersuggesties.' },
]

function AgentsContent() {
  const openModal = useOpenModal()

  return (
    <>
      <Helmet>
        <title>AI Agent Workforces | AI Volution</title>
        <meta name="description" content="AI Volution bouwt autonome AI Workforces die afdelingen aansturen, beslissingen nemen en continu leren. De volgende fase van AI. Bekijk onze aanpak." />
        <link rel="canonical" href="https://ai-volution.nl/diensten/ai-agents" />
        <meta property="og:title" content="AI Agent Workforces | AI Volution" />
        <meta property="og:description" content="AI Volution bouwt autonome AI Workforces die afdelingen aansturen, beslissingen nemen en continu leren. De volgende fase van AI. Bekijk onze aanpak." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/diensten/ai-agents" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "AI Agent Workforces",
          "description": "AI Volution bouwt autonome AI Workforces die afdelingen aansturen, beslissingen nemen en continu leren. De volgende fase van AI. Bekijk onze aanpak.",
          "serviceType": "AI Agent Workforces",
          "provider": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" },
          "areaServed": { "@type": "Country", "name": "Nederland" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-agents hero-split">
          <div className="container">
            <div>
              <span className="hero-emoji" aria-hidden="true">&#129302;</span>
              <div className="section-eyebrow">AI Agents & Agentic AI</div>
              <h1>AI Agents & Agentic AI Workforces</h1>
              <p>AI Volution bouwt intelligente AI Agents die 24/7 werken voor Nederlandse bedrijven. Maar we gaan verder: met Agentic AI bouwen we complete AI Workforces - teams van agents die zelfstandig redeneren, samenwerken en beslissingen nemen. Dit is de volgende fase van AI, en wij zetten er nu al vol op in.</p>
            </div>
            <div className="hero-visual">
              <div className="agent-workflow-visual">
                <div className="agent-node" style={{ '--delay': '0s' } as React.CSSProperties}>Input ontvangen</div>
                <div className="agent-node agent-node-accent" style={{ '--delay': '.1s' } as React.CSSProperties}>Agent redeneert</div>
                <div className="agent-node" style={{ '--delay': '.2s' } as React.CSSProperties}>Actie uitvoeren</div>
                <div className="agent-node agent-node-accent" style={{ '--delay': '.3s' } as React.CSSProperties}>Resultaat leveren</div>
              </div>
            </div>
          </div>
        </section>
        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">Van Losse AI Agents naar Complete AI Workforces</h2>
          <p>De meeste bedrijven stoppen bij een chatbot of een enkele automatisering. Wij bouwen complete AI Workforces: teams van gespecialiseerde agents die samenwerken, informatie delen en zelfstandig beslissingen nemen. Geen scripts, geen rigide regels - maar agents die redeneren, leren en handelen. Dit is Agentic AI, en het verandert alles.</p>
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
            <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Autonome operatie</div></div>
            <div className="stat-item"><div className="stat-num">2-4 wk</div><div className="stat-label">Implementatietijd</div></div>
            <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">Vergeten taken</div></div>
          </div>
        </div>
      </section>

      <ProcessFlow
        title="Zo bouwen we jouw AI Agent Workforce"
        steps={processSteps}
        timeline={['Week 1: analyse + ontwerp', 'Week 2-4: bouw + test', 'Week 5-6: live + doorontwikkeling']}
      />

      <section className="faq-section reveal" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Veelgestelde vragen</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABox
        heading="Klaar voor jouw eigen AI Workforce?"
        text="Plan een gratis consult en ontdek hoe Agentic AI jouw bedrijf versterkt. Van losse agents naar een complete, autonome digitale workforce."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function AiAgentsDetailPage() {
  return <Layout><AgentsContent /></Layout>
}
