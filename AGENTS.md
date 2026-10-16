# AGENTS.md — CEADT Website

## Project overview

Sitio web institucional del Centro Especialista en Tratamiento de Adicciones (CEADT), Chile.

El proyecto reemplazará progresivamente un sitio existente desarrollado con WordPress.

## Technology stack

- Astro con generación estática.
- TypeScript estricto.
- Tailwind CSS 4.
- HTML semántico.
- JavaScript nativo únicamente cuando sea necesario.
- pnpm como gestor de paquetes.

## Architecture

- Utilizar componentes Astro reutilizables.
- Mantener layouts compartidos.
- Separar datos institucionales de componentes visuales.
- Organizar componentes por responsabilidad.
- Evitar abstracciones innecesarias.
- Preferir soluciones simples y mantenibles.

## Coding conventions

- Utilizar TypeScript para la lógica.
- Definir interfaces para las props de componentes.
- Evitar `any`.
- Usar nombres descriptivos en inglés para archivos, variables y componentes.
- Mantener los textos visibles al usuario en español.
- Utilizar Tailwind para los estilos.
- Evitar CSS personalizado salvo estilos globales o casos justificados.
- No instalar dependencias sin explicar su necesidad.

## UI/UX

- Diseño moderno, profesional, accesible y responsive.
- Identidad visual asociada a salud, confianza y cercanía.
- Mobile-first.
- Mantener consistencia en tipografía, colores y espaciados.
- Evitar componentes visualmente recargados.
- Respetar `prefers-reduced-motion`.

## Accessibility

- Utilizar HTML semántico.
- Objetivo de accesibilidad WCAG 2.2 AA.
- Navegación por teclado.
- Contrastes adecuados.
- Estados de foco visibles.
- Textos alternativos para imágenes informativas.
- Formularios correctamente etiquetados.

## Performance and SEO

- Priorizar HTML estático.
- Minimizar JavaScript enviado al navegador.
- Optimizar imágenes.
- Configurar títulos y descripciones por página.
- Mantener URLs limpias.
- Evitar dependencias pesadas.

## Content

- No inventar información institucional.
- No modificar teléfonos, correos o datos de contacto sin confirmación.
- No inventar convenios, acreditaciones ni servicios clínicos.
- Utilizar placeholders identificados cuando falte contenido.
- No implementar almacenamiento de información sensible sin requisitos explícitos.

## Codex workflow

Antes de implementar una tarea:

1. Revisar los archivos relevantes.
2. Explicar brevemente el enfoque.
3. Implementar únicamente el alcance solicitado.
4. Evitar refactorizaciones no relacionadas.
5. Ejecutar las validaciones disponibles.
6. Informar archivos modificados y resultados.
7. No realizar commits automáticamente.

No implementar múltiples páginas si solo se solicita una.