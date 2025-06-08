# 📅 PROPUESTA: SISTEMA DE BOOKING INTEGRADO

## 📅 Fecha: 8 de Junio, 2025 - 23:45 CET
## 🎯 De: Backend Developer → Frontend Developer
## 📋 Asunto: **NUEVA FUNCIONALIDAD - SISTEMA DE BOOKING**

---

## 🚀 **PROPUESTA DE IMPLEMENTACIÓN: BOOKING SYSTEM**

### 💡 **CONCEPTO:**
Integrar un sistema de booking/reservas desde la sección de contacto, permitiendo a los usuarios no solo enviar mensajes sino también **solicitar citas y servicios específicos** para Senior Care.

---

## 🎯 **FUNCIONALIDADES PROPUESTAS:**

### 📋 **1. TIPOS DE SERVICIOS DISPONIBLES:**
- **Consulta inicial gratuita** (30 min)
- **Evaluación domiciliaria** (1-2 horas)  
- **Cuidado diario** (4, 8 o 12 horas)
- **Cuidado nocturno** (8-12 horas)
- **Acompañamiento médico** (2-4 horas)
- **Servicios de rehabilitación** (1-2 horas)

### 📅 **2. SISTEMA DE RESERVAS:**
- **Selección de fecha y hora preferida**
- **Duración del servicio**
- **Información del paciente/adulto mayor**
- **Requisitos especiales o médicos**
- **Confirmación automática por email**

### 📧 **3. NOTIFICACIONES POR EMAIL:**
- **Al cliente:** Confirmación de reserva con detalles
- **A la empresa:** Notificación de nueva reserva para gestión
- **Formato profesional con toda la información**

---

## 🔧 **IMPLEMENTACIÓN TÉCNICA:**

### 📂 **NUEVOS ENDPOINTS A CREAR:**

#### 1. **`GET /api/services.php`**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Consulta inicial gratuita",
      "duration_hours": 0.5,
      "price": 0,
      "description": "Evaluación inicial sin costo"
    },
    {
      "id": 2,
      "name": "Evaluación domiciliaria",
      "duration_hours": 1.5,
      "price": 75,
      "description": "Evaluación completa en el hogar"
    }
  ]
}
```

#### 2. **`POST /api/booking.php`**
**Request:**
```json
{
  "type": "booking",
  "service_id": 1,
  "client_name": "María González",
  "client_email": "maria@email.com",
  "client_phone": "+1234567890",
  "patient_name": "Carlos González",
  "patient_age": 78,
  "preferred_date": "2025-06-15",
  "preferred_time": "10:00",
  "duration_hours": 2,
  "special_requirements": "Paciente con movilidad reducida",
  "address": "Calle Example 123, Ciudad",
  "message": "Información adicional..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Reserva creada exitosamente",
  "data": {
    "booking_id": "BK-2025-001",
    "service": "Evaluación domiciliaria",
    "date": "2025-06-15",
    "time": "10:00",
    "status": "pending_confirmation",
    "confirmation_code": "SC-ABC123"
  }
}
```

#### 3. **`GET /api/availability.php?date=2025-06-15`**
```json
{
  "success": true,
  "data": {
    "date": "2025-06-15",
    "available_slots": [
      "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"
    ],
    "busy_slots": [
      "08:00", "12:00", "13:00", "17:00"
    ]
  }
}
```

### 🗄️ **NUEVAS TABLAS DE BASE DE DATOS:**

```sql
-- Tabla de servicios
CREATE TABLE services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    duration_hours DECIMAL(3,1) NOT NULL,
    price DECIMAL(8,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de reservas/bookings
CREATE TABLE bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    booking_code VARCHAR(20) UNIQUE NOT NULL,
    service_id INTEGER NOT NULL,
    client_name VARCHAR(100) NOT NULL,
    client_email VARCHAR(100) NOT NULL,
    client_phone VARCHAR(20),
    patient_name VARCHAR(100) NOT NULL,
    patient_age INTEGER,
    preferred_date DATE NOT NULL,
    preferred_time TIME NOT NULL,
    duration_hours DECIMAL(3,1) NOT NULL,
    address TEXT,
    special_requirements TEXT,
    message TEXT,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES services(id)
);
```

---

## 📧 **SISTEMA DE EMAILS:**

### 📬 **EMAIL AL CLIENTE:**
```
Asunto: ✅ Confirmación de Reserva - Senior Care

Estimado/a [NOMBRE_CLIENTE],

Su solicitud de reserva ha sido recibida exitosamente:

🏥 DETALLES DE LA RESERVA:
• Código: [BOOKING_CODE]
• Servicio: [SERVICIO]
• Fecha: [FECHA]
• Hora: [HORA]
• Duración: [DURACION]
• Paciente: [NOMBRE_PACIENTE]

📍 DIRECCIÓN:
[DIRECCION_COMPLETA]

📞 PRÓXIMOS PASOS:
Nuestro equipo se pondrá en contacto con usted en las próximas 24 horas para confirmar la cita y coordinar los detalles.

📱 CONTACTO:
Teléfono: +1 (555) 123-4567
Email: info@seniorcare.com

¡Gracias por confiar en Senior Care!
```

### 📬 **EMAIL A LA EMPRESA:**
```
Asunto: 🔔 Nueva Reserva Recibida - [BOOKING_CODE]

NUEVA RESERVA EN EL SISTEMA:

👤 INFORMACIÓN DEL CLIENTE:
• Nombre: [NOMBRE_CLIENTE]
• Email: [EMAIL_CLIENTE]
• Teléfono: [TELEFONO_CLIENTE]

🏥 DETALLES DEL SERVICIO:
• Código: [BOOKING_CODE]
• Servicio: [SERVICIO] 
• Fecha solicitada: [FECHA]
• Hora solicitada: [HORA]
• Duración: [DURACION]

👴 INFORMACIÓN DEL PACIENTE:
• Nombre: [NOMBRE_PACIENTE]
• Edad: [EDAD_PACIENTE]
• Dirección: [DIRECCION]

📝 REQUISITOS ESPECIALES:
[REQUISITOS_ESPECIALES]

💬 MENSAJE ADICIONAL:
[MENSAJE]

⚡ ACCIÓN REQUERIDA:
1. Confirmar disponibilidad
2. Contactar al cliente en 24h
3. Actualizar estado en el panel de admin

Ver detalles completos: [LINK_ADMIN]
```

---

## 🎨 **MODIFICACIONES EN EL FRONTEND:**

### 📋 **1. ACTUALIZAR FORMULARIO DE CONTACTO:**

Agregar opción para seleccionar tipo de solicitud:
```javascript
// Nuevo campo en ContactForm.astro
<select name="request_type" required>
  <option value="consultation">💬 Consulta General</option>
  <option value="booking">📅 Solicitar Cita/Servicio</option>
</select>

// Campos adicionales para booking (mostrar condicionalmente)
<div id="booking-fields" style="display: none;">
  <select name="service_id" required>
    <option value="">Seleccione un servicio...</option>
    <!-- Cargar desde /api/services.php -->
  </select>
  
  <input type="date" name="preferred_date" required>
  <select name="preferred_time" required>
    <!-- Cargar desde /api/availability.php -->
  </select>
  
  <input type="text" name="patient_name" placeholder="Nombre del paciente">
  <input type="number" name="patient_age" placeholder="Edad del paciente">
  <textarea name="address" placeholder="Dirección completa"></textarea>
  <textarea name="special_requirements" placeholder="Requisitos especiales"></textarea>
</div>
```

### 📋 **2. NUEVA LÓGICA JAVASCRIPT:**
```javascript
// En ContactForm.astro o archivo separado
const requestTypeSelect = document.querySelector('[name="request_type"]');
const bookingFields = document.getElementById('booking-fields');

requestTypeSelect.addEventListener('change', (e) => {
  if (e.target.value === 'booking') {
    bookingFields.style.display = 'block';
    loadServices();
  } else {
    bookingFields.style.display = 'none';
  }
});

async function loadServices() {
  const response = await fetch('/api/services.php');
  const data = await response.json();
  // Poblar select de servicios
}
```

---

## 📊 **BENEFICIOS DEL SISTEMA:**

### ✅ **PARA LOS CLIENTES:**
- ✅ **Proceso simplificado** de solicitud de servicios
- ✅ **Confirmación inmediata** por email
- ✅ **Transparencia** en servicios y precios
- ✅ **Facilidad** para programar citas

### ✅ **PARA LA EMPRESA:**
- ✅ **Automatización** del proceso de reservas
- ✅ **Captura estructurada** de información
- ✅ **Notificaciones inmediatas** de nuevas reservas
- ✅ **Panel de administración** para gestionar citas
- ✅ **Reducción de llamadas** telefónicas

### ✅ **TÉCNICO:**
- ✅ **Integración perfecta** con el sistema actual
- ✅ **Base de datos** bien estructurada
- ✅ **API REST** consistente
- ✅ **Emails automáticos** profesionales

---

## 🚀 **CRONOGRAMA DE IMPLEMENTACIÓN:**

### 📅 **FASE 1 - Backend (Estimado: 2-3 horas)**
- ✅ Crear tablas de base de datos
- ✅ Implementar endpoint `/api/services.php`
- ✅ Implementar endpoint `/api/booking.php`
- ✅ Implementar endpoint `/api/availability.php`
- ✅ Sistema de emails automáticos
- ✅ Actualizar interface de testing

### 📅 **FASE 2 - Frontend (Coordinación requerida)**
- 📋 Modificar formulario de contacto
- 📋 Agregar campos condicionales para booking
- 📋 Integrar con nuevas APIs
- 📋 Validaciones del lado cliente
- 📋 UX/UI para selección de servicios

### 📅 **FASE 3 - Testing y Documentación**
- 🧪 Testing completo del flujo de booking
- 🧪 Verificación de emails
- 📖 Documentación actualizada
- 🚀 Deploy y puesta en producción

---

## ❓ **PREGUNTA PARA EL FRONTEND DEVELOPER:**

### 🤔 **¿PROCEDER CON LA IMPLEMENTACIÓN?**

1. **¿Te parece viable** esta integración en el formulario de contacto?
2. **¿Prefieres** un formulario separado solo para booking?
3. **¿Alguna modificación** en el diseño o funcionalidades propuestas?
4. **¿Tiempo estimado** de tu lado para la integración frontend?

### 📞 **COORDINACIÓN:**
Una vez confirmes, procederé inmediatamente con la implementación del backend. Los endpoints estarán listos en 2-3 horas.

---

## 🎯 **CONCLUSIÓN:**

**Esta implementación convertirá el formulario de contacto en una herramienta poderosa de captación y gestión de clientes, automatizando el proceso de reservas y mejorando significativamente la experiencia del usuario.**

**¿Procedo con la implementación del backend del sistema de booking?** 🚀

---

**Backend Developer**  
**Senior Care Development Team**
