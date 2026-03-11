export default function Hero() {
  const aiPlatforms = ["Claude", "ChatGPT", "Gemini", "Grok", "Copilot"];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-mesh pt-14 sm:pt-16 overflow-hidden" aria-label="Hero">

      {/* Blobs — smaller on mobile */}
      <div className="blob w-60 h-60 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] top-0 left-[-10%] opacity-60" style={{background:"#fdf0ed"}} aria-hidden="true"/>
      <div className="blob w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] bottom-10 right-[-8%] opacity-50" style={{background:"#f4efff",animationDelay:"2s"}} aria-hidden="true"/>

      <div className="section-container relative z-10 text-center py-16 sm:py-20 lg:py-28 w-full">

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-brand-purple/20 rounded-pill px-3 sm:px-4 py-1.5 text-xs font-semibold text-brand-purple mb-6 sm:mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse-soft"/>
          Free · No Sign-up · Works Instantly
        </div>

        {/* Headline — fluid scaling */}
        <h1 className="animate-fade-up-d1 section-title text-4xl xs:text-5xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto mb-4 sm:mb-6">
          Never Lose
          <br/>
          <span className="bg-gradient-to-r from-brand-purple to-blue-400 bg-clip-text text-transparent">
            AI Context
          </span>{" "}Again
        </h1>

        {/* Sub */}
        <p className="animate-fade-up-d2 font-body text-base sm:text-lg text-brand-muted max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Hit the free-tier limit? Upload your AI conversation, split it into smart chunks,
          and continue on any AI — instantly.
        </p>

        {/* CTAs — stack on mobile */}
        <div className="animate-fade-up-d3 flex flex-col xs:flex-row items-center justify-center gap-3 mb-10 sm:mb-14 px-4 xs:px-0">
          <a href="#tool" className="btn-primary text-sm sm:text-base px-7 py-4 w-full xs:w-auto">
            Split My Conversation
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#how-it-works" className="btn-ghost text-sm sm:text-base px-7 py-4 w-full xs:w-auto">
            See How It Works
          </a>
        </div>

        {/* Trust band */}
        <div className="animate-fade-up-d3 flex flex-col items-center gap-3 mb-12 sm:mb-16">
          <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest">Works with any AI</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {aiPlatforms.map(p => (
              <span key={p} className="glass-card text-xs font-semibold text-brand-charcoal px-3 sm:px-4 py-1.5 sm:py-2 rounded-pill">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Floating mockup — responsive on all screens */}
        <div className="animate-float w-full px-2 sm:px-0">
          <div className="glass-card mx-auto w-full max-w-sm sm:max-w-2xl lg:max-w-3xl p-4 sm:p-6" style={{borderRadius:"20px",boxShadow:"0 32px 80px rgba(139,92,246,0.15)"}}>
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 mb-3 sm:mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-300"/>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-300"/>
              <div className="w-2.5 h-2.5 rounded-full bg-green-300"/>
              <div className="ml-2 flex-1 bg-brand-gray rounded-pill h-5 flex items-center px-2.5">
                <span className="text-[10px] text-brand-muted">contextsplit.io</span>
              </div>
            </div>

            {/* Mobile: stacked layout. sm+: side by side */}
            <div className="flex flex-col sm:grid sm:grid-cols-5 gap-3 sm:gap-4">

              {/* Upload zone */}
              <div className="sm:col-span-2 bg-gradient-to-br from-brand-peach to-brand-lavender rounded-xl p-4 flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-3 min-h-[72px] sm:min-h-[160px]">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-card flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                    <path d="M11 14V4M7 8l4-4 4 4" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 17h14" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1 sm:flex-none sm:text-center sm:w-full">
                  <p className="text-xs text-brand-charcoal font-semibold mb-1.5">Drop file here</p>
                  <div className="w-full bg-white/60 rounded-full h-1.5">
                    <div className="bg-brand-purple h-1.5 rounded-full w-3/4"/>
                  </div>
                </div>
              </div>

              {/* Chunks list */}
              <div className="sm:col-span-3 flex flex-col gap-1.5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-semibold text-brand-charcoal">Generated Chunks</span>
                  <span className="text-xs text-brand-purple font-bold">5 chunks</span>
                </div>
                {[1,2,3,4,5].map(n => (
                  <div key={n} className="flex items-center justify-between bg-white/60 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-brand-lavender rounded-md flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] font-bold text-brand-purple">{n}</span>
                      </div>
                      <div className="h-1.5 bg-brand-charcoal/10 rounded-full w-16 sm:w-20"/>
                    </div>
                    <div className="bg-brand-purple/10 rounded-pill px-2 py-0.5 flex-shrink-0">
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
