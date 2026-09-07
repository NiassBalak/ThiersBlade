import ProductCard from '@/components/ProductCard'
import { getKnives } from '@/lib/sanity'

export const revalidate = 60

export const metadata = {
  title: 'The Rarities — ThiersBlade | Vintage French Straight Razors & Collector Items',
  description: 'Items that exist only in Thiers — rare straight razors, vintage cutlery supplies, and collector pieces that never reach the international market.',
}

export default async function RaritiesPage() {
  const knives = await getKnives('the-rarities').catch(() => [])

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', padding: '60px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '16px',
          }}>
            Only in Thiers
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '52px',
            color: '#FFFFFF',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            The Rarities
          </h1>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C', margin: '0 auto 24px' }} />
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            Items that exist only in Thiers — and only if you know where to look. Vintage straight razors, rare cutlery pieces, and collector items that never make it to the international market.
          </p>
        </div>
        {knives.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '28px',
          }}>
            {knives.map((knife: any) => (
              <ProductCard key={knife._id} knife={knife} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '100px 0', color: 'rgba(255,255,255,0.3)', fontFamily: 'Jost, sans-serif' }}>
            New pieces coming soon...
          </div>
        )}
      </div>
    </div>
  )
}
