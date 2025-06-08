// React Hook for dynamic text loading from PHP backend
import { useState, useEffect } from 'react';
import { api, type SiteTexts, type SEOData, type SiteConfig, APIError } from './api';

// Hook para cargar textos del sitio
export function useSiteTexts() {
  const [texts, setTexts] = useState<SiteTexts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await api.getTexts();
        setTexts(data);
      } catch (err) {
        console.error('Error loading site texts:', err);
        if (err instanceof APIError) {
          setError(`API Error ${err.status}: ${err.message}`);
        } else {
          setError('Failed to load site texts');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTexts();
  }, []);

  return { texts, loading, error };
}

// Hook para cargar SEO de una página específica
export function useSEO(page: string) {
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!page) return;

    const fetchSEO = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await api.getSEO(page);
        if (response.success && response.data) {
          setSeoData(response.data);
        } else {
          throw new Error(response.error || 'Failed to fetch SEO data');
        }
      } catch (err) {
        console.error('Error loading SEO data:', err);
        if (err instanceof APIError) {
          setError(`API Error ${err.status}: ${err.message}`);
        } else {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSEO();
  }, [page]);

  return { seoData, loading, error };
}

// Hook para cargar configuración del sitio
export function useSiteConfig() {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await api.getConfig();
        if (response.success && response.data) {
          setConfig(response.data);
        } else {
          throw new Error(response.error || 'Failed to fetch config');
        }
      } catch (err) {
        console.error('Error loading site config:', err);
        if (err instanceof APIError) {
          setError(`API Error ${err.status}: ${err.message}`);
        } else {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return { config, loading, error };
}

// Hook para health check del backend
export function useHealthCheck() {
  const [isHealthy, setIsHealthy] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const checkHealth = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.healthCheck();
      setIsHealthy(response.success);
    } catch (err) {
      console.error('Backend health check failed:', err);
      setIsHealthy(false);
      if (err instanceof APIError) {
        setError(`Backend Error ${err.status}: ${err.message}`);
      } else {
        setError('Backend health check failed');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
  }, []);

  return { isHealthy, loading, error, checkHealth };
}

// Cache personalizado para optimizar requests
class CacheManager {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private ttl: number;

  constructor(ttl = 3600000) { // 1 hora por defecto
    this.ttl = ttl;
  }

  get<T>(key: string): T | null {
    const cached = this.cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < this.ttl) {
      return cached.data;
    }

    // Eliminar entrada expirada
    if (cached) {
      this.cache.delete(key);
    }

    return null;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  clear(): void {
    this.cache.clear();
  }

  // Limpiar entradas expiradas
  cleanup(): void {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp >= this.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Instancia global de cache
export const cache = new CacheManager();

// Hook con cache integrado para textos del sitio
export function useCachedSiteTexts() {
  const [texts, setTexts] = useState<SiteTexts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Intentar obtener del cache primero
        const cached = cache.get<SiteTexts>('site-texts');
        if (cached) {
          setTexts(cached);
          setLoading(false);
          return;
        }
        
        // Si no está en cache, hacer request
        const data = await api.getTexts();
        cache.set('site-texts', data);
        setTexts(data);
      } catch (err) {
        console.error('Error loading cached site texts:', err);
        if (err instanceof APIError) {
          setError(`API Error ${err.status}: ${err.message}`);
        } else {
          setError('Failed to load site texts');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTexts();
  }, []);

  return { texts, loading, error };
}
