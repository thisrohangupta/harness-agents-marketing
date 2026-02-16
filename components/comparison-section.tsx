const rows = [
  {
    dimension: "Execution Model",
    scripts: "External processes, custom infrastructure",
    assistants: "API calls, no pipeline context",
    agents: "Pipeline-native steps",
    agentExtra: " with full orchestration",
  },
  {
    dimension: "Context",
    scripts: "Manual wiring via env vars",
    assistants: "Chat history only",
    agents: "Knowledge Graph",
    agentExtra: " \u2014 services, infra, history",
  },
  {
    dimension: "Governance",
    scripts: "DIY approval scripts",
    assistants: "None / per-provider",
    agents: "OPA policies, RBAC, audit logs",
    agentExtra: "",
  },
  {
    dimension: "Model Flexibility",
    scripts: "Hard-coded API calls",
    assistants: "Vendor lock-in",
    agents: "BYOM",
    agentExtra: " \u2014 Anthropic, OpenAI, per-agent",
  },
  {
    dimension: "Extensibility",
    scripts: "Custom code for each integration",
    assistants: "Plugin-dependent",
    agents: "MCP + forkable agents",
    agentExtra: " + marketplace",
  },
  {
    dimension: "Observability",
    scripts: "Custom logging",
    assistants: "Chat logs",
    agents: "Full reasoning chain",
    agentExtra: " in pipeline logs",
  },
]

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-[100px] px-8 relative max-md:py-[60px] max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-[1rem] font-mono reveal">
          {'// DIFFERENTIATION'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-[1rem] text-[var(--text-primary)] reveal">
          Agents vs. Traditional Automation
        </h2>

        <div className="overflow-x-auto reveal">
          <table className="w-full border-collapse text-[0.85rem] mt-[1.5rem] max-md:text-[0.75rem]">
            <thead>
              <tr>
                <th className="text-left px-5 py-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] font-semibold text-[0.78rem] uppercase tracking-[0.05em] text-[var(--text-muted)] max-md:px-3 max-md:py-2.5">
                  Dimension
                </th>
                <th className="text-left px-5 py-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] font-semibold text-[0.78rem] uppercase tracking-[0.05em] text-[var(--text-muted)] max-md:px-3 max-md:py-2.5">
                  {'Scripts & Webhooks'}
                </th>
                <th className="text-left px-5 py-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] font-semibold text-[0.78rem] uppercase tracking-[0.05em] text-[var(--text-muted)] max-md:px-3 max-md:py-2.5">
                  Standalone AI Assistants
                </th>
                <th className="text-left px-5 py-3.5 bg-[var(--bg-card)] border border-[var(--border-color)] font-semibold text-[0.78rem] uppercase tracking-[0.05em] text-[var(--accent-blue)] max-md:px-3 max-md:py-2.5">
                  Harness Agents
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.dimension} className="hover:bg-[var(--bg-card)] transition-colors [&>td]:border [&>td]:border-[var(--border-color)]">
                  <td className="px-5 py-3.5 text-[var(--text-secondary)] align-top leading-[1.6] max-md:px-3 max-md:py-2.5">
                    <strong className="text-[var(--text-primary)]">{row.dimension}</strong>
                  </td>
                  <td className="px-5 py-3.5 text-[var(--text-secondary)] align-top leading-[1.6] max-md:px-3 max-md:py-2.5">
                    {row.scripts}
                  </td>
                  <td className="px-5 py-3.5 text-[var(--text-secondary)] align-top leading-[1.6] max-md:px-3 max-md:py-2.5">
                    {row.assistants}
                  </td>
                  <td className="px-5 py-3.5 text-[var(--text-secondary)] align-top leading-[1.6] max-md:px-3 max-md:py-2.5">
                    <span className="text-[var(--accent-green)] font-semibold">{row.agents}</span>
                    {row.agentExtra}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
