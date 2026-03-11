// ─── Problem / Solution ───────────────────────────────────────

function ProblemCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 p-8 h-full">
      {/* Tag */}
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 bg-red-100 rounded-pill px-3 py-1 mb-6">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="5" stroke="#ef4444" strokeWidth="1.5"/>
          <path d="M6 4v3M6 8.5v.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        The Problem
      </span>

      <h3 className="font-display font-bold text-2xl text-brand-charcoal mb-4 leading-snug">
        Context limits break your flow at the worst moment
      </h3>

      <p className="text-brand-muted text-sm leading-relaxed mb-7">
        You're deep in a complex project — debugging, writing, researching — and then the AI
        hits its free-tier limit. A new chat starts and the AI has no memory of your previous
        conversation. You're forced to re-explain everything from scratch.
      </p>

      {/* Pain points list */}
      <ul className="space-y-3">
        {[
          "Re-explaining context wastes 30+ minutes",
          "Crucial details get lost or forgotten",
          "Your workflow is completely disrupted",
          "Copying giant files manually is error-prone",
        ].map((pain) => (
          <li key={pain} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 2l6 6M8 2L2 8" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            {pain}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-brand-lavender to-purple-50 border border-brand-purple/15 p-8 h-full">
      {/* Tag */}
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple bg-brand-purple/10 rounded-pill px-3 py-1 mb-6">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        The Solution
      </span>

      <h3 className="font-display font-bold text-2xl text-brand-charcoal mb-4 leading-snug">
        Split smart, continue instantly, keep full context
      </h3>

      <p className="text-brand-muted text-sm leading-relaxed mb-7">
        ContextSplit breaks your conversation into perfectly sized chunks that any AI can
        absorb. Paste chunk 1 first, let the AI read it, then continue. The AI builds up
        the full context across all chunks — exactly like flipping through pages.
      </p>

      {/* Benefits list */}
      <ul className="space-y-3">
        {[
          "Restore context in under 2 minutes",
          "No data stored — 100% browser-side processing",
          "Works with any AI: Claude, ChatGPT, Gemini…",
          "Free forever, no sign-up required",
        ].map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-purple/15 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 5l3 3 4-4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────
export default function ProblemSolution() {
  return (
    <section
      className="py-28"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)" }}
      aria-labelledby="problem-solution-heading"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">
            <span className="w-4 h-px bg-brand-purple inline-block" />
            Why ContextSplit
            <span className="w-4 h-px bg-brand-purple inline-block" />
          </p>
          <h2
            id="problem-solution-heading"
            className="section-title text-4xl md:text-5xl"
          >
            The pain is real.{" "}
            <span className="text-brand-purple">The fix is simple.</span>
          </h2>
        </div>

        {/* Split columns */}
        <div className="grid md:grid-cols-2 gap-6">
          <ProblemCard  />
          <SolutionCard />
        </div>

        {/* Center connector */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-card items-center justify-center border border-brand-charcoal/8 pointer-events-none">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 9h10M9 4l5 5-5 5" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
