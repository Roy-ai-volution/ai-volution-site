import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import KlantenScroll from '../components/KlantenScroll'
import Marquee from '../components/Marquee'
import CTABox from '../components/CTABox'
import FAQ from '../components/FAQ'
import RibbonCanvas from '../components/RibbonCanvas'
import RibbonCanvas2 from '../components/RibbonCanvas2'
import { useOpenModal } from '../hooks/useModalContext'

const ribbonBundles = [
  { r: 51, g: 166, b: 255, lines: 22, spread: 28, baseY: 0.32, speed: 0.45, amp: 130, freq: 0.0028, twist: 0.006, opacity: 0.12, lineWidth: 0.8 },
  { r: 139, g: 92, b: 246, lines: 20, spread: 24, baseY: 0.50, speed: 0.50, amp: 150, freq: 0.0022, twist: 0.005, opacity: 0.10, lineWidth: 0.7 },
  { r: 236, g: 72, b: 153, lines: 18, spread: 22, baseY: 0.42, speed: 0.38, amp: 110, freq: 0.0032, twist: 0.007, opacity: 0.08, lineWidth: 0.7 },
  { r: 51, g: 166, b: 255, lines: 16, spread: 20, baseY: 0.22, speed: 0.35, amp: 90, freq: 0.0035, twist: 0.004, opacity: 0.07, lineWidth: 0.6 },
  { r: 139, g: 92, b: 246, lines: 14, spread: 18, baseY: 0.65, speed: 0.40, amp: 100, freq: 0.003, twist: 0.005, opacity: 0.06, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'AI Volution' },
  { text: 'Automatiseer de toekomst', ghost: true },
  { text: 'AI Workforces' },
  { text: 'MKB+ klaar', ghost: true },
]

const faqItems = [
  {
    question: 'Is dit niet te duur voor een MKB+ bedrijf?',
    answer: 'Elke situatie is maatwerk. We starten altijd met een audit (vanaf \u20ac5.000) waarin we je processen analyseren en een concreet plan opleveren. Zo weet je precies wat het oplevert voordat je investeert. En het mooiste: de meeste bedrijven verdienen de investering binnen 30 dagen terug. <a href="/roi-calculator">Bereken het zelf met onze ROI Calculator</a>.',
  },
  {
    question: 'Vervangt dit mijn medewerkers?',
    answer: 'Nee. Een AI Workforce vervangt niemand -- het versterkt je team. Je mensen doen het werk dat ertoe doet: klantrelaties, strategie, creativiteit. De AI Workforce neemt het repetitieve over: data-invoer, opvolging, rapportages. Resultaat: meer output met hetzelfde team.',
  },
  {
    question: 'Hoe zit het met onze data en privacy?',
    answer: 'Alles is AVG-compliant. Je data blijft in de EU, we werken met enterprise-grade tools, en je behoudt volledige controle. We tekenen een verwerkersovereenkomst en je kunt altijd inzien welke data de AI Workforce gebruikt.',
  },
  {
    question: 'Wat als het niet werkt?',
    answer: 'We starten altijd met een gratis strategie scan. Daarin laten we concreet zien wat de AI Workforce gaat doen, welk resultaat je kunt verwachten en wat het kost. Pas als jij akkoord bent, gaan we bouwen. Eerste resultaten zie je binnen week 1. En als je niet tevreden bent? Dan betaal je niet voor de eerste maand.',
  },
  {
    question: 'Hoe lang duurt het voordat we resultaat zien?',
    answer: 'De meeste AI Workforces zijn binnen 4 tot 6 weken live. Eerste meetbare impact -- minder handwerk, snellere opvolging, minder fouten -- zie je binnen 30 dagen. Niet over 6 maanden. Nu.',
  },
]

const integrations = [
  'Python','n8n','Make','HubSpot','Trengo','Salesforce','Teamleader','Pipedrive','Moneybird','HighLevel','AFAS','Apollo.io','Meta','LinkedIn','Google','ClickUp','Notion','Zapier','VAPI','ElevenLabs','Claude','OpenAI','Monday.com',
]

const dienstenData = [
  { num: '01', title: 'Automate Sales', sub: 'Meer focus. Meer deals.', body: 'AI bereidt je sales voor, schrijft je offertes en volgt automatisch op. Zonder handmatig werk, maar wel meer show-ups, scherpere calls en hogere conversie.', link: '/diensten/sales-automatisering', linkText: 'Lees meer over Sales Automatisering \u2192' },
  { num: '02', title: 'Automate Marketing', sub: 'Slimme content, betere leads.', body: 'We automatiseren je marketing rond een doel: kwalitatieve klanten aantrekken. Van lead scoring tot hyperpersoonlijke nurturing. Elke boodschap sluit aan op gedrag, timing en behoefte.', link: '/diensten/marketing-automatisering', linkText: 'Lees meer over Marketing Automatisering \u2192' },
  { num: '03', title: 'Automate Internal Processes', sub: 'Minder handwerk. Meer focus.', body: 'We automatiseren je interne processen zoals taakoverdracht, rapportages en planning. Geen losse Excels of ad-hoc werk meer. Alles loopt soepel en voorspelbaar.', link: '/diensten/interne-processen', linkText: 'Lees meer over Procesautomatisering \u2192' },
  { num: '04', title: 'Automate Finance', sub: 'Snellere cashflow. Minder handwerk.', body: 'We automatiseren je financiele processen: factuurverwerking, incasso-opvolging, betalingsbewaking en rapportage. Geen handmatige invoer meer, geen gemiste betalingen. Alles realtime en foutloos.', link: '/diensten/finance-automatisering', linkText: 'Lees meer over Finance Automatisering \u2192' },
  { num: '05', title: 'Automate Support', sub: '24/7 bereikbaar. Altijd persoonlijk.', body: '24/7 klantenservice via telefoon, WhatsApp en chat. Automatische mail triage, retourafhandeling en escalatiemanagement. Altijd in het Nederlands, altijd met klantcontext.', link: '/diensten/klantenservice-automatisering', linkText: 'Lees meer over Klantenservice Automatisering \u2192' },
  { num: '06', title: 'AI Agents', sub: 'Autonome AI Workforces die meedenken.', body: 'Geen chatbot. Geen tool. Agentic AI - de volgende fase. Onze AI Agents redeneren zelfstandig, schakelen tussen afdelingen en bouwen complete AI Workforces die je bedrijf aansturen.', link: '/diensten/ai-agents', linkText: 'Lees meer over AI Agents \u2192' },
]

function HomeContent() {
  const openModal = useOpenModal()
  const [counter, setCounter] = useState(0)
  const [barsVisible, setBarsVisible] = useState(false)
  const [activeDienst, setActiveDienst] = useState<number | null>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const [wistiaLoaded, setWistiaLoaded] = useState(false)

  // Counter animatie 0 -> 10
  useEffect(() => {
    let current = 0
    const target = 10
    let animId: number
    const timeout = setTimeout(() => {
      const step = () => {
        current += 0.2
        if (current >= target) {
          setCounter(target)
          return
        }
        setCounter(Math.round(current))
        animId = requestAnimationFrame(step)
      }
      animId = requestAnimationFrame(step)
    }, 600)
    return () => {
      clearTimeout(timeout)
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  // Bar animatie
  useEffect(() => {
    const timeout = setTimeout(() => setBarsVisible(true), 400)
    return () => clearTimeout(timeout)
  }, [])

  // Wistia lazy-load
  useEffect(() => {
    if (!videoWrapperRef.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !wistiaLoaded) {
          setWistiaLoaded(true)
          const s1 = document.createElement('script')
          s1.src = 'https://fast.wistia.com/player.js'
          s1.async = true
          document.head.appendChild(s1)
          const s2 = document.createElement('script')
          s2.src = 'https://fast.wistia.com/embed/kx3ssrrvmm.js'
          s2.async = true
          s2.type = 'module'
          document.head.appendChild(s2)
          obs.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    obs.observe(videoWrapperRef.current)
    return () => obs.disconnect()
  }, [wistiaLoaded])

  const toggleDienst = (index: number) => {
    setActiveDienst(activeDienst === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>AI Workforces voor MKB+ | AI Volution</title>
        <meta name="description" content="AI Volution bouwt AI Workforces die 24/7 werken voor MKB+ bedrijven. Bespaar 10+ uur per week door sales, marketing en support te automatiseren. Plan een gratis AI scan." />
        <link rel="canonical" href="https://ai-volution.nl/" />
        <meta property="og:title" content="AI Workforces voor MKB+ | AI Volution" />
        <meta property="og:description" content="AI Volution bouwt AI Workforces die 24/7 werken voor MKB+ bedrijven. Bespaar 10+ uur per week door sales, marketing en support te automatiseren. Plan een gratis AI scan." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Workforces voor MKB+ | AI Volution" />
        <meta name="twitter:description" content="AI Volution bouwt AI Workforces die 24/7 werken voor MKB+ bedrijven. Bespaar 10+ uur per week door sales, marketing en support te automatiseren. Plan een gratis AI scan." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "AI Volution",
          "url": "https://ai-volution.nl",
          "logo": "https://ai-volution.nl/assets/logo-licht.png",
          "description": "AI Automation Agency voor MKB+",
          "address": { "@type": "PostalAddress", "streetAddress": "De Vriesstraat 26", "addressLocality": "Oud-Beijerland", "postalCode": "3261 PC", "addressCountry": "NL" },
          "contactPoint": { "@type": "ContactPoint", "telephone": "+3197010275159", "email": "info@ai-volution.nl", "contactType": "sales" },
          "sameAs": ["https://linkedin.com/in/royfernandes"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer.replace(/<[^>]*>/g, '') }
          }))
        })}</script>
      </Helmet>

      {/* HERO + RIBBONS */}
      <div className="hero-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-eyebrow">De AI-Evolutie is begonnen.</div>
                <h1><span className="highlight">AI Workforces</span> die 24/7 werken & de omzet per medewerker 2-3x verhogen.</h1>
                <p>Dezelfde mensen, twee tot drie keer de output. AI Workforces elimineren repetitief werk zodat jouw team meer business aankan zonder extra personeel. ROI meetbaar vanaf dag een.</p>
                <div className="hero-buttons">
                  <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); openModal() }}>Gratis 1-op-1 AI Consult</a>
                  <Link to="/roi-calculator" className="btn-outline">Gratis AI-ROI Scan (1 min)</Link>
                </div>
              </div>
              <div className="hero-visual">
                <div className="hero-card">
                  <div className="hero-card-top">
                    <span className="num" id="counter">{counter}</span>
                    <span className="suffix">uur</span>
                    <span className="desc">gemiddeld bespaard per week per medewerker</span>
                  </div>
                  <div className="hero-bars">
                    <div>
                      <div className="hero-bar-labels"><span>Foutmarge</span><span>87% minder</span></div>
                      <div className="hero-bar-track"><div className="hero-bar-fill" style={{ width: barsVisible ? '87%' : '0%' }} /></div>
                    </div>
                    <div>
                      <div className="hero-bar-labels"><span>Tijdbesparing</span><span>Direct</span></div>
                      <div className="hero-bar-track"><div className="hero-bar-fill" style={{ width: barsVisible ? '92%' : '0%' }} /></div>
                    </div>
                    <div>
                      <div className="hero-bar-labels"><span>Omzet per medewerker</span><span>3x hoger</span></div>
                      <div className="hero-bar-track"><div className="hero-bar-fill" style={{ width: barsVisible ? '78%' : '0%' }} /></div>
                    </div>
                  </div>
                </div>
                <div className="hero-tag"><span className="dot"></span> AI Workforces actief</div>
              </div>
            </div>
          </div>
        </section>

        {/* KLANTEN */}
        <section className="klanten reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div className="klanten-inner">
              <div className="klanten-label">Vertrouwd door</div>
              <div className="klanten-divider"></div>
              <div className="klanten-scroll">
                <div className="klanten-track">
                  <img src="/assets/klanten/easystorage.png" alt="easyStorage" style={{ height: '22px' }} />
                  <img src="/assets/klanten/fundingteam.png" alt="Fundingteam" style={{ height: '90px' }} />
                  <img src="/assets/klanten/motul.png" alt="Motul" style={{ height: '40px' }} />
                  <img src="/assets/klanten/lassoo-ariaans.svg" alt="Lassoo Ariaans" style={{ height: '32px' }} />
                  <img src="/assets/klanten/endeavour.webp" alt="Endeavour" style={{ height: '22px' }} />
                  <img src="/assets/klanten/minerva.png" alt="Minerva Development" style={{ height: '22px' }} />
                  <img src="/assets/klanten/tis.png" alt="TIS" style={{ height: '24px' }} />
                  <img src="/assets/klanten/easystorage.png" alt="easyStorage" style={{ height: '22px' }} />
                  <img src="/assets/klanten/fundingteam.png" alt="Fundingteam" style={{ height: '90px' }} />
                  <img src="/assets/klanten/motul.png" alt="Motul" style={{ height: '40px' }} />
                  <img src="/assets/klanten/lassoo-ariaans.svg" alt="Lassoo Ariaans" style={{ height: '32px' }} />
                  <img src="/assets/klanten/endeavour.webp" alt="Endeavour" style={{ height: '22px' }} />
                  <img src="/assets/klanten/minerva.png" alt="Minerva Development" style={{ height: '22px' }} />
                  <img src="/assets/klanten/tis.png" alt="TIS" style={{ height: '24px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="vision reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div className="container">
            <h2>Wij bouwen AI Workforces die repetitief werk elimineren, <span>zodat je bedrijf sneller groeit zonder meer personeel.</span></h2>
            <div className="video-wrapper" ref={videoWrapperRef} style={{ margin: '40px auto' }}>
              <style>{`wistia-player[media-id='kx3ssrrvmm']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/kx3ssrrvmm/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
              {wistiaLoaded && (
                <div dangerouslySetInnerHTML={{ __html: '<wistia-player media-id="kx3ssrrvmm" seo="false" aspect="1.7777777777777777"></wistia-player>' }} />
              )}
            </div>
            <p className="vision-sub">Stel je voor: een digitale collega die 24/7 je leads opvolgt, offertes opstelt en rapportages bijwerkt. Geen pauzes, geen ziektedagen, geen vergeten taken. Van sales automatisering en klantenservice automatisering tot procesautomatisering met AI -- jouw team doet het denkwerk, de AI Workforce doet de rest.</p>
            <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); openModal() }} style={{ marginTop: '28px' }}>Ontdek wat dit voor jou oplevert</a>
          </div>
        </section>

        {/* AGENTIC AI UITLEG */}
        <section className="agentic-explainer reveal" style={{ position: 'relative', zIndex: 1 }}>
          <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
            <div className="section-eyebrow">Van automatisering naar AI Workforces</div>
            <h2 className="section-title">Wat is een AI Workforce?</h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-sec)', marginBottom: '20px' }}><strong style={{ color: 'var(--black)' }}>Gewone automatisering</strong> volgt vaste regels: als X, doe Y. Handig, maar beperkt.</p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-sec)', marginBottom: '20px' }}><strong style={{ color: 'var(--black)' }}>AI agents voor bedrijven</strong> gaan een stap verder -- ze nemen zelfstandig beslissingen op basis van context en data. AI voor bedrijven betekent niet meer handjes bijschakelen, maar slimmer werken.</p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-sec)', marginBottom: 0 }}><strong style={{ color: 'var(--blue)' }}>AI Workforces</strong> zijn de volgende evolutie: meerdere AI Agents die samenwerken als een team, zelfstandig redeneren en elkaar inschakelen wanneer nodig. Een complete digitale afdeling die autonoom opereert -- dat is onze filosofie.</p>
          </div>
        </section>
      </div>

      {/* VALUE PROPS */}
      <section className="value-props reveal">
        <div className="container">
          <div className="value-grid">
            <div className="value-card">
              <span className="value-icon">&#9889;</span>
              <h3>We nemen handmatig werk over waar je team nu op vastloopt.</h3>
              <p>Van opvolging tot data-entry, zodat je team weer tijd heeft voor echt werk.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">&#9202;</span>
              <h3>We versnellen processen die nu weken duren naar minuten.</h3>
              <p>Klanten sneller helpen. Leads sneller opvolgen. Geen bottlenecks meer in de backoffice.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">&#128200;</span>
              <h3>We verminderen kosten zonder te snijden in je team.</h3>
              <p>Door efficienter te werken met minder fouten en minder vertraging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ZO WERKT EEN AI WORKFORCE */}
      <section className="how-it-works reveal">
        <div className="container">
          <div className="section-eyebrow">Hoe het werkt</div>
          <h2 className="section-title">Zo werkt een AI Workforce</h2>
          <div className="before-after">
            <div className="ba-col before">
              <h3>Zonder AI Workforce</h3>
              <div className="ba-item"><span className="ba-time">08:00</span><span className="ba-desc">Handmatig leads doorspitten uit 3 bronnen</span></div>
              <div className="ba-item"><span className="ba-time">10:00</span><span className="ba-desc">Offertes typen en versturen</span></div>
              <div className="ba-item"><span className="ba-time">13:00</span><span className="ba-desc">Supportmails beantwoorden</span></div>
              <div className="ba-item"><span className="ba-time">16:00</span><span className="ba-desc">Rapportages bijwerken in Excel</span></div>
              <div className="ba-item"><span className="ba-time">17:30</span><span className="ba-desc">Achterstand. Morgen weer.</span></div>
            </div>
            <div className="ba-col after">
              <h3>Met AI Workforce</h3>
              <div className="ba-item"><span className="ba-time">08:00</span><span className="ba-desc">23 leads gekwalificeerd vannacht</span></div>
              <div className="ba-item"><span className="ba-time">09:00</span><span className="ba-desc">4 gepersonaliseerde offertes verstuurd</span></div>
              <div className="ba-item"><span className="ba-time">Continu</span><span className="ba-desc">Supportvragen beantwoord in 30 sec</span></div>
              <div className="ba-item"><span className="ba-time">Realtime</span><span className="ba-desc">Dashboard altijd up-to-date</span></div>
              <div className="ba-item"><span className="ba-time">17:00</span><span className="ba-desc">Alles afgehandeld. Jij deed alleen het denkwerk.</span></div>
            </div>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <span className="step-num">01</span>
              <h3>We analyseren je workflow</h3>
              <p>We kijken waar je team tijd verliest aan repetitief werk</p>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <h3>We bouwen je AI Workforce</h3>
              <p>Binnen 4-6 weken staat je digitale team klaar</p>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <h3>Je groeit zonder extra personeel</h3>
              <p>Meer output, hogere omzet per medewerker</p>
            </div>
          </div>
          <div className="mini-cta">
            <a href="#" onClick={(e) => { e.preventDefault(); openModal() }}>Benieuwd wat dit voor jouw bedrijf betekent? &rarr;</a>
          </div>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="diensten reveal has-grid" id="diensten">
        <div className="container">
          <div className="section-eyebrow">Onze Diensten</div>
          <h2 className="section-title">Wat we voor je bouwen</h2>
          <div className="diensten-list">
            {dienstenData.map((d, i) => (
              <div
                key={i}
                className={`dienst-item${activeDienst === i ? ' active' : ''}`}
                onClick={() => toggleDienst(i)}
              >
                <div className="dienst-header">
                  <span className="dienst-num">{d.num}</span>
                  <h3 className="dienst-title">{d.title}</h3>
                  <span className="dienst-sub">{d.sub}</span>
                  <div className="dienst-toggle">{activeDienst === i ? '\u2212' : '+'}</div>
                </div>
                <div className="dienst-body" style={{ maxHeight: activeDienst === i ? '200px' : '0' }}>
                  <div className="dienst-body-inner">
                    <p>{d.body}</p>
                    <Link to={d.link} className="btn-primary" style={{ marginTop: '12px' }}>{d.linkText}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={marqueeItems} />

      {/* BRANCHES */}
      <section className="branches reveal" id="branches">
        <div className="container">
          <div className="section-eyebrow">Branches</div>
          <h2 className="section-title">Branches die wij bedienen</h2>
          <div className="branches-grid">
            <div className="branch-card">
              <h3>B2B Tech SaaS</h3>
              <p>We nemen je onboarding, support en sales voorbereiding over met AI Workforces. Snellere time-to-value, kortere sales cycli, minder druk op je team.</p>
              <Link to="/branches/b2b-saas" className="branch-link">Bekijk AI voor B2B SaaS &rarr;</Link>
            </div>
            <div className="branch-card">
              <h3>Logistiek & Supply Chain</h3>
              <p>Orderstatus, tracking, carriers, leveranciers - honderden uren handmatig werk geautomatiseerd met AI Workforces die 24/7 draaien.</p>
              <Link to="/branches/logistiek" className="branch-link">Bekijk AI voor Logistiek &rarr;</Link>
            </div>
            <div className="branch-card">
              <h3>(B2B) E-commerce</h3>
              <p>We automatiseren orderverwerking, klantvragen, betalingen en retouren met AI Workforces die 24/7 draaien.</p>
              <Link to="/branches/ecommerce" className="branch-link">Bekijk AI voor E-commerce &rarr;</Link>
            </div>
            <div className="branch-card">
              <h3>Dienstverleners</h3>
              <p>We automatiseren de complete klantreis: van intake tot loyaliteit, van facturatie tot 24/7 bereikbaarheid.</p>
              <Link to="/branches/dienstverleners" className="branch-link">Bekijk AI voor Dienstverleners &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="integrations">
        <div className="integrations-label">Connected with</div>
        <div className="integrations-scroll">
          <div className="integrations-track">
            {integrations.map((name, i) => <span key={`a-${i}`}>{name}</span>)}
            {integrations.map((name, i) => <span key={`b-${i}`}>{name}</span>)}
          </div>
        </div>
      </section>

      {/* KLANTEN 2 */}
      <KlantenScroll />

      {/* FAQ */}
      <section className="homepage-faq reveal" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container">
          <div className="section-eyebrow">Veelgestelde vragen</div>
          <h2 className="section-title">Dit vragen onze klanten het vaakst</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* URGENTIE BLOK */}
      <section className="urgency-block reveal">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">88%</span>
              <span className="stat-label">van bedrijven gebruikt al AI</span>
              <span className="stat-source">(McKinsey, 2025)</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">353%</span>
              <span className="stat-label">ROI binnen 3 jaar bij vroege adoptie</span>
              <span className="stat-source">(Forrester, 2024)</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12+ uur</span>
              <span className="stat-label">per week verspild aan werk dat geautomatiseerd kan worden</span>
              <span className="stat-source">(HubSpot, 2025)</span>
            </div>
          </div>
          <div className="urgency-close">
            <p>De vraag is niet of AI jouw concurrenten gaat helpen. De vraag is of jij sneller bent.</p>
            <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); openModal() }}>Start met een gratis scan &rarr;</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABox
        heading="Ontdek hoeveel uur jouw team terugwint met AI"
        text="In 30 minuten laten we zien welke processen je kunt automatiseren, wat het oplevert in uren en euro's, en hoe snel het live staat. Geen verplichtingen."
        onOpenModal={openModal}
      />
    </>
  )
}

export default function HomePage() {
  return (
    <Layout isHomepage>
      <HomeContent />
    </Layout>
  )
}
