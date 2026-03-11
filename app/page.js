import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import HowItWorks      from "@/components/HowItWorks";
import ProblemSolution from "@/components/ProblemSolution";
import ChunkTool       from "@/components/ChunkTool";
import Testimonials    from "@/components/Testimonials";
import AboutUs         from "@/components/AboutUs";
import Footer          from "@/components/Footer";
import AdBanner        from "@/components/AdBanner";

/**
 * Home Page
 *
 * Page layout order:
 *   Navbar → Hero → HowItWorks → Ad → ProblemSolution → ChunkTool → Ad → Testimonials → AboutUs → Footer
 *
 * AdSense placements:
 *   • Between HowItWorks and ProblemSolution (high-scroll, above-the-fold on scroll)
 *   • Between ChunkTool and Testimonials     (post-conversion, engaged user)
 *
 * SEO:
 *   Metadata is defined in layout.js for site-wide tags.
 *   Each section uses semantic HTML (section, article, h2, etc.) for accessibility + crawlers.
 */
export default function HomePage() {
  return (
    <>
      {/* ── Navigation ───────────────────────────────────── */}
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <main id="main-content">
        <Hero />

        {/* ── How It Works ──────────────────────────────── */}
        <HowItWorks />

        {/* ── AdSense Unit 1 ────────────────────────────── */}
        <div className="section-container">
          <AdBanner slot="1111111111" format="auto" responsive />
        </div>

        {/* ── Problem / Solution ────────────────────────── */}
        <ProblemSolution />

        {/* ── Interactive Chunk Tool ─────────────────────── */}
        <ChunkTool />

        {/* ── AdSense Unit 2 ────────────────────────────── */}
        <div className="section-container">
          <AdBanner slot="2222222222" format="auto" responsive />
        </div>

        {/* ── Testimonials ──────────────────────────────── */}
        <Testimonials />

        {/* ── About Us ──────────────────────────────────── */}
        <AboutUs />
      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <Footer />
    </>
  );
}
