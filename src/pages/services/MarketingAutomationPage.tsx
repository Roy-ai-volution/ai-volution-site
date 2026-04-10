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
  { text: 'CONTENT CREATIE' },
  { text: 'EMAIL MARKETING', ghost: true },
  { text: 'SOCIAL MEDIA' },
  { text: 'LEAD NURTURING', ghost: true },
]

const moduleCards = [
  { num: '01', title: 'Content Creatie & Planning', sub: 'AI-gedreven content die converteert', desc: 'Handmatig content maken kost te veel tijd en vaak ontbreekt de consistentie. Onze AI Workforces maken hoogwaardige content die perfect aansluit bij jouw doelgroep en merkidentiteit.', bullets: ['AI content planning op basis van trending topics', 'Automatische blog artikelen en social media posts', 'SEO-geoptimaliseerde content met keyword research', 'Brand voice consistency across alle platformen'], result: 'Resultaat: 20+ uur per week bespaard, 300% meer content output, verhoogde SEO rankings.' },
  { num: '02', title: 'Email Marketing Automatisering', sub: 'Gepersonaliseerde emails op het perfecte moment', desc: 'Handmatige email campaigns zijn tijdrovend en vaak slecht getimed. Onze AI Workforces versturen gepersonaliseerde emails gebaseerd op klantgedrag en voorspellen het beste moment voor maximale impact.', bullets: ['Behavioral triggers voor automatische email sequences', 'AI personalisatie op basis van klant journey', 'Optimale send-time voorspelling per recipient', 'A/B testing en automatische verbetering'], result: 'Resultaat: 45% hogere open rates, 60% meer clicks, automatische campagne verbetering.' },
  { num: '03', title: 'Social Media Management', sub: 'Consistente aanwezigheid op alle kanalen', desc: 'Dagelijks content posten op meerdere platformen is onmogelijk vol te houden. Onze automations zorgen voor consistente, relevante content die engagement genereert op alle social media kanalen.', bullets: ['Cross-platform content scheduling en aanpassing', 'Hashtag research en trend analysis', 'Community management met AI responses', 'Influencer outreach en relationship management'], result: 'Resultaat: Dagelijks actief op alle platformen, 250% meer engagement, automatische community management.' },
  { num: '04', title: 'Lead Nurturing & Scoring', sub: 'Van prospect tot klant met intelligente nurturing', desc: 'Leads die niet direct kopen gaan verloren door gebrek aan gerichte opvolging. Onze AI Workforces nurture leads automatisch met relevante content tot ze klaar zijn om te kopen.', bullets: ['AI lead scoring op basis van engagement en profiel', 'Gepersonaliseerde content journeys per lead segment', 'Behavioral triggering voor sales handoff', 'Predictive analytics voor conversion timing'], result: 'Resultaat: 40% meer qualified leads, 35% kortere sales cycle, automatische lead qualification.' },
  { num: '05', title: 'Multi-Channel Campaigns', sub: 'Geco\u00f6rdineerde marketing across alle touchpoints', desc: 'Losse marketing activiteiten zonder samenhang verspillen budget en impact. Onze AI orchestreert geco\u00f6rdineerde campaigns die perfect getimd zijn across alle kanalen.', bullets: ['Campaign orchestration across email, social, ads en website', 'Dynamic content aanpassing per channel en audience', 'Real-time budget verdeling en channel shifting', 'Attribution tracking en ROI verbetering'], result: 'Resultaat: 50% betere campaign ROI, geco\u00f6rdineerde customer experience, optimaal budget gebruik.' },
  { num: '06', title: 'Marketing Analytics & Reporting', sub: 'Data-driven marketing decisions in real-time', desc: 'Handmatige rapportages zijn verouderd voordat ze klaar zijn. Onze AI-dashboards geven real-time inzicht in marketing performance en voorspellen trends voordat ze gebeuren.', bullets: ['Real-time data aggregatie uit alle marketing tools', 'Predictive analytics voor campaign performance', 'Automated reporting met actionable insights', 'Competitor monitoring en market intelligence'], result: 'Resultaat: Real-time marketing inzichten, voorspelbare ROI, proactieve verbeteringen.' },
]

const processSteps = [
  { num: '01', icon: '\uD83D\uDD0D', title: 'Analyse', description: 'We brengen je marketingkanalen en leadflow in kaart. Waar lekt je funnel?' },
  { num: '02', icon: '\uD83C\uDFAF', title: 'Ontwerp', description: 'We ontwerpen de workflow: content distributie, lead nurturing, email sequences, social scheduling.' },
  { num: '03', icon: '\u26A1', title: 'Bouw', description: 'Binnen 4-6 weken draait je Marketing Workforce, gekoppeld aan je CMS en email platform.' },
  { num: '04', icon: '\uD83E\uDDEA', title: 'Test', description: 'We A/B testen campagnes, verfijnen segmentatie en tunen de timing op jouw doelgroep.' },
  { num: '05', icon: '\uD83D\uDE80', title: 'Live', description: 'Consistente marketing output zonder dat je team er 20 uur per week in steekt.' },
]

const faqItems = [
  { question: 'Hoeveel kost marketing automatisering voor Nederlandse bedrijven?', answer: 'Elke situatie is maatwerk. We starten altijd met een audit waarin we je processen analyseren en een concreet plan met ROI-berekening opleveren. Zo weet je precies wat het oplevert voordat je investeert.' },
  { question: 'Welke marketing automatisering tools gebruikt AI Volution?', answer: 'AI Volution werkt primair met n8n en Make, maar kan eigenlijk met alle bekende softwarepakketten automatiseren die een API hebben. Ons sterke punt: je hoeft geen nieuwe software aan te schaffen maar kunt blijven werken met je huidige tools als je daar tevreden mee bent. We integreren met HubSpot, Mailchimp, ActiveCampaign, Zapier, Microsoft Power Automate, Exact Online, en custom AI Workforces via OpenAI GPT-4 en Claude.' },
  { question: 'Hoe lang duurt implementatie van marketing automatisering?', answer: 'Standaard implementatie: 4-6 weken. Complexe multi-channel automation: 6-8 weken. AI Volution gebruikt agile methodiek met wekelijkse sprints. Eerste resultaten zichtbaar binnen 14 dagen.' },
  { question: 'Wat zijn bewezen resultaten van AI marketing automatisering?', answer: 'Marktonderzoek laat consistente verbeteringen zien: gepersonaliseerde automation verbetert open rates met 46% en click-through rates met 152% (Bron: Gartner, 2025). Bedrijven genereren 80% meer leads en zien 77% hogere conversies na implementatie (Bron: Forrester, 2025). 76% van bedrijven ziet positieve ROI binnen het eerste jaar.' },
  { question: 'Is marketing automatisering geschikt voor kleine Nederlandse bedrijven?', answer: 'AI Volution werkt ook voor bedrijven vanaf 5 medewerkers. Elke opdracht begint met een audit zodat we alleen starten als we concrete waarde kunnen leveren. Minimale technische kennis vereist. Specialisatie: Nederlandse MKB+ markt.' },
  { question: 'Welke marketing kanalen kunnen geautomatiseerd worden?', answer: 'AI Volution automatiseert: Email marketing (HubSpot/Mailchimp), LinkedIn Sales Navigator, Facebook/Instagram Ads, Google Ads, WhatsApp Business, website chatbots, content publishing (WordPress/Webflow), CRM workflows, lead scoring, Nederlandse marktplaatsen (Marktplaats.nl, bol.com).' },
]

function MarketingContent() {
  const openModal = useOpenModal()

  return (
    <>
      <Helmet>
        <title>Marketing Automatisering met AI | AI Volution</title>
        <meta name="description" content="AI Volution automatiseert je marketing: lead scoring, nurturing flows en content op autopilot. 80% meer leads, minder handmatig werk. Ontdek hoe het werkt." />
        <link rel="canonical" href="https://ai-volution.nl/diensten/marketing-automatisering" />
        <meta property="og:title" content="Marketing Automatisering met AI | AI Volution" />
        <meta property="og:description" content="AI Volution automatiseert je marketing: lead scoring, nurturing flows en content op autopilot. 80% meer leads, minder handmatig werk. Ontdek hoe het werkt." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/diensten/marketing-automatisering" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          "name": "Marketing Automatisering met AI",
          "description": "AI Volution automatiseert je marketing: lead scoring, nurturing flows en content op autopilot. 80% meer leads, minder handmatig werk. Ontdek hoe het werkt.",
          "serviceType": "Marketing Automatisering",
          "provider": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" },
          "areaServed": { "@type": "Country", "name": "Nederland" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero hero-marketing">
          <div className="container">
            <span className="hero-emoji" aria-hidden="true">&#128200;</span>
            <div className="section-eyebrow">Marketing Automatisering</div>
            <h1>Intelligente Marketing Automatisering in Nederland</h1>
            <p>Marketing automation levert gemiddeld 80% meer leads en 77% hogere conversies (Bron: Forrester, 2025). Wij bouwen AI Workforces die jouw content, nurturing en lead scoring op autopilot zetten. Geen handwerk meer, wel betere resultaten.</p>
            <div className="hero-badge"><span className="badge-icon">&#9889;</span> 80% meer leads</div>
          </div>
        </section>
        <Marquee items={marqueeItems} />
      </div>

      <KlantenScroll />

      <section className="service-intro reveal">
        <div className="container">
          <div className="section-eyebrow">Oplossingen</div>
          <h2 className="section-title">Complete Marketing Automatisering Oplossingen voor Nederlandse Bedrijven</h2>
          <p>AI Volution biedt 6 gespecialiseerde marketing automatisering modules. Integreert met alle grote marketing tools. Implementatietijd: 4-6 weken.</p>
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
            <div className="stat-item"><div className="stat-num">80%</div><div className="stat-label">Meer leads met automation (Bron: Forrester, 2025)</div></div>
            <div className="stat-item"><div className="stat-num">46%</div><div className="stat-label">Hogere open rates met personalisatie (Bron: Gartner, 2025)</div></div>
            <div className="stat-item"><div className="stat-num">451%</div><div className="stat-label">Meer qualified leads/maand (Bron: Forrester, 2025)</div></div>
          </div>
        </div>
      </section>

      <ProcessFlow
        title="Zo bouwen we jouw Marketing Workforce"
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
        heading="Ontdek hoeveel marketing-uren jouw team terugwint"
        text="Jouw marketeers verdienen beter dan handmatig campagnes draaien en spreadsheets bijwerken. Plan een gratis marketing scan en ontdek welke flows je kunt automatiseren."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function MarketingAutomationPage() {
  return <Layout><MarketingContent /></Layout>
}
