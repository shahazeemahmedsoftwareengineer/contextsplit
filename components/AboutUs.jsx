// ─── About Us ────────────────────────────────────────────────
const TEAM_VALUES = [
  {
    icon: "🔒",
    title:       "Privacy First",
    description: "Your conversations never leave your browser. We built this tool with zero-server architecture — no uploads, no logs, no data.",
  },
  {
    icon: "⚡",
    title:       "Built for Speed",
    description: "Processing happens locally in milliseconds. Split a file up to 100 chunks in under a second, with no loading spinners.",
  },
  {
    icon: "🌍",
    title:       "Free for Everyone",
    description: "AI tools should be accessible. ContextSplit is free forever, supported by non-intrusive ads. No subscriptions, no paywalls.",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: "linear-gradient(135deg, #fdf0ed22 0%, #f4efff33 100%)" }}
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <p className="section-label">
              <span className="w-4 h-px bg-brand-purple inline-block" />
              About Us
            </p>

            <h2 id="about-heading" className="section-title text-4xl md:text-5xl mb-6 leading-tight">
              Built by AI users,{" "}
              <span className="text-brand-purple">for AI users</span>
            </h2>

            <div className="space-y-4 font-body text-brand-muted leading-relaxed">
              <p>
                We were in the middle of a complex debugging session with Claude — three hours
                deep, dozens of back-and-forths — when we hit the context limit. Starting a new
                chat felt like losing a save file in a game.
              </p>
              <p>
                We looked for a tool to split conversation exports into manageable chunks.
                Nothing existed that was simple, private, and free. So we built ContextSplit
                in a weekend and put it online.
              </p>
              <p>
                Today, thousands of developers, writers, students, and researchers use it every
                day to keep their AI sessions flowing without losing a single line of context.
              </p>
            </div>

            <div className="mt-8">
              <a href="#tool" className="btn-primary">
                Try ContextSplit Free
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Values */}
          <div className="flex flex-col gap-5">
            {TEAM_VALUES.map((value, idx) => (
              <div
                key={idx}
                className="glass-card p-6 flex items-start gap-5"
              >
                <span
                  className="text-3xl flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #fdf0ed, #f4efff)" }}
                  aria-hidden="true"
                >
                  {value.icon}
                </span>
                <div>
                  <h3 className="font-display font-bold text-brand-charcoal text-base mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
