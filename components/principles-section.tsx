const principles = [
  {
    title: "Pipeline\u2011Native",
    description:
      "Agents inherit pipeline semantics \u2014 triggers, secrets, environments, failure strategies, and approval gates. No new execution model to learn or secure.",
  },
  {
    title: "Model Independent",
    description:
      "BYOM by default. Connect Anthropic or OpenAI. Swap models without rewriting agents. Compare performance across providers with the same agent definition.",
  },
  {
    title: "Forkable & Shareable",
    description:
      "Every agent is a pipeline. Fork System Agents, customize the logic, share via the Agent Marketplace. Teams can standardize, remix, and version their agent library.",
  },
  {
    title: "Security First",
    description:
      "Least-privilege by default. OPA-governed actions. Scoped tools. Human-in-the-loop for effectful operations. Every agent decision is logged and reviewable.",
  },
  {
    title: "Observable",
    description:
      "No hidden prompts. Full reasoning chains in pipeline logs. Inspect exactly what the agent saw, decided, and executed. You own the behavior end-to-end.",
  },
  {
    title: "Enterprise\u2011Grade",
    description:
      "Built for regulated industries. Data residency controls, RBAC integration, compliance audit trails, and governance policies that scale to thousands of pipelines.",
  },
]

export function PrinciplesSection() {
  return (
    <section id="principles" className="py-[100px] px-8 relative max-md:py-[60px] max-md:px-[1.2rem]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-[1rem] font-mono reveal">
          {'// DESIGN PHILOSOPHY'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-[1rem] text-[var(--text-primary)] reveal">
          Built on What You Already Use
        </h2>
        <div className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] leading-[1.8] mb-[3rem] reveal">
          Agents don{"'"}t replace your pipeline infrastructure — they extend it. Same YAML, same RBAC, same audit trail. New intelligence, same control plane.
        </div>

        <div className="principles-grid">
          {principles.map((p) => (
            <div
              key={p.title}
              className="p-[1.8rem] border-l-2 border-[var(--border-color)] transition-colors hover:border-[var(--accent-blue)] reveal"
            >
              <h3 className="text-[0.95rem] font-bold mb-[0.5rem] text-[var(--text-primary)]">{p.title}</h3>
              <p className="text-[0.82rem] text-[var(--text-secondary)] leading-[1.7]">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
