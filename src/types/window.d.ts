/**
 * Window object extensions for Integra Senior Care
 * Type declarations for custom properties and methods
 */

declare global {
  interface Window {
    performanceMonitor?: PerformanceMonitor;
    accessibilityManager?: AccessibilityManager;
    landingPageNavigator?: LandingPageNavigator;
    lazyLoader?: LazyLoader;
    loadWCAGTests?: () => void;
    AutoValidationSystem?: new () => AutoValidationSystem;
    ProductionReadinessChecker?: new () => ProductionReadinessChecker;
    runSystemValidation?: () => void;
  }
}

// Performance Monitor class interface
interface PerformanceMonitor {
  metrics: {
    lcp: number | null;
    fid: number | null;
    cls: number | null;
    navigationTiming: any;
    accessibilityFeatures: {
      textSpacing: boolean;
      focusIndicators: boolean;
      highContrast: boolean;
    };
    errors: Array<{
      type: string;
      message: string;
      filename?: string;
      line?: number;
      timestamp: number;
    }>;
  };
  
  getMetrics(): any;
  generateReport(): any;
  reportMetric(name: string, value: number): void;
  reportAccessibilityUsage(feature: string, enabled: boolean): void;
  reportError(type: string, message: string): void;
}

// Accessibility Manager class interface
interface AccessibilityManager {
  state: {
    textSpacing: boolean;
    highContrast: boolean;
    focusIndicators: boolean;
  };
  
  toggleTextSpacing(): void;
  toggleHighContrast(): void;
  toggleFocusIndicators(): void;
  loadSavedPreferences(): void;
  savePreferences(): void;
  applyPreferences(): void;
}

// Landing Page Navigator interface
interface LandingPageNavigator {
  sections: Element[];
  navLinks: Element[];
  activeClass: string;
  observer: IntersectionObserver | null;
  isScrolling: boolean;
}

// Lazy Loader interface
interface LazyLoader {
  loadWCAGTestSuite(): void;
}

// Validation Result interface
interface ValidationResult {
  passed: boolean;
  details?: {
    message?: string;
    totalTested?: number;
    passedTests?: number;
    testApplied?: boolean;
    overflow?: boolean;
    contentLoss?: boolean;
    obscuredCount?: number;
    passRate?: number;
    [key: string]: any;
  };
  error?: string;
}

// Performance Report interface
interface PerformanceReport {
  overallScore: number;
  grade: string;
  scores: {
    lcp: number;
    fid: number;
    cls: number;
  };
  [key: string]: any;
}

// Auto Validation System interface
interface AutoValidationSystem {
  results: {
    wcag: {
      textSpacing: ValidationResult | null;
      focusNotObscured: ValidationResult | null;
      contentHoverFocus: ValidationResult | null;
      focusVisible: ValidationResult | null;
    };
    performance: {
      coreWebVitals: ValidationResult | null;
      accessibility: ValidationResult | null;
      navigation: ValidationResult | null;
    };
    errors: string[];
    warnings: string[];
    score: number;
  };
  
  runValidation(): Promise<void>;
  generateReport(): any;
}

// Production Readiness Checker interface
interface ProductionReadinessChecker {
  checks: Map<string, () => Promise<any> | any>;
  results: Map<string, any>;
  
  runAllChecks(): Promise<void>;
  updateCheckStatus(checkId: string, status: string, className?: string): void;
  generateReport(): any;
}

// System Validation interface
interface SystemValidation {
  runSystemValidation(): void;
}

// Performance Dashboard interface 
interface PerformanceDashboard {
  activityLog: string[];
  updateMetric(detail: any): void;
  updateAccessibilityStatus(detail: any): void;
  logError(detail: any): void;
  logActivity(message: string): void;
  updateElement(id: string, text: string): void;
  updateScoreColor(id: string, score: number): void;
  getScoreColor(score: number): string;
  scoreLCP(lcp: number): number;
  scoreFID(fid: number): number;
  scoreCLS(cls: number): number;
  getUnitForMetric(name: string): string;
}

export {};
