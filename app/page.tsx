import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getKnives } from '@/lib/sanity'

export const revalidate = 60

export default async function Home() {
  const knives = await getKnives().catch(() => [])
  const featuredKnives = knives.filter((k: any) => !k.sold).slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '90vh',
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '60px 24px',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '32px',
            opacity: 0.8,
          }}>
            Thiers, France — Since the 13th Century
          </div>
          
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(52px, 8vw, 96px)',
            color: '#FFFFFF',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: '1.05',
            marginBottom: '20px',
            fontWeight: 300,
          }}>
            Thiers<br />Blade
          </h1>

          <div style={{
            width: '60px',
            height: '1px',
            background: '#C9A84C',
            margin: '0 auto 28px',
          }} />

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '0.05em',
            marginBottom: '48px',
          }}>
            Born in Thiers. Carried by the World.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/collection" className="btn-gold">
              Explore the Collection
            </Link>
            <Link href="/story" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section style={{
        background: '#111111',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '36px',
            color: '#FFFFFF',
            marginBottom: '24px',
            letterSpacing: '0.05em',
          }}>
            Every knife tells a story.
          </h2>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: '2',
            letterSpacing: '0.05em',
            marginBottom: '20px',
          }}>
            Every piece in this collection has been personally sourced in Thiers, France — the knife capital of the world for over 600 years. No mass production. No copies. Each knife is unique, and when it&apos;s gone, it&apos;s gone forever.
          </p>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: '2',
            letterSpacing: '0.05em',
          }}>
            ThiersBlade is not a shop. It&apos;s a collection. When a piece sells, a new one takes its place — different maker, different material, different story. No restocks. No duplicates. Ever.
          </p>
        </div>
      </section>

      {/* Why Thiers Section */}
      <section style={{
        background: '#0A0A0A',
        padding: '80px 24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '20px',
            }}>
              The Source
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '42px',
              color: '#FFFFFF',
              marginBottom: '24px',
              letterSpacing: '0.03em',
              lineHeight: '1.2',
            }}>
              Why Thiers?
            </h2>
            <div style={{
              width: '40px',
              height: '1px',
              background: '#C9A84C',
              marginBottom: '24px',
            }} />
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '2',
              letterSpacing: '0.05em',
              marginBottom: '20px',
            }}>
              Thiers produces over 70% of all French-made knives. Tucked in the Auvergne mountains, this small city has been home to master bladesmiths since the 13th century.
            </p>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '2',
              letterSpacing: '0.05em',
            }}>
              ThiersBlade was born here — not in an office, but in the streets where the knives are made. Every piece is sourced personally, from a city that has lived and breathed cutlery for over 600 years.
            </p>
          </div>
          <div style={{
            background: '#111111',
            padding: '48px',
            borderLeft: '1px solid #1A1A1A',
          }}>
            {[
              { number: '600+', label: 'Years of tradition' },
              { number: '70%', label: 'Of French knives made here' },
              { number: '350+', label: 'Verified sales reviews' },
              { number: '1', label: 'Of each piece — ever' },
            ].map((stat) => (
              <div key={stat.label} style={{ marginBottom: '32px' }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '42px',
                  color: '#C9A84C',
                  letterSpacing: '0.05em',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section style={{
        background: '#111111',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '16px',
            }}>
              Currently Available
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '42px',
              color: '#FFFFFF',
              letterSpacing: '0.05em',
            }}>
              The Collection
            </h2>
            <div style={{
              width: '40px',
              height: '1px',
              background: '#C9A84C',
              margin: '20px auto 0',
            }} />
          </div>

          {featuredKnives.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}>
              {featuredKnives.map((knife: any) => (
                <ProductCard key={knife._id} knife={knife} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px',
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'Jost, sans-serif',
              fontSize: '13px',
              letterSpacing: '0.1em',
            }}>
              New pieces coming soon...
            </div>
          )}

          <div style={{ textAlign: 'center' }}>
            <Link href="/collection" className="btn-gold">
              View All Pieces
            </Link>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section style={{
        background: '#0A0A0A',
        padding: '80px 24px',
        textAlign: 'center',
        borderTop: '1px solid #1A1A1A',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '48px',
            color: '#C9A84C',
            marginBottom: '20px',
          }}>
            🔪
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '32px',
            color: '#FFFFFF',
            marginBottom: '20px',
            letterSpacing: '0.05em',
          }}>
            The ThiersBlade Promise
          </h2>
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '2',
            letterSpacing: '0.05em',
            marginBottom: '32px',
          }}>
            Every knife on this site is a one-of-a-kind piece. We don&apos;t restock. We don&apos;t duplicate. Each piece is sourced personally in Thiers by a local collector who has spent years building relationships with the craftsmen of this city.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/collection" className="btn-gold">Shop Now</Link>
            <Link href="/contact" className="btn-outline">Ask an Expert</Link>
          </div>
        </div>
      </section>
    </>
  )
}
