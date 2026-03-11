// ─── Testimonials ────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name:   "Priya S.",
    role:   "Software Engineer",
    avatar: "PS",
    color:  "from-purple-100 to-brand-lavender",
    stars:  5,
    quote:
      "I was in the middle of a massive debugging session with Claude when I hit the limit. ContextSplit saved me — I had my full context restored in under 3 minutes. Game changer.",
  },
  {
    name:   "Marcus T.",
    role:   "Content Writer",
    avatar: "MT",
    color:  "from-brand-peach to-orange-100",
    stars:  5,
    quote:
      "I use ChatGPT for long-form writing projects. Losing the thread mid-article was killing me. Now I just split the session and carry on. So simple, so effective.",
  },
  {
    name:   "Aiko W.",
    role:   "Product Manager",
    avatar: "AW",
    color:  "from-blue-50 to-sky-100",
    stars:  5,
    quote:
      "My team uses this for research sessions with Gemini. We export, split into 8 chunks, and the whole context is back in a new session. Love that nothing is stored on a server.",
  },
  {
    name:   "Rafi H.",
    role:   "Student & Researcher",
    avatar: "RH",
    color:  "from-green-50 to-emerald-100",
    stars:  5,
    quote:
      "Using AI for my thesis research means very long sessions. ContextSplit is the only tool I found that actually works for this. Clean, fast, and completely private.",
  },
  {
    name:   "Elena M.",
    role:   "UX Designer",
    avatar: "EM",
    color:  "from-pink-50 to-rose-100",
    stars:  5,
    quote:
      "The interface is absolutely beautiful — exactly what you'd expect from a tool that helps with AI. It's instant and works perfectly every time.",
  },
  {
    name:   "David K.",
    role:   "Startup Founder",
    avatar: "DK",
    color:  "from-amber-50 to-yellow-100",
    stars:  5,
    quote:
      "We use this to give AI context on our entire product spec across multiple chats. Invaluable for teams running long strategic planning sessions with AI.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#fbbf24">
          <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10.1l-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 bg-white" aria-labelledby="testimonials-heading">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">
            <span className="w-4 h-px bg-brand-purple inline-block" />
            Loved By Users
            <span className="w-4 h-px bg-brand-purple inline-block" />
          </p>
          <h2 id="testimonials-heading" className="section-title text-4xl md:text-5xl mb-4">
            Trusted by thousands of{" "}
            <span className="text-brand-purple">AI power users</span>
          </h2>
          <p className="font-body text-brand-muted text-lg max-w-xl mx-auto">
            From developers to students, writers to researchers — ContextSplit keeps their AI sessions flowing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className="glass-card p-6 flex flex-col gap-4 hover:shadow-glass transition-shadow duration-200"
            >
              <StarRating count={t.stars} />

              <blockquote className="font-body text-brand-charcoal/80 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-brand-charcoal/6">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-brand-charcoal/70 flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          {[
            { value: "50K+",   label: "Files Processed" },
            { value: "4.9★",   label: "Average Rating"  },
            { value: "100%",   label: "Private & Free"  },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-extrabold text-3xl text-brand-charcoal mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-brand-muted font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
