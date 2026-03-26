export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Good practice to prevent indexing of internal API routes
    },
    // This uses the same domain as your metadataBase in layout.js
    sitemap: 'https://www.contextsplit.io/sitemap.xml',
  }
}