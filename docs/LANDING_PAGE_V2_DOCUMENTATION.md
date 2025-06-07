# Documentación del Proyecto Landing Page V2

## Historial del Proyecto

Este repositorio contiene la versión optimizada de la landing page para el sitio web de Pflegedienst Integra Gerling, surgida a partir del commit 33a074052802bb247828d81003c67adcb4b51b13 del repositorio original, donde se implementó la transformación de un enfoque multi-página a un enfoque de landing page.

## Ventajas de la Versión Landing Page

1. **Experiencia de Usuario Mejorada**:
   - Navegación fluida sin recargas de página
   - Transiciones suaves entre secciones
   - Mayor retención de usuarios

2. **Rendimiento Optimizado**:
   - Carga única de la página principal
   - Recursos compartidos entre secciones
   - Menor consumo de ancho de banda

3. **Mantenimiento Simplificado**:
   - Estructura de archivos más simple
   - Menos archivos para mantener
   - Mayor coherencia visual entre secciones

4. **SEO Optimizado**:
   - Estructura de Schema.org integrada
   - Mayor concentración de palabras clave en una sola URL
   - Mejor tasa de rebote y tiempo de permanencia

## Estructura de Navegación

La navegación se basa en enlaces de ancla que dirigen a diferentes secciones dentro de la página principal:

- `/#home` - Sección principal
- `/#about` - Sección Sobre Nosotros
- `/#services` - Sección de Servicios
- `/#experience` - Sección de Experiencia
- `/#contact` - Sección de Contacto

Las páginas legales se mantienen como páginas separadas accesibles desde el footer:
- `/legal` - Aviso Legal
- `/privacypolicy` - Política de Privacidad
- `/termsconditions` - Términos y Condiciones

## Flujo de Trabajo de Desarrollo

1. El desarrollo principal se realiza en la rama `dev`
2. Las nuevas características se desarrollan en ramas `feature/*`
3. Una vez probadas, las características se fusionan a `dev`
4. Cuando `dev` es estable, se fusiona a `main`

## Directrices para Contribuir

1. **Mantener la estructura de landing page**:
   - No crear nuevas páginas separadas para secciones principales
   - Utilizar componentes modulares para cada sección

2. **Preservar la accesibilidad**:
   - Asegurar que todas las secciones cumplen WCAG 2.2 nivel AA
   - Mantener navegación por teclado funcional
   - Preservar etiquetas ARIA y estructura semántica

3. **Optimización de rendimiento**:
   - Imágenes optimizadas
   - Carga diferida para contenido fuera de la vista inicial
   - Minimizar JS y CSS

## Pruebas

Antes de fusionar a `main`, asegurar que:

1. La navegación por anclas funciona correctamente
2. Las páginas legales son accesibles
3. El formulario de contacto funciona
4. El sitio es responsive en todos los dispositivos
5. Se cumplen los criterios WCAG 2.2 y BITV 2.0

Última actualización: 7 de junio de 2025
