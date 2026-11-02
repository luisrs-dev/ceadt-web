# CEADT Web

Sitio institucional del Centro Especialista en Tratamiento de Adicciones (CEADT), Chile. Desarrollado con Astro, TypeScript y Tailwind CSS, con generación estática.

El proyecto se compila en el equipo local y Nginx sirve los archivos generados en el VPS. No necesita un proceso de Node.js, PM2 ni un backend para mostrar las páginas actuales.

## Requisitos locales

- Node.js **22.12.0 o superior**, según `package.json`.
- pnpm como gestor de paquetes.
- Git para descargar y actualizar el código.
- Bash, SSH y rsync para ejecutar el despliegue desde macOS o Linux; en Windows, utilizar un entorno compatible como WSL.

Comprueba las herramientas:

```sh
node --version
pnpm --version
```

Para desplegar, comprueba también:

```sh
command -v bash ssh rsync
```

## Descargar e instalar el proyecto

Si aún no tienes una copia local:

```sh
git clone https://github.com/luisrs-dev/ceadt-web.git
cd ceadt-web
pnpm install --frozen-lockfile
```

Si ya tienes el proyecto, abre una terminal en su carpeta. En el equipo original:

```sh
cd /Users/luissebastianreyessilva/Documents/LReyes/Websites/ceadt-web
pnpm install --frozen-lockfile
```

Vuelve a instalar las dependencias cuando cambien `package.json` o `pnpm-lock.yaml`. No se necesitan credenciales del VPS ni un archivo `.env` para levantar el sitio actual en local.

## Levantar el sitio en local

Desde la raíz del proyecto:

```sh
pnpm dev
```

Abre **http://localhost:4321/**. La terminal mostrará la URL efectiva si ese puerto está ocupado. Los cambios en los archivos se reflejan durante el desarrollo. Para detener el servidor, presiona **Ctrl+C** en esa terminal.

Para comprobar el desarrollo bajo la misma ruta temporal utilizada en el VPS:

```sh
CEADT_BASE_PATH=/ceadt pnpm dev
```

Abre **http://localhost:4321/ceadt/**. Para una revisión fiel de los enlaces y recursos finales bajo esa ruta, utiliza la compilación y vista previa del apartado siguiente: la integración que completa las rutas locales se ejecuta al compilar.

## Validar y probar la compilación

```sh
pnpm check
pnpm build
pnpm preview
```

- `pnpm check`: revisa los tipos y los archivos Astro.
- `pnpm build`: genera el sitio estático en `dist/`.
- `pnpm preview`: sirve la compilación local para revisarla; consulta la URL que muestra la terminal, normalmente http://localhost:4321/.

`preview` no recompila: si cambias el código, vuelve a ejecutar `pnpm build`. Para reproducir la publicación temporal del VPS:

```sh
CEADT_BASE_PATH=/ceadt pnpm build
CEADT_BASE_PATH=/ceadt pnpm preview
```

Abre la ruta `/ceadt/` en la URL indicada por la terminal. Para regresar a una compilación en la raíz del dominio, ejecuta nuevamente `pnpm build` sin esa variable.

## Datos del despliegue actual

| Dato | Valor |
| --- | --- |
| Conexión SSH | `root@31.97.9.216` |
| Carpeta del proyecto en el VPS | `/home/repositories/ceadt` |
| Carpeta de archivos publicados | `/home/repositories/ceadt/dist` |
| URL temporal | http://31.97.9.216/ceadt/ |
| Base necesaria al compilar | `/ceadt` |
| Servidor web | Nginx |

GitHub almacena el código. Subir cambios a GitHub **no actualiza automáticamente el VPS**: el despliegue se ejecuta por separado.

## Subir los archivos al VPS

Ejecuta estos comandos **en tu equipo local**, desde la carpeta del proyecto; no dentro de una sesión SSH.

### 1. Preparar el acceso

Comprueba que puedes conectarte:

```sh
ssh root@31.97.9.216
```

La autenticación utiliza la clave SSH o contraseña configurada en tu equipo. Al terminar la comprobación, vuelve al equipo local con:

```sh
exit
```

En el VPS deben estar disponibles Bash y rsync, y debe existir `/home/repositories/ceadt` con permisos de escritura para el usuario SSH. Nginx necesita permisos de lectura sobre `dist/` y acceso a sus carpetas padre. Esta preparación ya se realizó durante la publicación inicial.

### 2. Probar sin subir archivos

```sh
bash ./deploy-local.sh --help
CEADT_BASE_PATH=/ceadt bash ./deploy-local.sh --build-only
```

`--build-only` ejecuta la validación y una compilación temporal. No se conecta al VPS ni conserva esa compilación temporal al terminar.

### 3. Desplegar

El script utiliza `/ceadt` como base predeterminada para evitar publicar recursos en una ruta incorrecta. Para indicar explícitamente la URL temporal actual:

```sh
CEADT_BASE_PATH=/ceadt bash ./deploy-local.sh root@31.97.9.216
```

El script:

1. Comprueba las herramientas y las dependencias locales.
2. Ejecuta `pnpm check`; si falla, detiene el despliegue.
3. Compila el sitio en una carpeta temporal con la base indicada.
4. Comprueba el acceso y el destino remoto por SSH.
5. Transfiere los archivos compilados con rsync a `/home/repositories/ceadt/dist`.
6. Elimina la carpeta temporal local al terminar.

No hace falta ejecutar `pnpm build` antes: el script ya compila. Tampoco utiliza el contenido de tu `dist/` local para la subida.

Solo se transfieren los archivos estáticos generados; no se suben `node_modules`, el código fuente ni credenciales. Los archivos remotos con nombres coincidentes se reemplazan. El script **no utiliza `--delete`**: conserva recursos antiguos y no elimina automáticamente páginas retiradas. Cualquier limpieza debe revisarse por separado. La transferencia no implementa un sistema de versiones ni rollback automático.

El script no configura Nginx, no instala dependencias en el VPS y no recarga PM2. Para actualizar únicamente contenido o estilos, no es necesario recargar Nginx.

### 4. Comprobar la publicación

Abre **http://31.97.9.216/ceadt/** y comprueba el menú, imágenes y páginas interiores. Si ves una versión anterior, recarga sin caché con **Cmd+Shift+R** en macOS o **Ctrl+Shift+R** en Windows/Linux.

Puedes comprobar la respuesta HTTP desde una terminal:

```sh
curl -I http://31.97.9.216/ceadt/
curl -I http://31.97.9.216/ceadt/programas/hombres/
```

## Configuración temporal de Nginx

Las siguientes ubicaciones deben estar **dentro del bloque `server` HTTP que atiende la IP** en `/etc/nginx/sites-available/default`. Ya están configuradas; no las dupliques.

```nginx
location = /ceadt {
    return 301 /ceadt/;
}

location /ceadt/ {
    alias /home/repositories/ceadt/dist/;
    index index.html;
}
```

Solo si modificas la configuración de Nginx, valida y recarga desde el VPS:

```sh
nginx -t && systemctl reload nginx
```

Si la validación falla, corrige el error antes de recargar. No reemplaces el archivo `default` completo: también contiene la configuración de otras aplicaciones.

## Publicación futura en un dominio

Cuando CEADT se sirva desde la raíz de un dominio, la base será `/`. En ese momento el despliegue será:

```sh
CEADT_BASE_PATH=/ bash ./deploy-local.sh root@31.97.9.216
```

Antes de hacerlo, configura el dominio en Nginx con raíz `/home/repositories/ceadt/dist`, sus DNS y HTTPS. Esta compilación sustituye la utilizada por `/ceadt/`: no cambies la base mientras la URL temporal siga siendo el acceso que necesitas mantener.

## Problemas frecuentes

| Problema | Qué revisar |
| --- | --- |
| `pnpm: command not found` | Instalar pnpm y comprobar que esté disponible en el PATH de la terminal. |
| Error por versión de Node.js | Comprobar `node --version` y el requisito de `package.json`. |
| Faltan dependencias | Ejecutar `pnpm install --frozen-lockfile` en la raíz del proyecto. |
| `Permission denied` al ejecutar el script | Usar `bash ./deploy-local.sh ...` o dar permiso con `chmod +x deploy-local.sh`. |
| SSH rechaza el acceso | Probar `ssh root@31.97.9.216` y revisar la autenticación configurada. |
| El script falla al verificar el VPS | Comprobar rsync, la existencia de `/home/repositories/ceadt` y los permisos. |
| La página aparece sin estilos o imágenes | Para la URL temporal, volver a desplegar con `CEADT_BASE_PATH=/ceadt`. |
| Nginx muestra `location directive is not allowed here` | Colocar los bloques `location` dentro de `server`, antes de su llave de cierre. |
| HTTP 403 | Revisar permisos de lectura y acceso a las carpetas padre, y la existencia de `index.html`. |
| HTTP 404 en `/ceadt/` | Revisar el alias de Nginx y que exista `/home/repositories/ceadt/dist/index.html`. |

## Organización del proyecto

- `src/pages`: páginas y rutas.
- `src/components`: componentes reutilizables.
- `src/data`: contenido institucional, contactos, noticias y artículos.
- `src/assets`: imágenes optimizadas por Astro.
- `public`: recursos estáticos, como fuentes y logotipos.
- `scripts/base-path.mjs`: integración para completar rutas locales al compilar bajo una subruta.
- `deploy-local.sh`: validación, compilación y transferencia al VPS.
- `docs`: arquitectura, diseño, revisión de contenido y detalles de despliegue.

`dist/`, `node_modules/` y `.astro/` son generados y no se versionan. Consulta también [la guía de despliegue](docs/deployment.md) y [la arquitectura](docs/architecture.md).

## Funcionalidades pendientes

Los PDF de Artículos están pendientes de incorporación. Los formularios de derivación son una vista de diseño sin envío; los cuestionarios funcionan localmente sin persistencia ni interpretación clínica automatizada. Consulta [la revisión de contenido](docs/content-review.md) para conocer los pendientes.
