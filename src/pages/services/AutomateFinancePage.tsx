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
  { text: 'FACTUURVERWERKING' },
  { text: 'INCASSO', ghost: true },
  { text: 'CASHFLOW' },
  { text: "CREDIT NOTA'S", ghost: true },
]

const moduleCards = [
  { num: '01', title: 'Factuurverwerking & Scan-en-Herken', sub: 'Van papier naar boekhouding zonder tussenkomst', desc: 'Handmatig facturen invoeren, controleren op fouten en koppelen aan inkooporders kost uren per dag. Onze AI scant, herkent en verwerkt inkomende facturen volledig automatisch.', bullets: ['OCR-scanning van inkomende facturen en documenten', 'Automatische controle op juistheid en duplicaten', 'Koppeling aan inkooporders en contracten', 'Classificatie en routing naar juiste goedkeurder'], result: 'Resultaat: 95% minder handmatige invoer, geen fouten meer, facturen verwerkt binnen minuten in plaats van dagen.' },
  { num: '02', title: 'Debiteurenbeheer & Incasso', sub: 'Directe opvolging bij openstaande posten', desc: 'Openstaande facturen handmatig nabellen kost tijd en levert frustratie op. Onze AI neemt direct contact op met debiteuren via voice, WhatsApp of e-mail zodra een betaling uitblijft.', bullets: ['Automatische detectie van verlopen betaaltermijnen', 'Opvolging via voice, WhatsApp en e-mail', 'Escalatieflows bij herhaaldelijk niet-betalen', 'Realtime overzicht van alle openstaande posten'], result: 'Resultaat: DSO (Days Sales Outstanding) verlaagd, directe opvolging in plaats van weken wachten, geen handmatig belwerk meer.' },
  { num: '03', title: 'Betalingsbewaking & Cashflow', sub: 'Grip op elke euro die binnenkomt en uitgaat', desc: 'Gefaalde incasso\'s en gemiste betalingen worden vaak pas na dagen ontdekt. Onze AI monitort alle betalingsstromen realtime en grijpt direct in bij afwijkingen.', bullets: ['Realtime monitoring van alle betalingsstromen', 'Directe alerts bij gefaalde incasso\'s of chargebacks', 'Automatische herincasso en betalingsherinneringen', 'Cashflow forecasting op basis van openstaande posten'], result: 'Resultaat: Geen gefaalde betalingen meer die dagen onopgemerkt blijven, verbeterde cashflow voorspelbaarheid.' },
  { num: '04', title: 'Credit Nota & Retour Financien', sub: 'Van claim tot creditering zonder handmatig werk', desc: 'Credit nota\'s opvolgen, retourfinancien verwerken en leveranciers aanschrijven voor terugbetalingen kost tientallen uren per maand. Onze AI automatiseert het volledige traject.', bullets: ['Automatisch credit nota\'s genereren bij retouren', 'Opvolging van openstaande credit nota\'s bij leveranciers', 'Koppeling tussen retourstatus en financiele afwikkeling', 'Escalatie bij uitblijvende creditering'], result: 'Resultaat: Geen credit nota\'s meer die weken blijven liggen, volledige traceerbaarheid van retourfinancien.' },
  { num: '05', title: 'Financiele Rapportage', sub: 'Realtime inzicht zonder handmatige Excel-exercities', desc: 'Handmatig rapportages samenstellen uit verschillende systemen kost uren en levert verouderde data op. Onze AI verzamelt, analyseert en rapporteert automatisch.', bullets: ['Automatische data-aggregatie uit alle financiele systemen', 'Realtime dashboards met KPI\'s en trends', 'Geautomatiseerde maand- en kwartaalrapportages', 'Proactieve alerts bij afwijkingen van budget of forecast'], result: 'Resultaat: Altijd actuele financiele inzichten, geen handmatig rapportagewerk meer, snellere besluitvorming.' },
  { num: '06', title: 'Boekhouding & Reconciliatie', sub: 'Automatische matching en afstemming', desc: 'Bank-reconciliatie, het matchen van betalingen aan facturen en het opsporen van verschillen is repetitief werk dat foutgevoelig is. Onze AI doet het sneller en foutloos.', bullets: ['Automatische bank-reconciliatie en matching', 'Detectie van ontbrekende of dubbele boekingen', 'Koppeling tussen betaalplatformen en boekhoudsysteem', 'Automatische journaalposten bij terugkerende transacties'], result: 'Resultaat: 90% snellere reconciliatie, geen menselijke fouten meer, volledige audit trail.' },
]

const processSteps = [
  { num: '01', icon: '\uD83D\uDD0D', title: 'Analyse', description: 'We brengen je financiele processen in kaart: facturen, betalingen, incasso, rapportages.' },
  { num: '02', icon: '\uD83C\uDFAF', title: 'Ontwerp', description: 'We ontwerpen de workflow: automatische factuurverwerking, betalingsherinneringen, boekhouding-sync.' },
  { num: '03', icon: '\u26A1', title: 'Bouw', description: 'Binnen 4-6 weken draait je Finance Workforce, gekoppeld aan je boekhoudpakket.' },
  { num: '04', icon: '\uD83E\uDDEA', title: 'Test', description: 'We valideren met echte facturen en transacties. Nul fouten is de norm.' },
  { num: '05', icon: '\uD83D\uDE80', title: 'Live', description: 'Nooit meer een gemiste betaling. Realtime inzicht in je cashflow.' },
]

const faqItems = [
  { question: 'Hoeveel kost finance automatisering?', answer: 'Elke situatie is maatwerk. We starten altijd met een audit waarin we je processen analyseren en een concreet plan met ROI-berekening opleveren. Zo weet je precies wat het oplevert voordat je investeert.' },
  { question: 'Met welke boekhoudsystemen integreert AI Volution?', answer: 'Wij integreren met alle gangbare systemen die een API bieden: Exact Online, Twinfield, Xero, AFAS, Unit4, Mollie, Stripe en meer. Ons uitgangspunt: je blijft werken met je huidige software, wij bouwen de AI-laag eromheen.' },
  { question: 'Hoe lang duurt de implementatie?', answer: 'Standaard implementatie: 4-6 weken. Complexe multi-systeem integraties: 4-8 weken. Eerste resultaten zijn zichtbaar binnen 14 dagen. We werken in sprints zodat je snel waarde ziet.' },
  { question: 'Is mijn financiele data veilig?', answer: 'Ja. Alle data wordt verwerkt conform AVG/GDPR. We werken met end-to-end encryptie, de AI draait in jouw eigen omgeving en er is geen vendor lock-in. Je bent eigenaar van alle data en modellen.' },
  { question: 'Kan de AI ook complexe financiele beslissingen nemen?', answer: 'De AI handelt routinematige taken volledig autonoom af. Bij complexe beslissingen (zoals negatieve marge-situaties of grote bedragen) escaleert de AI naar de juiste persoon met alle relevante context. Je bepaalt de drempels.' },
  { question: 'Werkt dit ook voor bedrijven met veel leveranciers?', answer: 'Juist bij veel leveranciers en hoog transactievolume is de impact het grootst. De AI schaalt moeiteloos mee - of je nu 10 of 500 facturen per dag verwerkt, de verwerkingstijd blijft constant.' },
]

function FinanceContent() {
  const openModal = useOpenModal()

  return (
    <>
      <Helmet>
        <title>Finance Automatisering met AI | AI Volution</title>
        <meta name="description" content="AI Volution automatiseert je finance: factuurverwerking, incasso-opvolging en cashflow monitoring. Snellere cashflow, minder fouten. Plan een gratis scan." />
        <link rel="canonical" href="https://ai-volution.nl/diensten/finance-automatisering" />
        <meta property="og:title" content="Finance Automatisering met AI | AI Volution" />
        <meta property="og:description" content="AI Volution automatiseert je finance: factuurverwerking, incasso-opvolging en cashflow monitoring. Snellere cashflow, minder fouten. Plan een gratis scan." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/diensten/finance-automatisering" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Finance Automatisering met AI",
          "description": "AI Volution automatiseert je finance: factuurverwerking, incasso-opvolging en cashflow monitoring. Snellere cashflow, minder fouten. Plan een gratis scan.",
          "serviceType": "Finance Automatisering",
          "provider": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" },
          "areaServed": { "@type": "Country", "name": "Nederland" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-finance">
          <div className="container">
            <span className="hero-emoji" aria-hidden="true">&#128176;</span>
            <div className="section-eyebrow">Finance Automatisering</div>
            <h1>Professionele Finance Automatisering</h1>
            <p>AI Volution automatiseert financiele processen voor Nederlandse bedrijven. Van factuurverwerking tot incasso-opvolging - onze AI Workforces zorgen voor snellere cashflow, minder handmatig werk en volledige controle over je debiteurenbeheer.</p>
            <div className="hero-badge"><span className="badge-icon">&#9989;</span> 0 gemiste betalingen</div>
          </div>
        </section>
        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">Complete Finance Automatisering Oplossingen</h2>
          <p>AI Volution biedt 6 gespecialiseerde finance automatisering modules. Van factuurherkenning tot incasso-opvolging - we automatiseren het meest tijdrovende proceswerk zodat je finance team zich kan richten op strategie en analyse.</p>
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
            <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Geautomatiseerde facturatie</div></div>
            <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">Gemiste betalingsherinneringen</div></div>
            <div className="stat-item"><div className="stat-num">2-4 wk</div><div className="stat-label">Implementatietijd</div></div>
          </div>
        </div>
      </section>

      <ProcessFlow
        title="Zo bouwen we jouw Finance Workforce"
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
        heading="Klaar om jouw finance te automatiseren?"
        text="Plan een gratis en vrijblijvend consult en ontdek hoeveel uur jouw finance team kan besparen met intelligente automatisering."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function AutomateFinancePage() {
  return <Layout><FinanceContent /></Layout>
}
