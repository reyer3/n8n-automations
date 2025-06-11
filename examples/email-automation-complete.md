# 📧 Ejemplo: Email Automation Completa

Este ejemplo demuestra cómo crear un sistema completo de automatización de emails con merge de configuraciones y manejo de attachments.

## 🎯 Objetivo

Crear un workflow que:
1. Configure destinatarios de email (to, cc, from)
2. Mergee la configuración con attachments dinámicos  
3. Convierta arrays de emails a strings delimitados por comas
4. Prepare los datos para envío

## 🔧 Componentes

### 1. Nodo "Destinatario" (Set)
```json
{
  "from": "alfred@onbotgo.pe",
  "to": ["ana@onbotgo.com", "sara.morales@onbotgo.pe", "jorge@onbotgo.com"],
  "cc": ["ricardo@onbotgo.cl", "bjulca@onbotgo.com"],
  "subject": "Informe de evaluación por horas: {{ fecha }}",
  "data": "Prueba de envio"
}
```

### 2. Nodo "Merge Config" (Set)
```javascript
// Mergear configuración con attachments
{{ Object.assign({}, $('Destinatario').item.json, { attachments: $json.data }) }}

// Convertir array de emails a string
{{ $('Destinatario').item.json.to.join(', ') }}
```

## 📋 Expresiones Clave

### Array to Comma-Delimited String
```javascript
{{ $('Merge').item.json.to.join(',') }}
// Resultado: "ana@onbotgo.com,sara.morales@onbotgo.pe,jorge@onbotgo.com"

{{ $('Merge').item.json.to.join(', ') }}
// Resultado: "ana@onbotgo.com, sara.morales@onbotgo.pe, jorge@onbotgo.com"
```

### Object Merge con Nuevas Propiedades
```javascript
{{ Object.assign({}, $('Destinatario').item.json, { attachments: $json.data }) }}
```

### Crear Array desde Dato Individual
```javascript
{{ [$json.data] }}
```

### Validar Array o Convertir
```javascript
{{ Array.isArray($json.data) ? $json.data : [$json.data] }}
```

## 🔄 Flujo Completo

1. **Input**: Datos de attachments (`$json.data`)
2. **Set Destinatarios**: Configurar emails base
3. **Merge**: Combinar config + attachments
4. **Output**: Configuración completa lista para email

## 📊 Resultado Final

```json
{
  "email_config": {
    "from": "alfred@onbotgo.pe",
    "to": ["ana@onbotgo.com", "sara.morales@onbotgo.pe", "jorge@onbotgo.com"],
    "cc": ["ricardo@onbotgo.cl", "bjulca@onbotgo.com"],
    "subject": "Informe de evaluación por horas: 2025-06-11",
    "data": "Prueba de envio",
    "attachments": [/* datos dinámicos */]
  },
  "to_string": "ana@onbotgo.com, sara.morales@onbotgo.pe, jorge@onbotgo.com"
}
```

## 💡 Tips de Implementación

1. **Validación**: Siempre valida que los arrays existan antes de usar `.join()`
2. **Flexibilidad**: Usa `Object.assign()` para merge no destructivo
3. **Consistencia**: Mantén el mismo formato de datos entre nodos
4. **Error Handling**: Considera valores por defecto para campos opcionales

## 🔗 Archivo del Workflow

Ver: `/workflows/email/email-merge-workflow.json`
