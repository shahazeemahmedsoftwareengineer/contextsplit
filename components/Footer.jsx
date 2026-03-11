// ─── Footer ───────────────────────────────────────────────────
const FOOTER_LINKS = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "The Tool",     href: "#tool"         },
    { label: "About Us",     href: "#about"        },
  ],
  Legal: [
    { label: "Privacy Policy",    href: "/privacy"  },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-charcoal/8 bg-white" aria-label="Site footer">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="md:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 mb-4" aria-label="ContextSplit home">
              <div className="w-8 h-8 rounded-xl bg-brand-charcoal flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="6" height="14" rx="1.5" fill="white" opacity="0.9" />
                  <rect x="9" y="1" width="6" height="6"  rx="1.5" fill="white" opacity="0.6" />
                  <rect x="9" y="9" width="6" height="6"  rx="1.5" fill="white" opacity="0.6" />
                </svg>
              </div>
              <span className="font-display font-bold text-brand-charcoal text-lg">
                Context<span className="text-brand-purple">Split</span>
              </span>
            </a>

            <p className="text-sm text-brand-muted leading-relaxed max-w-xs mb-5">
              The free, private tool for splitting AI conversation files. We never collect data; everything runs locally in your browser.
            </p>

            {/* Social links (placeholder) */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Twitter",
                  href:  "https://twitter.com",
                  icon:  (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M12.6 1h2.4L9.9 6.9 15.6 15h-4.1l-3.6-4.7-4.1 4.7H1.3L6.6 8.6.4 1h4.2l3.3 4.3L12.6 1zm-.8 12.6h1.3L4.3 2.3H2.9l8.9 11.3z"/>
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href:  "https://github.com",
                  icon:  (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 .3C3.6.3 0 3.9 0 8.3c0 3.5 2.3 6.5 5.5 7.5.4.1.5-.2.5-.4v-1.3c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.8 2.3.6.1-.5.3-.8.5-1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.8-3.7 4 .3.3.5.8.5 1.6v2.3c0 .2.1.5.5.4C13.7 14.8 16 11.8 16 8.3 16 3.9 12.4.3 8 .3z"/>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl border border-brand-charcoal/12 flex items-center justify-center text-brand-muted hover:text-brand-purple hover:border-brand-purple/30 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="font-display font-bold text-brand-charcoal text-sm mb-4">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-muted hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-charcoal/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-brand-muted">
            © {year} ContextSplit. All rights reserved. This site displays ads via Google AdSense.
          </p>
          <p className="text-xs text-brand-muted">
            Built with ❤️ for AI power users worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
