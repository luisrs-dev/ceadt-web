# Despliegue en VPS

El script `deploy-local.sh` adapta el flujo de Ficlin al sitio estático de CEADT. Compila en una carpeta temporal local y sube únicamente el resultado a `/home/repositories/ceadt/dist` mediante SSH y rsync. No instala dependencias en el VPS, no modifica Nginx ni recarga PM2.

## Requisitos

- Local: Node.js compatible con `package.json`, pnpm, dependencias instaladas, SSH y rsync.
- VPS: Bash, rsync, acceso SSH y permisos de escritura en `/home/repositories/ceadt` (la carpeta debe existir).
- Servidor web configurado para servir `/home/repositories/ceadt/dist`, con permisos de lectura y acceso a sus carpetas padre.

## Uso

```sh
pnpm install
./deploy-local.sh --build-only
./deploy-local.sh usuario@IP_DEL_VPS
```

El destino SSH se entrega como argumento; no hay credenciales guardadas en el proyecto. El script utiliza la configuración y autenticación SSH del equipo.

Antes de la primera subida, revisar el contenido del destino: los archivos con nombres coincidentes se reemplazan. No se utiliza `--delete`, por lo que los recursos antiguos permanecen; las páginas retiradas también deben limpiarse de forma explícita.

Para Nginx, la raíz del sitio debe ser `/home/repositories/ceadt/dist`. Las rutas de Astro se generan como carpetas con `index.html`; usar `index index.html` y una resolución como `try_files $uri $uri/ =404`. Falta conocer el dominio y la configuración actual del VPS para preparar el bloque completo y HTTPS sin afectar otras aplicaciones.

## Publicación temporal bajo /ceadt/

```sh
CEADT_BASE_PATH=/ceadt ./deploy-local.sh root@31.97.9.216
```

Astro usa la base indicada para sus recursos generados. La integración `scripts/base-path.mjs` completa las rutas locales escritas en HTML y CSS (navegación, imágenes públicas y fuentes), sin modificar enlaces externos o anclas. El encabezado normaliza la base para marcar el menú activo. Para un dominio en la raíz, omitir la variable o usar `/`.

En el VPS, las ubicaciones `/ceadt` y `/ceadt/` están dentro del bloque HTTP `server` de `default`; el alias apunta a `/home/repositories/ceadt/dist/`.
