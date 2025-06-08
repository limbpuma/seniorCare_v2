# 🏥 Senior Care - Pflegedienst Integra Gerling

## 🎯 ESTADO ACTUAL DEL PROYECTO
**✅ Sistema de Accesibilidad**: Completamente funcional  
**✅ Formulario de Contacto**: Sin conflictos, funcionando perfectamente  
**🔄 Backend Integration**: En desarrollo - **Developer de Integración bienvenido**  
**🎨 Design Improvements**: En desarrollo paralelo  

---

## 👨‍💻 PARA EL DEVELOPER DE INTEGRACIÓN

### 🚀 **QUICK START**
```bash
# Clonar y configurar
git clone [repository-url]
cd seniorCare
npm install

# Verificar que todo funciona
npm run dev
node verify-form-integration.js

# Trabajar en rama main
git checkout main
```

### 📋 **DOCUMENTACIÓN ESENCIAL**
1. **EMPEZAR AQUÍ**: `docs/README_INTEGRATION_DEVELOPER.md`
2. **HANDOFF COMPLETO**: `docs/COMUNICATION/INTEGRATION_DEVELOPER_HANDOFF.md`
3. **SISTEMA DE BOOKING**: `docs/COMUNICATION/BOOKING_SYSTEM_PROPOSAL.md`
4. **DEPLOYMENT**: `docs/DEPLOYMENT_READY.md`

### 🎯 **TU TAREA PRINCIPAL**
- ✅ **Base sólida disponible**: Frontend completamente funcional
- 🔄 **Por implementar**: Sistema de booking/citas
- 🔄 **Por conectar**: Backend PHP con frontend
- 🔄 **Por configurar**: Producción y deployment

---

## 🏗️ **ARQUITECTURA ACTUAL**

### Características de la Versión Landing Page

- Todas las secciones principales integradas en una única página (index)
- Navegación a través de enlaces de ancla (#about, #services, etc.)
- Las páginas legales (legal, privacypolicy, termsconditions) se mantienen como páginas separadas
- Experiencia de usuario mejorada sin recargas de página
- Diseño cohesivo y fluido
- Controles de accesibilidad mejorados:
  - Espaciado de texto (Alt+T)
  - Alto contraste (Alt+C)
  - Indicadores de foco (Alt+F)
  - Acceso rápido a la página de accesibilidad (Alt+A)

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
│   │   │   └── AccessibilityControls.astro (controles de accesibilidad)
│   │   ├── home/ (componentes de la página principal)
│   │   └── ... (componentes por sección)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro (landing page principal)
│   │   ├── accessibility.astro (página de accesibilidad)
│   │   └── ... (páginas legales y error 404)
│   ├── styles/
│   │   ├── main.css (estilos principales)
│   │   └── accessibility.css (estilos de accesibilidad)
│   ├── utils/
│   │   ├── accessibility-manager.js (gestor de funciones de accesibilidad)
│   │   └── ... (otras utilidades)
│   └── navigation.js (configuración de navegación)
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
- Controles de accesibilidad con teclas de acceso rápido (Alt+T, Alt+C, Alt+F, Alt+A)
- Formulario de contacto funcional
- Navegación intuitiva

## Notas Importantes

1. Esta versión presenta un enfoque de landing page con navegación por anclas.
2. Se recomienda hacer pruebas exhaustivas después de cambios significativos.
3. Asegurar que cualquier nuevo desarrollo mantiene la conformidad con WCAG 2.2 y BITV 2.0.

Última actualización: 7 de junio de 2025
