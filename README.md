# Pflegedienst Integra Gerling - Proyecto Web

## Estructura del Repositorio

Este repositorio contiene dos versiones principales del sitio web de Pflegedienst Integra Gerling:

### Ramas Principales

- **`main`**: Versión con enfoque de páginas múltiples separadas
- **`landing-page-stable`**: Versión con enfoque de landing page (navegación por anclas)

## Enfoques del Proyecto

### 1. Enfoque Multi-página (rama `main`)

- Estructura tradicional con páginas separadas (about, services, contact, faq, etc.)
- Cada sección tiene su propia URL
- Navegación a través de enlaces a páginas completas

### 2. Enfoque Landing Page (rama `landing-page-stable`)

- Todas las secciones principales integradas en una única página (index)
- Navegación a través de enlaces de ancla (#about, #services, etc.)
- Las páginas legales (legal, privacypolicy, termsconditions) se mantienen como páginas separadas

## Cómo Contribuir

### Para trabajar con la versión multi-página:

```bash
git checkout main
```

### Para trabajar con la versión landing page:

```bash
git checkout landing-page-stable
```

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

1. Ambas versiones del sitio mantienen las mismas características y funcionalidades, solo difieren en la estructura de navegación.
2. Se recomienda hacer pruebas exhaustivas después de cambios significativos.
3. Asegurar que cualquier nuevo desarrollo mantiene la conformidad con WCAG 2.2 y BITV 2.0.

Última actualización: 7 de junio de 2025

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
