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
  { text: 'CHURN PREVENTIE', ghost: true },
  { text: 'PIPELINE' },
  { text: 'SUPPORT', ghost: true },
]

const faqItems = [
  { question: 'Werkt dit met onze bestaande SaaS stack?', answer: 'Ja, we integreren met alle gangbare SaaS tools: HubSpot, Intercom, Zendesk, Stripe, Segment, Mixpanel en meer. We bouwen de AI-laag eromheen, je blijft werken met je huidige stack.' },
  { question: 'Hoe lang duurt de implementatie voor een SaaS bedrijf?', answer: 'Standaard 4-6 weken voor de eerste modules. We starten altijd met de hoogste impact: onboarding of churn preventie. Binnen 30 dagen zie je de eerste resultaten.' },
  { question: 'Is dit geschikt voor early-stage SaaS?', answer: 'Ja, juist bij snelle groei is automatisering cruciaal. We schalen mee met jouw product - van 100 naar 10.000 gebruikers zonder extra headcount op support of customer success.' },
  { question: 'Hoe gaat de AI om met technische support vragen?', answer: 'De AI beantwoordt standaard productvragen direct en escaleert technische issues naar de juiste engineer met volledige context. Je bepaalt de grens tussen automatisch en menselijk.' },
  { question: 'Kunnen we de AI trainen op onze productdocumentatie?', answer: 'Absoluut. We laden jouw volledige kennisbank, API docs en help center in de AI. Het systeem leert continu bij van nieuwe tickets en updates.' },
  { question: 'Wat zijn de kosten?', answer: 'Varieert per omvang en modules, maar gemiddeld betaalt de investering zich terug binnen 2-3 maanden door lagere support kosten en hogere retentie.' },
]

const modules = [
  { num: '01', title: 'Onboarding & Activatie Automatisering', sub: 'Van signup naar actieve gebruiker in recordtijd', desc: 'De meeste SaaS-churn ontstaat in de eerste 30 dagen. Onze AI begeleidt nieuwe gebruikers proactief door de onboarding: gepersonaliseerde walkthroughs, automatische check-ins en activatie-triggers.', items: ['Gepersonaliseerde onboarding flows per gebruikersprofiel', 'Automatische check-ins bij inactiviteit', 'In-app begeleiding en feature adoptie nudges', 'Activatie-milestone tracking en alerts'], result: 'Resultaat: 65% snellere time-to-value, hogere activatiegraad, minder support tickets in de eerste maand.' },
  { num: '02', title: 'Customer Success & Churn Preventie', sub: 'Signalen zien voordat de klant ze uitspreekt', desc: 'Churn komt zelden uit het niets. Onze AI detecteert risicosignalen - dalend gebruik, negatieve support interacties, uitblijvende logins - en start automatisch retentie-acties.', items: ['Health score monitoring per account', 'Automatische alerts bij churn-risico signalen', 'Proactieve outreach bij dalend gebruik', 'Gepersonaliseerde retentie-aanbiedingen'], result: 'Resultaat: 40% minder churn, proactieve klantbenadering, hogere NPS scores.' },
  { num: '03', title: 'Sales Pipeline & Lead Scoring', sub: 'Focus op de deals die er toe doen', desc: 'Je sales team besteedt te veel tijd aan leads die niet converteren. Onze AI scoort leads op basis van gedrag, bedrijfsdata en engagement, zodat je team alleen de best gekwalificeerde prospects spreekt.', items: ['AI lead scoring op basis van product usage en engagement', 'Automatische pipeline updates en deal progression', 'Gepersonaliseerde demo voorbereiding per prospect', 'Trial-to-paid conversion verbetering'], result: 'Resultaat: 3x meer gekwalificeerde pipeline, kortere sales cycli, hogere close rate.' },
  { num: '04', title: 'Support & Ticketing Automatisering', sub: 'Sneller oplossen, slimmer routeren', desc: 'Tier-1 support tickets zijn repetitief en kosten je team uren per dag. Onze AI beantwoordt standaardvragen direct, routeert complexe cases naar de juiste specialist en houdt je kennisbank up-to-date.', items: ['Automatische beantwoording van tier-1 tickets', 'Intelligente routing naar juiste specialist', 'Zelfupdatende kennisbank op basis van tickets', 'SLA-bewaking en escalatie'], result: 'Resultaat: 70% van tickets automatisch opgelost, snellere responstijden, lagere support kosten.' },
  { num: '05', title: 'Product Analytics & Usage Insights', sub: 'Data-gedreven beslissingen over je product', desc: 'Welke features worden gebruikt? Waar haken gebruikers af? Onze AI analyseert gebruikspatronen en genereert actionable insights voor je product team.', items: ['Automatische feature adoption tracking', 'Cohort analyse en gebruikerssegmentatie', 'Churn predictie op basis van gebruikspatronen', 'Geautomatiseerde product performance rapportages'], result: 'Resultaat: Betere product beslissingen, snellere iteratie, data-gedreven roadmap prioritering.' },
  { num: '06', title: 'Renewal & Upsell Workflows', sub: 'Maximale lifetime value per klant', desc: 'Renewals handmatig opvolgen en upsell kansen missen kost omzet. Onze AI identificeert het juiste moment voor expansion en automatiseert het renewal proces van A tot Z.', items: ['Automatische renewal herinneringen en workflows', 'AI-detectie van upsell en cross-sell momenten', 'Gepersonaliseerde expansion aanbiedingen', 'Contract management en automatische facturatie'], result: 'Resultaat: 95% renewal rate, 3x meer upsell conversie, voorspelbare recurring revenue.' },
]

export default function BrancheBtoBSaasPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>AI voor B2B SaaS Bedrijven | AI Volution</title>
        <meta name="description" content="AI Workforces speciaal voor B2B SaaS bedrijven: automatiseer sales, onboarding en customer success. Schaal sneller met minder overhead. Ontdek meer." />
        <link rel="canonical" href="https://ai-volution.nl/branche-b2b-saas.html" />
        <meta property="og:title" content="AI voor B2B SaaS Bedrijven | AI Volution" />
        <meta property="og:description" content="AI Workforces speciaal voor B2B SaaS bedrijven: automatiseer sales, onboarding en customer success. Schaal sneller met minder overhead. Ontdek meer." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/branche-b2b-saas.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI voor B2B SaaS Bedrijven | AI Volution" />
        <meta name="twitter:description" content="AI Workforces speciaal voor B2B SaaS bedrijven: automatiseer sales, onboarding en customer success. Schaal sneller met minder overhead. Ontdek meer." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "AI voor B2B SaaS Bedrijven", "url": "https://ai-volution.nl/branche-b2b-saas.html",
          "description": "AI Workforces speciaal voor B2B SaaS bedrijven: automatiseer sales, onboarding en customer success. Schaal sneller met minder overhead. Ontdek meer.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        <section className="page-hero hero-saas">
          <div className="container">
            <span className="hero-emoji" aria-hidden="true">&#128640;</span>
            <div className="section-eyebrow">B2B Tech SaaS</div>
            <h1>AI Automatisering voor B2B Tech SaaS</h1>
            <p>SaaS-bedrijven groeien niet door meer features, maar door slimmere processen. AI Volution neemt je onboarding, support en sales voorbereiding over met AI Workforces die klantdata verzamelen, antwoorden geven en alles klaarzetten - nog voordat iemand op een ticket reageert.</p>
            <div className="hero-badge"><span className="badge-icon">&#9889;</span> Snellere time-to-value</div>
          </div>
        </section>

        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">AI Workforces voor B2B Tech SaaS</h2>
          <p>Van onboarding tot renewal - we automatiseren de complete SaaS klantreis. Snellere time-to-value, kortere sales cycli en hogere retentie, zonder extra personeel.</p>
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
            <div className="stat-item"><div className="stat-num">24/7</div><div className="stat-label">Geautomatiseerde onboarding</div></div>
            <div className="stat-item"><div className="stat-num">2-4 wk</div><div className="stat-label">Implementatietijd</div></div>
            <div className="stat-item"><div className="stat-num">&infin;</div><div className="stat-label">Schaalbaar zonder extra FTE</div></div>
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
        heading="Klaar om jouw SaaS te versnellen met AI?"
        text="Plan een gratis consult en ontdek hoe AI Workforces jouw onboarding, support en retentie versterken."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
