/**
 * Bundle Optimizer - Tree Shaking and Code Splitting Configuration
 * Reduces JavaScript bundle size through intelligent splitting and dead code elimination
 */

// Vite configuration for bundle optimization
// No need to import defineConfig if we're not using it

export const bundleOptimizationConfig = {
  build: {
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunk for third-party libraries
          vendor: [
            'react',
            'react-dom'
          ],
          
          // WCAG utilities - separate chunk for conditional loading
          wcag: [
            './src/utils/wcag-text-spacing-test.js',
            './src/utils/wcag-focus-not-obscured.js',
            './src/utils/wcag-content-hover-focus.js',
            './src/utils/wcag-focus-visible-enhancement.js'
          ],
          
          // Heavy test suite - separate chunk
          'wcag-tests': [
            './src/utils/wcag22-comprehensive-test.js'
          ],
          
          // Swiper - separate chunk for conditional loading
          swiper: [
            'swiper',
            'swiper/react'
          ],
          
          // Lazy loader - small initial chunk
          'lazy-loader': [
            './src/utils/lazy-loader.js'
          ]
        },
        
        // Optimize chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId 
            ? chunkInfo.facadeModuleId.split('/').pop().replace('.js', '') 
            : 'chunk';
          return `assets/js/${facadeModuleId}-[hash].js`;
        },
        
        // Optimize entry file names
        entryFileNames: 'assets/js/[name]-[hash].js',
        
        // Optimize asset file names
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
      }
    },
    
    // Tree shaking configuration
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false
    },
    
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    
    // Target modern browsers for smaller bundles
    target: 'es2020',
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Source maps for debugging (disable in production)
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Asset inlining threshold
    assetsInlineLimit: 4096
  },
  
  // Optimization for development
  optimizeDeps: {
    include: [
      'react',
      'react-dom'
    ],
    exclude: [
      './src/utils/wcag22-comprehensive-test.js', // Don't pre-bundle heavy test suite
      'swiper' // Load Swiper on demand
    ]
  }
};

/**
 * Dynamic import utilities for code splitting
 */
export class DynamicImportManager {
  constructor() {
    this.importCache = new Map();
  }

  /**
   * Cached dynamic import to avoid duplicate loads
   */
  async import(modulePath) {
    if (this.importCache.has(modulePath)) {
      return this.importCache.get(modulePath);
    }

    const importPromise = import(modulePath);
    this.importCache.set(modulePath, importPromise);
    
    try {
      return await importPromise;
    } catch (error) {
      // Remove failed import from cache
      this.importCache.delete(modulePath);
      throw error;
    }
  }

  /**
   * Preload module for better performance
   */
  preload(modulePath) {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = modulePath;
    document.head.appendChild(link);
  }

  /**
   * Clear import cache
   */
  clearCache() {
    this.importCache.clear();
  }
}

// Create global instance
if (typeof window !== 'undefined') {
  window.dynamicImportManager = new DynamicImportManager();
}

export default DynamicImportManager;
