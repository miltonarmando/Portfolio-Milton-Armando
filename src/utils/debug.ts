// Debug utilities for GitHub Pages deployment
export function debugAssetLoading() {
  console.log('=== Asset Loading Debug ===');
  console.log('BASE_URL:', import.meta.env.BASE_URL);
  console.log('MODE:', import.meta.env.MODE);
  console.log('Current pathname:', window.location.pathname);
  console.log('Current origin:', window.location.origin);
  console.log('Current href:', window.location.href);
  console.log('==========================');
}

// Call on app start in development
if (import.meta.env.MODE === 'development') {
  debugAssetLoading();
}
