import { getKnifeBySlug, urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import BuyButton from '@/components/BuyButton'

export const revalidate = 60

export default async function KnifePage({ params }: { params: { slug: string } }) {
  const knife = await getKnifeBySlug(params.slug).catch(() => null)
  
  if (!knife) notFound()

  const images = knife.images || []
  const mainImage = images[0] ? urlFor(images[0]).width(800).height(1000).fit('crop').url() : null

  const collectionLabels: Record<string, string> = {
    'the-collection': 'The Collection',
    'the-essentials': 'The Essentials',
    'the-rarities': 'The Rarities',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Breadcrumb */}
        <div style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.1em',
          marginBottom: '40px',
        }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Home</a>
          {' / '}
          <a href={`/${knife.collection}`} style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
            {collectionLabels[knife.collection] || 'Collection'}
          </a>
          {' / '}
          <span style={{ color: '#C9A84C' }}>{knife.name}</span>
        </div>

        {/* Product Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'start',
        }}>
          
          {/* Images */}
          <div>
            {mainImage && (
              <div style={{
                background: '#111111',
                marginBottom: '12px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <img
                  src={mainImage}
                  alt={knife.name}
                  style={{
                    width: '100%',
                    display: 'block',
                    filter: knife.sold ? 'grayscale(30%)' : 'none',
                  }}
                />
                {knife.sold && (
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.4)',
                  }}>
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '48px',
                      color: 'white',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      border: '2px solid white',
                      padding: '12px 32px',
                    }}>
                      Sold
                    </span>
                  </div>
                )}
              </div>
            )}
            
            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {images.slice(1).map((img: any, i: number) => (
                  <img
                    key={i}
                    src={urlFor(img).width(150).height(150).fit('crop').url()}
                    alt={`${knife.name} ${i + 2}`}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      background: '#111111',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '12px',
            }}>
              {collectionLabels[knife.collection]} · Thiers, France
            </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '38px',
              color: '#FFFFFF',
              lineHeight: '1.2',
              marginBottom: '16px',
              letterSpacing: '0.03em',
            }}>
              {knife.name}
            </h1>

            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '36px',
              color: knife.sold ? 'rgba(255,255,255,0.3)' : '#C9A84C',
              marginBottom: '24px',
              letterSpacing: '0.05em',
            }}>
              {knife.sold ? 'Sold' : `€${knife.price}`}
            </div>

            {!knife.sold && (
              <div style={{
                background: '#111111',
                padding: '12px 16px',
                marginBottom: '28px',
                borderLeft: '2px solid #C9A84C',
              }}>
                <span style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '11px',
                  color: '#C9A84C',
                  letterSpacing: '0.1em',
                }}>
                  ⚠️ Only 1 available worldwide — this exact piece will never exist again
                </span>
              </div>
            )}

            {/* Description */}
            {knife.description && (
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '2',
                letterSpacing: '0.04em',
                marginBottom: '32px',
                whiteSpace: 'pre-line',
              }}>
                {knife.description}
              </div>
            )}

            {/* Specs */}
            <div style={{
              borderTop: '1px solid #1A1A1A',
              paddingTop: '24px',
              marginBottom: '32px',
            }}>
              {[
                { label: 'Maker', value: knife.maker },
                { label: 'Handle', value: knife.handleMaterial },
                { label: 'Blade', value: knife.bladeMaterial },
                { label: 'Closed', value: knife.closedLength ? `${knife.closedLength} cm` : null },
                { label: 'Open', value: knife.openLength ? `${knife.openLength} cm` : null },
                { label: 'Origin', value: 'Thiers, France' },
              ].filter(s => s.value).map((spec) => (
                <div key={spec.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid #1A1A1A',
                }}>
                  <span style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    {spec.label}
                  </span>
                  <span style={{
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.8)',
                    letterSpacing: '0.05em',
                  }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Buy Button */}
            {!knife.sold ? (
              <BuyButton knife={knife} />
            ) : (
              <div style={{
                background: '#1A1A1A',
                padding: '18px',
                textAlign: 'center',
                fontFamily: 'Jost, sans-serif',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                This piece has been sold
              </div>
            )}

            {/* Shipping info */}
            <div style={{
              marginTop: '24px',
              fontFamily: 'Jost, sans-serif',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
              lineHeight: '1.8',
            }}>
              🚚 Ships worldwide from Thiers, France<br/>
              📦 Full tracking on every order<br/>
              🔒 Secure payment via Stripe
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
