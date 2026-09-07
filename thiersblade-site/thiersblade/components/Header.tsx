'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        Each knife exists only once — when it&apos;s sold, it&apos;s gone forever 🔪
      </div>

      {/* Header */}
      <header style={{
        background: '#0A0A0A',
        borderBottom: '1px solid #1A1A1A',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '0 24px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '22px',
                color: '#C9A84C',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 400,
              }}>
                ThiersBlade
              </div>
              <div style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '9px',
                color: '#C9A84C',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                opacity: 0.7,
                marginTop: '2px',
              }}>
                Born in Thiers. Carried by the World.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '40px' }} className="hidden-mobile">
            {[
              { label: 'The Collection', href: '/collection' },
              { label: 'The Essentials', href: '/essentials' },
              { label: 'The Rarities', href: '/rarities' },
              { label: 'Our Story', href: '/story' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#C9A84C'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#FFFFFF'}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#C9A84C',
              cursor: 'pointer',
              fontSize: '24px',
              display: 'none',
            }}
            className="show-mobile"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: '#0A0A0A',
            borderTop: '1px solid #1A1A1A',
            padding: '20px 24px',
          }}>
            {[
              { label: 'The Collection', href: '/collection' },
              { label: 'The Essentials', href: '/essentials' },
              { label: 'The Rarities', href: '/rarities' },
              { label: 'Our Story', href: '/story' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '14px 0',
                  borderBottom: '1px solid #1A1A1A',
                }}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
