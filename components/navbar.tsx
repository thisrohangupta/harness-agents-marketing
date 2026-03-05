export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-[var(--border-subtle)] h-16">
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between max-md:px-5">
        <a href="https://www.harness.io/products/harness-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-bold text-[1.1rem] tracking-[-0.02em] text-[var(--text-primary)] no-underline">
          <img src="/harness-ai/agents/harness-ai.svg" alt="Harness AI" className="w-7 h-7" />
          Harness AI
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#what" className="text-[var(--text-secondary)] no-underline text-[0.85rem] font-medium transition-colors duration-200 hover:text-[var(--text-primary)]">
            Overview
          </a>
          <a href="#architecture" className="text-[var(--text-secondary)] no-underline text-[0.85rem] font-medium transition-colors duration-200 hover:text-[var(--text-primary)]">
            Architecture
          </a>
          <a href="#use-cases" className="text-[var(--text-secondary)] no-underline text-[0.85rem] font-medium transition-colors duration-200 hover:text-[var(--text-primary)]">
            Use Cases
          </a>
          <a href="#security" className="text-[var(--text-secondary)] no-underline text-[0.85rem] font-medium transition-colors duration-200 hover:text-[var(--text-primary)]">
            Security
          </a>
          <a href="#roadmap" className="text-[var(--text-secondary)] no-underline text-[0.85rem] font-medium transition-colors duration-200 hover:text-[var(--text-primary)]">
            Roadmap
          </a>
        </div>
      </div>
    </nav>
  )
}
