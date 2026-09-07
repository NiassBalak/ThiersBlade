'use client'
import { useState } from 'react'

export default function BuyButton({ knife }: { knife: any }) {
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          knifeId: knife._id,
          name: knife.name,
          price: knife.price,
          slug: knife.slug.current,
          image: knife.images?.[0] || null,
        }),
      })

      const data = await response.json()
      
      if (data.error) {
        alert(data.error)
        setLoading(false)
        return
      }

      // Rediriger vers Stripe Checkout via l'URL de session
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      alert('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      style={{
        width: '100%',
        background: loading ? '#B8962E' : '#C9A84C',
        color: '#0A0A0A',
        padding: '18px',
        fontFamily: 'Jost, sans-serif',
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        border: 'none',
        cursor: loading ? 'wait' : 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {loading ? 'Processing...' : 'Buy Now — Secure Checkout'}
    </button>
  )
}
