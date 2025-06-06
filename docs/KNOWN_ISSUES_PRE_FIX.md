# 🚨 Known Issues - Pre-Fix Documentation

**Fecha:** 6 de Junio, 2025  
**Tag de Backup:** `working-but-has-issues-v1.0`  
**Rama:** `landing-page-redesign`  
**Commit Hash:** `05c1c75`

## 📋 Estado Actual

✅ **Funcional:**
- Landing page básica carga correctamente
- Redirección automática desde index.astro
- Componentes WCAG 2.2 integrados
- Navegación por anclajes implementada
- Accessibility controls funcionando

## 🐛 Problemas Identificados

### 1. **Duplicación de Código JavaScript**
**Archivo:** `src/pages/index.astro`  
**Problema:** Hay código JavaScript duplicado al final del archivo
```astro
// Líneas 92+ tienen código duplicado de redirección
    }
    
    // Redirect to landing page after 3 seconds
    setTimeout(() => {
      const urlParams = new URLSearchParams(window.location.search);
      if (!urlParams.get('no-redirect')) {
        window.location.href = '/landing';
      }
    }, 3000);
  });
</script>
```

### 2. **Navegación Landing Page**
**Estado:** Por verificar
- Navegación suave entre secciones
- Actualización de hash en URL
- Estados activos en menú
- Responsive behavior en móvil

### 3. **Funcionalidad WCAG 2.2**
**Estado:** Implementado pero por validar
- Text spacing toggle
- Focus management
- Hover/focus content behavior
- Keyboard navigation

### 4. **Video Autoplay**
**Estado:** Por verificar
- Autoplay functionality en ParallaxVideo
- Fallback cuando autoplay falla
- Accesibilidad de controles de video

### 5. **Performance**
**Estado:** Por optimizar
- Carga de recursos WCAG
- Lazy loading de componentes
- Bundle size optimization

## 🎯 Plan de Resolución

### **Fase 1: Limpieza de Código**
1. ✅ Limpiar código duplicado en index.astro
2. ✅ Verificar sintaxis y estructura
3. ✅ Validar imports y dependencies

### **Fase 2: Funcionalidad Core**
1. 🔄 Validar navegación landing page
2. 🔄 Verificar smooth scrolling
3. 🔄 Testear responsive navigation
4. 🔄 Validar keyboard accessibility

### **Fase 3: WCAG 2.2 Validation**
1. 🔄 Test text spacing functionality
2. 🔄 Verify focus management
3. 🔄 Test hover/focus content
4. 🔄 Validate keyboard navigation

### **Fase 4: Integration Testing**
1. 🔄 Cross-browser testing
2. 🔄 Mobile device testing
3. 🔄 Screen reader testing
4. 🔄 Performance validation

## 🚨 Rollback Plan

Si algo falla durante las fixes:

```bash
# Rollback al tag funcional
git reset --hard working-but-has-issues-v1.0

# O rollback al backup branch
git checkout backup-landing-stable-2025-06-06-2003
```

## 📝 Notas Importantes

- **NO** hacer cambios mayores de arquitectura
- **SÍ** focus en fixes incrementales
- **SIEMPRE** testear después de cada fix
- **DOCUMENTAR** cada cambio realizado

---

**Último Update:** 2025-06-06 20:30  
**Próximo Paso:** Iniciar Fase 1 - Limpieza de Código
