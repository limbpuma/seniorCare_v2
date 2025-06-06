import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  
  // Performance optimizations
  build: {
    // Inline small assets to reduce HTTP requests
    inlineStylesheets: 'auto',
    
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunk for React
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          
          // WCAG utilities - separate chunk for conditional loading
          if (id.includes('wcag-text-spacing-test') || 
              id.includes('wcag-focus-not-obscured') ||
              id.includes('wcag-content-hover-focus') ||
              id.includes('wcag-focus-visible-enhancement')) {
            return 'wcag-utils';
          }
          
          // Heavy test suite - separate chunk
          if (id.includes('wcag22-comprehensive-test')) {
            return 'wcag-tests';
          }
          
          // Swiper - separate chunk for conditional loading
          if (id.includes('swiper')) {
            return 'swiper-lib';
          }
          
          // FontAwesome - separate chunk
          if (id.includes('font-awesome') || id.includes('@fortawesome')) {
            return 'fontawesome';
          }
          
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/css/i.test(extType)) {
            return `assets/css/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        }
      },
      
      // Tree shaking configuration
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false
      }
    },
    
    // Target more modern browsers for smaller bundles
    target: 'es2020'
  },
  
  // Vite optimization
  vite: {
    build: {
      // CSS code splitting
      cssCodeSplit: true,
      
      // Minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true,
          passes: 2
        }
      },
      
      // Chunk size warnings
      chunkSizeWarningLimit: 1000
    },
    
    // Optimization for dependencies
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: [
        // Don't pre-bundle heavy WCAG test suite
        './src/utils/wcag22-comprehensive-test.js'
      ]
    },
    
    // CSS optimization
    css: {
      devSourcemap: process.env.NODE_ENV === 'development'
    }
  }
});
