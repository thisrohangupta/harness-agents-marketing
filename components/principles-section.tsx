const principles = [
  {
    icon: "\u26A1",
    title: "Pipeline\u2011Native",
    description:
      "Agents inherit pipeline semantics \u2014 triggers, secrets, environments, failure strategies, and approval gates. No new execution model to learn or secure.",
  },
  {
    icon: "\uD83E\uDD16",
    title: "Model Independent",
    description:
      "BYOM by default. Connect Anthropic or OpenAI. Swap models without rewriting agents. Compare performance across providers with the same agent definition.",
  },
  {
    icon: "\uD83D\uDD00",
    title: "Forkable & Shareable",
    description:
      "Every agent is a pipeline. Fork System Agents, customize the logic, share via the Agent Marketplace. Teams can standardize, remix, and version their agent library.",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Security First",
    description:
      "Least-privilege by default. OPA-governed actions. Scoped tools. Human-in-the-loop for effectful operations. Every agent decision is logged and reviewable.",
  },
  {
    icon: "\uD83D\uDC41\uFE0F",
    title: "Observable",
    description:
      "No hidden prompts. Full reasoning chains in pipeline logs. Inspect exactly what the agent saw, decided, and executed. You own the behavior end-to-end.",
  },
  {
    icon: "\uD83C\uDFE2",
    title: "Enterprise\u2011Grade",
    description:
      "Built for regulated industries. Data residency controls, RBAC integration, compliance audit trails, and governance policies that scale to thousands of pipelines.",
  },
]

export function PrinciplesSection() {
  return (
    <section id="principles" className="py-[100px] px-8 relative max-md:py-[60px] max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-4 font-mono reveal">
          {'// DESIGN PHILOSOPHY'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-4 text-[var(--text-primary)] reveal">
          Built on What You Already Use
        </h2>
        <div className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] leading-[1.8] mb-12 reveal">
          Agents don{"'"}t replace your pipeline infrastructure — they extend it. Same YAML, same RBAC, same audit trail. New intelligence, same control plane.
        </div>

        <div className="principles-grid">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[14px] p-6 transition-all duration-300 hover:border-[var(--accent-blue)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-1 reveal"
            >
              <div className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center text-[1.3rem] mb-4 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                {p.icon}
              </div>
              <h3 className="text-[0.95rem] font-bold mb-2 text-[var(--text-primary)]">{p.title}</h3>
              <p className="text-[0.82rem] text-[var(--text-secondary)] leading-[1.7]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
