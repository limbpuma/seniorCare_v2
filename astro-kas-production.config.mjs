import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// KAS All-Inkl Production Configuration
// Optimized for https://kas.all-inkl.com/ deployment
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static", // Changed to static for KAS hosting
  
  // KAS hosting optimizations
  build: {
    // Inline small assets to reduce HTTP requests
    inlineStylesheets: 'auto',
    
    // Optimize for KAS hosting environment
    rollupOptions: {
      output: {
        // Optimized chunk splitting for KAS
        manualChunks: (id) => {
          // Core React chunk
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          
          // WCAG utilities - separate chunk
          if (id.includes('wcag-text-spacing-test') || 
              id.includes('wcag-focus-not-obscured') ||
              id.includes('wcag-content-hover-focus') ||
              id.includes('wcag-focus-visible-enhancement')) {
            return 'wcag-utils';
          }
          
          // Heavy test suite - separate chunk for conditional loading
          if (id.includes('wcag22-comprehensive-test')) {
            return 'wcag-tests';
          }
          
          // Swiper - separate chunk
          if (id.includes('swiper')) {
            return 'swiper-lib';
          }
          
          // FontAwesome - separate chunk
          if (id.includes('font-awesome') || id.includes('@fortawesome')) {
            return 'fontawesome';
          }
          
          // Other vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        
        // KAS-optimized file names
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
          if (/woff2?|ttf|eot/i.test(extType)) {
            return `assets/fonts/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        }
      },
      
      // Enhanced tree shaking for production
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    
    // Target ES2018 for wider browser support on KAS
    target: 'es2018'
  },
  
  // Vite optimization for KAS hosting
  vite: {
    build: {
      // CSS code splitting
      cssCodeSplit: true,
      
      // Aggressive minification for production
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
          drop_debugger: true,
          passes: 3, // More aggressive compression
          pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_methods: true,
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false, // Remove comments
        }
      },
      
      // Optimized chunk size for KAS
      chunkSizeWarningLimit: 800,
      
      // Enable source maps only for errors
      sourcemap: false,
      
      // Optimize CSS
      cssMinify: 'lightningcss',
      
      // Asset inlining threshold (4KB)
      assetsInlineLimit: 4096
    },
    
    // Optimization for dependencies
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: [
        // Don't pre-bundle heavy test suites
        './src/utils/wcag22-comprehensive-test.js'
      ]
    },
    
    // CSS optimization
    css: {
      devSourcemap: false, // Disable CSS source maps in production
      preprocessorOptions: {
        scss: {
          // Optimize SCSS compilation
          outputStyle: 'compressed'
        }
      }
    },
    
    // Server options for development (KAS compatibility)
    server: {
      port: 4321,
      host: '0.0.0.0', // Allow external connections for testing
    }
  },
  
  // KAS hosting specific configurations
  site: 'https://pflegedienst-integra.de', // Production site URL
  base: '/', // Root deployment
  
  // Experimental features for better performance
  experimental: {
    optimizeHoistedScript: true,
  },
  
  // Enhanced prefetch for KAS hosting
  prefetch: {
    prefetchAll: false, // Conservative prefetching
    defaultStrategy: 'hover'
  },
  
  // Security headers and SEO optimization
  compressHTML: true,
  
  // Asset optimization
  image: {
    // Optimize images for web
    formats: ['webp', 'avif', 'jpeg'],
    quality: 80,
    domains: ['pflegedienst-integra.de', 'w01f1dee.kasserver.com'],
  }
});