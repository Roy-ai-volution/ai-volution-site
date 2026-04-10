import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { supabase, resolveImageUrl } from '../lib/supabase'
import { BlogPost } from '../lib/types'
import Layout from '../components/Layout'
import ScanModal from '../components/ScanModal'

type RelatedPost = Pick<BlogPost, 'slug' | 'title' | 'excerpt' | 'image_url' | 'category' | 'date' | 'read_time'>

function stripInlineStyles(html: string): string {
  return html
    .replace(/color\s*:\s*#[0-9a-fA-F]{3,8}\s*;?/gi, '')
    .replace(/color\s*:\s*rgb[a]?\([^)]+\)\s*;?/gi, '')
    .replace(/background-color\s*:\s*#[0-9a-fA-F]{3,8}\s*;?/gi, '')
    .replace(/background-color\s*:\s*rgb[a]?\([^)]+\)\s*;?/gi, '')
    .replace(/font-family\s*:\s*[^;"]+;?/gi, '')
}

function getInitials(name: string | null): string {
  if (!name) return 'AV'
  return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()
}

function formatReadTime(readTime: string | null): string {
  const val = String(readTime || '5')
  return val.indexOf('min') !== -1 ? val : val + ' min leestijd'
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [related, setRelated] = useState<RelatedPost[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    async function fetchPost() {
      setLoading(true)
      setNotFound(false)

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (error || !data) {
        setNotFound(true)
        setLoading(false)
        return
      }

      setPost(data)
      setLoading(false)

      // Fetch gerelateerde posts
      if (data.category) {
        const { data: relData } = await supabase
          .from('blog_posts')
          .select('slug,title,excerpt,image_url,category,date,read_time')
          .eq('published', true)
          .eq('category', data.category)
          .neq('slug', slug)
          .order('date', { ascending: false })
          .limit(3)

        if (relData) setRelated(relData)
      }
    }

    fetchPost()
    window.scrollTo(0, 0)
  }, [slug])

  // Loading state
  if (loading) {
    return (
      <Layout>
        <Helmet><title>Laden... | AI Volution Blog</title></Helmet>
        <div style={{ paddingTop: '100px' }}>
          <div className="container">
            <div className="blog-article">
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
                Laden...
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  // Not found state
  if (notFound || !post) {
    return (
      <Layout>
        <Helmet><title>Post niet gevonden | AI Volution Blog</title></Helmet>
        <div style={{ paddingTop: '100px' }}>
          <div className="container">
            <div className="blog-article">
              <Link to="/blog" className="blog-back">&larr; Terug naar blog</Link>
              <h2>Post niet gevonden</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>
                Deze blogpost bestaat niet of is niet meer beschikbaar.
              </p>
              <Link to="/blog" className="btn-cta" style={{ marginTop: '24px', display: 'inline-block' }}>
                Bekijk alle posts
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  const heroImg = resolveImageUrl(post.image_url)

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | AI Volution Blog</title>
        {post.meta_description && <meta name="description" content={post.meta_description} />}
        <meta property="og:title" content={`${post.title} | AI Volution Blog`} />
        {post.meta_description && <meta property="og:description" content={post.meta_description} />}
        {heroImg && <meta property="og:image" content={heroImg} />}
      </Helmet>

      <div style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="blog-article">

            {/* Terug link */}
            <Link to="/blog" className="blog-back">&larr; Terug naar blog</Link>

            {/* Hero image */}
            {heroImg && (
              <img src={heroImg} alt={post.title || ''} className="blog-article-hero" />
            )}

            {/* Meta info */}
            <div className="blog-article-meta">
              {post.category && <span className="blog-article-cat">{post.category}</span>}
              {post.date && <span>{post.date}</span>}
              {post.read_time && <span>{formatReadTime(post.read_time)}</span>}
              {post.author_name && <span>Door {post.author_name}</span>}
            </div>

            {/* Titel */}
            <h2>{post.title}</h2>

            {/* Subtitle */}
            {post.subtitle && (
              <p className="blog-article-subtitle">{post.subtitle}</p>
            )}

            {/* Content */}
            <div
              className="blog-article-content"
              dangerouslySetInnerHTML={{ __html: stripInlineStyles(post.content || '') }}
            />

            {/* Tags */}
            {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="blog-article-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-article-tag">{tag}</span>
                ))}
              </div>
            )}

            {/* FAQ accordion */}
            {post.faq && Array.isArray(post.faq) && post.faq.length > 0 && (
              <div className="blog-faq">
                <h2>Veelgestelde vragen</h2>
                {post.faq.map((item, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div key={idx} className={`blog-faq-item${isOpen ? ' open' : ''}`}>
                      <button
                        className="blog-faq-question"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                      >
                        <span>{(item as any).question || (item as any).q || ''}</span>
                        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
                      </button>
                      <div
                        className="blog-faq-answer"
                        style={{ maxHeight: isOpen ? '1000px' : '0' }}
                      >
                        <div className="blog-faq-answer-inner">
                          {(item as any).answer || (item as any).a || ''}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Auteur info */}
            {post.author_name && (
              <div className="blog-article-author">
                <div className="blog-article-author-avatar">{getInitials(post.author_name)}</div>
                <div className="blog-article-author-info">
                  <span className="blog-article-author-name">{post.author_name}</span>
                  {post.author_title && (
                    <span className="blog-article-author-title">{post.author_title}</span>
                  )}
                </div>
              </div>
            )}

            {/* Gerelateerde posts */}
            {related.length > 0 && (
              <div className="blog-related">
                <h2>Gerelateerde artikelen</h2>
                <div className="blog-related-grid">
                  {related.map(p => {
                    const imgUrl = resolveImageUrl(p.image_url)
                    return (
                      <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-card">
                        <div
                          className="blog-card-img"
                          style={imgUrl ? { backgroundImage: `url('${imgUrl}')` } : {}}
                        >
                          <span className="blog-card-cat">{p.category || ''}</span>
                        </div>
                        <div className="blog-card-body">
                          <h3>{p.title}</h3>
                          <p>{(p.excerpt || '').substring(0, 100)}...</p>
                          <div className="blog-card-meta">
                            {p.date || ''} &middot; {formatReadTime(p.read_time)}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="blog-detail-cta">
              <h3>Benieuwd wat AI voor jouw bedrijf kan doen?</h3>
              <p>Plan een gratis strategiescan en ontdek de mogelijkheden.</p>
              <a
                href="#"
                className="btn-cta"
                onClick={(e) => { e.preventDefault(); setModalOpen(true) }}
              >
                Gratis AI Scan
              </a>
            </div>

          </div>{/* .blog-article */}
        </div>
      </div>

      <ScanModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </Layout>
  )
}
