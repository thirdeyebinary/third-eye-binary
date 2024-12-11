'use client';
import { Cormorant_Garamond } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const cormorant = Cormorant_Garamond({ 
  weight: '300',
  subsets: ['latin'] 
});

export default function ArticlesPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'black',
      color: 'white',
      padding: '4rem 2rem',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <Link href="/west/illuminate/articles/trump-narrative/article" style={{
          textDecoration: 'none',
        }}>
          <article style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            <div style={{
              width: '100%',
              height: '400px',
              position: 'relative',
              marginBottom: '2rem',
            }}>
              <Image
                src="/images/Trump RFK Handshake.png"
                alt="Trump and RFK Jr. Handshake"
                fill
                style={{
                  objectFit: 'cover',
                }}
                priority
              />
            </div>

            <h2 className={cormorant.className} style={{
              fontSize: '2.5rem',
              letterSpacing: '0.2em',
              textAlign: 'center',
              marginBottom: '1.5rem',
              color: 'white',
              fontWeight: '300',
            }}>
              Trump and the Death of Narrative Control
            </h2>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              textAlign: 'center',
              maxWidth: '800px',
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '0.1em',
            }}>
              The handshake between Donald Trump and RFK Jr. shattered more than political binaries - it exposed a realignment in American consciousness. Through a Jungian lens, Trump's ascent signals a fundamental shift in our mythological landscape.
            </p>
          </article>
        </Link>
      </div>
    </div>
  );
}