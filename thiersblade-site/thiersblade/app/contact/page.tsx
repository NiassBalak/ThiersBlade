'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mailto fallback
    window.location.href = `mailto:thiersblade@gmail.com?subject=Inquiry from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`
    setSent(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', padding: '80px 24px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '16px',
          }}>
            Get in Touch
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '52px',
            color: '#FFFFFF',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            Contact
          </h1>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C', margin: '0 auto 24px' }} />
          <p style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '2',
          }}>
            Have a question about a specific knife? Want to know more about its history or provenance? We typically respond within 24 hours.
          </p>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>✉️</div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: '#C9A84C' }}>
              Your message has been sent.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {[
              { label: 'Your Name', key: 'name', type: 'text' },
              { label: 'Your Email', key: 'email', type: 'email' },
            ].map((field) => (
              <div key={field.key} style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  marginBottom: '10px',
                }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={(form as any)[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#111111',
                    border: '1px solid #1A1A1A',
                    color: '#FFFFFF',
                    padding: '14px 16px',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    outline: 'none',
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                fontFamily: 'Jost, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '10px',
              }}>
                Message
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%',
                  background: '#111111',
                  border: '1px solid #1A1A1A',
                  color: '#FFFFFF',
                  padding: '14px 16px',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            <button type="submit" className="btn-gold" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        )}

        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          fontFamily: 'Jost, sans-serif',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.08em',
        }}>
          thiersblade@gmail.com · Thiers, Puy-de-Dôme, France
        </div>
      </div>
    </div>
  )
}
