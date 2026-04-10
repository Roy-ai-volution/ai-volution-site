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

export default function AlgemeneVoorwaardenPage() {
  const { openModal } = useModal()

  return (
    <Layout isHomepage={false}>
      <Helmet>
        <title>Algemene Voorwaarden | AI Volution</title>
        <meta name="description" content="Bekijk de algemene voorwaarden van AI Volution. Transparante afspraken over onze AI-automatiseringsdiensten, samenwerking en dienstverlening voor MKB+ bedrijven." />
        <link rel="canonical" href="https://ai-volution.nl/algemene-voorwaarden.html" />
        <meta property="og:title" content="Algemene Voorwaarden | AI Volution" />
        <meta property="og:description" content="Bekijk de algemene voorwaarden van AI Volution. Transparante afspraken over onze AI-automatiseringsdiensten, samenwerking en dienstverlening voor MKB+ bedrijven." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/algemene-voorwaarden.html" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Algemene Voorwaarden | AI Volution" />
        <meta name="twitter:description" content="Bekijk de algemene voorwaarden van AI Volution. Transparante afspraken over onze AI-automatiseringsdiensten, samenwerking en dienstverlening voor MKB+ bedrijven." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "name": "Algemene Voorwaarden", "url": "https://ai-volution.nl/algemene-voorwaarden.html",
          "description": "Bekijk de algemene voorwaarden van AI Volution. Transparante afspraken over onze AI-automatiseringsdiensten, samenwerking en dienstverlening voor MKB+ bedrijven.",
          "publisher": { "@type": "Organization", "name": "AI Volution", "url": "https://ai-volution.nl" }
        })}</script>
      </Helmet>

      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />
        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Juridisch</div>
            <h1>Algemene Voorwaarden</h1>
            <p>De algemene voorwaarden van AI Volution, van toepassing op al onze diensten en samenwerkingen.</p>
          </div>
        </section>
      </div>

      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--off-white)' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          <div className="legal-content">
            <p><strong>AI Volution</strong><br />De Vriesstraat 26, 3261 PC Oud-Beijerland<br />E-mail: info@ai-volution.nl<br />KVK: [nog in te vullen]</p>

            <h2>Artikel 1 - Definities</h2>
            <p>In deze algemene voorwaarden wordt verstaan onder:</p>
            <p><strong>Opdrachtnemer:</strong> AI Volution, gevestigd te Oud-Beijerland, hierna te noemen "AI Volution".</p>
            <p><strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die met AI Volution een overeenkomst aangaat of wenst aan te gaan.</p>
            <p><strong>Overeenkomst:</strong> elke afspraak tussen Opdrachtgever en AI Volution tot het verlenen van Diensten door AI Volution ten behoeve van Opdrachtgever.</p>
            <p><strong>Diensten:</strong> alle werkzaamheden waartoe opdracht is gegeven, of die door AI Volution uit andere hoofde worden verricht, waaronder maar niet beperkt tot: AI-audits, implementatie van AI-automatiseringen, ontwikkeling van AI Workforces, training, consultancy en doorlopend beheer.</p>
            <p><strong>AI Workforces:</strong> door AI Volution ontwikkelde geautomatiseerde systemen, agents en workflows die bedrijfsprocessen ondersteunen of overnemen.</p>

            <h2>Artikel 2 - Toepasselijkheid</h2>
            <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, overeenkomsten en leveringen van diensten door of namens AI Volution.</p>
            <p>Afwijken van deze voorwaarden kan alleen wanneer dit uitdrukkelijk schriftelijk is overeengekomen.</p>
            <p>De toepasselijkheid van eventuele inkoop- of andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de hand gewezen.</p>

            <h2>Artikel 3 - Offertes en aanbiedingen</h2>
            <p>Alle offertes en aanbiedingen van AI Volution zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld.</p>
            <p>Offertes zijn geldig gedurende 30 dagen na dagtekening, tenzij anders aangegeven.</p>
            <p>De in een offerte vermelde prijzen zijn exclusief btw en andere heffingen van overheidswege, tenzij anders aangegeven.</p>

            <h2>Artikel 4 - Uitvoering van de overeenkomst</h2>
            <p>AI Volution zal de overeenkomst naar beste inzicht en vermogen uitvoeren overeenkomstig de eisen van goed vakmanschap. De verplichting van AI Volution betreft een inspanningsverplichting en uitdrukkelijk geen resultaatverplichting.</p>
            <p>Gezien de aard van AI-technologie kan AI Volution niet garanderen dat AI-implementaties onder alle omstandigheden foutloos functioneren. AI Volution spant zich in om de hoogst mogelijke kwaliteit en betrouwbaarheid te leveren.</p>
            <p>AI Volution heeft het recht om derden in te schakelen bij de uitvoering van de overeenkomst, indien dit naar oordeel van AI Volution wenselijk is voor een goede uitvoering.</p>
            <p>Opdrachtgever draagt er zorg voor dat alle gegevens en informatie, waarvan AI Volution aangeeft dat deze noodzakelijk zijn, tijdig worden verstrekt. Indien de benodigde gegevens niet tijdig worden verstrekt, heeft AI Volution het recht de uitvoering van de overeenkomst op te schorten.</p>

            <h2>Artikel 5 - Tarieven en betaling</h2>
            <p>Betaling dient te geschieden binnen 14 dagen na factuurdatum, op een door AI Volution aan te geven wijze.</p>
            <p>Facturering vindt plaats per project of maandelijks, afhankelijk van de aard van de overeenkomst en zoals vastgelegd in de offerte.</p>
            <p>Bij niet-tijdige betaling is Opdrachtgever van rechtswege in verzuim en is Opdrachtgever de wettelijke (handels)rente verschuldigd over het openstaande bedrag.</p>
            <p>Alle redelijke kosten ter verkrijging van voldoening buiten rechte komen voor rekening van Opdrachtgever.</p>
            <p>AI Volution behoudt zich het recht voor om tarieven jaarlijks te indexeren en zal Opdrachtgever hiervan tijdig op de hoogte stellen.</p>

            <h2>Artikel 6 - Intellectueel eigendom</h2>
            <p>Alle intellectuele eigendomsrechten op door AI Volution ontwikkelde AI-modellen, frameworks, methodieken en tools blijven eigendom van AI Volution, tenzij schriftelijk anders is overeengekomen.</p>
            <p>Opdrachtgever verkrijgt na volledige betaling een niet-exclusieve, niet-overdraagbare licentie om de specifiek voor Opdrachtgever ontwikkelde oplossingen te gebruiken voor het overeengekomen doel.</p>
            <p>Data en bedrijfsinformatie die door Opdrachtgever worden aangeleverd, blijven te allen tijde eigendom van Opdrachtgever. AI Volution zal deze data uitsluitend gebruiken voor de uitvoering van de overeenkomst.</p>
            <p>Het is Opdrachtgever niet toegestaan om zonder voorafgaande schriftelijke toestemming van AI Volution de geleverde oplossingen te kopi&euml;ren, te wijzigen of aan derden ter beschikking te stellen.</p>

            <h2>Artikel 7 - Geheimhouding</h2>
            <p>Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar of uit andere bron hebben verkregen. Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van de informatie.</p>
            <p>De geheimhoudingsplicht geldt ook na beeindiging van de overeenkomst en blijft van kracht zolang de verstrekkende partij redelijkerwijs aanspraak kan maken op het vertrouwelijke karakter van de informatie.</p>

            <h2>Artikel 8 - Aansprakelijkheid</h2>
            <p>De aansprakelijkheid van AI Volution is beperkt tot directe schade en bedraagt ten hoogste het bedrag dat door AI Volution aan Opdrachtgever is gefactureerd in de drie maanden voorafgaand aan het schadeveroorzakende feit.</p>
            <p>AI Volution is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst, gemiste besparingen, schade door bedrijfsstagnatie of schade als gevolg van beslissingen genomen op basis van door AI-systemen gegenereerde output.</p>
            <p>AI Volution is niet aansprakelijk voor schade die het gevolg is van onjuiste of onvolledige informatie verstrekt door Opdrachtgever, of het niet naleven van adviezen door Opdrachtgever.</p>

            <h2>Artikel 9 - Overmacht</h2>
            <p>AI Volution is niet gehouden tot het nakomen van enige verplichting jegens Opdrachtgever indien zij daartoe gehinderd wordt als gevolg van overmacht.</p>
            <p>Onder overmacht wordt in deze algemene voorwaarden verstaan, naast hetgeen daaromtrent in de wet en jurisprudentie wordt begrepen: storingen bij derde partijen en cloud providers waarvan AI Volution afhankelijk is (waaronder maar niet beperkt tot API-providers, hosting-diensten en AI-platformen), stroomstoringen, internetuitval, cyberaanvallen, overheidsmaatregelen, en alle overige omstandigheden die nakoming redelijkerwijs verhinderen.</p>
            <p>Indien de overmacht langer dan 60 dagen voortduurt, hebben beide partijen het recht de overeenkomst schriftelijk te ontbinden zonder verplichting tot schadevergoeding.</p>

            <h2>Artikel 10 - Duur en beeindiging</h2>
            <p>De overeenkomst wordt aangegaan voor de in de offerte of overeenkomst bepaalde duur. Bij doorlopende dienstverlening geldt een opzegtermijn van 1 maand, tenzij schriftelijk anders is overeengekomen.</p>
            <p>Opzegging dient schriftelijk (per e-mail of brief) te geschieden.</p>
            <p>Beide partijen hebben het recht de overeenkomst met onmiddellijke ingang te ontbinden indien de andere partij in verzuim is met de nakoming van haar verplichtingen, in staat van faillissement wordt verklaard, surseance van betaling aanvraagt, of de bedrijfsactiviteiten staakt.</p>
            <p>Bij beeindiging van de overeenkomst zal AI Volution alle data van Opdrachtgever binnen 30 dagen na beeindiging ter beschikking stellen, waarna AI Volution het recht heeft deze data te verwijderen.</p>

            <h2>Artikel 11 - Klachten</h2>
            <p>Klachten over de uitgevoerde werkzaamheden dienen door Opdrachtgever binnen 14 dagen na ontdekking schriftelijk te worden gemeld aan AI Volution.</p>
            <p>De klacht dient een zo gedetailleerd mogelijke omschrijving van de tekortkoming te bevatten, zodat AI Volution in staat is adequaat te reageren.</p>
            <p>Het indienen van een klacht schort de betalingsverplichting van Opdrachtgever niet op.</p>

            <h2>Artikel 12 - Toepasselijk recht en geschillen</h2>
            <p>Op alle overeenkomsten tussen AI Volution en Opdrachtgever is uitsluitend Nederlands recht van toepassing.</p>
            <p>Partijen zullen eerst een beroep op de rechter doen nadat zij zich tot het uiterste hebben ingespannen een geschil in onderling overleg te beslechten.</p>
            <p>Geschillen die niet in onderling overleg kunnen worden opgelost, worden voorgelegd aan de bevoegde rechter in het arrondissement Rotterdam.</p>
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
