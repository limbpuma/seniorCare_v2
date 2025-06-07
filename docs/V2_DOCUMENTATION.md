# Pflegedienst Integra Gerling - Documentación Completa V2

## Introducción

Este documento contiene toda la información relevante sobre la versión V2 del sitio web de Pflegedienst Integra Gerling, que implementa un enfoque de landing page con navegación por anclas. Esta documentación reemplaza a todos los documentos anteriores y proporciona una visión completa del proyecto.

## Historial y Evolución

El proyecto ha evolucionado desde un enfoque multi-página tradicional a una landing page integrada, con el objetivo de mejorar la experiencia de usuario y simplificar el mantenimiento. Esta transformación se realizó en el commit 33a074052802bb247828d81003c67adcb4b51b13 del repositorio original.

## Características Principales

### Navegación por Anclas

- Todas las secciones principales integradas en una única página (index.astro)
- Navegación fluida mediante enlaces de ancla (#about, #services, etc.)
- Páginas legales mantenidas como páginas separadas
- Sistema de navegación híbrido implementado en `src/utils/landing-page-navigator.ts`

### Estructura de Componentes

- Componentes modulares para cada sección principal
- Cabecera y pie de página consistentes en todas las vistas
- Componentes reutilizables en `src/components/common`
- Diseño responsive para todos los dispositivos

### Cumplimiento de Accesibilidad (WCAG 2.2 y BITV 2.0)

- Contraste de color adecuado en toda la interfaz
- Estructura semántica HTML correcta
- Navegación por teclado completamente funcional
- Alternativas textuales para todo el contenido no textual
- Subtítulos para contenido multimedia
- Formulario de contacto totalmente accesible

### Optimización SEO

- Implementación de Schema.org para datos estructurados
- Meta tags optimizados para motores de búsqueda
- Sitemap.xml y robots.txt configurados correctamente
- Enfoque en palabras clave relevantes para servicios de enfermería en Dortmund
- Microdata para mejora de snippets en resultados de búsqueda

### Rendimiento

- Optimización de imágenes (formatos WebP/AVIF)
- Carga diferida para recursos no críticos
- Minificación de CSS y JavaScript
- Precarga inteligente de recursos clave
- Optimización de fuentes web

## Flujo de Trabajo de Desarrollo

### Estructura de Ramas

- **`main`**: Versión estable y productiva de la landing page
- **`dev`**: Rama de desarrollo para pruebas de nuevas características
- **`feature/*`**: Ramas temporales para desarrollo de funcionalidades específicas

### Proceso de Contribución

1. Crear una rama `feature/*` desde `dev`
2. Desarrollar y probar la nueva funcionalidad
3. Solicitar merge a `dev` mediante PR
4. Una vez probado en `dev`, fusionar a `main`

## Pruebas y Validación

### Checklist de Accesibilidad

- ✅ Navegación por teclado funcional
- ✅ Lectores de pantalla pueden acceder a todo el contenido
- ✅ Contraste de color adecuado (ratio mínimo 4.5:1)
- ✅ Textos alternativos para imágenes
- ✅ Subtítulos para videos
- ✅ Formularios con etiquetas explícitas

### Checklist de Funcionalidad

- ✅ Navegación por anclas funciona correctamente
- ✅ Formulario de contacto valida y envía datos
- ✅ Enlaces a páginas legales funcionan
- ✅ Diseño responsive en todos los dispositivos
- ✅ Botones CTA funcionan correctamente

### Validación Técnica

- ✅ HTML válido según W3C
- ✅ CSS válido según W3C
- ✅ Sin errores de JavaScript en consola
- ✅ Tiempo de carga < 3 segundos en 3G
- ✅ Puntuación PageSpeed Insights > 90

## Estructura de Archivos Clave

```
/
├── public/                  # Recursos estáticos
│   ├── assets/              # Imágenes, videos, etc.
│   ├── robots.txt           # Configuración para crawlers
│   └── sitemap.xml          # Mapa del sitio para SEO
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/          # Componentes compartidos
│   │   └── home/            # Componentes específicos de secciones
│   ├── layouts/
│   │   └── Layout.astro     # Plantilla principal
│   ├── pages/
│   │   ├── index.astro      # Página principal (landing)
│   │   └── legal.astro      # Páginas legales
│   ├── utils/
│   │   ├── landing-page-navigator.ts  # Gestión de navegación
│   │   └── texts.json       # Textos del sitio
│   └── navigation.js        # Configuración de navegación
└── package.json             # Dependencias y scripts
```

## Guía de Mantenimiento

### Actualización de Contenido

Para actualizar textos del sitio:
1. Editar `src/utils/texts.json`
2. Para imágenes, colocar archivos optimizados en `public/assets/img/`
3. Para videos, colocar archivos en `public/assets/video/`

### Modificación de Componentes

1. Los componentes están en `src/components/`
2. Seguir la estructura de componentes existente
3. Mantener accesibilidad en cada modificación

### Consideraciones de Accesibilidad

- Mantener todos los atributos ARIA en componentes
- No eliminar estructuras semánticas
- Preservar manejo de foco en elementos interactivos
- Asegurar que todo contenido nuevo cumple WCAG 2.2 nivel AA

## Conclusión

Esta versión V2 representa una evolución significativa en términos de experiencia de usuario, mantenibilidad y rendimiento. Al consolidar las secciones en una única landing page, hemos logrado una experiencia más fluida manteniendo la accesibilidad y optimización SEO.

---

Última actualización: 7 de junio de 2025
