// ─── Hero Section ────────────────────────────────────────────
export default function Hero() {
  const aiPlatforms = ["Claude", "ChatGPT", "Gemini", "Grok", "Copilot"];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-mesh pt-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Blobs */}
      <div
        className="blob w-[500px] h-[500px] top-0 left-[-15%]"
        style={{ background: "#fdf0ed" }}
        aria-hidden="true"
      />
      <div
        className="blob w-[400px] h-[400px] bottom-10 right-[-10%]"
        style={{ background: "#f4efff", animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 text-center py-24">
        {/* Pill badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-brand-purple/20 rounded-pill px-4 py-1.5 text-xs font-semibold text-brand-purple mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse-soft" />
          Free · No Sign-up · Works Instantly
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-d1 section-title text-5xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto mb-6">
          Never Lose
          <br />
          <span className="bg-gradient-to-r from-brand-purple to-blue-400 bg-clip-text text-transparent">
            AI Context
          </span>{" "}
          Again
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-d2 font-body text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Hit the free-tier limit? Upload your AI conversation, split it into smart
          chunks, and continue where you left off — on any AI platform, instantly.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-d3 flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="#tool" className="btn-primary text-base px-8 py-4">
            Split My Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className="btn-ghost text-base px-8 py-4">
            See How It Works
          </a>
        </div>

        {/* Trust band */}
        <div className="animate-fade-up-d3 flex flex-col items-center gap-3">
          <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest">
            Works with any AI platform
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {aiPlatforms.map((platform) => (
              <span
                key={platform}
                className="glass-card text-xs font-semibold text-brand-charcoal px-4 py-2 rounded-pill"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Dashboard Mockup */}
        <div className="mt-20 animate-float">
          <div
            className="glass-card mx-auto max-w-3xl p-6 shadow-hero"
            style={{ borderRadius: "24px" }}
          >
            {/* Mockup Header Bar */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-300"   />
              <div className="w-3 h-3 rounded-full bg-yellow-300"/>
              <div className="w-3 h-3 rounded-full bg-green-300" />
              <div className="ml-4 flex-1 bg-brand-gray rounded-pill h-6 flex items-center px-3">
                <span className="text-xs text-brand-muted">contextsplit.io</span>
              </div>
            </div>

            {/* Mockup Content */}
            <div className="grid grid-cols-5 gap-4">
              {/* Left: Upload zone */}
              <div className="col-span-2 bg-gradient-to-br from-brand-peach to-brand-lavender rounded-2xl p-4 flex flex-col items-center justify-center gap-3 min-h-[160px]">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-card">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 14V4M7 8l4-4 4 4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 17h14" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-xs text-brand-charcoal font-semibold text-center">
                  Drop conversation.txt
                </p>
                <div className="w-full bg-white/60 rounded-full h-1.5">
                  <div className="bg-brand-purple h-1.5 rounded-full w-3/4" />
                </div>
              </div>

              {/* Right: Chunk preview */}
              <div className="col-span-3 flex flex-col gap-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-brand-charcoal">Generated Chunks</span>
                  <span className="text-xs text-brand-purple font-bold">5 chunks</span>
                </div>
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="flex items-center justify-between bg-white/60 rounded-xl px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-brand-lavender rounded-md flex items-center justify-center">
                        <span className="text-[9px] font-bold text-brand-purple">{n}</span>
                      </div>
                      <div>
                        <div className="h-1.5 bg-brand-charcoal/10 rounded-full w-20 mb-1" />
                        <div className="h-1.5 bg-brand-charcoal/6  rounded-full w-14" />
                      </div>
                    </div>
                    <div className="bg-brand-purple/10 rounded-pill px-2 py-0.5">
                      <span className="text-[9px] font-bold text-brand-purple">↓ Download</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
