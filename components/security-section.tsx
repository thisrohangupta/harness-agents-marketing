const securityItems = [
  {
    icon: "\uD83D\uDD10",
    title: "Scoped Permissions",
    description:
      "Agents inherit pipeline RBAC. They can only access resources, connectors, and secrets that the pipeline execution context permits.",
  },
  {
    icon: "\uD83D\uDCDC",
    title: "OPA Policy Gates",
    description:
      "Every effectful action is evaluated against OPA policies before execution. Block, warn, or require approval based on declarative rules.",
  },
  {
    icon: "\uD83D\uDD27",
    title: "Allow-Listed Tools",
    description:
      "Agents can only invoke explicitly declared tools. No ambient permissions. Tool specifications are reviewed and versioned like code.",
  },
  {
    icon: "\uD83D\uDC41\uFE0F",
    title: "Visible Artifacts Only",
    description:
      "Agents create PRs, comments, and logs \u2014 never silent mutations. Every output is visible to the team for review and approval.",
  },
  {
    icon: "\u{1F3D7}\uFE0F",
    title: "MCP Gateway Proxy",
    description:
      "External MCP server calls are filtered and proxied through the Harness MCP Gateway \u2014 enabling allow-listing, rate limiting, and content inspection.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Compliance Audit Trail",
    description:
      "Full chain-of-thought logging. Model inputs, tool calls, outputs, and decisions are captured for SOC 2, FedRAMP, and enterprise compliance requirements.",
  },
]

export function SecuritySection() {
  return (
    <section className="bg-[var(--bg-primary)] py-[100px] px-8 relative max-md:py-[60px] max-md:px-[1.2rem]" id="security">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-[1rem] font-mono reveal">
          {'// SECURITY & GOVERNANCE'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-[1rem] text-[var(--text-primary)] reveal">
          Trust Architecture
        </h2>
        <div className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] leading-[1.8] mb-[3rem] reveal">
          Agentic automation introduces new attack surfaces — prompt injection, tool side-effects, data exfiltration. Our security model is built on explicit constraints over implicit trust.
        </div>

        <div className="security-grid">
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="flex gap-[14px] p-[1.5rem] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[12px] transition-all hover:border-[var(--text-muted)] reveal"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[1.1rem] shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-[0.88rem] font-semibold mb-1 text-[var(--text-primary)]">{item.title}</h4>
                <p className="text-[0.8rem] text-[var(--text-secondary)] leading-[1.6]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
