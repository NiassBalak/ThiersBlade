import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

interface ProductCardProps {
  knife: {
    _id: string
    name: string
    slug: { current: string }
    price: number
    sold: boolean
    images: any[]
    collection: string
    handleMaterial?: string
    maker?: string
  }
}

export default function ProductCard({ knife }: ProductCardProps) {
  const imageUrl = knife.images?.[0] 
    ? urlFor(knife.images[0]).width(600).height(700).fit('crop').url()
    : '/placeholder.jpg'

  return (
    <Link href={`/knife/${knife.slug.current}`} style={{ textDecoration: 'none' }}>
      <div className="product-card" style={{
        background: '#111111',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}>
        {/* Image */}
        <div style={{
          position: 'relative',
          paddingBottom: '120%',
          overflow: 'hidden',
          background: '#1A1A1A',
        }}>
          <img
            src={imageUrl}
            alt={knife.name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: knife.sold ? 'grayscale(50%)' : 'none',
              transition: 'transform 0.5s ease',
            }}
          />
          
          {/* Sold Badge */}
          {knife.sold && (
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
            }}>
              <span className="sold-badge">Sold</span>
            </div>
          )}

          {/* Only 1 Badge */}
          {!knife.sold && (
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(10,10,10,0.8)',
              padding: '4px 10px',
            }}>
              <span style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '9px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}>Only 1</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: '20px 16px 24px' }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '8px',
            opacity: 0.7,
          }}>
            {knife.maker || 'Thiers, France'}
          </div>
          
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '18px',
            color: '#FFFFFF',
            lineHeight: '1.3',
            marginBottom: '12px',
          }}>
            {knife.name}
          </div>

          {knife.handleMaterial && (
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '14px',
              letterSpacing: '0.05em',
            }}>
              {knife.handleMaterial}
            </div>
          )}

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '20px',
              color: knife.sold ? 'rgba(255,255,255,0.3)' : '#C9A84C',
              letterSpacing: '0.05em',
            }}>
              {knife.sold ? 'Sold' : `€${knife.price}`}
            </div>
            
            {!knife.sold && (
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
              }}>
                View →
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
