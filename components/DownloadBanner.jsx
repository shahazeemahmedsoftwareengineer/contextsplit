import React, { useState, useEffect } from "react";

const DownloadBanner = () => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAndroid(/android/i.test(navigator.userAgent));
    }
  }, []);

  return (
    <div className={`glass-card bg-gradient-to-r from-brand-lavender/50 to-brand-peach/30 border-brand-purple/20 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 ${isAndroid ? "ring-2 ring-brand-purple/40 ring-offset-1" : ""}`}>
      <div className="flex items-center gap-3 text-left">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-charcoal">{isAndroid ? "Android App Recommended" : "Prefer a mobile app?"}</p>
          <p className="text-xs text-brand-muted">{isAndroid ? "Get the app for a faster, smoother experience on your device." : "Download our Android app for a better mobile experience."}</p>
        </div>
      </div>
      <a
        href="/app/contextsplit-v1.apk"
        download="ContextSplit.apk"
        className="btn-purple text-xs px-4 py-2 w-full sm:w-auto text-center"
      >
        Download APK
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
    </div>
  );
};

export default DownloadBanner;