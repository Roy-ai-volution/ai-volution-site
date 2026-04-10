import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import KlantenScroll from '../components/KlantenScroll'
import Marquee from '../components/Marquee'
import CTABox from '../components/CTABox'
import RibbonCanvas, { RibbonBundle } from '../components/RibbonCanvas'
import RibbonCanvas2 from '../components/RibbonCanvas2'
import { useModal } from '../hooks/useModalContext'

const ribbonBundles: RibbonBundle[] = [
  { r: 51, g: 166, b: 255, lines: 16, spread: 24, baseY: 0.32, speed: 0.42, amp: 120, freq: 0.003, twist: 0.005, opacity: 0.09, lineWidth: 0.7 },
  { r: 139, g: 92, b: 246, lines: 12, spread: 18, baseY: 0.52, speed: 0.38, amp: 100, freq: 0.0028, twist: 0.004, opacity: 0.06, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'WE OWN THE PROJECT' },
  { text: 'AI WORKFORCES', ghost: true },
  { text: 'MKB+ DNA' },
  { text: 'RESULTAAT GEDREVEN', ghost: true },
]

export default function OverOnsPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>Over AI Volution | Het Team | AI Volution</title>
        <meta name="description" content="Leer het team achter AI Volution kennen: drie co-founders met jarenlange ervaring in AI-automatisering, marketing en sales voor MKB+ bedrijven. Bekijk ons verhaal." />
        <link rel="canonical" href="https://ai-volution.nl/over-ons.html" />
        <meta property="og:title" content="Over AI Volution - Het Team | AI Volution" />
        <meta property="og:description" content="Leer het team achter AI Volution kennen: drie co-founders met jarenlange ervaring in AI-automatisering, marketing en sales voor MKB+ bedrijven. Bekijk ons verhaal." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/over-ons.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Over AI Volution - Het Team | AI Volution" />
        <meta name="twitter:description" content="Leer het team achter AI Volution kennen: drie co-founders met jarenlange ervaring in AI-automatisering, marketing en sales voor MKB+ bedrijven. Bekijk ons verhaal." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "AboutPage",
          "name": "Over AI Volution", "description": "Het team achter AI Volution - AI Automation Agency voor MKB+",
          "mainEntity": {
            "@type": "Organization", "name": "AI Volution",
            "founder": [
              { "@type": "Person", "name": "Roy Fernandes", "jobTitle": "Co-founder - Demand generation & AI-marketing", "description": "Sinds 2016 actief in software sales, contentstrategie en demand generation. Oprichter van marketingbureau Future Growth." },
              { "@type": "Person", "name": "Noa", "jobTitle": "Co-founder - Marketing Automation & AI-integraties", "description": "Marketing Management (RSM Erasmus), specialisatie Data Analytics. Gecertificeerd Advanced Automation Specialist.", "alumniOf": { "@type": "CollegeOrUniversity", "name": "Rotterdam School of Management, Erasmus University" } },
              { "@type": "Person", "name": "Ton", "jobTitle": "AI Agent Automation Consultant", "description": "Ruim 20 jaar ervaring in analyse- en marketing automation software. Heeft honderden organisaties geadviseerd." }
            ]
          }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Over Ons</div>
            <h1>Het team achter AI Volution</h1>
            <p>Wij geloven dat AI niet je team vervangt, maar versterkt.</p>
          </div>
        </section>

        {/* ORIGIN STORY */}
        <section className="origin-story reveal">
          <div className="container">
            <h2 className="origin-title">We begonnen als marketing agency. Nu bouwen we AI-systemen die bedrijven vooruithelpen.</h2>
            <div className="origin-body">
              <p>Wat begon met het automatiseren van campagnes, groeide uit tot iets veel groters. Steeds vaker vroegen klanten: "Kunnen jullie dit ook voor sales doen? En voor recruitment? En voor interne processen?" We experimenteren, testen en implementeren de eerste AI-agents, nog voor de hype losbarstte. De resultaten waren bizar. Sales Calls gingen beter. Klanten kregen sneller antwoord. Medewerkers hadden eindelijk ruimte om zich op hun echte werk te focussen.</p>
              <p>Zonder dat we het doorhadden, evolueerde onze agency en we bouwden AI-oplossingen die structureel werk overnamen. Niet omdat het hip was, maar omdat het werkte. Gedreven door vraag uit de markt, de resultaten die we leverden en omdat de wereld structureel verandert. Voor het eerst in de geschiedenis kunnen kenniswerkers echte taken uit handen geven. Niet aan freelancers. Niet aan extra personeel. Maar aan digitale collega's die het sneller, beter en foutloos doen. En dat is geen trend. Het is een kantelpunt.</p>
              <p>Daarom zijn we AI Volution gestart. Omdat we bedrijven willen helpen evolueren naar de volgende fasen, voordat het te laat is. En omdat we geloven: AI vervangt je mensen niet. Het maakt ze sterker, sneller en slimmer.</p>
              <div className="origin-quote">
                <p>Samen bouwen we aan een toekomst waarin technologie en menselijkheid hand in hand gaan. Waarin AI niet de baas is, maar de perfecte assistent. En waarin jouw team eindelijk kan doen waar ze het beste in zijn. Welkom bij AI Volution.... Laten we samen evolueren.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <KlantenScroll />

      {/* KERNWAARDEN */}
      <section className="kernwaarden">
        <div className="container">
          <div className="section-eyebrow">Kernwaarden</div>
          <h2 className="section-title reveal">Waar we voor staan</h2>
          <p className="kernwaarden-intro reveal">Bij AI Volution werken we volgens drie kernwaarden die bepalen hoe we samenwerken, innoveren en groeien met elkaar en met onze klanten.</p>
          <div className="kernwaarden-grid">
            <div className="kernwaarde-card reveal">
              <div className="kernwaarde-num">01</div>
              <h3>Evolution</h3>
              <p>Vernieuwen zit bij AI Volution in ons DNA. Niet voor niets zijn wij dagelijks bezig met evolueren.</p>
            </div>
            <div className="kernwaarde-card reveal">
              <div className="kernwaarde-num">02</div>
              <h3>We verleggen grenzen</h3>
              <p>We zetten ons 200% in, en gaan altijd voor het beste resultaat. Als we een doel voor ogen hebben, staat niets ons in de weg.</p>
            </div>
            <div className="kernwaarde-card reveal">
              <div className="kernwaarde-num">03</div>
              <h3>Work Hard Play Hard</h3>
              <p>We houden van ons werk, want AI automation is een fantastisch speelveld.</p>
            </div>
          </div>
        </div>
      </section>

      <KlantenScroll />

      {/* VISIE */}
      <section className="visie-section grid-rings reveal" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Onze Visie</div>
          <h2>Je wordt niet vervangen door AI, maar door bedrijven die AI wel gebruiken.</h2>
          <p className="visie-text">Het klinkt misschien confronterend, maar het is de realiteit. Bedrijven die vandaag niet investeren in AI-systemen en automatisering, worden morgen ingehaald door concurrenten die dat wel doen. Wij geloven dat slimme technologie het verschil maakt tussen overleven en groeien. Daarom helpen wij B2B-bedrijven die stap nu te zetten, zonder vage plannen of eindeloze trajecten. Wij leveren bewezen AI-systemen die vanaf dag een impact maken: sneller werken, beter presteren en minder druk op je team. We bouwen systemen die je niet alleen toekomstbestendig maken, maar je concurrenten ruim voor blijven.</p>
        </div>
      </section>

      {/* MISSIE */}
      <section className="missie-section reveal">
        <div className="container">
          <div className="section-eyebrow">Onze Missie</div>
          <h2>Wij helpen bedrijven evolueren met AI-systemen.</h2>
        </div>
      </section>

      {/* MASCOTTE */}
      <section className="mascotte-section">
        <div className="container">
          <div className="section-eyebrow">Ons Verhaal</div>
          <h2 className="section-title reveal">AI-mascotte en logomark</h2>
          <div className="mascotte-inner reveal">
            <img src="/assets/favicon.png" alt="AI Volution mascotte - Evo de aap" style={{ maxWidth: '120px', margin: '24px auto', display: 'block' }} />
            <p>Onze AI-mascotte en logomark vertellen ons verhaal in een oogopslag. Links zie je het gezicht van een aap -- symbool voor instinct, oorsprong en handmatig werk. Rechts een robot -- het symbool voor intelligentie, schaalbaarheid en snelheid. Samen verbeelden ze de sprong die elk bedrijf moet maken: van mens alleen, naar mens + machine.</p>
            <p>We leven niet meer in de aanloop naar AI. We zitten er middenin. AI is geen toekomstverhaal meer, geen hype, maar de motor achter bedrijven die sneller, slimmer en efficienter opereren. Bedrijven die blijven werken zoals ze dat jaren geleden deden, verliezen terrein. De winnaars zijn organisaties die durven te veranderen: die processen automatiseren, slimmer sturen en continu doorontwikkelen.</p>
            <p>AI is geen bedreiging. Het is de evolutie van werk. En die evolutie vraagt om een revolutie in denken en doen. Welkom in de AI Revolution. Of zoals wij het noemen: AI Volution.</p>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section style={{ background: 'var(--navy)', padding: '60px 0', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '32px', textAlign: 'center' }}>
            {[
              { value: '3', label: 'Co-founders' },
              { value: '50+', label: 'AI Workforces gebouwd' },
              { value: '100%', label: 'Focus op MKB+' },
              { value: '2-4w', label: 'Time-to-live' },
            ].map((stat, i) => (
              <div className="reveal" key={i}>
                <div style={{ fontFamily: 'var(--font-d)', fontSize: '44px', fontWeight: 900, color: 'var(--blue)', letterSpacing: '-2px' }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)', marginTop: '6px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="container">
          <div className="section-eyebrow">Het Team</div>
          <h2 className="section-title reveal">De mensen achter de AI</h2>
          <div className="team-grid">
            <div className="team-card reveal">
              <div className="team-avatar">T</div>
              <h3>Ton</h3>
              <div className="team-role">AI Agent Automation Consultant</div>
              <div className="team-expertise">Expertise: AI-strategie, procesanalyse, marketing automation, data-gedreven advisering</div>
              <p>Ton heeft ruim 20 jaar ervaring in het adviseren en verkopen van analyse- en marketing automation software. Hij heeft honderden organisaties geholpen hun data slimmer te gebruiken en processen te verbeteren. Bij AI Volution vertaalt hij bedrijfsdoelen naar praktische automatiseringsoplossingen met AI-systemen, met als doel de resultaten van zijn klanten te verbeteren.</p>
              <blockquote>"Ik wil bedrijven helpen om op tijd de keuze te maken om met AI-systemen te gaan werken en daarmee het verschil te maken. Ik word gelukkig als ik mensen kan helpen beter te werken en te leven."</blockquote>
            </div>

            <div className="team-card reveal">
              <div className="team-avatar"><img src="/assets/team/roy.jpg" alt="Roy Fernandes - Founder AI Volution" /></div>
              <h3>Roy Fernandes</h3>
              <div className="team-role">Co-founder -- Demand generation &amp; AI-marketing</div>
              <div className="team-expertise">Expertise: demand generation, AI-marketing, contentstrategie, software sales (sinds 2016)</div>
              <p>Roy is oprichter van het marketingbureau Future Growth, waarmee hij bedrijven begeleid in duurzame, data-gedreven groei. Sinds 2016 is hij actief in software sales, contentstrategie en social media. Roy is het creatieve brein achter de demand generation-strategieen die we koppelen aan AI-workflows en automatisering.</p>
              <blockquote>"AI is pas waardevol als het iets concreets oplevert: leads, tijd, inzicht of vrijheid."</blockquote>
            </div>

            <div className="team-card reveal">
              <div className="team-avatar">N</div>
              <h3>Noa</h3>
              <div className="team-role">Co-founder -- Marketing Automation &amp; AI-integraties</div>
              <div className="team-expertise">Expertise: marketing automation, AI-integraties, data analytics (RSM Erasmus), gecertificeerd Advanced Automation Specialist</div>
              <p>Noa studeerde Marketing Management aan de Rotterdam School of Management (Erasmus), met een specialisatie in Data Analytics. Met jarenlange ervaring in marketing automation en een sterke interesse in AI, groeide hij uit tot expert in het slim automatiseren van processen binnen en buiten marketing. Als gecertificeerd Advanced Automation Specialist benadert hij elk project strategisch en data-gedreven. Zijn kracht ligt in het ontwerpen van efficiente oplossingen die echte bedrijfsproblemen oplossen, zodat ondernemers meer ruimte krijgen om te focussen op wat echt telt.</p>
              <blockquote>"De beste AI toepassingen zie je niet, je merkt alleen dat alles moeitelozer loopt."</blockquote>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* WAAROM AI-VOLUTION */}
      <section className="waarom grid-rings">
        <div className="container">
          <div className="section-eyebrow">Waarom AI Volution</div>
          <h2 className="section-title reveal">Wat ons anders maakt</h2>
          <p className="waarom-intro reveal">Ons platform maakt geavanceerde AI-automatisering toegankelijk voor elke onderneming, ongeacht grootte of sector.</p>
          <div className="waarom-grid">
            <div className="waarom-card reveal">
              <h3>We nemen volledige verantwoordelijkheid voor het resultaat</h3>
              <p>Wij automatiseren niet om de technologie, maar om jouw bedrijfsresultaten te verbeteren. "We own the project".</p>
            </div>
            <div className="waarom-card reveal">
              <h3>We snappen hoe bedrijven werken</h3>
              <p>Na jaren advies bij honderden bedrijven weten we precies waar automatisering echt impact maakt op jouw resultaat.</p>
            </div>
            <div className="waarom-card reveal">
              <h3>Snel resultaat, zonder maanden wachten</h3>
              <p>De meeste automatiseringstrajecten zijn binnen 4 tot 6 weken live -- van analyse tot implementatie.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABox
        heading="Benieuwd wat AI voor jouw team kan betekenen?"
        text="Plan een gratis en vrijblijvend consult en ontdek welke resultaten we voor jullie kunnen verbeteren."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
