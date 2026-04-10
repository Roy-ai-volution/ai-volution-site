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
  { text: 'KLANTENSERVICE' },
  { text: 'MAIL TRIAGE', ghost: true },
  { text: 'TICKETING' },
  { text: 'KENNISBANK', ghost: true },
]

const moduleCards = [
  { num: '01', title: '24/7 Klantenservice AI', sub: 'Altijd bereikbaar, altijd persoonlijk', desc: 'Klanten verwachten direct antwoord, ook buiten kantoortijden. Onze native Nederlandse AI beantwoordt vragen via telefoon, WhatsApp, chat en e-mail - 24/7, zonder wachtrij, met volledige klantcontext.', bullets: ['Native Nederlandse voice AI voor inkomende telefoontjes', 'WhatsApp, chat en e-mail support op autopilot', 'Klantherkenning met volledige context bij elk contactmoment', 'Naadloze overdracht naar menselijke agent wanneer nodig'], result: 'Resultaat: 24/7 bereikbaarheid zonder extra FTE, geen wachtrij meer, hogere klanttevredenheid.' },
  { num: '02', title: 'Mail Triage & Routing', sub: 'Elke mail in de juiste bak binnen seconden', desc: 'Dagelijks tientallen tot honderden mails handmatig sorteren, categoriseren en doorsturen kost uren. Onze AI classificeert inkomende mail automatisch en routeert naar de juiste afdeling of medewerker.', bullets: ['Automatische classificatie in relevante categorieen', 'Intelligent doorsturen naar juiste afdeling of persoon', 'Prioriteitsbepaling op basis van urgentie en klantwaarde', 'Automatisch antwoord bij standaardvragen'], result: 'Resultaat: 90% van alle inkomende mail automatisch geclassificeerd en gerouteerd, uren per dag bespaard.' },
  { num: '03', title: 'Retour & Klachtafhandeling', sub: 'Van klacht tot oplossing zonder handmatig werk', desc: 'Retourverzoeken beoordelen, foto\'s controleren, leveranciers aanschrijven en credit nota\'s opvolgen - het retourproces is een van de meest tijdrovende supporttaken. Onze AI neemt het over.', bullets: ['Automatische intake en categorisatie van retourverzoeken', 'AI-beoordeling van bewijsmateriaal en foto\'s', 'Geautomatiseerde leverancierscommunicatie', 'Credit nota opvolging en escalatie bij uitblijvend antwoord'], result: 'Resultaat: Retourafhandeling van weken naar dagen, geen handmatige opvolging meer, volledige traceerbaarheid.' },
  { num: '04', title: 'Order & Tracking Communicatie', sub: 'Proactief informeren in plaats van reactief beantwoorden', desc: '"Waar is mijn pakket?" is de meest gestelde supportvraag. Onze AI monitort verzendingen realtime, informeert klanten proactief bij vertragingen en koppelt tracking automatisch aan orders.', bullets: ['Automatisch trackingnummers koppelen aan orders', 'Proactieve notificatie bij vertragingen of problemen', 'Multi-carrier monitoring en statusupdates', 'Automatisch antwoord op tracking-gerelateerde vragen'], result: 'Resultaat: 80% minder "waar is mijn pakket" vragen, klanten proactief geinformeerd, minder supportdruk.' },
  { num: '05', title: 'Kennisbank & Self-Service', sub: 'Klanten helpen zichzelf te helpen', desc: 'De meeste supportvragen zijn repetitief en staan al ergens beantwoord. Onze AI bouwt en onderhoudt een intelligente kennisbank die klanten direct de juiste antwoorden geeft via elk kanaal.', bullets: ['Centrale kennisbank met automatische updates', 'AI-gestuurde FAQ die leert van supportinteracties', 'In-app en on-site support via slimme chatassistent', 'Automatische suggesties op basis van klantcontext'], result: 'Resultaat: 60% minder repetitieve vragen, klanten vinden zelf het antwoord, kennisbank altijd up-to-date.' },
  { num: '06', title: 'Escalatie & Ticket Management', sub: 'De juiste vraag bij de juiste persoon op het juiste moment', desc: 'Complexe cases die te lang blijven liggen, onduidelijke escalatiepaden en tickets die tussen wal en schip vallen. Onze AI bewaakt doorlooptijden, escaleert automatisch en houdt alle betrokkenen op de hoogte.', bullets: ['Automatische ticket-aanmaak en -toewijzing', 'SLA-bewaking met proactieve escalatie', 'Context-rijke overdracht naar specialisten', 'Realtime dashboard met alle openstaande cases'], result: 'Resultaat: Geen tickets meer die blijven liggen, SLA\'s worden gehaald, volledige transparantie in supportperformance.' },
]

const processSteps = [
  { num: '01', icon: '\uD83D\uDD0D', title: 'Analyse', description: 'We analyseren je supportvolume: welke vragen komen het vaakst? Waar wacht je klant te lang?' },
  { num: '02', icon: '\uD83C\uDFAF', title: 'Ontwerp', description: 'We bouwen een workflow: automatische triage, standaard-antwoorden, escalatie naar je team bij complexe vragen.' },
  { num: '03', icon: '\u26A1', title: 'Bouw', description: 'Binnen 2 weken staat je Support Workforce live op mail, chat en WhatsApp.' },
  { num: '04', icon: '\uD83E\uDDEA', title: 'Test', description: 'We trainen de AI op jouw productkennis, tone of voice en bedrijfsspecifieke antwoorden.' },
  { num: '05', icon: '\uD83D\uDE80', title: 'Live', description: '24/7 bereikbaar in het Nederlands. Je klant krijgt binnen 30 seconden antwoord.' },
]

const faqItems = [
  { question: 'Hoeveel kost support automatisering?', answer: 'Elke situatie is maatwerk. We starten altijd met een audit waarin we je processen analyseren en een concreet plan met ROI-berekening opleveren. Zo weet je precies wat het oplevert voordat je investeert.' },
  { question: 'Spreekt de AI echt Nederlands?', answer: 'Ja, onze AI is specifiek getraind op natuurlijk Nederlands taalgebruik. Geen vertaalde templates, maar native Nederlandse conversatie die past bij jouw tone-of-voice. Dit voorkomt \'robot-irritatie\' en verhoogt de klanttevredenheid.' },
  { question: 'Kan de AI ook telefoontjes beantwoorden?', answer: 'Ja, onze Voice AI beantwoordt inkomende telefoontjes 24/7 in het Nederlands. Geen wachtrij, geen keuzemenu, geen kantooruren. Bij complexe vragen wordt de beller naadloos doorverbonden met een menselijke medewerker.' },
  { question: 'Hoe gaat de AI om met complexe of emotionele klachten?', answer: 'De AI herkent sentimenten en complexiteit. Bij emotionele of gevoelige situaties escaleert de AI direct naar een menselijke medewerker, inclusief volledige gesprekscontext. Je bepaalt wanneer de AI zelfstandig handelt en wanneer er wordt ge-escaleerd.' },
  { question: 'Met welke systemen integreert de support AI?', answer: 'Wij integreren met alle gangbare support- en CRM-systemen: Zendesk, Freshdesk, Intercom, HubSpot, Salesforce en meer. Daarnaast koppelen we met communicatiekanalen als WhatsApp Business, telefonie en e-mail.' },
  { question: 'Hoe snel is de support AI operationeel?', answer: 'Standaard implementatie: 4-6 weken. Dit omvat het trainen van de AI op je kennisbank, het koppelen van systemen en het instellen van escalatieregels. De AI wordt continu slimmer door te leren van elke interactie.' },
]

function SupportContent() {
  const openModal = useOpenModal()

  return (
    <>
      <Helmet>
        <title>Klantenservice Automatisering | AI Volution</title>
        <meta name="description" content="AI Volution bouwt 24/7 AI-gestuurde klantenservice in het Nederlands. Automatische mail triage, ticketing en retourafhandeling. Bekijk hoe het werkt." />
        <link rel="canonical" href="https://ai-volution.nl/diensten/klantenservice-automatisering" />
        <meta property="og:title" content="Klantenservice Automatisering | AI Volution" />
        <meta property="og:description" content="AI Volution bouwt 24/7 AI-gestuurde klantenservice in het Nederlands. Automatische mail triage, ticketing en retourafhandeling. Bekijk hoe het werkt." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/diensten/klantenservice-automatisering" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Klantenservice Automatisering",
          "description": "AI Volution bouwt 24/7 AI-gestuurde klantenservice in het Nederlands. Automatische mail triage, ticketing en retourafhandeling. Bekijk hoe het werkt.",
          "serviceType": "Klantenservice Automatisering",
          "provider": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" },
          "areaServed": { "@type": "Country", "name": "Nederland" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-support">
          <div className="container">
            <span className="hero-emoji" aria-hidden="true">&#128172;</span>
            <div className="section-eyebrow">Support Automatisering</div>
            <h1>Professionele Support Automatisering</h1>
            <p>AI Volution automatiseert klantenservice en support voor Nederlandse bedrijven. Van 24/7 bereikbaarheid tot intelligente mail triage - onze AI Workforces beantwoorden, routeren en lossen op. Altijd in het Nederlands, altijd met klantcontext, altijd direct.</p>
            <div className="hero-badge"><span className="badge-icon">&#128994;</span> 24/7 live bereikbaar</div>
          </div>
        </section>
        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">Complete Support Automatisering Oplossingen</h2>
          <p>AI Volution biedt 6 gespecialiseerde support automatisering modules. Van 24/7 klantenservice tot escalatiemanagement - we automatiseren het complete supportproces zodat je team zich kan richten op de complexe cases die er echt toe doen.</p>
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
            <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Bereikbaarheid zonder extra FTE</div></div>
            <div className="stat-item"><div className="stat-num">&lt;30s</div><div className="stat-label">Gemiddelde reactietijd</div></div>
            <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">Gemiste berichten buiten kantoortijden</div></div>
          </div>
        </div>
      </section>

      <ProcessFlow
        title="Zo bouwen we jouw Support Workforce"
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
        heading="Klaar om jouw support te automatiseren?"
        text="Plan een gratis en vrijblijvend consult en ontdek hoeveel uur jouw supportteam kan besparen met intelligente automatisering."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function AutomateSupportPage() {
  return <Layout><SupportContent /></Layout>
}
