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
  { text: 'ORDERVERWERKING' },
  { text: 'KLANTENSERVICE', ghost: true },
  { text: 'BETALINGEN' },
  { text: 'RETOUREN', ghost: true },
]

const faqItems = [
  { question: 'Met welke e-commerce platforms integreert AI Volution?', answer: 'We integreren met alle gangbare platforms en ordersystemen: WooCommerce, Shopify, Magento, WinApp, Exact, Lightspeed en custom systemen. Je bestaande stack blijft leidend.' },
  { question: 'Hoeveel orders per maand moeten we verwerken voordat dit loont?', answer: 'Vanaf circa 500 orders/maand begint de besparing merkbaar te worden. Bij 2.000+ orders/maand zien we gemiddeld besparingen van 1-2 FTE aan handmatig werk.' },
  { question: 'Hoe gaat de AI om met B2B-specifieke processen?', answer: 'De AI is getraind op B2B workflows: offerte-aanvragen, staffelprijzen, klantspecifieke afspraken, raamcontracten en herbestellingen. Geen consumentenplatform dat B2B probeert te zijn.' },
  { question: 'Kan de AI ook met leveranciers communiceren?', answer: 'Ja, de AI stuurt automatisch orders naar leveranciers, volgt bevestigingen op, herinnert bij geen reactie en zoekt alternatieven bij annulering. Via API waar mogelijk, via e-mail waar nodig.' },
  { question: 'Is de klantcommunicatie in het Nederlands?', answer: 'Alle klantcommunicatie is native Nederlands. Geen vertaalde templates maar natuurlijk taalgebruik dat past bij jouw tone-of-voice.' },
  { question: 'Wat zijn de kosten?', answer: 'Varieert per volume en complexiteit. We starten altijd met een gratis analyse om de verwachte besparing in kaart te brengen. Gemiddelde terugverdientijd: 2-3 maanden.' },
]

const modules = [
  { num: '01', title: 'Orderverwerking & Fulfillment', sub: 'Van bestelling naar verzending zonder handmatig werk', desc: 'Orders handmatig verwerken in je ordersysteem, beschikbaarheid checken bij leveranciers en statuswijzigingen bijhouden kost uren per dag. Onze AI neemt het volledige orderproces over.', items: ['Automatische orderverwerking en leveranciersplaatsing', 'Beschikbaarheidschecks bij meerdere leveranciers', 'Automatische statuswijzigingen in ordersysteem', 'Alternatieve sourcing bij leveranciersannulering'], result: 'Resultaat: Orders verwerkt binnen minuten in plaats van uren, geen handmatige statuswijzigingen meer, minder fouten.' },
  { num: '02', title: 'Klantenservice & Mail Triage', sub: '50+ mails per dag, automatisch gesorteerd en beantwoord', desc: 'Inkomende mail handmatig sorteren in categorieen als annuleringen, pakketlevering, retouren, claims en productvragen kost uren. Onze AI classificeert elke mail in seconden en routeert naar de juiste afdeling.', items: ['Automatische classificatie in 8+ categorieen', 'Intelligente routing naar juiste medewerker', 'Standaardvragen direct beantwoord door AI', 'Prioritering op basis van urgentie en orderwaarde'], result: 'Resultaat: 90% van inkomende mail automatisch geclassificeerd, uren per dag bespaard, snellere klantrespons.' },
  { num: '03', title: 'Betalingen & Incasso', sub: 'Geen gefaalde betaling blijft meer onopgemerkt', desc: 'Gefaalde incasso\'s en betalingsproblemen worden vaak pas na dagen ontdekt. Onze AI monitort alle betalingsstromen realtime en neemt direct contact op met klanten bij uitblijvende betaling.', items: ['Realtime monitoring van alle betalingsstromen', 'Directe opvolging bij gefaalde incasso via voice of WhatsApp', 'Automatische betalingsherinneringen en herincasso', 'Klantblokkering-management bij openstaande posten'], result: 'Resultaat: DSO verlaagd, geen gefaalde betalingen meer die onopgemerkt blijven, verbeterde cashflow.' },
  { num: '04', title: 'Productinformatie & Catalogusbeheer', sub: 'Altijd het juiste antwoord op productvragen', desc: 'Klanten die vragen of je een specifiek product kunt leveren, naar DOT-codes, specificaties of alternatieven - handmatig opzoeken en beantwoorden kost tijd. Onze AI kent je catalogus en geeft direct antwoord.', items: ['AI-gestuurde productzoekfunctie voor klanten en team', 'Automatische beschikbaarheids- en prijsinformatie', 'Alternatieve productsugesties bij niet-beschikbaarheid', 'Technische specificatie-matching'], result: 'Resultaat: Directe antwoorden op productvragen, minder wachttijd voor klanten, hogere conversie.' },
  { num: '05', title: 'Retouren & Klachtafhandeling', sub: 'Van retourverzoek tot credit nota zonder handwerk', desc: 'Retourformulieren verwerken, foto\'s beoordelen, leveranciers aanschrijven voor retourakkoord, DPD labels aanmaken, 2 weken wachten en credit nota\'s opvolgen - de AI automatiseert het complete traject.', items: ['Automatische retourintake en bewijsbeoordeling', 'Leverancierscommunicatie voor retourakkoord', 'Geautomatiseerde credit nota opvolging', 'Escalatie bij herhaaldelijk uitblijvende reactie'], result: 'Resultaat: Retourafhandeling van weken naar dagen, geen handmatige herinneringsmails meer, volledige traceerbaarheid.' },
  { num: '06', title: 'Klantcommunicatie & Opvolging', sub: 'Proactief informeren, niet reactief beantwoorden', desc: 'Klanten die bellen over hun orderstatus, mailen over vertraagde leveringen of klagen over gebrek aan communicatie. Onze AI informeert klanten proactief bij elke statuswijziging.', items: ['Automatische orderbevestigingen en statusupdates', 'Proactieve notificatie bij vertragingen', 'WhatsApp en e-mail communicatie op autopilot', 'Post-levering check-ins en review uitnodigingen'], result: 'Resultaat: 80% minder inkomende vragen over orderstatus, hogere klanttevredenheid, meer positieve reviews.' },
]

export default function BrancheEcommercePage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>AI voor E-commerce Bedrijven | AI Volution</title>
        <meta name="description" content="AI Workforces voor e-commerce bedrijven: automatiseer klantenservice, retourverwerking en marketing. Schaal zonder extra personeel. Bekijk onze aanpak." />
        <link rel="canonical" href="https://ai-volution.nl/branche-ecommerce.html" />
        <meta property="og:title" content="AI voor E-commerce Bedrijven | AI Volution" />
        <meta property="og:description" content="AI Workforces voor e-commerce bedrijven: automatiseer klantenservice, retourverwerking en marketing. Schaal zonder extra personeel. Bekijk onze aanpak." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/branche-ecommerce.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI voor E-commerce Bedrijven | AI Volution" />
        <meta name="twitter:description" content="AI Workforces voor e-commerce bedrijven: automatiseer klantenservice, retourverwerking en marketing. Schaal zonder extra personeel. Bekijk onze aanpak." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "AI voor E-commerce Bedrijven", "url": "https://ai-volution.nl/branche-ecommerce.html",
          "description": "AI Workforces voor e-commerce bedrijven: automatiseer klantenservice, retourverwerking en marketing. Schaal zonder extra personeel. Bekijk onze aanpak.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-ecommerce">
          <div className="container">
            <span className="hero-emoji" aria-hidden="true">&#128722;</span>
            <div className="section-eyebrow">(B2B) E-commerce</div>
            <h1>AI Automatisering voor (B2B) E-commerce</h1>
            <p>Meer orders verwerken zonder meer mensen. AI Volution automatiseert orderverwerking, klantenservice, betalingen en retouren voor e-commerce bedrijven. Van de eerste bestelling tot de herhaalorder - onze AI Workforces draaien 24/7 zodat jouw team zich kan richten op groei.</p>
            <div className="hero-badge"><span className="badge-icon">&#128188;</span> 1.8 FTE bespaard</div>
          </div>
        </section>
        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">AI Workforces voor (B2B) E-commerce</h2>
          <p>Van orderintake tot nazorg - we automatiseren de complete e-commerce operatie. Bewezen bij bedrijven die duizenden orders per maand verwerken, met besparingen tot 1.8 FTE aan handmatig proceswerk.</p>
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
            <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Geautomatiseerde orderverwerking</div></div>
            <div className="stat-item"><div className="stat-num">&lt;30s</div><div className="stat-label">Reactietijd op klantvragen</div></div>
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
        heading="Klaar om jouw e-commerce te automatiseren?"
        text="Plan een gratis consult en ontdek hoeveel uur jouw team kan besparen met intelligente e-commerce automatisering."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
