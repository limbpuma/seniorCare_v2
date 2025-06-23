// API Configuration for PHP Backend Integration
// Based on FRONTEND_INTEGRATION.md documentation

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface APIResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: string | string[];
}

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
}

export interface SiteTexts {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  header: {
    phone: string;
    email: string;
    cta_button: string;
  };
  home: {
    hero_title: string;
    hero_subtitle: string;
    hero_cta: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form_title: string;
    submit_button: string;
  };
}

export interface SiteConfig {
  site_name: string;
  contact_email: string;
  contact_phone: string;
  address: string;
  business_hours: string;
  social_facebook: string;
  social_instagram: string;
  frontend_url: string;
}

class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}

class SeniorCareAPI {
  private baseUrl: string;
  private timeout: number;
  constructor(baseUrl = 'http://localhost:8000/api', timeout = 10000) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          ...options.headers
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new APIError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          await response.text()
        );
      }

      const data = await response.json();
      return data;

    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error && error.name === 'AbortError') {
        throw new APIError('Request timeout', 408, null);
      }

      throw error;
    }
  }

  // Get all site texts
  async getTexts(): Promise<SiteTexts> {
    // Note: texts.php returns direct object, not wrapped in APIResponse
    return this.request<SiteTexts>('/texts.php');
  }
  // Submit contact form using the existing PHP email backend
  async submitContact(data: ContactFormData): Promise<APIResponse> {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone || '');
    formData.append('subject', data.subject || 'Allgemeine Anfrage');
    formData.append('message', data.message);

    try {
      const response = await fetch('http://localhost:8080/send-email.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        return { success: true, message: 'Nachricht erfolgreich gesendet.' };
      } else {
        return { 
          success: false, 
          error: result.error || 'Unbekannter Fehler beim Senden der Nachricht.' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Verbindungsfehler. Bitte versuchen Sie es später erneut.' 
      };
    }
  }

  // Get SEO data for specific page
  async getSEO(page: string): Promise<APIResponse<SEOData>> {
    return this.request<APIResponse<SEOData>>(`/seo.php?page=${page}`);
  }

  // Get site configuration
  async getConfig(): Promise<APIResponse<SiteConfig>> {
    return this.request<APIResponse<SiteConfig>>('/config.php');
  }

  // Health check
  async healthCheck(): Promise<APIResponse> {
    return this.request<APIResponse>('/health.php');
  }
}

// Export singleton instance
export const api = new SeniorCareAPI();

// Export error class for error handling
export { APIError };
