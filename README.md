# Pflegedienst Integra Gerling - Landing Page Version (V2)

## Acerca de este Repositorio

Este repositorio contiene la versión landing page del sitio web de Pflegedienst Integra Gerling, que utiliza un enfoque de navegación por anclas para una experiencia de usuario más fluida. Esta es la versión V2 del proyecto, optimizada y estabilizada.

### Características de la Versión Landing Page

- Todas las secciones principales integradas en una única página (index)
- Navegación a través de enlaces de ancla (#about, #services, etc.)
- Las páginas legales (legal, privacypolicy, termsconditions) se mantienen como páginas separadas
- Experiencia de usuario mejorada sin recargas de página
- Diseño cohesivo y fluido

## Cómo Contribuir

Para contribuir a este proyecto:

```bash
# Clonar el repositorio
git clone https://github.com/limbpuma/seniorCare_v2.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Estructura de Ramas

- **`main`**: Rama principal con la versión estable de la landing page
- **`dev`**: Rama de desarrollo para nuevas características
- **`feature/*`**: Ramas para características específicas

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── img/ (imágenes optimizadas)
│       └── video/ (contenido multimedia)
├── src/
│   ├── components/
│   │   ├── common/ (componentes compartidos)
│   │   ├── home/ (componentes de la página principal)
│   │   └── ... (componentes por sección)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro (landing page principal)
│   │   └── ... (páginas legales y error 404)
│   └── utils/ (utilidades y herramientas)
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa local antes de desplegar            |

## Tecnologías Utilizadas

- Astro
- TypeScript
- Tailwind CSS
- WCAG 2.2 & BITV 2.0 compliance

## Características Principales

- Diseño responsive y accesible
- Optimización SEO
- Integración Schema.org
- Validación WCAG 2.2 y BITV 2.0
- Formulario de contacto funcional
- Navegación intuitiva

## Notas Importantes

1. Esta versión presenta un enfoque de landing page con navegación por anclas.
2. Se recomienda hacer pruebas exhaustivas después de cambios significativos.
3. Asegurar que cualquier nuevo desarrollo mantiene la conformidad con WCAG 2.2 y BITV 2.0.

Última actualización: 7 de junio de 2025
