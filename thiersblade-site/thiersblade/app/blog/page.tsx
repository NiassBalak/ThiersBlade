import Link from 'next/link'
import { getBlogPosts, urlFor } from '@/lib/sanity'

export const revalidate = 60

export const metadata = {
  title: 'Blog — ThiersBlade | French Knife History & Collector Guides',
  description: 'Learn about vintage French folding knives, Thiers makers, and the history of French cutlery.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts().catch(() => [])

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '16px',
          }}>
            Knowledge & History
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '52px',
            color: '#FFFFFF',
            letterSpacing: '0.08em',
          }}>
            The Journal
          </h1>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C', margin: '20px auto 0' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {posts.length > 0 ? posts.map((post: any) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} style={{ textDecoration: 'none' }}>
              <article style={{
                background: '#111111',
                padding: '40px',
                transition: 'background 0.3s',
                cursor: 'pointer',
              }}>
                <div style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  marginBottom: '12px',
                }}>
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', { 
                    year: 'numeric', month: 'long', day: 'numeric' 
                  }) : 'ThiersBlade Journal'}
                </div>
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  color: '#FFFFFF',
                  lineHeight: '1.3',
                  marginBottom: '12px',
                  letterSpacing: '0.03em',
                }}>
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: '1.8',
                    letterSpacing: '0.04em',
                  }}>
                    {post.excerpt}
                  </p>
                )}
                <div style={{
                  marginTop: '20px',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '11px',
                  color: '#C9A84C',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  Read more →
                </div>
              </article>
            </Link>
          )) : (
            <div style={{
              textAlign: 'center',
              padding: '80px',
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'Jost, sans-serif',
            }}>
              Articles coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
