"use client";

import { useState, useEffect } from "react";

// ─── Navbar ───────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  // Add shadow + backdrop on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "The Tool",     href: "#tool"         },
    { label: "About",        href: "#about"        },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-brand-charcoal/8 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="ContextSplit Home">
          <div className="w-8 h-8 rounded-xl bg-brand-charcoal flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="6" height="14" rx="1.5" fill="white" opacity="0.9" />
              <rect x="9" y="1" width="6" height="6"  rx="1.5" fill="white" opacity="0.6" />
              <rect x="9" y="9" width="6" height="6"  rx="1.5" fill="white" opacity="0.6" />
            </svg>
          </div>
          <span className="font-display font-bold text-brand-charcoal text-lg tracking-tight">
            Context<span className="text-brand-purple">Split</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-brand-muted hover:text-brand-charcoal transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#tool" className="btn-primary text-sm">
            Split My File
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-brand-gray transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
            ) : (
              <>
                <path d="M3 6h14M3 10h14M3 14h14" stroke="#1A1A1A" strokeWidth="1.75" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-brand-charcoal/8 bg-white/95 backdrop-blur-md">
          <nav className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-sm font-medium text-brand-muted hover:text-brand-charcoal rounded-lg hover:bg-brand-gray transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#tool"
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-3 justify-center"
            >
              Split My File →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
