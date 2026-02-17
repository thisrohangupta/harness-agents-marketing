const useCases = [
  {
    badge: "CI",
    badgeClass: "bg-[rgba(0,214,143,0.12)] text-[var(--accent-green)]",
    title: "Autofix",
    description:
      "When builds fail, the agent analyzes logs, identifies root cause, generates a fix, and opens a PR \u2014 all within the pipeline execution. Reduces MTTR from hours to minutes.",
  },
  {
    badge: "Testing",
    badgeClass: "bg-[rgba(0,214,143,0.12)] text-[var(--accent-green)]",
    title: "Code Coverage",
    description:
      "Powered by your Harness CI Pipeline results, the agent identifies coverage gaps, generates targeted unit tests to meet user-defined thresholds, and opens a PR with a coverage report \u2014 maintaining a high level of quality and feedback for your coding agents.",
  },
  {
    badge: "Code Quality",
    badgeClass: "bg-[rgba(124,92,252,0.12)] text-[var(--accent-purple)]",
    title: "Code Review",
    description:
      "Driven by your Harness CI Pipeline results, the agent reviews every PR with full build and test context \u2014 surfacing issues, suggesting refactors, and catching logic errors. Your SDLC feeding intelligence back into your codebase.",
  },
  {
    badge: "Feature Flags",
    badgeClass: "bg-[rgba(0,212,255,0.12)] text-[var(--accent-cyan)]",
    title: "FF Cleanup",
    description:
      "Scans your codebase for stale feature flags, identifies dead code paths, and generates cleanup PRs \u2014 keeping your codebase lean and eliminating flag debt automatically.",
  },
  {
    badge: "CD",
    badgeClass: "bg-[rgba(0,153,255,0.12)] text-[var(--accent-blue)]",
    title: "Manifest Remediator",
    description:
      "Detects and remediates Kubernetes manifest issues \u2014 misconfigurations, security violations, and resource misallocations \u2014 before they reach production.",
  },
  {
    badge: "Platform",
    badgeClass: "bg-[rgba(0,212,255,0.12)] text-[var(--accent-cyan)]",
    title: "Onboarding",
    description:
      "Scans repositories, infers build/deploy topology, and auto-creates CI/CD pipelines. New repos get pipelines in minutes, not days \u2014 with human approval before activation.",
  },
  {
    badge: "Migration",
    badgeClass: "bg-[rgba(124,92,252,0.12)] text-[var(--accent-purple)]",
    title: "React Upgrade",
    description:
      "Automates framework migration \u2014 analyzing dependencies, updating APIs, refactoring components, and validating builds. Handles the tedious, error-prone upgrade work at scale.",
  },
  {
    badge: "Security",
    badgeClass: "bg-[rgba(255,107,53,0.12)] text-[var(--accent-orange)]",
    title: "Zero Day Remediation",
    description:
      "Responds to zero-day vulnerability disclosures by scanning affected dependencies, assessing blast radius, generating patches, and opening remediation PRs \u2014 governed by your security policies.",
  },
]

export function UseCasesSection() {
  return (
    <section className="bg-[var(--bg-secondary)] py-[100px] px-8 relative max-md:py-[60px] max-md:px-5" id="use-cases">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-[1rem] font-mono reveal">
          {'// USE CASES'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-[1rem] text-[var(--text-primary)] reveal">
          What Can Be Built with Agents
        </h2>
        <div className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] leading-[1.8] mb-[3rem] reveal">
          Agents handle the high-value, judgment-intensive work that can{"'"}t be reduced to simple scripts — but shouldn{"'"}t require a human in the loop for every instance.
        </div>

        <div className="use-case-grid">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-[14px] p-6 transition-all hover:border-[var(--text-muted)] hover:-translate-y-[3px] reveal"
            >
              <span
                className={`inline-block text-[0.65rem] uppercase tracking-[0.08em] font-bold px-2.5 py-1 rounded-md mb-[1rem] ${uc.badgeClass}`}
              >
                {uc.badge}
              </span>
              <h3 className="text-[1rem] font-bold mb-[0.5rem] tracking-[-0.01em] text-[var(--text-primary)]">
                {uc.title}
              </h3>
              <p className="text-[0.85rem] text-[var(--text-secondary)] leading-[1.7]">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
