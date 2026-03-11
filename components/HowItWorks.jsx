// ─── How It Works ─────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 17V7M10 11l4-4 4 4" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 21h18" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
    title:       "Upload Your Conversation",
    description: "Export your AI chat as a .txt or .md file and upload it here. We accept any plain-text format — Claude exports, ChatGPT archives, or any copy-pasted conversation.",
    color:       "from-brand-peach to-orange-50",
    accent:      "rgba(253,240,237,1)",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4"  y="6"  width="8" height="16" rx="2" stroke="#8B5CF6" strokeWidth="2.2"/>
        <rect x="16" y="6"  width="8" height="7"  rx="2" stroke="#8B5CF6" strokeWidth="2.2"/>
        <rect x="16" y="15" width="8" height="7"  rx="2" stroke="#8B5CF6" strokeWidth="2.2"/>
      </svg>
    ),
    title:       "Choose Your Chunk Count",
    description: "Use the slider to pick how many pieces to split your file into — from 2 to 100. We evenly distribute lines so each chunk gives the AI a balanced portion of context.",
    color:       "from-brand-lavender to-purple-50",
    accent:      "rgba(244,239,255,1)",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l8 8-8 8" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 4l8 8-8 8"  stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      </svg>
    ),
    title:       "Download & Continue",
    description: "Download each chunk and paste it into a new AI chat, telling the AI \"this is part X of Y of my previous conversation.\" Your AI session resumes with full context.",
    color:       "from-blue-50 to-sky-50",
    accent:      "rgba(219,234,254,0.6)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white" aria-labelledby="how-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">
            <span className="w-4 h-px bg-brand-purple inline-block" />
            Simple Process
            <span className="w-4 h-px bg-brand-purple inline-block" />
          </p>
          <h2
            id="how-heading"
            className="section-title text-4xl md:text-5xl mb-4"
          >
            Three steps to{" "}
            <span className="text-brand-purple">restore your context</span>
          </h2>
          <p className="font-body text-brand-muted text-lg max-w-xl mx-auto">
            No accounts, no data stored. Your conversation never leaves your browser.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => (
            <article
              key={idx}
              className={`relative bg-gradient-to-br ${step.color} rounded-3xl p-8 border border-white overflow-hidden`}
            >
              {/* Large step number watermark */}
              <span
                className="absolute top-4 right-6 font-display font-extrabold text-7xl leading-none select-none"
                style={{ color: "rgba(26,26,26,0.04)" }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-card mb-6">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-brand-charcoal mb-3">
                {step.title}
              </h3>
              <p className="font-body text-brand-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA under steps */}
        <div className="text-center mt-12">
          <a href="#tool" className="btn-purple">
            Try It Now — It's Free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
