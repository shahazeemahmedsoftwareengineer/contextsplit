import React from 'react';

const DownloadBanner = () => {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f7ff',
      borderRadius: '8px',
      border: '1px solid #0070f3',
      textAlign: 'center',
      marginBottom: '20px'
    }}>
      <p>Working with large files? Our Android app is faster and more stable.</p>
      <a 
        href="/app/contextsplit-v1.apk" 
        download="ContextSplit.apk"
        style={{ color: '#0070f3', fontWeight: 'bold', textDecoration: 'underline' }}
      >
        Download ContextSplit for Android (.apk)
      </a>
    </div>
  );
};

export default DownloadBanner;