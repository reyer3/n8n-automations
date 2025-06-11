# 📋 Buenas Prácticas para n8n

## 🎯 Nomenclatura

### Nodos
- **Descriptivos**: `Procesar Facturas` mejor que `Set Node`
- **Consistentes**: Usar siempre el mismo patrón
- **Sin espacios especiales**: Evitar caracteres raros

### Variables
- **camelCase**: `emailConfig`, `userData`
- **Descriptivas**: `userEmail` mejor que `email`
- **Sin guiones**: Usar `userList` no `user-list`

## 🔧 Expresiones JavaScript

### Validaciones
```javascript
// ✅ Correcto: Validar antes de usar
{{ $json.email && $json.email.includes('@') ? $json.email : 'email@default.com' }}

// ❌ Incorrecto: No validar
{{ $json.email.toLowerCase() }}
```

### Manejo de Arrays
```javascript
// ✅ Correcto: Verificar si es array
{{ Array.isArray($json.data) ? $json.data : [$json.data] }}

// ❌ Incorrecto: Asumir que es array
{{ $json.data.map(item => item.name) }}
```

## 📊 Estructura de Datos

### Consistencia
- Mantener la misma estructura entre nodos
- Documentar campos esperados
- Usar tipos de datos apropiados

### Ejemplo de Estructura Estándar
```json
{
  "metadata": {
    "timestamp": "2025-06-11T16:55:06Z",
    "source": "api_webhook",
    "version": "1.0"
  },
  "data": {
    "user": { "id": 123, "name": "Juan" },
    "action": "create",
    "payload": {}
  }
}
```

## 🚀 Performance

### Optimización de Nodos
- **Limitar resultados**: Usar `limit` en queries
- **Filtrar temprano**: Aplicar filtros al inicio
- **Evitar loops innecesarios**: Usar operaciones batch

### Memoria
```javascript
// ✅ Eficiente: Procesar por chunks
{{ $json.items.slice(0, 100) }}

// ❌ Ineficiente: Procesar todo junto
{{ $json.items }} // Si items tiene 10k+ elementos
```

## 🔒 Seguridad

### Credenciales
- Nunca hardcodear passwords en workflows
- Usar n8n Credentials Manager
- Rotar claves regularmente

### Datos Sensibles
```javascript
// ✅ Correcto: Ocultar datos sensibles
{{ { email: $json.email, name: $json.name } }}

// ❌ Incorrecto: Exponer todo el objeto
{{ $json }} // Puede contener passwords, tokens, etc.
```

## 📝 Documentación

### Comentarios en Nodos
- Explicar lógica compleja
- Documentar dependencias
- Incluir ejemplos de entrada/salida

### Versionado
- Usar tags semánticos: `v1.0.0`
- Documentar cambios importantes
- Mantener compatibilidad hacia atrás

## 🔄 Testing

### Validación
- Probar con datos reales
- Validar casos edge
- Verificar manejo de errores

### Ejemplo de Test Data
```json
{
  "test_cases": [
    { "input": {"email": "test@example.com"}, "expected": "válido" },
    { "input": {"email": "invalid-email"}, "expected": "error" },
    { "input": {}, "expected": "usar_default" }
  ]
}
```

---

**Recuerda**: La consistencia es clave para workflows mantenibles y escalables.
