export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-[var(--border-subtle)] h-16">
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between max-md:px-5">
        <div className="flex items-center gap-2.5 font-bold text-[1.1rem] tracking-[-0.02em] text-[var(--text-primary)]">
          <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
            <rect width="32" height="32" rx="8" fill="url(#nav-g)" />
            <path
              d="M16 8L22 12V20L16 24L10 20V12L16 8Z"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="16" cy="16" r="3" fill="white" />
            <defs>
              <linearGradient id="nav-g" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#0099ff" />
                <stop offset="1" stopColor="#7c5cfc" />
              </linearGradient>
            </defs>
          </svg>
          Harness AI
          <span className="bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] text-white text-[0.65rem] font-bold px-2 py-[3px] rounded-full tracking-[0.06em] uppercase">
            Alpha
          </span>
        </div>
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
