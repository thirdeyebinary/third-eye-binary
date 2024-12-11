function PullQuote({ children }: { children: React.ReactNode }) {
    return (
      <blockquote
        style={{
          margin: '3rem auto',
          maxWidth: '800px',
          padding: '2rem',
          fontSize: '1.8rem',
          fontStyle: 'italic',
          borderLeft: '4px solid #666',
          color: '#f0f0f0',
          background: 'rgba(255,255,255,0.05)',
          letterSpacing: '0.05em',
          lineHeight: '1.6'
        }}
      >
        {children}
      </blockquote>
    );
  }
  
  function Divider() {
    return (
      <div
        style={{
          margin: '4rem auto',
          width: '100%',
          maxWidth: '800px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, #666, transparent)'
        }}
      />
    );
  }
  
  function TestBox({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ 
        background: 'red', 
        padding: '20px', 
        margin: '20px 0',
        color: 'white' 
      }}>
        {children}
      </div>
    );
  }
  
  export function useMDXComponents(components: any) {
    return {
      ...components,
      wrapper: ({ children }) => (
        <article style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          color: '#f0f0f0',
          lineHeight: '1.6'
        }}>
          {children}
        </article>
      ),
      h1: ({ children }) => (
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{children}</h1>
      ),
      p: ({ children }) => (
        <p style={{ marginBottom: '1rem' }}>{children}</p>
      ),
      PullQuote,
      Divider,
      TestBox
    }
  }