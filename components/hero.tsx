export function Hero() {
  return (
    <section className="pt-[160px] pb-[100px] px-8 text-center relative overflow-hidden max-md:pt-[120px] max-md:pb-[60px] max-md:px-5">
      {/* Glow background */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--glow-blue) 0%, transparent 70%)',
          animation: 'pulse-glow 6s ease-in-out infinite',
        }}
      />
      <div className="max-w-[1200px] mx-auto relative">
        <div
          className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full px-[18px] py-1.5 text-[0.8rem] text-[var(--text-secondary)] mb-8"
          style={{ animation: 'fade-up 0.8s ease-out' }}
        >
          <span
            className="w-2 h-2 rounded-full bg-[var(--accent-green)]"
            style={{ animation: 'blink 2s ease-in-out infinite' }}
          />
          Introducing Harness Agents
        </div>
        <h1
          className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold tracking-[-0.03em] leading-[1.15] max-w-[900px] mx-auto mb-6"
          style={{ animation: 'fade-up 0.8s ease-out 0.1s both' }}
        >
          <span className="bg-gradient-to-br from-[var(--accent-blue)] via-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent">
            Autonomous DevSecOps.
          </span>
          <br />
          {'Pipeline\u2011Native AI Agents.'}
        </h1>
        <p
          className="text-[1.15rem] text-[var(--text-secondary)] max-w-[700px] mx-auto mb-10 leading-[1.7] font-normal"
          style={{ animation: 'fade-up 0.8s ease-out 0.2s both' }}
        >
          Harness Agents are AI-powered autonomous workers that run inside your pipelines — building, deploying, testing, remediating, and optimizing your software delivery lifecycle from commit to production.
        </p>
        <div
          className="flex gap-4 justify-center items-center flex-wrap"
          style={{ animation: 'fade-up 0.8s ease-out 0.3s both' }}
        >
          <a
            href="https://github.com/thisrohangupta/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.9rem] font-semibold no-underline transition-all duration-250 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] text-white shadow-[0_4px_20px_rgba(0,153,255,0.3)] hover:shadow-[0_6px_30px_rgba(0,153,255,0.45)] hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Explore on GitHub
          </a>
          <a
            href="https://developer.harness.io/docs/platform/harness-aida/harness-agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[0.9rem] font-semibold no-underline transition-all duration-250 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--text-muted)]"
          >
            Read the Docs
          </a>
        </div>
        <div
          className="flex gap-12 justify-center mt-14 max-md:gap-6 max-md:flex-wrap"
          style={{ animation: 'fade-up 0.8s ease-out 0.4s both' }}
        >
          <div className="text-center">
            <div className="text-[0.7rem] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
              Stage
            </div>
            <div className="text-[0.85rem] text-[var(--text-secondary)] font-medium">
              {'Alpha \u00B7 Limited Preview'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[0.7rem] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
              Runtime
            </div>
            <div className="text-[0.85rem] text-[var(--text-secondary)] font-medium">
              Harness Pipeline Engine
            </div>
          </div>
          <div className="text-center">
            <div className="text-[0.7rem] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1">
              Models
            </div>
            <div className="text-[0.85rem] text-[var(--text-secondary)] font-medium">
              {'Anthropic \u00B7 OpenAI'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
