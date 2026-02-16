export function CtaSection() {
  return (
    <section className="text-center bg-[var(--bg-primary)] py-[140px] px-8 relative max-md:py-[80px] max-md:px-5">
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--glow-purple) 0%, var(--glow-blue) 40%, transparent 70%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto relative">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] mb-4 text-[var(--text-primary)] reveal">
          AI for Everything After Code
        </h2>
        <p className="text-[var(--text-secondary)] text-[1.1rem] max-w-[600px] mx-auto mb-10 leading-[1.8] reveal">
          Harness Agents bring autonomous, governed, observable intelligence to your pipelines — so your team can focus on building what matters.
        </p>
        <div className="flex gap-4 justify-center items-center flex-wrap reveal">
          <a
            href="https://github.com/thisrohangupta/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[12px] text-[0.95rem] font-semibold no-underline transition-all duration-250 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] text-white shadow-[0_4px_24px_rgba(0,153,255,0.35)] hover:shadow-[0_8px_40px_rgba(0,153,255,0.5)] hover:-translate-y-1"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Explore the Agent Templates
          </a>
          <a
            href="https://github.com/thisrohangupta/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[12px] text-[0.95rem] font-semibold no-underline transition-all duration-250 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--text-muted)] hover:-translate-y-1"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-start max-md:flex-col max-md:gap-8">
          <div>
            <div className="flex items-center gap-2.5 font-bold text-[1rem] tracking-[-0.02em] text-[var(--text-primary)] mb-3">
              <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                <rect width="32" height="32" rx="8" fill="url(#footer-g)" />
                <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="16" r="3" fill="white" />
                <defs>
                  <linearGradient id="footer-g" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#0099ff" />
                    <stop offset="1" stopColor="#7c5cfc" />
                  </linearGradient>
                </defs>
              </svg>
              Harness AI
            </div>
            <p className="text-[0.8rem] text-[var(--text-muted)] max-w-[300px] leading-[1.6]">
              Autonomous, governed, observable AI agents for your software delivery lifecycle.
            </p>
          </div>
          <div className="flex gap-16 max-md:gap-10">
            <div>
              <h4 className="text-[0.75rem] uppercase tracking-[0.1em] text-[var(--text-muted)] font-semibold mb-3">Product</h4>
              <div className="flex flex-col gap-2">
                <a href="#what" className="text-[0.85rem] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--text-primary)]">Overview</a>
                <a href="#architecture" className="text-[0.85rem] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--text-primary)]">Architecture</a>
                <a href="#use-cases" className="text-[0.85rem] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--text-primary)]">Use Cases</a>
              </div>
            </div>
            <div>
              <h4 className="text-[0.75rem] uppercase tracking-[0.1em] text-[var(--text-muted)] font-semibold mb-3">Resources</h4>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/thisrohangupta/agents" target="_blank" rel="noopener noreferrer" className="text-[0.85rem] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--text-primary)]">GitHub</a>
                <a href="#what" className="text-[0.85rem] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--text-primary)]">Documentation</a>
                <a href="#use-cases" className="text-[0.85rem] text-[var(--text-secondary)] no-underline transition-colors duration-200 hover:text-[var(--text-primary)]">Agent Marketplace</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] text-center text-[0.75rem] text-[var(--text-muted)]">
          {'\u00A9 2026 Harness Inc. All rights reserved.'}
        </div>
      </div>
    </footer>
  )
}
