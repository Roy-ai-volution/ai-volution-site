# AI Volution -- Lovable Migratiedocument

> Compleet migratiedocument voor pixel-perfect rebuild van de AI Volution website van statische HTML/CSS/JS naar React/Tailwind in Lovable.

---

## 1. Overzicht

### Wat is dit project
De AI Volution website is een marketing/lead-gen site voor een AI Automation Agency gericht op MKB+ in Nederland. De site bevat 20 pagina's: homepage, 6 diensten, 4 branche-pagina's, blog (met Supabase), ROI calculator, contact, aanpak, over ons, branches-overzicht, diensten-overzicht, en 2 juridische pagina's.

### Technische stack (huidig)
- **HTML5** (statische `.html` bestanden)
- **CSS** (1 bestand: `style.css`, 2555 regels, custom properties, geen preprocessor)
- **Vanilla JS** (`app.js` + `ribbon.js`, geen framework)
- **Supabase JS CDN** (blog data)
- **GHL iframes** (formulieren via GoHighLevel/Future Growth)
- **Wistia** (video embed, lazy-loaded)
- **Google Fonts** (DM Sans via CDN)

### Doelstack (Lovable)
- **React** (Lovable default)
- **Tailwind CSS** (met custom theme config voor design tokens)
- **Supabase client** (`@supabase/supabase-js`)
- **React Router** (voor pagina-routing)

### GitHub repo
`Roy-ai-volution/ai-volution-site`

---

## 2. Pagina-overzicht (20 pagina's -> React routes)

| # | HTML bestand | React route | Component naam | Type |
|---|---|---|---|---|
| 1 | `index.html` | `/` | `HomePage` | Homepage |
| 2 | `diensten.html` | `/diensten` | `DienstenPage` | Overzicht |
| 3 | `sales-automation.html` | `/diensten/sales-automatisering` | `SalesAutomationPage` | Service detail |
| 4 | `marketing-automation.html` | `/diensten/marketing-automatisering` | `MarketingAutomationPage` | Service detail |
| 5 | `internal-processes.html` | `/diensten/interne-processen` | `InternalProcessesPage` | Service detail |
| 6 | `automate-finance.html` | `/diensten/finance-automatisering` | `AutomateFinancePage` | Service detail |
| 7 | `automate-support.html` | `/diensten/klantenservice-automatisering` | `AutomateSupportPage` | Service detail |
| 8 | `ai-agents-detail.html` | `/diensten/ai-agents` | `AiAgentsDetailPage` | Service detail |
| 9 | `branches.html` | `/branches` | `BranchesPage` | Overzicht |
| 10 | `branche-b2b-saas.html` | `/branches/b2b-saas` | `BrancheB2bSaasPage` | Branche detail |
| 11 | `branche-logistiek.html` | `/branches/logistiek` | `BrancheLogistiekPage` | Branche detail |
| 12 | `branche-ecommerce.html` | `/branches/ecommerce` | `BrancheEcommercePage` | Branche detail |
| 13 | `branche-dienstverleners.html` | `/branches/dienstverleners` | `BrancheDienstverlenerPage` | Branche detail |
| 14 | `aanpak.html` | `/aanpak` | `AanpakPage` | Content |
| 15 | `over-ons.html` | `/over-ons` | `OverOnsPage` | Content |
| 16 | `blog.html` | `/blog` | `BlogPage` | Blog (Supabase) |
| 17 | `blog.html?post=:slug` | `/blog/:slug` | `BlogDetailPage` | Blog detail (Supabase) |
| 18 | `roi.html` | `/roi-calculator` | `RoiPage` | Interactief |
| 19 | `contact.html` | `/contact` | `ContactPage` | Formulier |
| 20 | `privacybeleid.html` | `/privacybeleid` | `PrivacybeleidPage` | Juridisch |
| 21 | `algemene-voorwaarden.html` | `/algemene-voorwaarden` | `AlgemeneVoorwaardenPage` | Juridisch |

---

## 3. Component-structuur

### Gedeelde layout-componenten

| Component | Beschrijving | Gebruikt op |
|---|---|---|
| `Navbar` | Fixed top navbar met logo, links, CTA button, mobile hamburger menu toggle. Op homepage: transparant, wordt solid bij scroll (class `scrolled`). Op sub-pages: altijd `scrolled`. Active link highlighting via `class="active"`. | Alle pagina's |
| `Footer` | Navy achtergrond, 4-koloms grid: brand info + contact, diensten links, bedrijf links, nieuwsbrief iframe. Onderaan: copyright + juridische links. | Alle pagina's |
| `ScanModal` | Overlay popup met GHL iframe formulier. Geopend via `openScanModal()`, gesloten via close button, click-outside, of Escape. Body scroll wordt gelockt. | Alle pagina's (behalve contact) |
| `KlantenScroll` | Infinite scroll logo-carousel met fade-edges. Bevat 7 klantlogo's (gedupliceerd voor seamless loop). Grayscale + opacity filter, hover = kleur. | Alle pagina's |
| `Marquee` | Navy achtergrond, horizontale scroll tekst. Afwisselend filled en ghost (outlined) tekst met blauwe dot separators. Tekst is per-pagina uniek. | Alle pagina's |
| `RibbonCanvas` | Canvas-animatie (bundled mesh style). Gebruikt `initRibbon(canvasId, bundles)`. Bundles config verschilt per pagina. 45fps cap + IntersectionObserver visibility pause. | Homepage hero, alle sub-page hero wrappers |
| `RibbonCanvas2` | Canvas-animatie (aurora flow style). Gebruikt `initRibbon2(canvasId)`. Heeft ingebouwde ribbons config. Gebruikt fbm noise. | Homepage FAQ, blog grid, contact form, ROI calculator |
| `CTABox` | Gradient box (blue -> navy) met heading, paragraph, en witte CTA button. Radial gradient decoratie. | Homepage, alle service pages, branche pages, blog, ROI |
| `FAQ` | `<details>/<summary>` accordion met `+` icon dat roteert naar `x` bij open. Max-width 760px centered. | Homepage, alle service pages |
| `ProcessFlow` | 5-stappen horizontaal grid (verbonden met lijn), elk met nummer-cirkel, emoji icon, titel, beschrijving. Daaronder timeline met 3 fasen. | Alle service pages, alle branche pages |

### Pagina-specifieke componenten

| Component | Beschrijving |
|---|---|
| `HeroHome` | Homepage hero met counter animatie (0->10), stat bars (animated width), hero-card met gradient top-border, "AI Workforces actief" tag met pulserende groene dot |
| `HeroSplit` | Split hero (2-koloms grid) voor service en branche pages. Bevat emoji, eyebrow, h1, p + hero-stat-card met groot nummer en label |
| `HeroSimple` | Centered hero voor blog, contact, ROI, aanpak. Eyebrow + h1 + p |
| `HeroBadge` | Inline badge element (bv. "ROI Garantie") met icon. Gebruikt op specifieke service pages |
| `HeroStatCard` | Kaart met groot nummer + label (bv. "70%" + "minder admin tijd") |
| `AgentWorkflowVisual` | Verticale node-chain voor ai-agents-detail page |
| `BeforeAfter` | 2-koloms vergelijking: "Zonder AI Workforce" (wit) vs "Met AI Workforce" (navy). Met rode/groene dots en tijdstappen |
| `ValueProps` | 3-koloms grid kaarten met emoji icon. Hover: kaart wordt navy met witte tekst |
| `DienstenAccordion` | Expandable accordion lijst op homepage met nummers, titels, subtitels, toggle button (+/-), en expandable body met beschrijving + link |
| `DienstCards` | 2-koloms grid van module-kaarten op service/branche pages. Elke kaart: nummer, titel, subtekst, beschrijving, bullet list, resultaat-highlight |
| `BranchCards` | 2-koloms grid van navy cards met radial gradient hover effect |
| `IntegrationsScroll` | Horizontale marquee scroll van tool/platform namen (Python, n8n, HubSpot, etc.) |
| `StatsStrip` | Navy achtergrond met 3 stat items (groot nummer, label, bron) |
| `UrgencyBlock` | Navy gradient blok met 3 stats + closing statement + CTA |
| `VisionSection` | Centered section met h2, Wistia video embed (lazy loaded), sub-tekst, CTA |
| `AgenticExplainer` | Centered tekst-sectie die "Wat is een AI Workforce?" uitlegt |
| `BlogGrid` | 3-koloms grid van blog cards (fetched van Supabase). Inclusief filter buttons en featured post |
| `BlogDetail` | Artikel view met hero image, meta, content (HTML), tags, FAQ accordion, auteur info, gerelateerde posts |
| `BlogFilters` | Horizontale filter buttons (Alles, AI, Automatisering, Sales, Marketing) |
| `BlogFeatured` | Grote featured post card (navy gradient, 2-koloms: tekst + afbeelding) |
| `RoiCalculator` | 4 sliders (medewerkers, uren, uurloon, percentage) + realtime result card (navy) met berekende besparingen |
| `ComparisonBlock` | 2-koloms vergelijking (manual vs AI) voor diensten.html |
| `TeamGrid` | 3-koloms team kaarten met avatar (initialen of foto), naam, rol, beschrijving, quote |
| `StepsSection` | Verticale stappen-lijst (aanpak page) met nummers en tijdlijn |
| `PricingCards` | 4-koloms pricing grid (aanpak page) |
| `ExpectSection` | 3-koloms "Wat je kunt verwachten" cards (contact page) |
| `ContactForm` | GHL iframe + contact info sidebar |
| `QuoteSection` | Centered quote blok met grote aanhalingstekens (branches page) |

---

## 4. Design Tokens

### CSS Custom Properties (uit `:root`)

```css
/* Kleuren */
--blue: #33a6ff
--blue-hover: #2b8fe6
--navy: #111827
--navy-mid: #1a2332
--white: #ffffff
--off-white: #fafafa
--black: #111111
--text: #1a1a2e
--text-sec: #555566
--text-muted: #8e8e9a
--border: #e8e8ec

/* Font families */
--font-d: 'Futura', 'Futura-Bold', system-ui, sans-serif   /* Display/headings */
--font-b: 'DM Sans', -apple-system, sans-serif               /* Body text */
```

### Tailwind theme config suggestie

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: { DEFAULT: '#33a6ff', hover: '#2b8fe6' },
        navy: { DEFAULT: '#111827', mid: '#1a2332' },
        'off-white': '#fafafa',
        'av-black': '#111111',
        'text-main': '#1a1a2e',
        'text-sec': '#555566',
        'text-muted': '#8e8e9a',
        border: '#e8e8ec',
      },
      fontFamily: {
        display: ["'Futura'", "'Futura-Bold'", 'system-ui', 'sans-serif'],
        body: ["'DM Sans'", '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
}
```

### Breakpoints

| Breakpoint | Wat verandert |
|---|---|
| `900px` | Hoofd-breakpoint: grids -> 1 kolom, mobile menu, hero verkleind, footer 2-koloms |
| `768px` | Dienst subtitels verborgen, expect grid 1 kolom |
| `600px` | Scan modal fullwidth, comparison grid 1 kolom, blog filters horizontaal scrollbaar, stat break kleiner |
| `480px` | Alles maximaal verkleind: hero h1 34px, hero buttons verticaal gestapeld, footer 1 kolom, agent workflow visual verborgen |

### Container
- Max-width: `1240px`
- Padding: `0 40px` (desktop), `0 24px` (tablet), `0 16px` (mobile)

### Border-radius patronen
- Cards groot: `20px`
- Cards medium: `16px`
- Buttons: `8px`
- Pills/badges: `40px` of `100px` (full round)
- Modal: `20px` (desktop), `16px` (mobile)

### Box-shadow patronen
- Card hover: `0 20px 56px rgba(0,0,0,.08)`
- Hero card: `0 24px 80px rgba(0,0,0,.06)`
- Button hover: `0 8px 28px rgba(51,166,255,.3)`
- CTA hover: `0 16px 48px rgba(0,0,0,.2)`
- Navy card hover: `0 20px 56px rgba(10,14,39,.25)`
- Modal: `0 24px 80px rgba(0,0,0,.2)`

### Transition patronen
- Default: `all .3s` of `all .25s`
- Cards: `all .4s cubic-bezier(.16,1,.3,1)`
- Reveal: `opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)`
- Navbar: `all .35s`

---

## 5. Animaties

### 5.1 RibbonCanvas (initRibbon) -- Bundled Mesh Style

**Hoe het werkt:**
- Neemt een `canvasId` en array van `bundles`
- Elke bundle tekent meerdere sinusgolven (`lines` stuks) met twist en spread
- Canvas vult parent element (responsive resize)
- 45fps cap via `requestAnimationFrame` + `FPS_INTERVAL = 1000/45`
- Pauzeert wanneer canvas niet zichtbaar (IntersectionObserver) of tab verborgen (visibilitychange)

**Bundle config format:**
```js
{
  r: 51, g: 166, b: 255,   // RGB kleur
  lines: 22,                 // Aantal lijnen in de bundle
  spread: 28,                // Verticale spreiding tussen lijnen
  baseY: 0.32,               // Verticale positie (0-1, fractie van canvas hoogte)
  speed: 0.45,               // Animatiesnelheid
  amp: 130,                  // Amplitude van de golven
  freq: 0.0028,              // Frequentie
  twist: 0.006,              // Twist-intensiteit
  opacity: 0.12,             // Maximale opacity per lijn
  lineWidth: 0.8             // Lijndikte
}
```

**Per-pagina configuraties:**

Homepage (`index.html`): 5 bundles -- blauw, paars, roze, blauw, paars. Intensiefste config (22 lines, 0.12 opacity). Canvas beslaat hero + klanten + vision + agentic explainer secties.

Service pages (bv. `sales-automation.html`): 3 bundles -- blauw, paars, roze. Canvas zit in `.page-wrapper` (hero + marquee).

Branche pages: 2 bundles -- blauw, paars. Minder intens.

Blog/contact/ROI/aanpak: 2 bundles -- blauw, paars.

### 5.2 RibbonCanvas2 (initRibbon2) -- Aurora Flow

**Hoe het werkt:**
- Vaste 5 ribbons met ingebouwde config (niet configureerbaar per pagina)
- Gebruikt fractal Brownian motion (fbm) noise voor organische beweging
- Elke ribbon wordt getekend als 6 lagen met quadraticCurveTo
- Zelfde fps cap en visibility pause als initRibbon

**Ingebouwde ribbons:**
```js
[
  { baseY: 0.20, speed: 0.08, width: 40, r: 51, g: 166, b: 255, opacity: 0.04, seed: 0 },
  { baseY: 0.40, speed: 0.06, width: 55, r: 139, g: 92, b: 246, opacity: 0.045, seed: 100 },
  { baseY: 0.60, speed: 0.07, width: 35, r: 236, g: 72, b: 153, opacity: 0.03, seed: 200 },
  { baseY: 0.75, speed: 0.05, width: 45, r: 51, g: 166, b: 255, opacity: 0.04, seed: 300 },
  { baseY: 0.35, speed: 0.04, width: 50, r: 139, g: 92, b: 246, opacity: 0.035, seed: 400 },
]
```

### 5.3 CSS Keyframe Animaties

```css
/* Marquee en klanten scroll */
@keyframes marqueeScroll { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }
/* Marquee: 22s linear infinite */
/* Klanten: 30s linear infinite (hover pauzeert) */

@keyframes klantenScroll { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }

/* Page enter animaties */
@keyframes fadeUp { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:none; } }
@keyframes slideIn { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:none; } }

/* Decoratief */
@keyframes pulseDot { 0%,100% { opacity:1; } 50% { opacity:.5; transform:scale(1.5); } }
@keyframes countUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
@keyframes glowBorder { 0%,100% { border-color:rgba(51,166,255,.15); } 50% { border-color:rgba(51,166,255,.4); } }
@keyframes gradientShift { 0% { background-position:0% 50%; } 50% { background-position:100% 50%; } 100% { background-position:0% 50%; } }

/* Modal */
@keyframes modalIn { from { opacity:0; transform:translateY(20px) scale(.96); } to { opacity:1; transform:translateY(0) scale(1); } }
```

### 5.4 Reveal (Scroll Reveal)

**IntersectionObserver pattern:**
```js
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);  // Eenmalig
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
```

Elementen met class `reveal` starten onzichtbaar (`opacity:0; transform:translateY(36px)`) en transitioneren naar zichtbaar bij scroll-into-view.

**React implementatie:** Gebruik een `useReveal` hook of `framer-motion` met `whileInView`.

### 5.5 Homepage Hero Animaties

**Counter animatie (0 -> 10):**
- Start na 600ms delay
- Telt op met stappen van 0.2 via `requestAnimationFrame`
- Element: `#counter`

**Bar animatie:**
- Start na 400ms delay
- Elke `.hero-bar-fill` krijgt `width` ingesteld op `data-w` attribuut (87%, 92%, 78%)
- CSS transition: `width 1.6s cubic-bezier(.16,1,.3,1)`

**Gradient shift:**
- `.hero-card::before` heeft `animation: gradientShift 4s ease forwards`
- Gradient schuift van links naar rechts

---

## 6. Supabase Integratie

### Connectie

```
Project URL:  https://lwparxjwqkndeixigrll.supabase.co
Anon Key:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGFyeGp3cWtuZGVpeGlncmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3Mzc4NzEsImV4cCI6MjA2NTMxMzg3MX0.CAKuNIt-kNfAf5ansF3Vpybf-NAkA2V6yX52KBHGxRw
Storage URL:  https://lwparxjwqkndeixigrll.supabase.co/storage/v1/object/public/blog-images/
```

### Tabel: `blog_posts`

| Kolom | Type | Beschrijving |
|---|---|---|
| `slug` | text | URL-slug (uniek) |
| `title` | text | Blog titel |
| `subtitle` | text | Ondertitel |
| `excerpt` | text | Korte samenvatting voor cards |
| `content` | text | Volledige HTML content |
| `image_url` | text | Hero afbeelding (filename OF volledige URL) |
| `category` | text | Categorie (AI, Automatisering, Sales, Marketing) |
| `date` | text | Publicatiedatum (string) |
| `read_time` | text | Leestijd (kan "5 min leestijd" of gewoon "5" zijn) |
| `published` | boolean | Publicatiestatus |
| `author_name` | text | Naam van de auteur |
| `author_title` | text | Functietitel auteur |
| `meta_description` | text | SEO meta description |
| `tags` | jsonb (array) | Array van tag strings |
| `faq` | jsonb (array) | Array van `{question, answer}` of `{q, a}` objecten |

### Blog Grid View (listing)

```js
// Fetch alle gepubliceerde posts, nieuwste eerst
const { data } = await sb.from('blog_posts')
  .select('slug,title,excerpt,image_url,category,date,read_time')
  .eq('published', true)
  .order('date', { ascending: false });

// Eerste post = featured (groot card)
// Rest = 3-koloms grid cards
```

**Filtering:** Client-side filtering op `category` via filter buttons. "Alles" toont alle posts (minus featured).

### Blog Detail View

```js
// URL: /blog/:slug
const { data: post } = await sb.from('blog_posts')
  .select('*')
  .eq('slug', slug)
  .eq('published', true)
  .single();
```

**Content rendering:**
- HTML content uit Supabase wordt direct gerenderd (dangerouslySetInnerHTML)
- Inline `color`, `background-color`, en `font-family` styles worden gestript:
  ```js
  content.replace(/color\s*:\s*#[0-9a-fA-F]{3,8}\s*;?/gi, '')
         .replace(/background-color\s*:\s*#[0-9a-fA-F]{3,8}\s*;?/gi, '')
         .replace(/font-family\s*:\s*[^;"]+;?/gi, '')
  ```

**Gerelateerde posts:** Na render van detail, fetch 3 posts met zelfde `category` (excl. huidige).

**Meta tags:** `document.title`, og:title, og:description, og:image worden dynamisch bijgewerkt bij detail view.

### Image URL Handling

**Gemengd formaat in `image_url`:**
- Sommige posts hebben een volledige URL (begint met `http`)
- Andere hebben alleen een filename

```js
function resolveImg(imageUrl) {
  if (!imageUrl) return '';
  if (imageUrl.startsWith('http')) return imageUrl;
  return STORAGE_URL + imageUrl;
  // STORAGE_URL = 'https://lwparxjwqkndeixigrll.supabase.co/storage/v1/object/public/blog-images/'
}
```

### Storage Buckets
- `blog-images` -- blogpost afbeeldingen
- `Afbeelding` -- mogelijk andere content afbeeldingen

---

## 7. GHL Formulieren (3 iframes)

Alle formulieren komen van GoHighLevel (Future Growth sub-account).

### 7.1 Contact Formulier

```
URL:           https://fc.future-growth.nl/widget/form/3c7RZK0i0Hs1p2iUMbOO
ID:            inline-3c7RZK0i0Hs1p2iUMbOO
data-form-id:  3c7RZK0i0Hs1p2iUMbOO
data-form-name: Contact Formulier Site
data-height:   468
Pagina:        contact.html
```

### 7.2 Nieuwsbrief

```
URL:           https://fc.future-growth.nl/widget/form/N2V6YGvNn1bQkMZIlWDk
ID:            inline-N2V6YGvNn1bQkMZIlWDk
data-form-id:  N2V6YGvNn1bQkMZIlWDk
data-form-name: Nieuwsbrief Site
data-height:   250
Pagina:        Alle pagina's (footer)
```

### 7.3 Scan Modal (AI-ROI Scan)

```
URL:           https://fc.future-growth.nl/widget/form/VZKtnbuXIFCf3TvXiFGO
ID:            inline-VZKtnbuXIFCf3TvXiFGO
data-form-id:  VZKtnbuXIFCf3TvXiFGO
data-form-name: AI-ROI Scan (Simpele Scan)
data-height:   631
Pagina:        Alle pagina's (modal popup)
```

### GHL Embed Script

```html
<script src="https://fc.future-growth.nl/js/form_embed.js"></script>
```

**Let op:** Dit script moet geladen worden na de iframe. In React: laad het script via `useEffect` of een `<Script>` component.

### Iframe data-attributes (alle drie hetzelfde patroon)

```
data-layout="{'id':'INLINE'}"
data-trigger-type="alwaysShow"
data-trigger-value=""
data-activation-type="alwaysActivated"
data-activation-value=""
data-deactivation-type="neverDeactivate"
data-deactivation-value=""
```

---

## 8. Per-Pagina Unieke Elementen

### 8.1 Homepage (`index.html`)

- **Body class:** `homepage` (navbar transparant bij top, scrolled bij scroll > 50px)
- **Hero:** 2-koloms grid (1.3fr .7fr). Linkerkant: eyebrow, h1 met gradient text `highlight`, p, 2 buttons. Rechterkant: hero-card met counter (0->10 animatie), 3 stat bars (animated fill), "AI Workforces actief" tag met pulserende groene dot
- **Klanten scroll:** Direct onder hero, binnen hero-wrapper (ribbon doorloop)
- **Vision:** Wistia video embed (lazy-loaded via IntersectionObserver), centered tekst
- **Agentic Explainer:** 3 paragrafen die AI Workforce concept uitleggen
- **Value Props:** 3 kaarten met emoji icons, hover = navy background
- **How It Works (Before/After):** 2-koloms vergelijking + 3 stap-kaarten
- **Diensten Accordion:** 6 expandable items met toggle
- **Marquee:** "AI Volution / Automatiseer de toekomst / AI Workforces / MKB+ klaar"
- **Branches:** 4 navy cards
- **Integrations Scroll:** Horizontale tool namen marquee
- **FAQ:** 5 items met `<details>` accordion + RibbonCanvas2 achtergrond
- **Urgency Block:** 3 stats + closing CTA
- **CTA Box**
- **JSON-LD:** Organization + FAQPage
- **Ribbon:** 5 bundles (initRibbon) + aurora (initRibbon2)
- **toggleDienst():** Globale functie voor accordion toggle

### 8.2 Service Pages (sales, marketing, support, finance, internal, ai-agents)

Alle service pages volgen hetzelfde patroon:

- **Navbar:** Altijd `scrolled`, diensten link = `active`
- **Page Wrapper:** RibbonCanvas + hero + marquee
- **Hero variant classes:**
  - `hero-sales` (gradient bottom: blue -> teal, radial glow top-right)
  - `hero-marketing` (gradient bottom: teal -> blue, radial glow bottom-left)
  - `hero-support` (gradient bottom: blue -> green, radial glow center)
  - `hero-finance` (gradient bottom: navy -> blue, linear gradient overlay)
  - `hero-internal` (gradient bottom: gray -> blue, radial glow bottom-right)
  - `hero-agents` (gradient bottom: blue -> purple, decorative rotated borders)
- **Hero split layout:** 2 kolommen met emoji, eyebrow, h1, p + stat-card
- **Marquee:** Per-pagina unieke teksten
- **Klanten scroll**
- **Service Intro:** Centered eyebrow + titel + beschrijving
- **Module Cards (dienst-cards):** 2-koloms grid, 6 kaarten per pagina met unieke content
- **Stat Break:** 3 statistieken met bronvermelding
- **Process Flow:** 5 stappen (Analyse, Ontwerp, Bouw, Test, Live) + timeline
- **FAQ:** Per-pagina unieke vragen + RibbonCanvas2 achtergrond
- **CTA Box**
- **JSON-LD:** Service schema
- **Ribbon:** 3 bundles (per pagina verschillende kleuren/intensiteiten)

**AI Agents page extra's:**
- `AgentWorkflowVisual`: verticale nodes (agent-node en agent-node-accent) -- verborgen op 480px

### 8.3 Branche Pages (b2b-saas, logistiek, ecommerce, dienstverleners)

Zelfde structuur als service pages maar met:
- **Hero variant classes:** `hero-saas`, `hero-logistics`, `hero-ecommerce`, `hero-services`
- **Navbar:** Branches link = `active`
- **Content:** Branche-specifieke modules en statistieken

### 8.4 Blog (`blog.html`)

- **Supabase CDN script** in `<head>`: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`
- **Blog Filters:** 5 buttons (Alles, AI, Automatisering, Sales, Marketing)
- **Featured Post:** Eerste post als grote navy card
- **Blog Grid:** 3-koloms card grid met de rest
- **Blog Detail:** Dynamisch via `?post=slug` URL parameter. Verbergt grid secties en toont artikel
- **RibbonCanvas2:** Achtergrond in blog grid sectie
- **Dubbele klanten scroll:** Boven en onder de blog grid
- **JSON-LD:** Blog schema

### 8.5 ROI Calculator (`roi.html`)

- **4 range sliders:** medewerkers (1-100), uren (1-40), uurloon (15-150), percentage (10-90)
- **Realtime berekening:**
  ```js
  besparingWeek = medewerkers * uren * (pct/100) * uurloon
  besparingMaand = besparingWeek * 4.33
  besparingJaar = besparingWeek * 52
  urenBespaard = medewerkers * uren * (pct/100)
  ```
- **Result card:** Navy gradient, sticky (top: 120px), met 4 statistieken
- **"Waarom ROI" sectie:** 3-koloms grid met emoji icons
- **RibbonCanvas2:** Achtergrond in calculator sectie

### 8.6 Contact (`contact.html`)

- **Contact form:** GHL iframe (3c7RZK0i0Hs1p2iUMbOO)
- **Contact info:** Email, telefoon, kantoor, openingstijden
- **Consult box:** "Gratis AI Consult" info card
- **Expect section:** 3-koloms "Wat je kunt verwachten" na gesprek
- **RibbonCanvas2:** Achtergrond in contact sectie
- **Navbar CTA:** Linkt naar `#contact-form` in plaats van modal

### 8.7 Aanpak (`aanpak.html`)

- **Aanpak intro:** Centered h2 + beschrijving
- **Steps section:** 4 fasen (Audit, Implementatie, Training, Doorontwikkeling) met tijdlijn
- **ROI Audit blok:** Navy achtergrond met ROI-card, audit deliverables, "Na de audit" lijst
- **Succesfactoren:** 2-koloms grid met checkmarks
- **Pricing cards:** 4-koloms grid
- **Background pattern:** `grid-flow` (horizontale lijnen)

### 8.8 Over Ons (`over-ons.html`)

- **Origin story:** Lange tekst met quote blok
- **Team section:** 3 team cards met avatars (foto of initialen), rollen, beschrijvingen, quotes
- **Kernwaarden:** 3-koloms grid (6 kaarten)
- **Visie section:** Centered tekst
- **Missie section:** Navy gradient met gradient text
- **Mascotte section:** Info blok over het merk
- **Waarom blok:** 3 kaarten met sub-tekst
- **Background pattern:** `grid-rings`

### 8.9 Diensten Overzicht (`diensten.html`)

- **6 dienst kaarten** (zelfde als service pages maar compacter)
- **Comparison block:** Manual vs AI vergelijking
- **Background pattern:** `grid-diagonal`

### 8.10 Branches Overzicht (`branches.html`)

- **4 branche cards** (navy)
- **Quote section:** Inspirerende quote
- **Background pattern:** `grid-hex`

### 8.11 Juridische Pagina's

- **Privacybeleid** en **Algemene Voorwaarden**: Eenvoudige tekst-pagina's met standard layout

---

## 9. SEO Configuratie

### Meta Tags Patroon (per pagina)

Elke pagina bevat:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Pagina Titel] | AI Volution</title>
<meta name="description" content="[Unieke beschrijving]">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="icon" type="image/png" href="assets/favicon.png">
<link rel="canonical" href="https://ai-volution.nl/[pagina].html">
<link rel="alternate" hreflang="nl-NL" href="https://ai-volution.nl/[pagina].html">
<meta property="og:title" content="[Titel]">
<meta property="og:description" content="[Beschrijving]">
<meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png">
<meta property="og:url" content="https://ai-volution.nl/[pagina].html">
<meta property="og:type" content="website">
<meta property="og:locale" content="nl_NL">
<meta property="og:site_name" content="AI Volution">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Titel]">
<meta name="twitter:description" content="[Beschrijving]">
<meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png">
```

**In React:** Gebruik `react-helmet-async` of Lovable's ingebouwde `<Head>` component.

### JSON-LD Schema Types

| Pagina | Schema Type | Inhoud |
|---|---|---|
| Homepage | `Organization` | Naam, URL, logo, adres, contactpunt, sameAs |
| Homepage | `FAQPage` | 5 FAQ items met vragen en antwoorden |
| Service pages | `Service` | Naam, beschrijving, serviceType, provider (Organization) |
| Blog | `Blog` | Naam, beschrijving, publisher |
| Branche pages | `Service` | Branche-specifieke service info |

### Canonical URL Format
```
https://ai-volution.nl/[bestandsnaam].html
```
**Na migratie:** Update naar clean URLs: `https://ai-volution.nl/[route]`

### robots.txt
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GoogleOther
Allow: /

Sitemap: https://ai-volution.nl/sitemap.xml
```

### llms.txt
Bevat volledige bedrijfsinformatie, diensten, team, contact voor AI crawlers. Moet behouden blijven als statisch bestand in `/public`.

### sitemap.xml
19 URL's met lastmod, changefreq, en priority. Moet dynamisch worden als blog posts worden toegevoegd. Overweeg een build-time sitemap generator.

---

## 10. Mobile Responsive

### Breakpoint-overzicht

#### 900px (tablet)
- **Navbar:** Links verborgen, hamburger menu zichtbaar, CTA verborgen (verschijnt in menu)
- **Mobile menu:** Full-width dropdown met verticale links, border-bottom per item
- **Hero grid:** 1 kolom (was 1.3fr .7fr)
- **Hero split:** 1 kolom, centered
- **Hero h1:** 40px -> 36px
- **Page hero h1:** 52px -> 36px
- **Vision h2:** 42px -> 30px
- **Container padding:** 40px -> 24px
- **Grids naar 1 kolom:** value-grid, waarom-grid, team-grid, branches-grid, blog-grid, dienst-cards, contact-grid, roi-grid
- **Before/After:** 2 kolommen -> 1 kolom
- **Steps grid:** 3 kolommen -> 1 kolom
- **Process flow:** 5 kolommen -> 1 kolom verticaal met timeline links
- **Urgency stats:** 3 kolommen -> 1 kolom
- **Footer:** 4 kolommen -> 2 kolommen
- **CTA box:** Flex-direction column, centered
- **Marquee text:** 76px -> 42px
- **Klanten inner:** Flex column, centered, divider wordt horizontaal
- **Dienst title:** 30px -> 22px
- **Pricing cards:** 4 kolommen -> 2 kolommen
- **Succesfactoren grid:** 2 kolommen -> 1 kolom

#### 768px
- **Dienst subtitels (`.dienst-sub`):** Verborgen
- **Expect grid:** 3 kolommen -> 1 kolom

#### 600px
- **Scan modal:** Width 95%, smaller padding, iframe height 500px
- **Comparison grid:** 2 kolommen -> 1 kolom
- **Blog filters:** Horizontaal scrollbaar (overflow-x auto), geen wrap
- **Stat break:** Font-sizes kleiner (56px -> 40px)
- **Quote:** 28px -> 20px

#### 480px (mobile)
- **Hero h1:** 40px -> 34px
- **Hero buttons:** Verticaal gestapeld (flex-direction column)
- **Page hero h1:** 36px -> 26px
- **Agent workflow visual:** Verborgen (display: none)
- **Container padding:** 24px -> 16px
- **Footer:** 2 kolommen -> 1 kolom
- **Pricing cards:** 2 kolommen -> 1 kolom
- **Hero card:** Kleinere padding en font sizes
- **CTA box:** Nog compacter (padding 36px 20px, h2 26px)
- **Marquee text:** 42px -> 32px
- **ROI result:** Compacter padding en font
- **Alle typografie:** Nog kleiner (FAQ summary 15px, section titles 24px)
- **Hero emoji:** 64px -> 40px
- **Hero badge:** Kleiner padding en font

### Grain Overlay
Alle schermgroottes hebben een fixed grain texture overlay via `body::after` (opacity 0.02, z-index 9999, pointer-events none). Dit is een SVG noise filter als inline data URI.

### Overflow Protection
```css
html, body { overflow-x: hidden; max-width: 100vw; }
```

---

## Bijlage: Assets

### Images
- `assets/logo-licht.png` -- Hoofdlogo (licht, voor donkere achtergrond)
- `assets/logo-wit.png` -- Wit logo variant
- `assets/favicon.png` -- Favicon
- `assets/klanten/` -- Klantlogo's: easystorage.png, fundingteam.png, motul.png, lassoo-ariaans.svg, endeavour.webp, minerva.png, tis.png
- `assets/team/` -- Team foto's

### Externe resources
- Google Fonts: `DM Sans` (300-700, italic 400)
- Wistia: video ID `kx3ssrrvmm` (lazy loaded)
- Supabase JS CDN: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`
- GHL form embed: `https://fc.future-growth.nl/js/form_embed.js`

### Background Pattern Classes
Unieke subtiele achtergrondpatronen per pagina-type:
- `.has-grid` -- Radial dot grid (homepage diensten)
- `.grid-diagonal` -- 45deg lijnen (diensten page)
- `.grid-hex` -- Hexagonal dots (branches)
- `.grid-rings` -- Concentric rings (over ons)
- `.grid-flow` -- Horizontal lines (aanpak)
- `.grid-squares` -- Small squares (blog)
- `.grid-graph` -- Graph crosshatch (ROI)
- `.grid-wave` -- Subtle wave dots (contact)

Elk patroon gebruikt CSS `::before` pseudo-element met mask-image voor fade-out aan randen.

---

## Migratietips

1. **Start met de layout:** Bouw eerst Navbar, Footer, ScanModal, en de page wrapper structuur
2. **Design tokens eerst:** Configureer Tailwind theme voordat je pagina's bouwt
3. **Ribbon als apart React component:** Gebruik `useEffect` + `useRef` voor canvas logica. Maak de bundles config een prop
4. **GHL iframes:** Wrap in een component dat het embed script dynamisch laadt via useEffect
5. **Supabase:** Gebruik `@supabase/supabase-js` als npm package, niet de CDN
6. **Blog detail routing:** Gebruik React Router's `useParams` voor slug in plaats van URL query params
7. **Reveal animatie:** Vervang door `framer-motion`'s `whileInView` of een custom `useInView` hook
8. **SEO:** Gebruik `react-helmet-async` voor per-pagina meta tags en JSON-LD
9. **Futura font:** Dit is een commercieel font. Zorg dat de licentie beschikbaar is, of gebruik een fallback (system-ui)
10. **Content is hardcoded:** Alle pagina-teksten staan in de HTML. Kopieer ze 1-op-1 over naar de React componenten
