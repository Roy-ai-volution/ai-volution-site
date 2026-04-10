import { Helmet } from 'react-helmet-async'
import Layout from '../components/Layout'
import CTABox from '../components/CTABox'
import RibbonCanvas, { RibbonBundle } from '../components/RibbonCanvas'
import RibbonCanvas2 from '../components/RibbonCanvas2'
import { useModal } from '../hooks/useModalContext'

const ribbonBundles: RibbonBundle[] = [
  { r: 51, g: 166, b: 255, lines: 12, spread: 20, baseY: 0.35, speed: 0.35, amp: 100, freq: 0.003, twist: 0.004, opacity: 0.06, lineWidth: 0.6 },
  { r: 139, g: 92, b: 246, lines: 10, spread: 16, baseY: 0.55, speed: 0.30, amp: 80, freq: 0.0025, twist: 0.003, opacity: 0.04, lineWidth: 0.5 },
]

export default function PrivacybeleidPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>Privacybeleid | AI Volution</title>
        <meta name="description" content="Lees het privacybeleid van AI Volution. Hoe wij omgaan met persoonsgegevens conform de AVG-wetgeving. Jouw data is bij ons in veilige handen. Bekijk ons beleid." />
        <link rel="canonical" href="https://ai-volution.nl/privacybeleid.html" />
        <meta property="og:title" content="Privacybeleid | AI Volution" />
        <meta property="og:description" content="Lees het privacybeleid van AI Volution. Hoe wij omgaan met persoonsgegevens conform de AVG-wetgeving. Jouw data is bij ons in veilige handen. Bekijk ons beleid." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/privacybeleid.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacybeleid | AI Volution" />
        <meta name="twitter:description" content="Lees het privacybeleid van AI Volution. Hoe wij omgaan met persoonsgegevens conform de AVG-wetgeving. Jouw data is bij ons in veilige handen. Bekijk ons beleid." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "Privacybeleid", "url": "https://ai-volution.nl/privacybeleid.html",
          "description": "Lees het privacybeleid van AI Volution. Hoe wij omgaan met persoonsgegevens conform de AVG-wetgeving. Jouw data is bij ons in veilige handen. Bekijk ons beleid.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Privacybeleid</div>
            <h1>Privacybeleid</h1>
            <p>Hoe AI Volution omgaat met uw persoonsgegevens conform de AVG/GDPR</p>
          </div>
        </section>
      </div>

      <section className="reveal" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--off-white)' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <div className="legal-content">
            <h2>1. Inleiding</h2>
            <p>AI Volution is een AI-automatiseringsbedrijf gevestigd te Oud-Beijerland. Wij hechten groot belang aan de bescherming van uw persoonsgegevens en verwerken deze zorgvuldig en in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR).</p>
            <p>In dit privacybeleid leggen wij uit welke persoonsgegevens wij verzamelen, waarom wij dit doen, hoe lang wij deze bewaren en welke rechten u heeft.</p>
            <p><strong>Verantwoordelijke voor de gegevensverwerking:</strong><br />
            AI Volution<br />
            De Vriesstraat 26, 3261 PC Oud-Beijerland<br />
            E-mail: <a href="mailto:info@ai-volution.nl" style={{ color: 'var(--blue)' }}>info@ai-volution.nl</a><br />
            Telefoon: +31 970 102 75159<br />
            KVK: [nog in te vullen]</p>

            <h2>2. Welke gegevens verzamelen wij</h2>
            <p>Wij kunnen de volgende persoonsgegevens verzamelen en verwerken:</p>
            <p><strong>Contactgegevens</strong> - Naam, e-mailadres, telefoonnummer en adresgegevens die u aan ons verstrekt via contactformulieren, e-mail of telefonisch contact.</p>
            <p><strong>Bedrijfsgegevens</strong> - Bedrijfsnaam, functietitel, KVK-nummer en overige zakelijke gegevens die relevant zijn voor onze dienstverlening.</p>
            <p><strong>Websitegebruik</strong> - IP-adres (geanonimiseerd), browsertype, bezochte pagina's, tijdstip van bezoek en verwijzende websites.</p>
            <p><strong>Communicatiegegevens</strong> - Inhoud van e-mails, berichten en overige correspondentie die u met ons deelt.</p>

            <h2>3. Doeleinden van verwerking</h2>
            <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
            <p><strong>Dienstverlening</strong> - Het uitvoeren van onze AI-automatiseringsdiensten, waaronder het opstellen van offertes, het uitvoeren van AI-audits en het implementeren van oplossingen.</p>
            <p><strong>Communicatie</strong> - Het beantwoorden van uw vragen, het versturen van relevante informatie over onze diensten en het onderhouden van de klantrelatie.</p>
            <p><strong>Verbetering van onze website</strong> - Het analyseren van websitegebruik om de gebruikerservaring en onze dienstverlening te verbeteren.</p>
            <p><strong>Wettelijke verplichtingen</strong> - Het voldoen aan wettelijke en fiscale verplichtingen.</p>

            <h2>4. Rechtsgrond voor verwerking</h2>
            <p>Wij verwerken uw persoonsgegevens op basis van een of meer van de volgende rechtsgronden:</p>
            <p><strong>Toestemming</strong> - Wanneer u expliciet toestemming heeft gegeven voor de verwerking, bijvoorbeeld bij het aanmelden voor onze nieuwsbrief. U kunt deze toestemming te allen tijde intrekken.</p>
            <p><strong>Uitvoering van een overeenkomst</strong> - Wanneer de verwerking noodzakelijk is voor het uitvoeren van een overeenkomst waarbij u partij bent, of om op uw verzoek stappen te ondernemen voorafgaand aan het sluiten van een overeenkomst.</p>
            <p><strong>Gerechtvaardigd belang</strong> - Wanneer de verwerking noodzakelijk is voor de behartiging van onze gerechtvaardigde belangen, zoals het verbeteren van onze dienstverlening en website, mits uw belangen niet zwaarder wegen.</p>
            <p><strong>Wettelijke verplichting</strong> - Wanneer de verwerking noodzakelijk is om te voldoen aan een wettelijke verplichting, zoals fiscale bewaarplichten.</p>

            <h2>5. Bewaartermijnen</h2>
            <p>Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is voor de doeleinden waarvoor zij zijn verzameld. De volgende bewaartermijnen worden gehanteerd:</p>
            <p><strong>Klantgegevens</strong> - Gedurende de looptijd van de overeenkomst en maximaal 2 jaar na beeindiging van de klantrelatie, tenzij wettelijke verplichtingen een langere bewaring vereisen.</p>
            <p><strong>Fiscale gegevens</strong> - 7 jaar, conform de wettelijke fiscale bewaarplicht.</p>
            <p><strong>Websitegegevens</strong> - Maximaal 26 maanden voor analytische doeleinden.</p>
            <p>Na afloop van de bewaartermijn worden uw gegevens veilig verwijderd of geanonimiseerd.</p>

            <h2>6. Delen met derden</h2>
            <p>AI Volution verkoopt uw persoonsgegevens niet aan derden. Wij delen uw gegevens uitsluitend met derden wanneer dit noodzakelijk is voor onze dienstverlening of wanneer wij hiertoe wettelijk verplicht zijn.</p>
            <p>Wij maken gebruik van de volgende categorie&euml;n verwerkers:</p>
            <p><strong>Hostingproviders</strong> - Voor het hosten van onze website en applicaties.</p>
            <p><strong>E-maildienstverleners</strong> - Voor het versturen van zakelijke e-mails en nieuwsbrieven.</p>
            <p><strong>Analytische diensten</strong> - Voor het analyseren van websitegebruik (geanonimiseerd).</p>
            <p>Met al onze verwerkers hebben wij een verwerkersovereenkomst gesloten om de bescherming van uw persoonsgegevens te waarborgen.</p>

            <h2>7. Cookies</h2>
            <p>Onze website maakt gebruik van cookies. Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt.</p>
            <p><strong>Functionele cookies</strong> - Deze cookies zijn noodzakelijk voor het goed functioneren van de website. Hiervoor is geen toestemming vereist.</p>
            <p><strong>Analytische cookies</strong> - Wij gebruiken geanonimiseerde analytische cookies om inzicht te krijgen in het gebruik van onze website. Deze cookies verzamelen geen persoonsgegevens.</p>
            <p><strong>Tracking cookies</strong> - Wij plaatsen geen tracking cookies zonder uw uitdrukkelijke toestemming. Indien u toestemming geeft, kunt u deze te allen tijde intrekken via uw browserinstellingen.</p>

            <h2>8. Uw rechten</h2>
            <p>Op grond van de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
            <p><strong>Recht op inzage</strong> - U heeft het recht om te weten welke persoonsgegevens wij van u verwerken en een kopie hiervan op te vragen.</p>
            <p><strong>Recht op correctie</strong> - U heeft het recht om onjuiste of onvolledige persoonsgegevens te laten corrigeren.</p>
            <p><strong>Recht op verwijdering</strong> - U heeft het recht om uw persoonsgegevens te laten verwijderen, tenzij wij wettelijk verplicht zijn deze te bewaren.</p>
            <p><strong>Recht op beperking</strong> - U heeft het recht om de verwerking van uw persoonsgegevens te laten beperken.</p>
            <p><strong>Recht op overdraagbaarheid</strong> - U heeft het recht om uw persoonsgegevens in een gestructureerd, gangbaar en machineleesbaar formaat te ontvangen en deze aan een andere verwerkingsverantwoordelijke over te dragen.</p>
            <p><strong>Recht van bezwaar</strong> - U heeft het recht om bezwaar te maken tegen de verwerking van uw persoonsgegevens op basis van gerechtvaardigd belang.</p>
            <p>Wij streven ernaar uw verzoek binnen 30 dagen te behandelen. Om uw identiteit te kunnen verifi&euml;ren, kunnen wij u vragen om aanvullende informatie.</p>

            <h2>9. Beveiliging</h2>
            <p>AI Volution neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies, vernietiging of wijziging. Deze maatregelen omvatten onder meer:</p>
            <p>- Versleutelde verbindingen (SSL/TLS) voor alle communicatie via onze website<br />
            - Beperkte toegang tot persoonsgegevens op basis van noodzaak<br />
            - Regelmatige evaluatie en actualisering van onze beveiligingsmaatregelen<br />
            - Verwerkersovereenkomsten met alle externe partijen die toegang hebben tot persoonsgegevens</p>

            <h2>10. Contact en klachten</h2>
            <p>Heeft u vragen over dit privacybeleid of wilt u een beroep doen op een van uw rechten? Neem dan contact met ons op:</p>
            <p>AI Volution<br />
            De Vriesstraat 26, 3261 PC Oud-Beijerland<br />
            E-mail: <a href="mailto:info@ai-volution.nl" style={{ color: 'var(--blue)' }}>info@ai-volution.nl</a><br />
            Telefoon: +31 970 102 75159</p>
            <p>Indien u een klacht heeft over de wijze waarop wij met uw persoonsgegevens omgaan, horen wij dit graag zodat wij u kunnen helpen. U heeft daarnaast altijd het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens, de toezichthoudende autoriteit op het gebied van privacybescherming in Nederland. Meer informatie vindt u op <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener" style={{ color: 'var(--blue)' }}>autoriteitpersoonsgegevens.nl</a>.</p>
          </div>
        </div>
      </section>

      <CTABox
        heading="Klaar om te starten met slimme AI-agent automatisering?"
        text="Plan een gratis en vrijblijvend consult en ontdek welke resultaten we voor jullie kunnen realiseren."
        onOpenModal={openModal}
      />
    </Layout>
  )
}
