// 🔧 Expresiones para Manipulación de Datos en n8n

// ===== ARRAYS =====

// Convertir array a string delimitado por comas
// {{ $json.arrayField.join(', ') }}

// Crear array desde dato individual
// {{ [$json.data] }}

// Verificar si es array, sino convertir
// {{ Array.isArray($json.data) ? $json.data : [$json.data] }}

// Filtrar array por condición
// {{ $json.items.filter(item => item.status === 'active') }}

// Mapear array transformando elementos
// {{ $json.users.map(user => ({ name: user.name, email: user.email })) }}

// ===== OBJETOS =====

// Mergear dos objetos
// {{ Object.assign({}, $('Node1').item.json, $('Node2').item.json) }}

// Mergear objeto con nueva propiedad
// {{ Object.assign({}, $json, { newField: 'newValue' }) }}

// Extraer claves de objeto
// {{ Object.keys($json) }}

// Extraer valores de objeto
// {{ Object.values($json) }}

// ===== FECHAS =====

// Fecha actual ISO
// {{ $now.toISO() }}

// Solo fecha (YYYY-MM-DD)
// {{ $now.toISO().split('T')[0] }}

// Fecha formateada personalizada
// {{ $now.toFormat('yyyy-MM-dd HH:mm:ss') }}

// ===== STRINGS =====

// Capitalizar primera letra
// {{ $json.text.charAt(0).toUpperCase() + $json.text.slice(1) }}

// Limpiar espacios y normalizar
// {{ $json.text.trim().toLowerCase() }}

// Reemplazar caracteres
// {{ $json.text.replace(/[^a-zA-Z0-9]/g, '_') }}

// ===== VALIDACIONES =====

// Verificar si campo existe y no está vacío
// {{ $json.field && $json.field !== '' }}

// Valor por defecto si está vacío
// {{ $json.field || 'valor_por_defecto' }}

// Verificar email válido
// {{ /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($json.email) }}
