# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a n8n-automations! Esta guía te ayudará a contribuir de manera efectiva.

## 🚀 Tipos de Contribuciones

### 1. 🔄 Nuevos Workflows
- Workflows completos y funcionales
- Casos de uso reales y probados
- Documentación detallada incluida

### 2. 📝 Expresiones JavaScript
- Snippets reutilizables
- Soluciones optimizadas
- Comentarios explicativos

### 3. 📚 Documentación
- Guías paso a paso
- Mejoras a docs existentes
- Traduciones

### 4. 🐛 Correcciones
- Fixes de workflows
- Correcciones de documentación
- Optimizaciones de rendimiento

## 📋 Estándares de Calidad

### Workflows
- ✅ JSON válido y funcional
- ✅ Nombres descriptivos de nodos
- ✅ Sin credenciales hardcodeadas
- ✅ Documentación incluida
- ✅ Ejemplo de datos de entrada/salida

### Expresiones
- ✅ Sintaxis JavaScript válida
- ✅ Comentarios explicativos
- ✅ Manejo de casos edge
- ✅ Ejemplos de uso

### Documentación
- ✅ Español claro y conciso
- ✅ Ejemplos prácticos
- ✅ Screenshots si es necesario
- ✅ Enlaces funcionales

## 🔄 Proceso de Contribución

### 1. Preparación
```bash
# Fork del repositorio
git clone https://github.com/TU_USUARIO/n8n-automations.git
cd n8n-automations

# Crear rama para tu contribución
git checkout -b feature/mi-nueva-automatizacion
```

### 2. Desarrollo
- Desarrolla tu contribución
- Sigue las convenciones del proyecto
- Añade documentación apropiada
- Prueba tu código/workflow

### 3. Commit
```bash
# Commits descriptivos usando Conventional Commits
git add .
git commit -m "feat: añadir workflow de procesamiento de facturas"

# Tipos de commit:
# feat: nueva funcionalidad
# fix: corrección de bugs
# docs: cambios de documentación
# style: formateo, sin cambios de lógica
# refactor: refactoring de código
# test: añadir o modificar tests
```

### 4. Pull Request
- Push a tu fork
- Crear PR hacia `main`
- Describir claramente los cambios
- Incluir contexto y motivación
- Referenciar issues relacionados

## 📁 Estructura de Archivos

### Nuevos Workflows
```
workflows/
├── categoria/
│   ├── nombre-workflow.json
│   └── README.md
```

### Nuevas Expresiones
```
expressions/
├── categoria-funciones.js
```

### Nueva Documentación
```
docs/
├── guia-nombre.md
examples/
├── ejemplo-caso-uso.md
```

## 🎯 Naming Conventions

### Archivos y Carpetas
- `kebab-case`: `mi-nuevo-workflow.json`
- Sin espacios ni caracteres especiales
- Nombres descriptivos y concisos

### Nodos n8n
- Nombres descriptivos: `Procesar Datos`
- Sin abreviaciones confusas
- Consistencia en el proyecto

### Variables
- `camelCase`: `emailConfig`
- Nombres significativos
- Sin prefijos innecesarios

## ✅ Checklist Pre-Submit

### Para Workflows
- [ ] JSON es válido
- [ ] Workflow funciona correctamente
- [ ] Sin credenciales expuestas
- [ ] Nodos tienen nombres descriptivos
- [ ] Incluye documentación
- [ ] Ejemplo de datos incluido

### Para Expresiones
- [ ] Sintaxis JavaScript correcta
- [ ] Comentarios explicativos
- [ ] Manejo de errores
- [ ] Ejemplo de uso

### Para Documentación
- [ ] Ortografía y gramática correctas
- [ ] Enlaces funcionan
- [ ] Ejemplos son precisos
- [ ] Formato Markdown correcto

## 🐛 Reportar Issues

### Información Requerida
- **Descripción clara** del problema
- **Pasos para reproducir**
- **Comportamiento esperado**
- **Comportamiento actual**
- **Versión de n8n**
- **Screenshots** (si aplica)

### Template de Issue
```markdown
## Descripción
[Descripción clara del problema]

## Pasos para Reproducir
1. [Primer paso]
2. [Segundo paso]
3. [Ver error]

## Comportamiento Esperado
[Qué debería pasar]

## Comportamiento Actual
[Qué pasa realmente]

## Información Adicional
- Versión n8n: [ej. 1.0.5]
- Navegador: [ej. Chrome 91]
- Sistema: [ej. macOS 12.0]
```

## 💬 Comunicación

- **Issues**: Para bugs y solicitudes de features
- **Discussions**: Para preguntas generales
- **PR Reviews**: Comentarios constructivos y específicos

## 🎉 Reconocimiento

Los contribuyentes serán reconocidos en:
- README principal
- Changelog del proyecto
- Créditos en workflows específicos

---

**¡Gracias por hacer que n8n-automations sea mejor para todos! 🚀**
