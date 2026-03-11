"use client";

import { useEffect, useRef } from "react";

/**
 * AdBanner – Google AdSense display unit.
 *
 * Usage:
 *   <AdBanner slot="1234567890" format="auto" responsive />
 *
 * IMPORTANT:
 *   Replace "ca-pub-XXXXXXXXXXXXXXXX" in layout.js with your real publisher ID.
 *   Replace slot values with your real ad unit IDs from AdSense.
 *
 * Google AdSense Policy:
 *   This component renders in a clearly labeled ad region.
 *   Do not place more than 3 display ad units per page.
 */
export default function AdBanner({
  slot        = "1234567890",
  format      = "auto",
  responsive  = true,
  className   = "",
}) {
  const adRef   = useRef(null);
  const pushed  = useRef(false);

  useEffect(() => {
    // Push only once per mount
    if (pushed.current) return;
    pushed.current = true;
    try {
      // adsbygoogle is injected by the global script in layout.js
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // silently ignore in dev / when AdSense is not loaded
    }
  }, []);

  return (
    <div
      className={`my-6 text-center ${className}`}
      aria-label="Advertisement"
    >
      <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">
        Advertisement
      </p>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  // ← replace with your publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}
