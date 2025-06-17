#!/bin/bash
# Deploy script for GitHub Pages compatibility

echo "🏗️  Building project..."
npm run build

echo "📄 Creating 404.html for SPA routing..."
cp ./dist/index.html ./dist/404.html

echo "✅ Build completed successfully!"
echo "🚀 Ready for GitHub Pages deployment"
echo ""
echo "Files generated:"
ls -la ./dist/

echo ""
echo "To test locally:"
echo "npm run preview"
echo ""
echo "Preview URL: http://localhost:4173/Portfolio-Milton-Armando/"
