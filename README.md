# ceadt-web

Sitio institucional del Centro Especialista en Tratamiento de Adicciones (CEADT), Chile. Desarrollado con Astro, TypeScript y Tailwind CSS, con generación estática.

## Desarrollo

Requiere Node.js >= 22.12.0 y pnpm.

```sh
pnpm install
pnpm dev
```

## Validación y compilación

```sh
pnpm check
pnpm build
pnpm preview
```

La compilación genera el sitio en `dist/`. Dependencias y archivos generados no se versionan.

## Organización

- `src/pages`: páginas y rutas.
- `src/components`: componentes reutilizables.
- `src/data`: contenido institucional, noticias y recursos.
- `src/assets`: imágenes optimizadas por Astro.
- `public`: recursos estáticos.
- `docs`: arquitectura, diseño y revisión de contenidos.

## Pendientes

Los PDF de Artículos están pendientes de incorporación. Los formularios de derivación son una vista de diseño sin envío; los cuestionarios funcionan localmente sin persistencia ni interpretación clínica automatizada. Consultar `docs/content-review.md` para los pendientes de contenido.
