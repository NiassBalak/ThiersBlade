export const metadata = {
  title: 'Our Story — ThiersBlade | A Local Collector from Thiers, France',
  description: 'ThiersBlade was born in Thiers, France — the knife capital of the world. The story of a local collector bringing rare French knives to the world.',
}

export default function StoryPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', padding: '80px 24px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '16px',
          }}>
            The Source
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '52px',
            color: '#FFFFFF',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            Our Story
          </h1>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C', margin: '0 auto' }} />
        </div>

        {[
          `ThiersBlade was born in Thiers, France — a city that has been forging the world's finest blades for over 600 years.`,
          `I'm a local collector, born and raised in the knife capital of the world. My family has deep roots in the cutlery community here. Growing up surrounded by master bladesmiths, I developed a passion for the rare and the authentic — pieces that tell a story before you even open them.`,
          `Every knife on this site has been personally sourced in Thiers. I know the workshops, the makers, and the history behind each piece. When you buy from ThiersBlade, you're not buying from a warehouse. You're buying from someone who walked the same streets as the craftsmen who made your knife.`,
          `Thiers produces over 70% of all French-made knives. Yet most of the world has never heard of it. ThiersBlade exists to change that — one rare blade at a time.`,
          `Every knife on this site is a one-of-a-kind piece. We don't restock. We don't duplicate. When a piece sells, a new one takes its place — different maker, different material, different story. That's the ThiersBlade promise.`,
        ].map((para, i) => (
          <p key={i} style={{
            fontFamily: i === 0 ? 'Cormorant Garamond, serif' : 'Jost, sans-serif',
            fontSize: i === 0 ? '22px' : '14px',
            fontStyle: i === 0 ? 'italic' : 'normal',
            color: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
            lineHeight: '2',
            letterSpacing: '0.04em',
            marginBottom: '28px',
          }}>
            {para}
          </p>
        ))}

        <div style={{
          borderTop: '1px solid #1A1A1A',
          paddingTop: '32px',
          marginTop: '20px',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '20px',
          color: '#C9A84C',
          fontStyle: 'italic',
          letterSpacing: '0.05em',
        }}>
          — Rayan, Thiers, Puy-de-Dôme, France
        </div>

        {/* Trust Badge */}
        <div style={{
          background: '#111111',
          padding: '32px',
          marginTop: '48px',
          textAlign: 'center',
          borderLeft: '2px solid #C9A84C',
        }}>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '36px',
            color: '#C9A84C',
            marginBottom: '8px',
          }}>
            350+
          </div>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Verified 5-star reviews since 2013
          </div>
        </div>
      </div>
    </div>
  )
}
