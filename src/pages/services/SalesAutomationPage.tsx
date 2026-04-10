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
  { text: 'LEAD GENERATION' },
  { text: 'FOLLOW-UP', ghost: true },
  { text: 'CRM PIPELINE' },
  { text: 'OFFERTES', ghost: true },
]

const moduleCards = [
  {
    num: '01', title: 'Lead Generation & Kwalificatie',
    sub: 'Automatiseer je leadgeneratie en focus op de beste prospects',
    desc: 'Handmatig leads zoeken kost te veel tijd en je mist vaak de beste kansen. Onze AI Workforces vinden automatisch gekwalificeerde prospects, verzamelen contactgegevens en beoordelen hun koopintentie.',
    bullets: ['LinkedIn scraping op basis van jouw ideale klantprofiel', 'Website bezoekers automatisch identificeren en scoren', 'Social media monitoring voor buying signals', 'AI lead scoring op basis van gedrag en bedrijfsdata'],
    result: 'Resultaat: 15+ uur per week bespaard, 40% meer gekwalificeerde leads, geen potenti\u00eble klant meer gemist.',
  },
  {
    num: '02', title: 'Follow-up & Nurturing',
    sub: 'Zorg dat geen enkele lead koud wordt',
    desc: 'Prospects vergeten, gemiste follow-ups en verloren deals door slechte opvolging. Onze AI Workforces zorgen voor perfecte timing bij elke prospect met gepersonaliseerde berichten op het juiste moment.',
    bullets: ['Intelligente email sequences gebaseerd op prospect gedrag', 'WhatsApp Business automations voor directe communicatie', 'Automatische SMS bij gemiste oproepen', 'AI-gestuurde content matching op basis van interesse'],
    result: 'Resultaat: 60% meer conversies door betere timing, geen prospect meer vergeten, 12 uur per week minder handmatig werk.',
  },
  {
    num: '03', title: 'CRM & Pipeline Management',
    sub: 'Houd je pipeline automatisch up-to-date en accuraat',
    desc: 'CRM data die verouderd raakt, handmatig invoeren van contacten en deals die tussen wal en schip vallen. Onze automations houden je CRM real-time gesynchroniseerd en je pipeline accuraat.',
    bullets: ['Bidirectionele sync tussen verschillende CRM systemen', 'Automatisch deals verplaatsen op basis van activiteiten', 'Contact enrichment via externe databronnen', 'AI-analyse van deal progressie en risico\'s'],
    result: 'Resultaat: 100% accurate data, 8 uur per week minder admin werk, betere pipeline voorspelling.',
  },
  {
    num: '04', title: 'Propositie & Offertes',
    sub: 'Van vraag naar offerte in minuten, niet dagen',
    desc: 'Handmatig offertes maken duurt te lang en bevat vaak fouten. Door de tijd die het kost, koelen prospects af en kies je voor standaard prijzen in plaats van gepersonaliseerd.',
    bullets: ['AI genereert offertes op basis van client requirements', 'Automatische prijsberekeningen met approval workflows', 'Template matching op basis van bedrijfstype', 'Automatische follow-up schema\'s na verzending'],
    result: 'Resultaat: Van 4 uur naar 10 minuten per offerte, 30% hogere acceptance rate, geen fouten meer.',
  },
  {
    num: '05', title: 'Meeting & Communicatie',
    sub: 'Slimmer plannen, betere gesprekken, meer afsluitingen',
    desc: 'Heen en weer mailen voor afspraken, slecht voorbereide gesprekken en gemiste follow-up acties. Onze AI Workforces verbeteren je complete meeting workflow.',
    bullets: ['Smart calendar booking met AI-gestuurde planning', 'Automatisch research voor elk gesprek', 'Meeting recordings analyseren voor insights', 'Post-meeting acties automatisch uitvoeren'],
    result: 'Resultaat: 50% minder tijd besteed aan planning, betere gesprekskwaliteit, hogere close rate.',
  },
  {
    num: '06', title: 'Rapportage & Analytics',
    sub: 'Realtime inzicht in je sales performance',
    desc: 'Handmatig rapportages maken, verouderde data en geen inzicht in wat werkt en wat niet. Onze AI-dashboards geven je realtime inzicht in je sales performance.',
    bullets: ['Automatische data verzameling uit alle sales tools', 'AI-analyse van conversion patterns', 'Predictive forecasting op basis van pipeline data', 'Automatische alerts bij afwijkingen'],
    result: 'Resultaat: Dagelijks actuele inzichten, 25% betere forecasting accuracy, proactief bijsturen.',
  },
]

const processSteps = [
  { num: '01', icon: '\uD83D\uDD0D', title: 'Analyse', description: 'We brengen je salesproces in kaart. Waar verliest je team tijd? Welke leads vallen tussen wal en schip?' },
  { num: '02', icon: '\uD83C\uDFAF', title: 'Ontwerp', description: 'We tekenen de AI Workflow: lead scoring, automatische opvolging, offerte-generatie, pipeline management.' },
  { num: '03', icon: '\u26A1', title: 'Bouw', description: 'Binnen 4-6 weken staat je Sales Workforce live, geintegreerd met je CRM en mailsysteem.' },
  { num: '04', icon: '\uD83E\uDDEA', title: 'Test', description: 'We testen met echte leads en echte data. Je team geeft feedback, wij verfijnen.' },
  { num: '05', icon: '\uD83D\uDE80', title: 'Live', description: 'Je Sales Workforce draait 24/7. Wij monitoren, jij focust op dealen sluiten.' },
]

const faqItems = [
  { question: 'Hoeveel kost sales automatisering voor Nederlandse B2B bedrijven?', answer: 'Elke situatie is maatwerk. We starten altijd met een audit waarin we je processen analyseren en een concreet plan met ROI-berekening opleveren. Zo weet je precies wat het oplevert voordat je investeert.' },
  { question: 'Welke sales automatisering tools gebruikt AI Volution?', answer: 'AI Volution werkt primair met n8n en Make, maar kan eigenlijk met alle bekende softwarepakketten automatiseren die een API hebben. Ons sterke punt: je hoeft geen nieuwe software aan te schaffen maar kunt blijven werken met je huidige tools als je daar tevreden mee bent. We integreren met HubSpot, Mailchimp, ActiveCampaign, Zapier, Microsoft Power Automate, Exact Online, en custom AI Workforces via OpenAI GPT-4 en Claude.' },
  { question: 'Hoe lang duurt implementatie van sales automatisering?', answer: 'Standaard implementatie: 4-6 weken. Complexe multi-channel automation: 6-8 weken. AI Volution gebruikt agile methodiek met wekelijkse sprints. Eerste resultaten zichtbaar binnen 14 dagen.' },
  { question: 'Wat zijn bewezen resultaten van AI sales automatisering?', answer: 'AI-tools verhogen sales leads met 50% en verlagen kosten tot 60% (Bron: McKinsey, 2025). Verkopers die AI inzetten zijn 47% productiever (Bron: HubSpot, 2025). AI Volution past deze technologie toe op de Nederlandse B2B markt met lokale compliance en integraties.' },
  { question: 'Werkt sales automatisering voor kleine Nederlandse bedrijven?', answer: 'AI Volution werkt ook voor bedrijven vanaf 5 medewerkers. Elke opdracht begint met een audit zodat we alleen starten als we concrete waarde kunnen leveren. Minimale technische kennis vereist. Specialisatie: Nederlandse MKB+ markt.' },
  { question: 'Welke sales processen kunnen geautomatiseerd worden?', answer: 'AI Volution automatiseert: Lead generation (LinkedIn/Apollo), lead qualification scoring, email sequences, CRM data entry, proposal generation, meeting scheduling (Calendly), follow-up workflows, pipeline management, Nederlandse prospect research (KVK/LinkedIn), GDPR-compliant outreach.' },
]

function SalesContent() {
  const openModal = useOpenModal()

  return (
    <>
      <Helmet>
        <title>Sales Automatisering met AI | AI Volution</title>
        <meta name="description" content="AI Volution bouwt sales AI Workforces: automatische prospectvoorbereiding, AI-offertes en slimme opvolging. Meer deals, minder handwerk. Plan een gratis scan." />
        <link rel="canonical" href="https://ai-volution.nl/diensten/sales-automatisering" />
        <meta property="og:title" content="Sales Automatisering met AI | AI Volution" />
        <meta property="og:description" content="AI Volution bouwt sales AI Workforces: automatische prospectvoorbereiding, AI-offertes en slimme opvolging. Meer deals, minder handwerk. Plan een gratis scan." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/diensten/sales-automatisering" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Sales Automatisering met AI",
          "description": "AI Volution bouwt sales AI Workforces: automatische prospectvoorbereiding, AI-offertes en slimme opvolging. Meer deals, minder handwerk. Plan een gratis scan.",
          "serviceType": "Sales Automatisering",
          "provider": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" },
          "areaServed": { "@type": "Country", "name": "Nederland" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-sales hero-split">
          <div className="container">
            <div>
              <span className="hero-emoji" aria-hidden="true">&#127919;</span>
              <div className="section-eyebrow">Sales Automatisering</div>
              <h1>Professionele Sales Automatisering</h1>
              <p>Jouw salesteam besteedt 70% van de week aan admin in plaats van verkopen (Bron: HubSpot, 2025). Wij bouwen AI Workforces die dat omdraaien. Van lead generation tot deal closing -- jouw verkopers verkopen weer, de AI doet de rest.</p>
            </div>
            <div className="hero-visual">
              <div className="hero-stat-card">
                <div className="stat-number">70%</div>
                <div className="stat-label">minder admin tijd</div>
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
          <h2 className="section-title">Complete Sales Automatisering Oplossingen</h2>
          <p>AI Volution biedt 6 gespecialiseerde sales automatisering modules voor de Nederlandse B2B markt. Integreert met alle grote CRM systemen. Implementatie: 4-6 weken.</p>
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
            <div className="stat-item"><div className="stat-num">70%</div><div className="stat-label">Van salesweek gaat op aan admin (Bron: HubSpot, 2025)</div></div>
            <div className="stat-item"><div className="stat-num">50%</div><div className="stat-label">Meer leads met AI-tools (Bron: McKinsey, 2025)</div></div>
            <div className="stat-item"><div className="stat-num">47%</div><div className="stat-label">Productiviteitswinst door AI (Bron: HubSpot, 2025)</div></div>
          </div>
        </div>
      </section>

      <ProcessFlow
        title="Zo bouwen we jouw Sales Workforce"
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
        heading="Ontdek hoeveel verkooptijd jouw team terugwint"
        text="Jouw salesteam verdient beter dan eindeloos CRM invullen en follow-ups handmatig bijhouden. Plan een gratis sales scan en ontdek welke processen je kunt automatiseren."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function SalesAutomationPage() {
  return <Layout><SalesContent /></Layout>
}
