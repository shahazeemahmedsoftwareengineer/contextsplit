import "./globals.css";

// ─── SEO Metadata ────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://www.contextsplit.io"),
  title: {
    default:  "ContextSplit – Never Lose AI Context Again",
    template: "%s | ContextSplit",
  },
  description:
    "Upload your AI conversation file, split it into smart chunks, and continue your session on any AI platform. Works with Claude, ChatGPT, Gemini, and more.",
  keywords: [
    "AI conversation splitter",
    "ChatGPT context limit",
    "Claude context window",
    "split AI conversation",
    "AI chat chunks",
    "AI context tool",
    "conversation file splitter",
  ],
  authors: [{ name: "ContextSplit Team" }],
  creator: "ContextSplit",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://www.contextsplit.io",
    title:       "ContextSplit – Never Lose AI Context Again",
    description: "Split large AI conversation files into smart chunks. Continue your AI session without losing context.",
    siteName:    "ContextSplit",
    images: [
      {
        url:    "/og-image.png",
        width:  1200,
        height: 630,
        alt:    "ContextSplit – AI Conversation Splitter",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "ContextSplit – Never Lose AI Context Again",
    description: "Split large AI conversation files into smart chunks for any AI platform.",
    images:      ["/og-image.png"],
  },
  robots: {
    index:            true,
    follow:           true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_ID", // Add your verification code
  },
};

// ─── Root Layout ─────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense – replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8277554524937991"
          crossOrigin="anonymous"
        />
        {/* Structured Data / JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type":    "WebApplication",
              name:       "ContextSplit",
              url:        "https://www.contextsplit.io",
              description:
                "Upload your AI conversation export, choose how many chunks to split it into, and continue your AI session seamlessly.",
              applicationCategory: "UtilitiesApplication",
              operatingSystem:     "All",
              offers: {
                "@type": "Offer",
                price:   "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
