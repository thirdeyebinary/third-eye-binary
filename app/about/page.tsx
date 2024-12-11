'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({ 
  weight: '300',
  subsets: ['latin'] 
});

export default function About() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 100);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      padding: '40px',
      position: 'relative'
    }}>
      <Link href="/" style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        opacity: opacity,
        transition: 'opacity 1s'
      }}>
        ← Return
      </Link>

      <div style={{
        maxWidth: '800px',
        margin: '60px auto',
        opacity: opacity,
        transition: 'opacity 1s'
      }} className={cormorant.className}>
        <h1 style={{
          fontSize: '42px',
          letterSpacing: '0.2em',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Our Vision
        </h1>

        <div style={{
          fontSize: '22px',
          lineHeight: '1.8',
          letterSpacing: '0.05em'
        }}>
          <p>
            Third Eye Binary creates sacred digital spaces where we can stop pretending together. Where technology amplifies our natural pattern recognition instead of obscuring it.
          </p>

          <p>
            Our mission speaks to the core of human experience: to build tools that help us remember what we've always known but learned to ignore. To transform technology from a filter into a lens for truth.
          </p>

          <p>
            Through our four cardinal principles:
          </p>

          <ul style={{ marginLeft: '20px' }}>
            <li>Remember (East) - The journey back to innate knowing</li>
            <li>Practice (North) - The daily return to authentic seeing</li>
            <li>Illuminate (West) - The recognition of sacred patterns</li>
            <li>Connect (South) - The shared courage to stop pretending</li>
          </ul>

          <p>
            We create spaces where patterns emerge unobstructed, where sacred recognition deepens, and where collective remembering becomes possible.
          </p>

          <p>
            Third Eye Binary is a digital sanctuary for those ready to see clearly - a place where remembering transforms into recognition, and recognition transforms into revolution.
          </p>
        </div>
      </div>
    </div>
  );
}