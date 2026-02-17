const timelineItems = [
  {
    date: "February 2026",
    badge: "Building",
    badgeClass: "bg-[rgba(0,153,255,0.15)] text-[var(--accent-blue)]",
    title: "Foundation Release",
    description:
      "Agent runtime, LLM Connectors (Anthropic, OpenAI), and 8 System Agent templates: Autofix, Code Coverage, Code Review, FF Cleanup, Manifest Remediator, Onboarding, React Upgrade, and Zero Day Remediation. Pipeline YAML integration, Step Templates, and Harness Auth for agent execution.",
    shipped: false,
  },
  {
    date: "April 2026 \u2014 MVP 1",
    badge: "Building",
    badgeClass: "bg-[rgba(0,153,255,0.15)] text-[var(--accent-blue)]",
    title: "Agent Extensibility",
    description:
      "Fork and customize agents. Reference agents across pipelines. Onboarding Agent for guided first-run experience. Agent Marketplace with curated community agents.",
    shipped: false,
  },
  {
    date: "H2 2026",
    badge: "Planned",
    badgeClass: "bg-[rgba(124,92,252,0.12)] text-[var(--accent-purple)]",
    title: "Autonomous Operations",
    description:
      "Event-driven agent triggers (incidents, drift detection, SLA breaches). Multi-agent orchestration for complex workflows. Advanced MCP Gateway with content inspection and policy enforcement.",
    shipped: false,
  },
  {
    date: "H2 2026",
    badge: "Planned",
    badgeClass: "bg-[rgba(124,92,252,0.12)] text-[var(--accent-purple)]",
    title: "Agent Marketplace",
    description:
      "A public marketplace where customers, partners, and community members can publish, discover, and install agents \u2014 for use inside or outside their organization. Share best practices at scale and accelerate adoption across the ecosystem.",
    shipped: false,
  },
]

export function RoadmapSection() {
  return (
    <section className="bg-[var(--bg-secondary)] py-[100px] px-8 relative max-md:py-[60px] max-md:px-5" id="roadmap">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-4 font-mono reveal">
          {'// ROADMAP'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-4 text-[var(--text-primary)] reveal">
          {"What\u2019s Shipping"}
        </h2>
        <div className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] leading-[1.8] mb-12 reveal">
          Harness Agents is being delivered iteratively — foundations first, extensibility next, then the marketplace ecosystem.
        </div>

        <div className="relative pl-10 reveal">
          {/* Timeline line */}
          <div
            className="absolute left-[14px] top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), var(--border-color))',
            }}
          />

          {timelineItems.map((item, i) => (
            <div key={i} className="relative mb-10 pl-5">
              {/* Dot */}
              <div
                className={`absolute left-[-33px] top-[24px] w-3 h-3 rounded-full border-2 ${
                  item.shipped
                    ? "bg-[var(--accent-green)] border-[var(--accent-green)]"
                    : "bg-[var(--bg-secondary)] border-[var(--accent-blue)]"
                }`}
              />
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--text-muted)] hover:bg-[var(--bg-card-hover)]">
                <div className="font-mono text-[0.72rem] text-[var(--accent-blue)] uppercase tracking-[0.08em] mb-2">
                  {item.date}{' '}
                  <span className={`inline-block text-[0.62rem] uppercase px-2 py-0.5 rounded font-bold tracking-[0.06em] ml-2 ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-[1rem] font-bold mb-2 text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.7]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
