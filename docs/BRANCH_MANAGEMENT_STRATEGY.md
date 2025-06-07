# Estrategia de Gestión de Ramas

## Estado Actual (7 de junio de 2025)

Este repositorio mantiene dos versiones principales del sitio web de Pflegedienst Integra Gerling:

1. **Versión multi-página** (rama `main`)
2. **Versión landing page** (rama `landing-page-stable`)

## Ramas Principales

- **`main`**: Contiene la versión con navegación por páginas separadas
- **`landing-page-stable`**: Contiene la versión con enfoque de landing page (navegación por anclas)

## Plan de Gestión de Ramas

Para mantener el repositorio organizado y reducir conflictos, se ha implementado la siguiente estrategia:

1. **Ramas activas mantenidas**:
   - `main`: Versión multi-página (principal)
   - `landing-page-stable`: Versión landing page

2. **Ramas que se cerrarán**:
   - Ramas temporales (`temp-*`)
   - Ramas de backup antiguas (`backup-*`)
   - Ramas de características ya integradas (`feature/*`)
   - Ramas de corrección ya integradas (`fix/*`)
   - Ramas de limpieza (`cleanup/*`)

## Directrices para Desarrollo Futuro

### Para contribuir a la versión multi-página:

```bash
# Checkout a main
git checkout main

# Crear una nueva rama de característica
git checkout -b feature/nueva-caracteristica

# Al finalizar, hacer merge a main
git checkout main
git merge feature/nueva-caracteristica
```

### Para contribuir a la versión landing page:

```bash
# Checkout a landing-page-stable
git checkout landing-page-stable

# Crear una nueva rama de característica
git checkout -b feature/nueva-caracteristica-landing

# Al finalizar, hacer merge a landing-page-stable
git checkout landing-page-stable
git merge feature/nueva-caracteristica-landing
```

## Recomendaciones

1. **Mantener ambas versiones actualizadas**: Si se implementa una característica importante en una versión, considerar su implementación en la otra.
2. **Documentar decisiones**: Explicar cualquier cambio significativo en la estructura o funcionamiento.
3. **Pruebas cruzadas**: Verificar que los cambios en una versión no afectan negativamente a la otra.

## Decisión a Largo Plazo

En el futuro, se tomará una decisión final sobre qué enfoque mantener permanentemente basado en:

- Feedback de usuarios
- Métricas de rendimiento
- Consideraciones de SEO
- Facilidad de mantenimiento

Mientras tanto, ambas versiones se mantendrán actualizadas y funcionales.

Última actualización: 7 de junio de 2025
