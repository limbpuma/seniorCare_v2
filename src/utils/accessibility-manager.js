/**
 * Enhanced WCAG 2.2 Accessibility Controls System
 * Provides a unified interface for all accessibility features
 * Implements WCAG 2.2 guidelines for better user experience and compliance
 */

class AccessibilityManager {
  constructor() {
    this.state = {
      textSpacing: false,
      highContrast: false,
      focusIndicators: false
    };
    
    this.init();
  }
  
  init() {
    // Initialize controls when DOM is loaded
    this.setupEventListeners();
    this.loadSavedPreferences();
    console.log('🌐 WCAG 2.2 Accessibility Manager initialized');
  }
  
  setupEventListeners() {
    document.addEventListener('astro:page-load', () => {
      const textSpacingButton = document.getElementById('toggleTextSpacing');
      const highContrastButton = document.getElementById('highContrastMode');
      const focusIndicatorsButton = document.getElementById('focusIndicators');
      
      if (textSpacingButton) {
        textSpacingButton.addEventListener('click', () => this.toggleTextSpacing());
      }
      
      if (highContrastButton) {
        highContrastButton.addEventListener('click', () => this.toggleHighContrast());
      }
      
      if (focusIndicatorsButton) {
        focusIndicatorsButton.addEventListener('click', () => this.toggleFocusIndicators());
      }
      
      // Apply saved preferences
      this.applyPreferences();
    });
  }
  
  loadSavedPreferences() {
    try {
      const savedPreferences = localStorage.getItem('wcag22-accessibility-preferences');
      if (savedPreferences) {
        this.state = JSON.parse(savedPreferences);
      }
    } catch (error) {
      console.error('Error loading accessibility preferences:', error);
    }
  }
  
  savePreferences() {
    try {
      localStorage.setItem('wcag22-accessibility-preferences', JSON.stringify(this.state));
    } catch (error) {
      console.error('Error saving accessibility preferences:', error);
    }
  }
  
  applyPreferences() {
    // Apply all saved preferences
    if (this.state.textSpacing) {
      this.enableTextSpacing();
    } else {
      this.disableTextSpacing();
    }
    
    if (this.state.highContrast) {
      this.enableHighContrast();
    } else {
      this.disableHighContrast();
    }
    
    if (this.state.focusIndicators) {
      this.enableFocusIndicators();
    } else {
      this.disableFocusIndicators();
    }
    
    // Update button visual state
    this.updateButtonStates();
  }
  
  updateButtonStates() {
    const textSpacingButton = document.getElementById('toggleTextSpacing');
    const highContrastButton = document.getElementById('highContrastMode');
    const focusIndicatorsButton = document.getElementById('focusIndicators');
    
    if (textSpacingButton) {
      textSpacingButton.classList.toggle('active', this.state.textSpacing);
      textSpacingButton.setAttribute('aria-pressed', this.state.textSpacing.toString());
    }
    
    if (highContrastButton) {
      highContrastButton.classList.toggle('active', this.state.highContrast);
      highContrastButton.setAttribute('aria-pressed', this.state.highContrast.toString());
    }
    
    if (focusIndicatorsButton) {
      focusIndicatorsButton.classList.toggle('active', this.state.focusIndicators);
      focusIndicatorsButton.setAttribute('aria-pressed', this.state.focusIndicators.toString());
    }
  }
  
  toggleTextSpacing() {
    this.state.textSpacing = !this.state.textSpacing;
    
    if (this.state.textSpacing) {
      this.enableTextSpacing();
    } else {
      this.disableTextSpacing();
    }
    
    this.savePreferences();
    this.updateButtonStates();
  }
  
  enableTextSpacing() {
    document.documentElement.classList.add('wcag-text-spacing');
    
    const textSpacingStylesheet = document.getElementById('wcag-text-spacing');
    if (textSpacingStylesheet) {
      textSpacingStylesheet.removeAttribute('disabled');
    }
  }
  
  disableTextSpacing() {
    document.documentElement.classList.remove('wcag-text-spacing');
    
    const textSpacingStylesheet = document.getElementById('wcag-text-spacing');
    if (textSpacingStylesheet) {
      textSpacingStylesheet.setAttribute('disabled', 'true');
    }
  }
  
  toggleHighContrast() {
    this.state.highContrast = !this.state.highContrast;
    
    if (this.state.highContrast) {
      this.enableHighContrast();
    } else {
      this.disableHighContrast();
    }
    
    this.savePreferences();
    this.updateButtonStates();
  }
  
  enableHighContrast() {
    document.documentElement.classList.add('high-contrast');
    
    // Add dynamic high contrast styles
    if (!document.getElementById('high-contrast-styles')) {
      const style = document.createElement('style');
      style.id = 'high-contrast-styles';
      style.textContent = `
        .high-contrast body {
          background-color: black !important;
          color: white !important;
        }
        .high-contrast h1, .high-contrast h2, .high-contrast h3, 
        .high-contrast h4, .high-contrast h5, .high-contrast h6 {
          color: yellow !important;
        }
        .high-contrast a {
          color: cyan !important;
        }
        .high-contrast button, .high-contrast .btn {
          background-color: white !important;
          color: black !important;
          border: 2px solid yellow !important;
        }
        .high-contrast img {
          filter: brightness(1.2) contrast(1.2);
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  disableHighContrast() {
    document.documentElement.classList.remove('high-contrast');
  }
  
  toggleFocusIndicators() {
    this.state.focusIndicators = !this.state.focusIndicators;
    
    if (this.state.focusIndicators) {
      this.enableFocusIndicators();
    } else {
      this.disableFocusIndicators();
    }
    
    this.savePreferences();
    this.updateButtonStates();
  }
  
  enableFocusIndicators() {
    document.documentElement.classList.add('enhanced-focus');
    
    const focusStylesheet = document.getElementById('wcag-focus-visible-enhancement');
    if (focusStylesheet) {
      focusStylesheet.removeAttribute('disabled');
    }
  }
  
  disableFocusIndicators() {
    document.documentElement.classList.remove('enhanced-focus');
    
    const focusStylesheet = document.getElementById('wcag-focus-visible-enhancement');
    if (focusStylesheet) {
      focusStylesheet.setAttribute('disabled', 'true');
    }
  }
}

// Initialize the accessibility manager
document.addEventListener('DOMContentLoaded', () => {
  window.accessibilityManager = new AccessibilityManager();
});

// Make sure it's available even if the DOM is already loaded
if (document.readyState !== 'loading') {
  window.accessibilityManager = new AccessibilityManager();
}
