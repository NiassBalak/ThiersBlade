import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A',
      borderTop: '1px solid #1A1A1A',
      padding: '60px 24px 30px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '20px',
              color: '#C9A84C',
              letterSpacing: '0.15em',
              marginBottom: '12px',
            }}>
              ThiersBlade
            </div>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: '1.8',
              letterSpacing: '0.05em',
            }}>
              Rare & vintage French folding knives, sourced personally in Thiers — the knife capital of the world for over 600 years.
            </p>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '12px',
              letterSpacing: '0.05em',
            }}>
              Thiers, Puy-de-Dôme, France
            </p>
            <a href="mailto:thiersblade@gmail.com" style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '12px',
              color: '#C9A84C',
              textDecoration: 'none',
              marginTop: '6px',
              display: 'block',
            }}>
              thiersblade@gmail.com
            </a>
          </div>

          {/* Collections */}
          <div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '16px',
            }}>
              Collections
            </div>
            {[
              { label: 'The Collection', href: '/collection' },
              { label: 'The Essentials', href: '/essentials' },
              { label: 'The Rarities', href: '/rarities' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                display: 'block',
                fontFamily: 'Jost, sans-serif',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                marginBottom: '10px',
                letterSpacing: '0.05em',
                transition: 'color 0.3s',
              }}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '16px',
            }}>
              Navigation
            </div>
            {[
              { label: 'Our Story', href: '/story' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                display: 'block',
                fontFamily: 'Jost, sans-serif',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                marginBottom: '10px',
                letterSpacing: '0.05em',
              }}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <div style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '16px',
            }}>
              Stay in the loop
            </div>
            <p style={{
              fontFamily: 'Jost, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: '1.8',
              marginBottom: '16px',
            }}>
              New rare pieces added every week. Follow us on Instagram.
            </p>
            <a 
              href="https://www.instagram.com/thiersblade"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '11px',
                color: '#C9A84C',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                border: '1px solid #C9A84C',
                padding: '10px 20px',
                display: 'inline-block',
                transition: 'all 0.3s',
              }}
            >
              @ThiersBlade
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid #1A1A1A',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.05em',
          }}>
            © 2025 ThiersBlade. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Shipping Policy', href: '/shipping' },
              { label: 'Returns', href: '/returns' },
              { label: 'Legal Notice', href: '/legal' },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{
                fontFamily: 'Jost, sans-serif',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
