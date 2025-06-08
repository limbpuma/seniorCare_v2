/**
 * Accessibility Manager
 * 
 * Este módulo gestiona las características de accesibilidad para Pflegedienst Integra Gerling.
 * Proporciona controles para mejorar la accesibilidad del sitio web, incluyendo:
 * 
 * 1. Espaciado de texto: Mejora la legibilidad para personas con dificultades de lectura
 * 2. Modo de alto contraste: Facilita la visualización para personas con baja visión
 * 3. Indicadores de foco mejorados: Ayuda a la navegación por teclado
 * 
 * Las preferencias se guardan en localStorage para persistir entre sesiones.
 */

class AccessibilityManager {
  constructor() {
    this.state = {
      textSpacing: false,
      highContrast: false,
      focusIndicators: false
    };

    // Inicializar después de que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
    
    // Reinicializar en transiciones de página de Astro
    document.addEventListener('astro:page-load', () => this.init());
  }

  /**
   * Inicializa el gestor de accesibilidad
   */
  init() {
    // Cargar preferencias guardadas
    this.loadSavedPreferences();
    
    // Aplicar preferencias
    this.applyPreferences();
    
    // Configurar controladores de eventos
    this.setupEventListeners();
    
    // Mejorar accesibilidad del sitio
    this.addSkipLink();
    this.enhanceMainContent();
    this.enhanceNavigation();
    this.addScreenReaderAnnouncements();
    this.enhanceForms();
    this.enhanceInteractiveElements();
    this.setupCustomKeyboardEvents();
    
    console.log('♿ Accessibility Manager initialized with enhanced features');
  }
  /**
   * Configura los controladores de eventos para los botones de accesibilidad
   */
  setupEventListeners() {
    const textSpacingBtn = document.getElementById('toggleTextSpacing');
    const highContrastBtn = document.getElementById('highContrastMode');
    const focusIndicatorsBtn = document.getElementById('focusIndicators');
    
    if (textSpacingBtn) {
      textSpacingBtn.addEventListener('click', () => this.toggleTextSpacing());
      textSpacingBtn.setAttribute('aria-pressed', this.state.textSpacing.toString());
      if (this.state.textSpacing) {
        textSpacingBtn.classList.add('active');
      }
    }
    
    if (highContrastBtn) {
      highContrastBtn.addEventListener('click', () => this.toggleHighContrast());
      highContrastBtn.setAttribute('aria-pressed', this.state.highContrast.toString());
      if (this.state.highContrast) {
        highContrastBtn.classList.add('active');
      }
    }
    
    if (focusIndicatorsBtn) {
      focusIndicatorsBtn.addEventListener('click', () => this.toggleFocusIndicators());
      focusIndicatorsBtn.setAttribute('aria-pressed', this.state.focusIndicators.toString());
      if (this.state.focusIndicators) {
        focusIndicatorsBtn.classList.add('active');
      }
    }
    
    // Agregar teclas de acceso rápido para las funciones de accesibilidad
    document.addEventListener('keydown', (event) => {
      // Solo activa las teclas de acceso rápido si Alt está presionado
      if (event.altKey) {
        switch(event.key) {
          case 't': // Alt+T para espaciado de texto
            event.preventDefault();
            this.toggleTextSpacing();
            break;
          case 'c': // Alt+C para alto contraste
            event.preventDefault();
            this.toggleHighContrast();
            break;
          case 'f': // Alt+F para indicadores de foco
            event.preventDefault();
            this.toggleFocusIndicators();
            break;
          case 'a': // Alt+A para abrir la página de accesibilidad
            event.preventDefault();
            window.location.href = '/accessibility';
            break;
        }
      }
    });
  }

  /**
   * Alterna el espaciado de texto
   */
  toggleTextSpacing() {
    this.state.textSpacing = !this.state.textSpacing;
    this.applyTextSpacing();
    this.savePreferences();
    
    const button = document.getElementById('toggleTextSpacing');
    if (button) {
      button.setAttribute('aria-pressed', this.state.textSpacing.toString());
      button.classList.toggle('active', this.state.textSpacing);
    }
    
    // Reporte para análisis de uso
    if (window.performanceMonitor) {
      window.performanceMonitor.reportAccessibilityUsage('textSpacing', this.state.textSpacing);
    }
  }

  /**
   * Alterna el modo de alto contraste
   */
  toggleHighContrast() {
    this.state.highContrast = !this.state.highContrast;
    this.applyHighContrast();
    this.savePreferences();
    
    const button = document.getElementById('highContrastMode');
    if (button) {
      button.setAttribute('aria-pressed', this.state.highContrast.toString());
      button.classList.toggle('active', this.state.highContrast);
    }
    
    // Reporte para análisis de uso
    if (window.performanceMonitor) {
      window.performanceMonitor.reportAccessibilityUsage('highContrast', this.state.highContrast);
    }
  }

  /**
   * Alterna los indicadores de foco mejorados
   */
  toggleFocusIndicators() {
    this.state.focusIndicators = !this.state.focusIndicators;
    this.applyFocusIndicators();
    this.savePreferences();
    
    const button = document.getElementById('focusIndicators');
    if (button) {
      button.setAttribute('aria-pressed', this.state.focusIndicators.toString());
      button.classList.toggle('active', this.state.focusIndicators);
    }
    
    // Reporte para análisis de uso
    if (window.performanceMonitor) {
      window.performanceMonitor.reportAccessibilityUsage('focusIndicators', this.state.focusIndicators);
    }
  }

  /**
   * Aplica el espaciado de texto
   */
  applyTextSpacing() {
    if (this.state.textSpacing) {
      document.documentElement.classList.add('improved-text-spacing');
      
      // Aplicar estilos directamente para garantizar la implementación
      document.documentElement.style.setProperty('word-spacing', '0.16em');
      document.documentElement.style.setProperty('line-height', '1.5');
      document.documentElement.style.setProperty('letter-spacing', '0.12em');
      document.documentElement.style.setProperty('--paragraph-spacing', '2em');
    } else {
      document.documentElement.classList.remove('improved-text-spacing');
      
      // Restaurar estilos predeterminados
      document.documentElement.style.removeProperty('word-spacing');
      document.documentElement.style.removeProperty('line-height');
      document.documentElement.style.removeProperty('letter-spacing');
      document.documentElement.style.removeProperty('--paragraph-spacing');
    }
  }

  /**
   * Aplica el modo de alto contraste
   */
  applyHighContrast() {
    if (this.state.highContrast) {
      document.documentElement.classList.add('high-contrast');
      
      // Aplicar estilos de alto contraste
      document.documentElement.style.setProperty('--primary', '#0066CC');
      document.documentElement.style.setProperty('--background', '#000000');
      document.documentElement.style.setProperty('--text', '#FFFFFF');
      document.documentElement.style.setProperty('--link', '#FFFF00');
      document.documentElement.style.setProperty('--accent', '#FF9900');
    } else {
      document.documentElement.classList.remove('high-contrast');
      
      // Restaurar colores predeterminados
      document.documentElement.style.removeProperty('--primary');
      document.documentElement.style.removeProperty('--background');
      document.documentElement.style.removeProperty('--text');
      document.documentElement.style.removeProperty('--link');
      document.documentElement.style.removeProperty('--accent');
    }
  }

  /**
   * Aplica los indicadores de foco mejorados
   */
  applyFocusIndicators() {
    if (this.state.focusIndicators) {
      document.documentElement.classList.add('enhanced-focus');
      
      // Aplicar estilos de foco mejorados
      const style = document.createElement('style');
      style.id = 'enhanced-focus-style';
      style.textContent = `
        :focus {
          outline: 3px solid #FF9900 !important;
          outline-offset: 3px !important;
          box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.4) !important;
          transition: outline-offset 0.1s ease !important;
        }
        
        button:focus, a:focus, input:focus, select:focus, textarea:focus {
          outline: 3px solid #FF9900 !important;
          outline-offset: 3px !important;
          box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.4) !important;
        }
      `;
      
      if (!document.getElementById('enhanced-focus-style')) {
        document.head.appendChild(style);
      }
    } else {
      document.documentElement.classList.remove('enhanced-focus');
      
      // Eliminar estilos de foco mejorados
      const style = document.getElementById('enhanced-focus-style');
      if (style) {
        style.remove();
      }
    }
  }

  /**
   * Carga las preferencias guardadas de localStorage
   */
  loadSavedPreferences() {
    try {
      const savedPreferences = localStorage.getItem('accessibilityPreferences');
      if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences);
        this.state = { ...this.state, ...preferences };
      }
    } catch (error) {
      console.error('Error loading accessibility preferences:', error);
    }
  }

  /**
   * Guarda las preferencias en localStorage
   */
  savePreferences() {
    try {
      localStorage.setItem('accessibilityPreferences', JSON.stringify(this.state));
    } catch (error) {
      console.error('Error saving accessibility preferences:', error);
    }
  }

  /**
   * Aplica todas las preferencias
   */
  applyPreferences() {
    this.applyTextSpacing();
    this.applyHighContrast();
    this.applyFocusIndicators();
    this.updateButtonStates();
  }

  /**
   * Actualiza los estados visuales de los botones
   */
  updateButtonStates() {
    const buttons = {
      'toggleTextSpacing': this.state.textSpacing,
      'highContrastMode': this.state.highContrast,
      'focusIndicators': this.state.focusIndicators
    };

    Object.entries(buttons).forEach(([id, isActive]) => {
      const button = document.getElementById(id);
      if (button) {
        button.setAttribute('aria-pressed', isActive.toString());
        button.classList.toggle('active', isActive);
      }
    });
  }

  /**
   * Crea y añade el enlace "Saltar al contenido principal"
   */
  addSkipLink() {
    if (document.getElementById('skip-link')) return;

    const skipLink = document.createElement('a');
    skipLink.id = 'skip-link';
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.setAttribute('aria-label', 'Saltar navegación y ir al contenido principal');
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Añade atributos de accesibilidad al contenido principal
   */
  enhanceMainContent() {
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
      main.setAttribute('role', 'main');
      main.setAttribute('aria-label', 'Contenido principal');
    }
  }

  /**
   * Mejora la navegación con roles ARIA
   */
  enhanceNavigation() {
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
      nav.setAttribute('aria-label', 'Navegación principal');
    }

    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }

    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }

  /**
   * Añade indicadores de estado para screen readers
   */
  addScreenReaderAnnouncements() {
    if (document.getElementById('accessibility-announcements')) return;

    const announcements = document.createElement('div');
    announcements.id = 'accessibility-announcements';
    announcements.className = 'sr-only';
    announcements.setAttribute('aria-live', 'polite');
    announcements.setAttribute('aria-atomic', 'true');
    
    document.body.appendChild(announcements);
  }

  /**
   * Anuncia cambios para screen readers
   */
  announce(message) {
    const announcements = document.getElementById('accessibility-announcements');
    if (announcements) {
      announcements.textContent = message;
      
      // Limpiar el mensaje después de un tiempo
      setTimeout(() => {
        announcements.textContent = '';
      }, 3000);
    }
  }

  /**
   * Resetea todas las preferencias de accesibilidad
   */
  resetAllPreferences() {
    this.state = {
      textSpacing: false,
      highContrast: false,
      focusIndicators: false
    };
    
    this.applyPreferences();
    this.savePreferences();
    this.announce('Se han restablecido todas las preferencias de accesibilidad');
  }

  /**
   * Obtiene el estado actual de accesibilidad
   */
  getAccessibilityState() {
    return { ...this.state };
  }

  /**
   * Verifica si alguna característica de accesibilidad está activa
   */
  hasActiveFeatures() {
    return Object.values(this.state).some(value => value);
  }

  /**
   * Mejora la semántica de formularios
   */
  enhanceForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      // Añadir roles si no existen
      if (!form.getAttribute('role')) {
        form.setAttribute('role', 'form');
      }

      // Mejorar campos de entrada
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
          const label = form.querySelector(`label[for="${input.id}"]`);
          if (label) {
            input.setAttribute('aria-labelledby', label.id || `label-${input.id}`);
            if (!label.id) {
              label.id = `label-${input.id}`;
            }
          }
        }
      });
    });
  }

  /**
   * Mejora los botones y enlaces
   */
  enhanceInteractiveElements() {
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
    buttons.forEach(button => {
      if (!button.textContent.trim() && !button.getAttribute('aria-label')) {
        const icon = button.querySelector('i, svg, span.icon');
        if (icon) {
          button.setAttribute('aria-label', 'Botón');
        }
      }
    });

    const links = document.querySelectorAll('a:not([aria-label]):not([aria-labelledby])');
    links.forEach(link => {
      if (!link.textContent.trim() && !link.getAttribute('aria-label')) {
        const icon = link.querySelector('i, svg, span.icon');
        if (icon) {
          link.setAttribute('aria-label', 'Enlace');
        }
      }
    });
  }
  /**
   * Configura eventos de teclado personalizados
   */
  setupCustomKeyboardEvents() {
    document.addEventListener('keydown', (event) => {
      // Escape para abrir/cerrar panel de accesibilidad
      if (event.key === 'Escape' && event.ctrlKey) {
        const panel = document.querySelector('.accessibility-controls');
        if (panel) {
          panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
      }

      // F1 para ayuda de accesibilidad
      if (event.key === 'F1' && event.altKey) {
        event.preventDefault();
        window.open('/accessibility', '_blank');
      }
    });
  }

  /**
   * Obtiene el estado actual de accesibilidad
   */
  getAccessibilityState() {
    return { ...this.state };
  }

  /**
   * Verifica si alguna característica de accesibilidad está activa
   */
  hasActiveFeatures() {
    return Object.values(this.state).some(value => value);
  }
}

// Crear instancia global
window.accessibilityManager = new AccessibilityManager();

export default AccessibilityManager;
