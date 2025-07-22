# 📋 Instrucciones para Subir el Proyecto a All-Inkl

## ✅ Estado del Proyecto
- ✅ Build exitoso completado
- ✅ Archivos estáticos generados en `/dist`
- ✅ Referencias CSS corregidas
- ✅ Archivo ZIP creado para upload

## 🚀 Pasos para Subir a All-Inkl

### 1. Acceder al FTP
- Ve a https://webftp.all-inkl.com/
- Inicia sesión con tus credenciales de All-Inkl

### 2. Subir los Archivos
- **Opción A: Usar el ZIP**
  1. Sube el archivo `dist-all-inkl.zip` al directorio raíz de tu dominio
  2. Extrae el contenido en el directorio raíz (no en una subcarpeta)
  3. Elimina el archivo ZIP después de extraer

- **Opción B: Subir manualmente**
  1. Sube TODO el contenido de la carpeta `dist/` al directorio raíz de tu dominio
  2. Asegúrate de que `index.html` esté en la raíz, no en una subcarpeta

### 3. Estructura Final en All-Inkl
```
/
├── index.html
├── 404.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── sitemap-images.xml
├── analytics-tracking.html
├── _astro/
│   ├── about.q5y7U0zA.css
│   ├── accessibility.BLO-wpmn.css
│   ├── index.D8B6mwbd.css
│   ├── *.js
│   └── *.webp
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── services/
│   └── index.html
├── assets/
│   ├── img/
│   ├── video/
│   ├── css/
│   └── captions/
└── js/
    └── cookie-consent.js
```

## 🔍 Verificación Post-Subida
1. Visita tu dominio principal
2. Verifica que:
   - ✅ El sitio carga correctamente
   - ✅ Los estilos se aplican (no hay texto sin formato)
   - ✅ Las imágenes se muestran
   - ✅ Los enlaces funcionan
   - ✅ El diseño responsive funciona
   - ✅ Los controles de accesibilidad aparecen

## 🐛 Solución de Problemas Comunes

### Sitio no se muestra / Página en blanco
- Verificar que `index.html` esté en la raíz del dominio
- Comprobar que no hay errores en la consola del navegador

### Estilos no se cargan
- Verificar que la carpeta `_astro/` se subió correctamente
- Comprobar que los archivos CSS están en `_astro/`

### Imágenes no se muestran
- Verificar que la carpeta `assets/` se subió correctamente
- Comprobar permisos de archivos en All-Inkl

### Videos no funcionan
- Verificar que los archivos `.webm` en `assets/video/` se subieron
- Algunos hostings requieren configuración MIME específica para video

## 📁 Archivos Incluidos en el Build
- **Páginas HTML**: todas las páginas como archivos estáticos
- **CSS optimizado**: en la carpeta `_astro/`
- **JavaScript**: minimizado y optimizado
- **Imágenes**: optimizadas en WebP cuando es posible
- **Assets**: videos, fuentes, íconos

## 🎯 URLs de Prueba
Después de subir, probar estas URLs:
- `/` (página principal)
- `/about/` (acerca de)
- `/services/` (servicios)
- `/contact/` (contacto)
- `/faq/` (preguntas frecuentes)
- `/accessibility/` (accesibilidad)

## 📞 Contacto de Soporte
Si tienes problemas con All-Inkl, contacta su soporte técnico con esta información:
- Proyecto: Sitio web estático generado con Astro
- Tecnología: HTML/CSS/JS estático
- Sin base de datos o servidor requerido

---
*Build generado el: $(Get-Date)*
*Versión: Optimizada para hosting compartido All-Inkl*
