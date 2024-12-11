'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({ 
  weight: '300',
  subsets: ['latin'] 
});

const Home = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
  }, []);

  const cardinalStyle = {
    position: 'absolute',
    color: 'white',
    fontSize: '18px',
    letterSpacing: '0.2em',
    opacity: opacity,
    transition: 'opacity 12s',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '5px 10px',
    borderRadius: '4px',
    zIndex: 2,
    cursor: 'pointer',
    width: '140px',  
    textAlign: 'center'
  };

  return (
    <div style={{
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'black'
    }}>
      <Image 
        src="/u8388455551_imagine_an_elegant_minimalist_eye_logo_sacred_geo_fabd4827-c3be-454c-95cc-f254bc008749_1.png"
        width={2000}
        height={2000}
        alt="Third Eye Binary Symbol"
        style={{
          opacity: opacity,
          transition: 'opacity 12s',
          width: '100vw',
          height: '100vh',
          objectFit: 'contain',
          position: 'absolute',
          zIndex: 1
        }}
      />
      <Link href="/about" style={{
        position: 'absolute',
        textDecoration: 'none',
        zIndex: 2,
        transform: 'translate(8px, -8px)'
      }}>
        <h1 className={cormorant.className} style={{
          fontSize: '32px',
          letterSpacing: '0.2em',
          opacity: opacity,
          transition: 'opacity 12s',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          margin: 0
        }}>
          Third Eye Binary
        </h1>
      </Link>

      {/* Cardinal Directions with meanings */}
      <Link href="/practice" style={{ textDecoration: 'none' }}>
        <div 
          className={cormorant.className} 
          style={{...cardinalStyle, top: '20px', left: '50%', transform: 'translateX(-50%)'}}
          onMouseEnter={(e) => e.currentTarget.textContent = "practice"}
          onMouseLeave={(e) => e.currentTarget.textContent = "NORTH"}
        >
          NORTH
        </div>
      </Link>

      <Link href="/connect" style={{ textDecoration: 'none' }}>
        <div 
          className={cormorant.className} 
          style={{...cardinalStyle, bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}
          onMouseEnter={(e) => e.currentTarget.textContent = "connect"}
          onMouseLeave={(e) => e.currentTarget.textContent = "SOUTH"}
        >
          SOUTH
        </div>
      </Link>

      <Link href="/west/illuminate/articles" style={{ textDecoration: 'none' }}>
        <div 
          className={cormorant.className} 
          style={{
            ...cardinalStyle, 
            top: '50%', 
            left: '27%',
            transform: 'translate(-50%, -50%)'
          }}
          onMouseEnter={(e) => e.currentTarget.textContent = "illuminate"}
          onMouseLeave={(e) => e.currentTarget.textContent = "WEST"}
        >
          WEST
        </div>
      </Link>

      <Link href="/remember" style={{ textDecoration: 'none' }}>
        <div 
          className={cormorant.className} 
          style={{
            ...cardinalStyle, 
            top: '50%', 
            right: '27%',
            transform: 'translate(50%, -50%)'
          }}
          onMouseEnter={(e) => e.currentTarget.textContent = "remember"}
          onMouseLeave={(e) => e.currentTarget.textContent = "EAST"}
        >
          EAST
        </div>
      </Link>
    </div>
  );
}

export default Home;