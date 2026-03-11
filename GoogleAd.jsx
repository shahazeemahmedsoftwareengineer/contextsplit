'use client';

import React, { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    try {
      // This pushes the ad to the Google AdSense queue once the component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8277554524937991"
        data-ad-slot="7431035207"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default GoogleAd;