import { Helmet } from 'react-helmet-async'
import Layout from '../../components/Layout'
import KlantenScroll from '../../components/KlantenScroll'
import Marquee from '../../components/Marquee'
import CTABox from '../../components/CTABox'
import FAQ from '../../components/FAQ'
import RibbonCanvas, { RibbonBundle } from '../../components/RibbonCanvas'
import RibbonCanvas2 from '../../components/RibbonCanvas2'
import { useModal } from '../../hooks/useModalContext'

const ribbonBundles: RibbonBundle[] = [
  { r: 51, g: 166, b: 255, lines: 18, spread: 26, baseY: 0.35, speed: 0.45, amp: 130, freq: 0.0028, twist: 0.006, opacity: 0.10, lineWidth: 0.7 },
  { r: 100, g: 130, b: 240, lines: 14, spread: 20, baseY: 0.55, speed: 0.40, amp: 110, freq: 0.003, twist: 0.005, opacity: 0.07, lineWidth: 0.6 },
  { r: 139, g: 92, b: 246, lines: 12, spread: 18, baseY: 0.45, speed: 0.35, amp: 90, freq: 0.0032, twist: 0.004, opacity: 0.05, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'ORDERSTATUS' },
  { text: 'TRACKING', ghost: true },
  { text: 'SUPPLY CHAIN' },
  { text: 'RETOURPROCES', ghost: true },
]

const faqItems = [
  { question: 'Met welke logistieke systemen integreert AI Volution?', answer: 'We integreren met WMS, TMS, ERP en ordersystemen via API. Denk aan WinApp, Exact, SAP, carrier portalen (DPD, GLS, PostNL) en leveranciersplatformen. Je huidige systemen blijven leidend.' },
  { question: 'Hoe gaat de AI om met multi-carrier trajecten?', answer: 'De AI herkent automatisch carrier codes op basis van nummerformaat en koppelt meerdere trajecten aan een order. Geen handmatig toevoegen meer van tweede of derde pakketnummers.' },
  { question: 'Kunnen we dit uitrollen naar meerdere warehouses?', answer: 'Ja, de architectuur is gebouwd om te schalen. Een nieuw warehouse toevoegen kost geen weken configuratie maar wordt binnen 24 uur operationeel in het AI-ecosysteem.' },
  { question: 'Hoe betrouwbaar is de automatische mail triage?', answer: 'Op basis van bewezen implementaties classificeert de AI 90%+ van alle inkomende mail correct. Bij twijfel routeert de AI naar een menselijke medewerker voor beoordeling.' },
  { question: 'Wat als een leverancier niet via API werkt?', answer: 'Geen probleem. De AI werkt ook met e-mail communicatie: automatisch mails versturen, antwoorden interpreteren en status bijwerken. API is sneller, maar niet verplicht.' },
  { question: 'Wat zijn de kosten voor een logistiek bedrijf?', answer: 'Varieert per volume en complexiteit. Bij bedrijven met 2.000+ orders/maand zien we gemiddeld een besparing van 1-2 FTE aan handmatig proceswerk, wat de investering ruimschoots terugverdient.' },
]

const modules = [
  { num: '01', title: 'Order & Statusmonitoring', sub: 'Realtime overzicht in plaats van handmatig checken', desc: 'Orders die 3+ werkdagen in dezelfde status staan handmatig filteren en opvolgen kost uren. Onze AI monitort elke order realtime, detecteert vertragingen automatisch en onderneemt actie voordat het een probleem wordt.', items: ['Automatische monitoring van alle orderstatus wijzigingen', 'Alerts bij orders die langer dan X dagen stilstaan', 'Geautomatiseerde opvolging naar leveranciers', 'Statuswijzigingen direct doorvoeren in ordersysteem'], result: 'Resultaat: Van 3 werkdagen wachttijd naar realtime monitoring, 50+ uur per maand bespaard op handmatige statuscontroles.' },
  { num: '02', title: 'Tracking & Carrier Management', sub: 'Geen pakketnummers meer handmatig opzoeken', desc: 'Pakketnummers opzoeken in leveranciersportalen, carriers matchen op basis van formaat, multi-carrier trajecten handmatig koppelen - het is precisiewerk dat uren kost. Onze AI doet het automatisch.', items: ['Automatisch pakketnummers ophalen via carrier API\'s', 'Intelligente carrier matching op basis van nummerformaat', 'Multi-carrier trajecten automatisch koppelen', 'Alerts bij pakketten die te lang onderweg zijn'], result: 'Resultaat: 80% minder handmatig tracking-werk, correcte carrier codes zonder "op gevoel" matchen, snellere klantcommunicatie.' },
  { num: '03', title: 'Leverancierscommunicatie', sub: 'Automatisch opvolgen, herinneren en escaleren', desc: 'Leveranciers die niet reageren op orderbevestigingen, annuleringsverzoeken of retourakkoorden - het kost eindeloze batch mails en herinneringen. Onze AI neemt de volledige leverancierscommunicatie over.', items: ['Automatische batch mails bij uitblijvende bevestigingen', 'Herinneringsflows met escalatie bij geen reactie', 'Annuleringsverzoeken verwerken en opvolgen', 'Alternatieve leveranciers zoeken bij annulering'], result: 'Resultaat: Geen handmatige herinneringsmails meer, leveranciers sneller in actie, minder orders die stil komen te staan.' },
  { num: '04', title: 'Retour & Claims Afhandeling', sub: 'Van claim tot creditering zonder handmatig werk', desc: 'Retourverzoeken beoordelen, foto\'s controleren, leveranciers aanschrijven, 2 weken wachten, 3x herinneren en dan escaleren - het retourproces is een van de meest frustrerende workflows. Onze AI automatiseert het volledig.', items: ['Automatische intake en categorisatie van claims', 'AI-beoordeling van bewijsmateriaal en foto\'s', 'Geautomatiseerde leverancierscommunicatie voor retourakkoord', 'Credit nota opvolging met escalatie bij uitblijven'], result: 'Resultaat: Retourafhandeling van weken naar dagen, geen handmatige opvolging meer, volledige traceerbaarheid.' },
  { num: '05', title: 'Facility & Locatiemonitoring', sub: 'Locaties die zichzelf beheren', desc: 'Fysieke locaties bewaken, incidenten afhandelen en onderhoud coordineren kost bij groei steeds meer mankracht. Onze AI koppelt camera-, slot- en sensormeldingen aan automatische workflows.', items: ['Camera- en sensordata koppelen aan AI-engine', 'Automatische incident-detectie en alerting', 'Ticket-aanmaak en toewijzing aan juiste team', 'Klanten proactief informeren bij incidenten'], result: 'Resultaat: Schalen naar 20+ locaties zonder extra FTE, snellere incident-response, operationele rust.' },
  { num: '06', title: 'Warehouse & Voorraadintelligentie', sub: 'Slimmer voorraadbeheer op basis van data', desc: 'Voorraadniveaus handmatig checken, beschikbaarheid verifi\u00EBren bij leveranciers en herbestellingen plannen is tijdrovend en foutgevoelig. Onze AI monitort voorraad realtime en stuurt automatisch bij.', items: ['Realtime voorraadmonitoring across systemen', 'Automatische beschikbaarheidschecks bij leveranciers', 'Voorraadvoorspelling op basis van seizoens- en trenddata', 'Alerts bij kritieke voorraadniveaus'], result: 'Resultaat: Geen stock-outs meer, optimale voorraadniveaus, minder kapitaal vast in overstock.' },
]

export default function BrancheLogistiekPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>AI voor Logistiek &amp; Supply Chain | AI Volution</title>
        <meta name="description" content="AI Workforces voor logistiek en supply chain: automatiseer orderverwerking, planning en klantenservice. Efficienter opereren met AI. Bekijk onze aanpak." />
        <link rel="canonical" href="https://ai-volution.nl/branche-logistiek.html" />
        <meta property="og:title" content="AI voor Logistiek & Supply Chain | AI Volution" />
        <meta property="og:description" content="AI Workforces voor logistiek en supply chain: automatiseer orderverwerking, planning en klantenservice. Efficienter opereren met AI. Bekijk onze aanpak." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/branche-logistiek.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI voor Logistiek & Supply Chain | AI Volution" />
        <meta name="twitter:description" content="AI Workforces voor logistiek en supply chain: automatiseer orderverwerking, planning en klantenservice. Efficienter opereren met AI. Bekijk onze aanpak." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "AI voor Logistiek & Supply Chain", "url": "https://ai-volution.nl/branche-logistiek.html",
          "description": "AI Workforces voor logistiek en supply chain: automatiseer orderverwerking, planning en klantenservice. Efficienter opereren met AI. Bekijk onze aanpak.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-logistics hero-split">
          <div className="container">
            <div>
              <span className="hero-emoji" aria-hidden="true">&#128230;</span>
              <div className="section-eyebrow">Logistiek &amp; Supply Chain</div>
              <h1>AI Automatisering voor Logistiek &amp; Supply Chain</h1>
              <p>Orderstatus checken, pakketnummers opzoeken, carriers matchen, leveranciers mailen - logistieke bedrijven besteden honderden uren per maand aan handmatig proceswerk. AI Volution automatiseert de complete supply chain operatie zodat je team zich kan richten op uitzonderingen, niet op routine.</p>
            </div>
            <div className="hero-visual">
              <div className="hero-stat-card">
                <div className="stat-number">200+</div>
                <div className="stat-label">uur/maand bespaarpotentieel</div>
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
          <h2 className="section-title">AI Workforces voor Logistiek &amp; Supply Chain</h2>
          <p>Van orderstatus tot retourafhandeling - we automatiseren de volledige logistieke keten. Gebouwd voor bedrijven die duizenden orders per maand verwerken en honderden uren per maand kwijt zijn aan handmatig proceswerk.</p>
        </div>
      </section>

      <section className="grid-diagonal">
        <div className="container">
          <div className="dienst-cards">
            {modules.map((m) => (
              <div className="dienst-card reveal" key={m.num}>
                <div className="dienst-num">{m.num}</div>
                <h3>{m.title}</h3>
                <div className="dienst-sub-text">{m.sub}</div>
                <p>{m.desc}</p>
                <ul>{m.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                <div className="module-result">{m.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stat-break reveal">
        <div className="container">
          <div className="stat-strip">
            <div className="stat-item"><div className="stat-num">200+u</div><div className="stat-label">Bespaarpotentieel per maand</div></div>
            <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Ordermonitoring</div></div>
            <div className="stat-item"><div className="stat-num">2-4 wk</div><div className="stat-label">Implementatietijd</div></div>
          </div>
        </div>
      </section>

      <section className="faq-section reveal" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Veelgestelde vragen</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTABox
        heading="Klaar om jouw supply chain te automatiseren?"
        text="Plan een gratis consult en ontdek hoeveel uur jouw team kan besparen met intelligente logistieke automatisering."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
