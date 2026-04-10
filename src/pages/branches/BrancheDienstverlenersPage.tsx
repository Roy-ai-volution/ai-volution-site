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
  { text: 'ONBOARDING' },
  { text: 'FACTURATIE', ghost: true },
  { text: 'KLANTENSERVICE' },
  { text: 'KLANTBEHOUD', ghost: true },
]

const faqItems = [
  { question: 'Voor welk type dienstverleners werkt dit?', answer: 'Van self-storage en facilitair management tot adviesbureaus en installatiebedrijven. Overal waar er een klantreis is met intake, levering en nazorg, voegen onze AI Workforces waarde toe.' },
  { question: 'Kan de AI mijn klanten echt persoonlijk bedienen?', answer: 'Ja, de AI herkent elke klant met volledige context. Of iemand belt, WhatsAppt of mailt - de AI weet direct wie het is, wat de status is en wat de geschiedenis is. Geen "kun je je klantnummer herhalen?"' },
  { question: 'Hoe werkt het met meerdere locaties of vestigingen?', answer: 'De architectuur is gebouwd om te schalen. Een nieuwe locatie toevoegen kost 24 uur en minimale configuratie. Bewezen bij bedrijven die groeien naar 20+ vestigingen.' },
  { question: 'Is de AI \'s nachts en in het weekend ook bereikbaar?', answer: 'Ja, 24/7, 365 dagen per jaar. Geen kantooruren, geen wachtrij. Bij urgente zaken buiten werktijd escaleert de AI naar de juiste persoon met alle context.' },
  { question: 'Hoe gaat de AI om met klachten en opzeggingen?', answer: 'De AI detecteert ontevredenheid vroegtijdig en biedt alternatieven: verkleining, flexibele voorwaarden of tijdelijke korting. Niet als trucje, maar als oprechte service. Bij daadwerkelijk vertrek wordt het proces professioneel begeleid tot het laatste moment.' },
  { question: 'Wat zijn de kosten?', answer: 'Varieert per omvang en aantal locaties. We werken met een vaste platformfee plus een bedrag per locatie, zodat uitbreiding laagdrempelig is. Gemiddelde terugverdientijd: 2-3 maanden.' },
]

const modules = [
  { num: '01', title: 'Klant Onboarding & Intake', sub: 'De perfecte eerste indruk, volledig geautomatiseerd', desc: 'De onboarding bepaalt de eerste indruk als klant. Onze AI stuurt op het juiste moment de juiste informatie: welkomstberichten, installatie-instructies, eerste-bezoek tips. Via WhatsApp of e-mail, afgestemd op het klantprofiel.', items: ['Persoonlijke welkomstflow per klanttype', 'Automatische check-ins na onboarding milestones', 'Proactieve informatie over eerste stappen', 'Klantherkenning vanaf het eerste contactmoment'], result: 'Resultaat: Nieuwe klanten voelen zich direct thuis, minder supporttickets in de eerste week, hogere klanttevredenheid vanaf dag een.' },
  { num: '02', title: 'Planning & Afsprakenbeheer', sub: 'Geen heen-en-weer gemaild meer over beschikbaarheid', desc: 'Afspraken plannen, herplannen en bevestigen kost meer tijd dan je denkt. Onze AI beheert je volledige agenda, plant automatisch in op basis van beschikbaarheid en stuurt herinneringen.', items: ['Automatische afspraakplanning op basis van beschikbaarheid', 'Herinneringen en bevestigingen via WhatsApp en e-mail', 'No-show detectie en automatische herplanning', 'Resource allocatie bij meerdere medewerkers of locaties'], result: 'Resultaat: 90% minder planningswerk, minder no-shows, optimale bezetting van je team.' },
  { num: '03', title: 'Facturatie & Debiteurenbeheer', sub: 'Facturen die zichzelf versturen en opvolgen', desc: 'Facturen handmatig aanmaken, versturen en openstaande posten nabellen is het saaiste werk dat er bestaat. Onze AI automatiseert het volledige facturatieproces inclusief incasso-opvolging.', items: ['Automatische factuurgeneratie op basis van geleverde diensten', 'Directe opvolging bij verlopen betaaltermijnen via voice of WhatsApp', 'Betalingsherinneringen met escalatieflows', 'Koppeling met boekhoudsysteem voor reconciliatie'], result: 'Resultaat: Geen handmatig belwerk meer, snellere cashflow, DSO significant verlaagd.' },
  { num: '04', title: 'Klantenservice & Bereikbaarheid', sub: '24/7 bereikbaar zonder extra personeel', desc: 'Klanten verwachten direct antwoord - ook buiten kantoortijden. Onze native Nederlandse AI beantwoordt vragen via telefoon, WhatsApp en chat. Elke klant wordt direct herkend met volledige context.', items: ['Native Nederlandse voice AI voor inkomende telefoontjes 24/7', 'WhatsApp en chat support op autopilot', 'Klantherkenning met volledige geschiedenis', 'QR-codes op locatie gekoppeld aan dezelfde AI'], result: 'Resultaat: 24/7 bereikbaarheid zonder extra FTE, geen wachtrij, het onbemande concept voelt juist attent en responsief.' },
  { num: '05', title: 'Rapportage & KPI Dashboards', sub: 'Realtime inzicht zonder handmatige Excel-exercities', desc: 'Handmatig rapportages samenstellen over bezetting, omzet, klanttevredenheid en churn kost uren. Onze AI verzamelt, analyseert en rapporteert automatisch.', items: ['Automatische data-aggregatie uit alle systemen', 'Realtime dashboards met operationele KPI\'s', 'Geautomatiseerde maand- en kwartaalrapportages', 'Proactieve alerts bij afwijkingen'], result: 'Resultaat: Altijd actuele inzichten, geen handmatig rapportagewerk meer, snellere besluitvorming.' },
  { num: '06', title: 'Klantbehoud & Loyaliteit', sub: 'Klanten behouden kost minder dan nieuwe winnen', desc: 'Klanten die willen opzeggen stilletjes laten gaan is omzet weggooien. Onze AI detecteert churn-signalen vroegtijdig en start automatisch retentie-acties. Vertrekkende klanten worden ambassadeurs.', items: ['Churn-detectie op basis van gedrag en interacties', 'Proactieve retentie-gesprekken met alternatieven', 'Geautomatiseerde NPS-flow en review-uitnodigingen', 'Heractiverings-campagnes voor voormalige klanten'], result: 'Resultaat: 35% minder churn, hogere NPS, meer positieve Google-reviews, voormalige klanten die terugkomen.' },
]

export default function BrancheDienstverlenersPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>AI voor Dienstverleners | AI Volution</title>
        <meta name="description" content="AI Workforces voor dienstverleners: automatiseer offertes, planning en klantcommunicatie. Meer omzet per medewerker met AI. Ontdek de mogelijkheden." />
        <link rel="canonical" href="https://ai-volution.nl/branche-dienstverleners.html" />
        <meta property="og:title" content="AI voor Dienstverleners | AI Volution" />
        <meta property="og:description" content="AI Workforces voor dienstverleners: automatiseer offertes, planning en klantcommunicatie. Meer omzet per medewerker met AI. Ontdek de mogelijkheden." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/branche-dienstverleners.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI voor Dienstverleners | AI Volution" />
        <meta name="twitter:description" content="AI Workforces voor dienstverleners: automatiseer offertes, planning en klantcommunicatie. Meer omzet per medewerker met AI. Ontdek de mogelijkheden." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "AI voor Dienstverleners", "url": "https://ai-volution.nl/branche-dienstverleners.html",
          "description": "AI Workforces voor dienstverleners: automatiseer offertes, planning en klantcommunicatie. Meer omzet per medewerker met AI. Ontdek de mogelijkheden.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-services">
          <div className="container">
            <span className="hero-emoji" aria-hidden="true">&#127970;</span>
            <div className="section-eyebrow">Dienstverleners</div>
            <h1>AI Automatisering voor Dienstverleners</h1>
            <p>Minder administratie. Meer aandacht voor je klant. AI Volution automatiseert de complete klantreis voor dienstverleners: van intake tot loyaliteit, van facturatie tot 24/7 bereikbaarheid. Zodat jij meer tijd overhoudt om te leveren op niveau.</p>
            <div className="hero-badge"><span className="badge-icon">&#128279;</span> Complete klantreis geautomatiseerd</div>
          </div>
        </section>
        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">AI Workforces voor Dienstverleners</h2>
          <p>Van klant-intake tot loyaliteitsprogramma - we automatiseren de volledige klantreis voor dienstverleners. Bewezen bij bedrijven die schalen naar 20+ locaties of vestigingen zonder extra operationeel personeel.</p>
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
            <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Bereikbaar zonder extra FTE</div></div>
            <div className="stat-item"><div className="stat-num">2-4 wk</div><div className="stat-label">Implementatietijd</div></div>
            <div className="stat-item"><div className="stat-num">0</div><div className="stat-label">Gemiste follow-ups</div></div>
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
        heading="Klaar om jouw dienstverlening te automatiseren?"
        text="Plan een gratis consult en ontdek hoe AI Workforces jouw klantreis versterken -- van intake tot loyaliteit."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
