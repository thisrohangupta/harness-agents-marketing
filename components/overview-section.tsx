export function OverviewSection() {
  return (
    <section className="bg-[var(--bg-primary)] py-[100px] px-8 relative max-md:py-[60px] max-md:px-[1.2rem]" id="what">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--accent-blue)] font-semibold mb-4 font-mono reveal">
          {'// OVERVIEW'}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-4 text-[var(--text-primary)] reveal">
          What Are Harness Agents?
        </h2>
        <div className="text-[1.05rem] text-[var(--text-secondary)] max-w-[700px] leading-[1.8] mb-[3rem] reveal">
          Harness Agents are autonomous AI workers that execute DevOps tasks inside Harness pipelines. Unlike standalone AI assistants, agents are pipeline-native — they inherit your pipeline{"'"}s context, permissions, secrets, and governance controls while taking multi-step actions across your SDLC.
        </div>

        <div className="grid gap-6 max-md:grid-cols-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <ArchCard icon="⚡" title="Pipeline-Native Execution">
            Agents run as first-class pipeline steps — not as external scripts or webhook callbacks. They share the pipeline{"'"}s execution context, secrets, connectors, and RBAC scope. Every action is logged, auditable, and governed.
          </ArchCard>
          <ArchCard icon="🔀" title="System + Custom Agents">
            Start with Harness-built System Agents for CI autofix, CD remediation, code review, and feature flag cleanup. Then create Custom Agents tailored to your organization{"'"}s workflows, standards, and domain knowledge.
          </ArchCard>
          <ArchCard icon="🧠" title="Context-Aware Intelligence">
            Agents access your Knowledge Graph — pipelines, infrastructure, services, configs, and history. They understand your environment and make decisions grounded in your actual platform state, not generic suggestions.
          </ArchCard>
        </div>

        {/* Code Example */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-[14px] overflow-hidden mt-8 font-mono text-[0.82rem] leading-[1.8] max-w-[800px] reveal">
          <div className="flex items-center gap-2 px-5 py-3 bg-[var(--bg-card)] border-b border-[var(--border-color)] text-[0.75rem] text-[var(--text-muted)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto">templates/code-coverage/pipeline.yaml</span>
          </div>
          <div className="p-6 overflow-x-auto text-[var(--text-secondary)]">
            <pre>{codeContent()}</pre>
          </div>
        </div>
        <p className="text-[0.78rem] text-[var(--text-muted)] mt-3 italic">
          From{' '}
          <a
            href="https://github.com/thisrohangupta/agents/tree/main/templates/code-coverage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] no-underline hover:underline"
          >
            thisrohangupta/agents
          </a>{' '}
          — agent templates are modular pipeline definitions with metadata, YAML, docs, and logo.
        </p>
      </div>
    </section>
  )
}

function ArchCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-[14px] p-[2rem] transition-all relative overflow-hidden hover:border-[var(--text-muted)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-1 reveal">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[1.3rem] mb-5 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
        {icon}
      </div>
      <h3 className="text-[1.05rem] font-bold mb-2.5 tracking-[-0.01em] text-[var(--text-primary)]">
        {title}
      </h3>
      <p className="text-[0.88rem] text-[var(--text-secondary)] leading-[1.7]">{children}</p>
    </div>
  )
}

function codeContent() {
  return (
    <>
      <span className="text-[var(--accent-purple)]">version</span>: <span className="text-[var(--accent-green)]">1</span>{'\n'}
      <span className="text-[var(--accent-purple)]">pipeline</span>:{'\n'}
      {'  '}<span className="text-[var(--accent-purple)]">clone</span>:{'\n'}
      {'    '}<span className="text-[var(--accent-purple)]">depth</span>: <span className="text-[var(--accent-green)]">1</span>{'\n'}
      {'    '}<span className="text-[var(--accent-purple)]">ref</span>:{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">name</span>: <span className="text-[var(--accent-cyan)]">{'<+inputs.branch>'}</span>{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">type</span>: branch{'\n'}
      {'  '}<span className="text-[var(--accent-purple)]">repo</span>: <span className="text-[var(--accent-cyan)]">{'<+inputs.repo>'}</span>{'\n'}
      {'  '}<span className="text-[var(--accent-purple)]">connector</span>: <span className="text-[var(--accent-green)]">{'"<+inputs.gitConnector>"'}</span>{'\n'}
      {'  '}<span className="text-[var(--accent-purple)]">stages</span>:{'\n'}
      {'    '}- <span className="text-[var(--accent-purple)]">name</span>: <span className="text-[var(--accent-green)]">code-coverage</span>{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">steps</span>:{'\n'}
      {'        '}- <span className="text-[var(--accent-purple)]">name</span>: <span className="text-[var(--accent-orange)]">coding_agent</span>              <span className="text-[var(--text-muted)] italic">{'# \u2190 AI-powered step'}</span>{'\n'}
      {'          '}<span className="text-[var(--accent-purple)]">run</span>:{'\n'}
      {'            '}<span className="text-[var(--accent-purple)]">container</span>:{'\n'}
      {'              '}<span className="text-[var(--accent-purple)]">image</span>: <span className="text-[var(--accent-cyan)]">himanshu6956/codecov:coding-agent-with-go</span>{'\n'}
      {'            '}<span className="text-[var(--accent-purple)]">with</span>:{'\n'}
      {'              '}<span className="text-[var(--accent-orange)]">max_iterations</span>: <span className="text-[var(--accent-green)]">{'"300"'}</span>{'\n'}
      {'              '}<span className="text-[var(--accent-orange)]">code_coverage</span>: <span className="text-[var(--accent-green)]">{'"true"'}</span>{'\n'}
      {'              '}<span className="text-[var(--accent-orange)]">verify</span>: <span className="text-[var(--accent-green)]">{'"true"'}</span>{'\n'}
      {'              '}<span className="text-[var(--accent-orange)]">prompt</span>: <span className="text-[var(--accent-green)]">{'"Analyze the current codebase and identify'}</span>{'\n'}
      {'                '}<span className="text-[var(--accent-green)]">test coverage. Generate comprehensive unit tests</span>{'\n'}
      {'                '}<span className="text-[var(--accent-green)]">to increase overall coverage to at least 90%</span>{'\n'}
      {'                '}<span className="text-[var(--accent-green)]">and each file coverage to at least 80%.</span>{'\n'}
      {'                '}<span className="text-[var(--accent-green)]">{'Generate a CONCISE COVERAGE.md file."'}</span>{'\n'}
      {'            '}<span className="text-[var(--accent-purple)]">env</span>:{'\n'}
      {'              '}<span className="text-[var(--accent-orange)]">ANTHROPIC_API_KEY</span>: <span className="text-[var(--accent-cyan)]">{'<+inputs.llmConnector.token>'}</span>{'\n'}
      {'\n'}
      {'        '}- <span className="text-[var(--accent-purple)]">name</span>: <span className="text-[var(--accent-orange)]">push_and_create_pr</span>        <span className="text-[var(--text-muted)] italic">{'# \u2190 Opens PR with tests'}</span>{'\n'}
      {'          '}<span className="text-[var(--accent-purple)]">run</span>:{'\n'}
      {'            '}<span className="text-[var(--accent-purple)]">container</span>:{'\n'}
      {'              '}<span className="text-[var(--accent-purple)]">image</span>: <span className="text-[var(--accent-cyan)]">himanshu6956/create-pr-plugin:latest</span>{'\n'}
      {'            '}<span className="text-[var(--accent-purple)]">env</span>:{'\n'}
      {'              '}<span className="text-[var(--accent-orange)]">PLUGIN_PR_TITLE</span>: <span className="text-[var(--accent-green)]">{'"Code Coverage: Automated'}</span>{'\n'}
      {'                '}<span className="text-[var(--accent-green)]">{'coverage increase by Harness AI"'}</span>{'\n'}
      {'              '}<span className="text-[var(--accent-orange)]">PLUGIN_CREATE_PR</span>: <span className="text-[var(--accent-green)]">{'"true"'}</span>{'\n'}
      {'\n'}
      {'        '}- <span className="text-[var(--accent-purple)]">name</span>: <span className="text-[var(--accent-orange)]">post_coverage_comment</span>     <span className="text-[var(--text-muted)] italic">{'# \u2190 Posts report to PR'}</span>{'\n'}
      {'          '}<span className="text-[var(--accent-purple)]">run</span>:{'\n'}
      {'            '}<span className="text-[var(--accent-purple)]">container</span>:{'\n'}
      {'              '}<span className="text-[var(--accent-purple)]">image</span>: <span className="text-[var(--accent-cyan)]">abhinavharness/comment-plugin:latest</span>{'\n'}
      {'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">platform</span>:{'\n'}
      {'        '}<span className="text-[var(--accent-purple)]">os</span>: linux{'\n'}
      {'        '}<span className="text-[var(--accent-purple)]">arch</span>: arm64{'\n'}
      {'  '}<span className="text-[var(--accent-purple)]">inputs</span>:{'\n'}
      {'    '}<span className="text-[var(--accent-orange)]">llmConnector</span>:{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">type</span>: <span className="text-[var(--accent-cyan)]">connector</span>              <span className="text-[var(--text-muted)] italic">{'# LLM provider connector'}</span>{'\n'}
      {'    '}<span className="text-[var(--accent-orange)]">gitConnector</span>:{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">type</span>: <span className="text-[var(--accent-cyan)]">connector</span>              <span className="text-[var(--text-muted)] italic">{'# SCM connector'}</span>{'\n'}
      {'    '}<span className="text-[var(--accent-orange)]">repo</span>:{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">type</span>: <span className="text-[var(--accent-cyan)]">string</span>{'\n'}
      {'    '}<span className="text-[var(--accent-orange)]">branch</span>:{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">type</span>: <span className="text-[var(--accent-cyan)]">string</span>{'\n'}
      {'      '}<span className="text-[var(--accent-purple)]">default</span>: <span className="text-[var(--accent-green)]">main</span>
    </>
  )
}
