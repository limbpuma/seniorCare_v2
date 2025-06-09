# 🎨 MOCKUP: FORMULARIO INTEGRADO CONTACTO + BOOKING

## 📱 **DISEÑO PROPUESTO PARA EL FRONTEND**

### 🖼️ **VISUAL MOCKUP DEL FORMULARIO:**

```html
<!-- FORMULARIO ACTUAL + NUEVOS CAMPOS -->
<form class="contact-booking-form">
  
  <!-- CAMPO NUEVO: TIPO DE SOLICITUD -->
  <div class="form-group">
    <label for="request_type">Tipo de Solicitud</label>
    <select id="request_type" name="request_type" required>
      <option value="">Seleccione una opción...</option>
      <option value="consultation">💬 Consulta General</option>
      <option value="booking">📅 Solicitar Cita/Servicio</option>
    </select>
  </div>

  <!-- CAMPOS EXISTENTES (SIEMPRE VISIBLES) -->
  <div class="form-group">
    <label for="name">Nombre Completo</label>
    <input type="text" id="name" name="name" required>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="phone">Teléfono</label>
    <input type="tel" id="phone" name="phone">
  </div>

  <div class="form-group">
    <label for="subject">Asunto</label>
    <input type="text" id="subject" name="subject">
  </div>

  <!-- CAMPOS NUEVOS: BOOKING (CONDICIONALES) -->
  <div id="booking-fields" class="booking-section" style="display: none;">
    
    <h3>📅 Detalles de la Reserva</h3>
    
    <div class="form-group">
      <label for="service_id">Servicio Solicitado</label>
      <select id="service_id" name="service_id">
        <option value="">Cargando servicios...</option>
        <!-- Poblado dinámicamente desde /api/services.php -->
      </select>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="preferred_date">Fecha Preferida</label>
        <input type="date" id="preferred_date" name="preferred_date">
      </div>
      <div class="form-group">
        <label for="preferred_time">Hora Preferida</label>
        <select id="preferred_time" name="preferred_time">
          <option value="">Seleccione fecha primero</option>
          <!-- Poblado dinámicamente desde /api/availability.php -->
        </select>
      </div>
    </div>

    <h4>👴 Información del Paciente</h4>
    
    <div class="form-row">
      <div class="form-group">
        <label for="patient_name">Nombre del Paciente</label>
        <input type="text" id="patient_name" name="patient_name">
      </div>
      <div class="form-group">
        <label for="patient_age">Edad</label>
        <input type="number" id="patient_age" name="patient_age" min="1" max="120">
      </div>
    </div>

    <div class="form-group">
      <label for="address">Dirección Completa</label>
      <textarea id="address" name="address" rows="2" 
                placeholder="Calle, número, ciudad, código postal..."></textarea>
    </div>

    <div class="form-group">
      <label for="special_requirements">Requisitos Especiales</label>
      <textarea id="special_requirements" name="special_requirements" rows="3"
                placeholder="Movilidad reducida, medicamentos, alergias, etc."></textarea>
    </div>

  </div>

  <!-- CAMPO EXISTENTE: MENSAJE -->
  <div class="form-group">
    <label for="message" id="message-label">Mensaje</label>
    <textarea id="message" name="message" rows="4" required
              placeholder="Cuéntanos en qué podemos ayudarte..."></textarea>
  </div>

  <!-- BOTÓN DINÁMICO -->
  <button type="submit" class="btn-submit" id="submit-btn">
    <span id="submit-text">Enviar Mensaje</span>
    <span id="submit-loading" style="display: none;">Enviando...</span>
  </button>

</form>
```

---

## 🎯 **COMPORTAMIENTO JAVASCRIPT:**

### 📱 **INTERACCIONES UX/UI:**

```javascript
// Cambio en tipo de solicitud
document.getElementById('request_type').addEventListener('change', function(e) {
  const bookingFields = document.getElementById('booking-fields');
  const submitBtn = document.getElementById('submit-text');
  const messageLabel = document.getElementById('message-label');
  
  if (e.target.value === 'booking') {
    // MOSTRAR CAMPOS DE BOOKING
    bookingFields.style.display = 'block';
    submitBtn.textContent = '📅 Solicitar Reserva';
    messageLabel.textContent = 'Información Adicional (Opcional)';
    
    // CARGAR SERVICIOS
    loadServices();
    
  } else if (e.target.value === 'consultation') {
    // OCULTAR CAMPOS DE BOOKING
    bookingFields.style.display = 'none';
    submitBtn.textContent = '💬 Enviar Consulta';
    messageLabel.textContent = 'Mensaje';
    
  } else {
    // ESTADO INICIAL
    bookingFields.style.display = 'none';
    submitBtn.textContent = 'Enviar Mensaje';
    messageLabel.textContent = 'Mensaje';
  }
});

// Cambio en fecha para cargar horarios disponibles
document.getElementById('preferred_date').addEventListener('change', function(e) {
  const date = e.target.value;
  if (date) {
    loadAvailableSlots(date);
  }
});

// Cargar servicios desde API
async function loadServices() {
  try {
    const response = await fetch('/api/services.php');
    const data = await response.json();
    
    const serviceSelect = document.getElementById('service_id');
    serviceSelect.innerHTML = '<option value="">Seleccione un servicio...</option>';
    
    data.data.forEach(service => {
      const option = document.createElement('option');
      option.value = service.id;
      option.textContent = `${service.name} - ${service.duration_hours}h`;
      if (service.price > 0) {
        option.textContent += ` - $${service.price}`;
      } else {
        option.textContent += ' - GRATIS';
      }
      serviceSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error loading services:', error);
  }
}

// Cargar horarios disponibles
async function loadAvailableSlots(date) {
  try {
    const response = await fetch(`/api/availability.php?date=${date}`);
    const data = await response.json();
    
    const timeSelect = document.getElementById('preferred_time');
    timeSelect.innerHTML = '<option value="">Seleccione un horario...</option>';
    
    data.data.available_slots.forEach(time => {
      const option = document.createElement('option');
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
    });
  } catch (error) {
    console.error('Error loading availability:', error);
  }
}
```

---

## 🎨 **ESTILOS CSS SUGERIDOS:**

```css
/* Sección de booking */
.booking-section {
  border: 2px solid #e3f2fd;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background-color: #f8f9fa;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.booking-section h3 {
  color: #1976d2;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.booking-section h4 {
  color: #666;
  margin: 20px 0 10px 0;
  font-size: 1em;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

/* Filas de formulario */
.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.form-row .form-group {
  flex: 1;
}

/* Botón dinámico */
.btn-submit {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Indicadores visuales */
.form-group label[for="service_id"]:after,
.form-group label[for="preferred_date"]:after,
.form-group label[for="patient_name"]:after {
  content: " *";
  color: #e74c3c;
}

/* Responsive */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 10px;
  }
}
```

---

## 🔄 **FLUJO DE USUARIO:**

### 🎯 **ESCENARIO 1: CONSULTA NORMAL**
1. Usuario selecciona "💬 Consulta General"
2. Completa campos básicos (nombre, email, mensaje)
3. Click en "💬 Enviar Consulta"
4. **Resultado:** Email normal como ahora

### 🎯 **ESCENARIO 2: SOLICITUD DE RESERVA**
1. Usuario selecciona "📅 Solicitar Cita/Servicio"
2. **Aparecen campos adicionales** con animación
3. Selecciona servicio → Se actualiza duración/precio
4. Selecciona fecha → Se cargan horarios disponibles
5. Completa información del paciente
6. Click en "📅 Solicitar Reserva"
7. **Resultado:** Emails de confirmación (cliente + empresa)

---

## 📊 **VENTAJAS DE ESTE DISEÑO:**

### ✅ **UX/UI:**
- **No rompe** el flujo actual
- **Progresivo:** Campos aparecen solo cuando se necesitan
- **Intuitivo:** Iconos y textos claros
- **Responsive:** Se adapta a móviles

### ✅ **TÉCNICO:**
- **Mantiene** toda la funcionalidad actual
- **APIs independientes** para servicios y disponibilidad
- **Validación robusta** tanto cliente como servidor
- **Fallback graceful** si falla alguna API

### ✅ **NEGOCIO:**
- **Conversión aumentada:** Más fácil reservar que llamar
- **Datos estructurados:** Mejor gestión de leads
- **Automatización:** Menos trabajo manual

---

## 🚀 **IMPLEMENTACIÓN BACKEND:**

### ⚡ **LISTO PARA IMPLEMENTAR:**
Una vez confirmes, en **2-3 horas** tendrás:

1. ✅ **API de servicios** con servicios predefinidos de Senior Care
2. ✅ **API de booking** con validaciones y emails automáticos
3. ✅ **API de disponibilidad** con horarios configurables
4. ✅ **Base de datos** actualizada con nuevas tablas
5. ✅ **Interface de testing** actualizada
6. ✅ **Documentación completa** de todas las APIs

---

## ❓ **¿PROCEDER?**

**¿Te gusta el diseño propuesto? ¿Algún cambio antes de implementar el backend?** 🤔

**Frontend Developer, ¡tu decisión!** 🚀
