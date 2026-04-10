import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { supabase, resolveImageUrl } from '../lib/supabase'
import { BlogPost } from '../lib/types'
import Layout from '../components/Layout'
import KlantenScroll from '../components/KlantenScroll'
import Marquee from '../components/Marquee'
import CTABox from '../components/CTABox'
import RibbonCanvas from '../components/RibbonCanvas'
import RibbonCanvas2 from '../components/RibbonCanvas2'
import ScanModal from '../components/ScanModal'

const ribbonBundles = [
  { r: 51, g: 166, b: 255, lines: 16, spread: 24, baseY: 0.32, speed: 0.42, amp: 120, freq: 0.003, twist: 0.005, opacity: 0.09, lineWidth: 0.7 },
  { r: 139, g: 92, b: 246, lines: 12, spread: 18, baseY: 0.52, speed: 0.38, amp: 100, freq: 0.0028, twist: 0.004, opacity: 0.06, lineWidth: 0.6 },
]

const marqueeItems = [
  { text: 'INZICHTEN' },
  { text: 'AI TRENDS', ghost: true },
  { text: 'MKB+ GROEI' },
  { text: 'AUTOMATISERING', ghost: true },
]

const categories = ['Alles', 'AI', 'Automatisering', 'Sales', 'Marketing']

type BlogListPost = Pick<BlogPost, 'slug' | 'title' | 'excerpt' | 'image_url' | 'category' | 'date' | 'read_time'>

function formatReadTime(readTime: string | null): string {
  const val = String(readTime || '5')
  return val.indexOf('min') !== -1 ? val : val + ' min'
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogListPost[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('Alles')
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('blog_posts')
        .select('slug,title,excerpt,image_url,category,date,read_time')
        .eq('published', true)
        .order('date', { ascending: false })
      if (data) setPosts(data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  const featured = posts.length > 0 ? posts[0] : null
  const rest = posts.slice(1)
  const filtered = filter === 'Alles' ? rest : posts.filter(p => p.category === filter)

  return (
    <Layout>
      <Helmet>
        <title>AI Blog | Inzichten voor MKB+ | AI Volution</title>
        <meta name="description" content="Lees de laatste inzichten over AI-automatisering, productiviteit en groei voor het Nederlandse MKB+. Tips, trends en praktijkcases. Ontdek meer." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://ai-volution.nl/blog" />
        <link rel="alternate" hrefLang="nl-NL" href="https://ai-volution.nl/blog" />
        <meta property="og:title" content="AI Blog - Inzichten voor MKB+ | AI Volution" />
        <meta property="og:description" content="Lees de laatste inzichten over AI-automatisering, productiviteit en groei voor het Nederlandse MKB+. Tips, trends en praktijkcases. Ontdek meer." />
        <meta property="og:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <meta property="og:url" content="https://ai-volution.nl/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="AI Volution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Blog - Inzichten voor MKB+ | AI Volution" />
        <meta name="twitter:description" content="Lees de laatste inzichten over AI-automatisering, productiviteit en groei voor het Nederlandse MKB+. Tips, trends en praktijkcases. Ontdek meer." />
        <meta name="twitter:image" content="https://ai-volution.nl/assets/logo-licht.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "AI Volution Blog",
          "description": "Inzichten over AI-automatisering voor MKB+",
          "publisher": {
            "@type": "Organization",
            "name": "AI Volution",
            "url": "https://ai-volution.nl"
          }
        })}</script>
      </Helmet>

      {/* PAGE HERO + RIBBON */}
      <div className="page-wrapper">
        <RibbonCanvas bundles={ribbonBundles} />

        <section className="page-hero">
          <div className="container">
            <div className="section-eyebrow">Blog</div>
            <h1>Inzichten &amp; Updates</h1>
            <p>De laatste inzichten over AI-automatisering, productiviteit en groei voor het Nederlandse MKB+.</p>
          </div>
        </section>

        <Marquee items={marqueeItems} />
      </div>

      {/* KLANTEN */}
      <KlantenScroll />

      {/* BLOG */}
      <section className="blog grid-squares" style={{ position: 'relative', overflow: 'hidden' }}>
        <RibbonCanvas2 />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* FILTERS */}
          <div className="blog-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`blog-filter${filter === cat ? ' active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* LOADING */}
          {loading && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              Blogposts laden...
            </div>
          )}

          {/* FEATURED POST */}
          {!loading && featured && filter === 'Alles' && (
            <Link to={`/blog/${featured.slug}`} className="blog-featured" style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
              <div className="blog-featured-grid">
                <div>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--blue)', marginBottom: '12px' }}>
                    {featured.category || 'UITGELICHT'}
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-d)', fontSize: '32px', fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.2, marginBottom: '16px' }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.6)', lineHeight: 1.7 }}>
                    {(featured.excerpt || '').substring(0, 200)}
                  </p>
                  <div style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(255,255,255,.35)' }}>
                    {featured.date || ''} &middot; {formatReadTime(featured.read_time)}
                  </div>
                </div>
                <div
                  style={{
                    height: '280px',
                    borderRadius: '16px',
                    background: resolveImageUrl(featured.image_url)
                      ? `url('${resolveImageUrl(featured.image_url)}') center/cover`
                      : 'linear-gradient(135deg,#111827 0%,#1a2332 100%)',
                  }}
                />
              </div>
            </Link>
          )}

          {/* GRID */}
          {!loading && (
            <div className="blog-grid">
              {filtered.length === 0 && (
                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
                  {posts.length === 0 ? 'Geen blogposts gevonden.' : 'Geen posts in deze categorie.'}
                </div>
              )}
              {filtered.map((post, i) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="blog-card reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="blog-card-img"
                    style={resolveImageUrl(post.image_url) ? { backgroundImage: `url('${resolveImageUrl(post.image_url)}')` } : {}}
                  >
                    <span className="blog-card-cat">{post.category || ''}</span>
                  </div>
                  <div className="blog-card-body">
                    <h3>{post.title}</h3>
                    <p>{(post.excerpt || '').substring(0, 120)}...</p>
                    <div className="blog-card-meta">
                      {post.date || ''} &middot; {formatReadTime(post.read_time)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* KLANTEN BOTTOM */}
      <KlantenScroll />

      {/* CTA */}
      {/* CTA */}
      <CTABox
        heading="Blijf op de hoogte van AI-trends"
        text="Ontvang onze nieuwste inzichten en tips rechtstreeks in je inbox."
        onOpenModal={() => setModalOpen(true)}
      />

      <ScanModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Layout>
  )
}
