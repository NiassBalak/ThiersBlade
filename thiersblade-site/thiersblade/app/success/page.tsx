import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px 24px',
    }}>
      <div style={{ maxWidth: '500px' }}>
        <div style={{ fontSize: '60px', marginBottom: '24px' }}>🔪</div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '42px',
          color: '#FFFFFF',
          marginBottom: '16px',
          letterSpacing: '0.05em',
        }}>
          Thank you.
        </h1>
        <div style={{ width: '40px', height: '1px', background: '#C9A84C', margin: '0 auto 24px' }} />
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: '2',
          letterSpacing: '0.05em',
          marginBottom: '16px',
        }}>
          Your order has been confirmed. You will receive a confirmation email shortly with your tracking number once your knife is shipped from Thiers, France.
        </p>
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.4)',
          lineHeight: '2',
          marginBottom: '40px',
        }}>
          Questions? Contact us at thiersblade@gmail.com
        </p>
        <Link href="/collection" className="btn-gold">
          Continue Exploring
        </Link>
      </div>
    </div>
  )
}
