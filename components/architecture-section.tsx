"use client"

import { useState } from "react"

const tabs = [
  { id: "runtime", label: "Runtime" },
  { id: "intelligence", label: "Intelligence" },
  { id: "tools", label: "Tools & MCP" },
  { id: "governance", label: "Governance" },
] as const

type TabId = (typeof tabs)[number]["id"]

const tabContent: Record<TabId, { icon: string; title: string; description: string }[]> = {
  runtime: [
    {
      icon: "\u{1F3D7}\uFE0F",
      title: "Pipeline Engine",
      description:
        "Agents execute within the Harness pipeline runtime \u2014 inheriting job semantics, parallel execution, failure strategies, rollback, and the full orchestration model. No new runtime to manage.",
    },
    {
      icon: "\uD83D\uDCE6",
      title: "Step Templates",
      description:
        "Agents are packaged as Step Templates and Step Group Templates. Reference them by name, version them in your template library, and compose them into any pipeline.",
    },
    {
      icon: "\uD83D\uDD04",
      title: "Agents Are Pipelines",
      description:
        "Every agent is backed by a pipeline definition under the hood. Fork an agent, edit the YAML, publish your own variant. Full transparency \u2014 no black boxes.",
    },
  ],
  intelligence: [
    {
      icon: "\uD83E\uDD16",
      title: "BYOM \u2014 Bring Your Own Model",
      description:
        "Connect Anthropic or OpenAI via LLM Connectors. Switch models per agent, per environment, per pipeline. BYOM architecture supports additional providers as they become available.",
    },
    {
      icon: "\uD83D\uDD78\uFE0F",
      title: "Knowledge Graph",
      description:
        "Agents query your organizational Knowledge Graph for real-time context: service topology, pipeline history, deployment state, config drift, and incident patterns.",
    },
    {
      icon: "\uD83D\uDCBE",
      title: "Memory & Rules",
      description:
        "Agents learn from past interactions. Organizational rules and memories persist across sessions \u2014 encoding your team\u2019s conventions, preferences, and domain knowledge.",
    },
  ],
  tools: [
    {
      icon: "\uD83D\uDD0C",
      title: "MCP Integration",
      description:
        "Agents use Model Context Protocol to access external tools \u2014 Git, Jira, Slack, monitoring systems, cloud APIs. Internal and external MCP servers are supported via the MCP Gateway.",
    },
    {
      icon: "\uD83D\uDEE0\uFE0F",
      title: "Harness-Native Tools",
      description:
        "Purpose-built tools for pipeline CRUD, deployment operations, log analysis, artifact management, and infrastructure provisioning. All scoped to RBAC permissions.",
    },
    {
      icon: "\uD83E\uDDE9",
      title: "Extensible Toolkits",
      description:
        "Register custom tools for your domain \u2014 internal APIs, compliance scanners, proprietary systems. Agents discover and invoke them through a standardized protocol.",
    },
  ],
  governance: [
    {
      icon: "\uD83D\uDEE1\uFE0F",
      title: "OPA Policy Enforcement",
      description:
        "Every agent action is evaluated against OPA policies before execution. Define what agents can and cannot do with the same policy-as-code framework you use for pipelines.",
    },
    {
      icon: "\uD83D\uDC64",
      title: "Human-in-the-Loop",
      description:
        "Configure approval gates, PR-based review, and manual checkpoints. Agents propose \u2014 humans approve. Every effectful action leaves a visible, auditable artifact.",
    },
    {
      icon: "\uD83D\uDCCB",
      title: "Full Audit Trail",
      description:
        "Agent decisions, tool invocations, model responses, and mutations are captured in pipeline logs. Compliance teams can inspect the complete reasoning chain end-to-end.",
    },
  ],
}

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<TabId>("runtime")

  return (
    <section id="architecture" className="py-[100px] px-8 relative max-md:py-[60px] max-md:px-[1.2rem]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-[1rem] font-mono reveal">
          {'// ARCHITECTURE'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-[1rem] text-[var(--text-primary)] reveal">
          How Agents Work
        </h2>
        <div className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] leading-[1.8] mb-[3rem] reveal">
          Agents compose three layers: the execution runtime (Harness Pipelines), the intelligence layer (LLM + Knowledge Graph), and the tool layer (MCP + Harness APIs). Each layer is independently configurable.
        </div>

        <div className="mt-[2.5rem] reveal">
          <div className="flex gap-1 bg-[var(--bg-card)] rounded-[12px] p-1 border border-[var(--border-color)] w-fit mb-[2rem] max-md:flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 border-none text-[0.82rem] font-semibold rounded-lg cursor-pointer transition-all font-sans ${
                  activeTab === tab.id
                    ? "bg-[var(--accent-blue)] text-white"
                    : "bg-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            key={activeTab}
            className="arch-grid"
            style={{ animation: "fade-up 0.4s ease-out" }}
          >
            {tabContent[activeTab].map((card) => (
              <div
                key={card.title}
                className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[14px] p-[2rem] transition-all relative overflow-hidden hover:border-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="w-[44px] h-[44px] rounded-[10px] flex items-center justify-center text-[1.3rem] mb-[1.2rem] bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  {card.icon}
                </div>
                <h3 className="text-[1.05rem] font-bold mb-[0.6rem] tracking-[-0.01em] text-[var(--text-primary)]">
                  {card.title}
                </h3>
                <p className="text-[0.88rem] text-[var(--text-secondary)] leading-[1.7]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
