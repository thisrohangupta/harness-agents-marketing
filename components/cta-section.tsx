export function CtaSection() {
  return (
    <section className="text-center bg-[var(--bg-primary)] py-[120px] px-8 relative">
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--glow-purple) 0%, transparent 70%)',
        }}
      />
      <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] mb-4 relative text-[var(--text-primary)] reveal">
        AI for Everything After Code
      </h2>
      <p className="text-[var(--text-secondary)] text-[1.05rem] max-w-[560px] mx-auto mb-8 relative leading-[1.8] reveal">
        Harness Agents bring autonomous, governed, observable intelligence to your pipelines — so your team can focus on building what matters.
      </p>
      <div className="flex gap-4 justify-center flex-wrap reveal">
        <a
          href="https://github.com/thisrohangupta/agents"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.9rem] font-semibold no-underline transition-all bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] text-white shadow-[0_4px_20px_rgba(0,153,255,0.3)] hover:shadow-[0_6px_30px_rgba(0,153,255,0.45)] hover:-translate-y-0.5"
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
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.9rem] font-semibold no-underline transition-all bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--text-muted)]"
        >
          View on GitHub
        </a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-[var(--border-subtle)] text-center text-[0.78rem] text-[var(--text-muted)]">
      <p>
        {'Harness AI \u00B7 Agents \u00B7 '}
        <a
          href="https://github.com/thisrohangupta/agents"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-secondary)] no-underline hover:text-[var(--text-primary)]"
        >
          GitHub
        </a>
        {' \u00B7 '}
        <a href="#what" className="text-[var(--text-secondary)] no-underline hover:text-[var(--text-primary)]">
          Documentation
        </a>
        {' \u00B7 '}
        <a href="#use-cases" className="text-[var(--text-secondary)] no-underline hover:text-[var(--text-primary)]">
          Agent Marketplace
        </a>
      </p>
      <p className="mt-2">{'\u00A9 2026 Harness Inc. All rights reserved.'}</p>
    </footer>
  )
}
