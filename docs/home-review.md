# Home — revisión técnica

## Estado actual

El hero aprobado conserva fotografía de fondo completo, texto blanco centrado
y dos acciones. Se retiró la segunda variante que se mostraba para comparación.
El componente mantiene su API split/cover para no ampliar la refactorización,
pero Home solo renderiza cover.

La superposición pasa del 60% al 55% de negro: sobre el píxel más claro posible
el contraste de blanco sigue siendo aproximadamente 4.74:1. El fondo usa
object-position 50% 55% en móvil y center desde sm. La altura mínima usa clamp,
sin altura máxima que recorte contenido; los botones se apilan en móvil.

Una sola imagen tiene eager y fetchpriority high, con WebP, srcset y sizes.
Quiénes somos reutiliza la fotografía con lazy porque no hay alternativa real.
Programas usa SVG discreto sin placeholders técnicos ni fotografías ficticias.

## Contenido y navegación

Ver [content-review.md](./content-review.md) para fuentes y confirmaciones.
Los contactos se conservan intactos en src/data/contact.ts. publicNavigation
expone solo Inicio y anclas de Home; las rutas futuras no se publican en enlaces.
Programas enlaza a los contactos correspondientes; recursos a Contacto.
La página /design-system se mantiene sin cambios y conserva noindex.

## Accesibilidad y responsive

Header y Footer compartidos se conservan. Menú nativo details/summary con
aria-expanded sincronizado, Escape, retorno de foco y cierre al activar un
enlace. Al seleccionar una sección, el foco pasa al destino; al entrar en xl
se cierra el menú móvil. Su panel tiene altura limitada y scroll vertical.

Pautas revisadas en código para 375, 768, 1280 y 1440 px: botones apilados en
móvil; programas/contactos a dos columnas desde md; recursos a dos desde md y
tres desde lg; menú de escritorio desde xl; correos con ajuste de palabra y
cards con min-w-0. Quiénes somos conserva imagen izquierda desde lg.
La revisión visual de esos tamaños y la interacción con teclado en navegador
siguen pendientes: esta sesión no dispone de herramienta de navegador. No se
declara validación visual ni auditoría WCAG completa.

## Validación ejecutada

pnpm astro check: 23 archivos, sin errores, advertencias ni hints.
pnpm build: correcto, dos páginas estáticas y cinco variantes WebP.
git diff --check: correcto.
Auditoría del HTML: un h1/main, IDs únicos, anclas existentes, sin enlaces a
rutas interiores no implementadas, contactos tel/mailto y noindex preservado.


## Adaptación visual a las capturas de Centro Volver

Se adopta su orden editorial: header claro, etiquetas de sección con línea de
acento, títulos mayores, más espacio vertical y tarjetas con padding generoso.
Se conservan la paleta CEADT, el footer oscuro y el hero de fondo completo
aprobado previamente. No se copian imágenes, servicios, WhatsApp ni pasos clínicos.

Header presenta el símbolo original mediante recorte CSS del recurso existente
junto a una denominación tipográfica legible sobre blanco; el archivo del logo
permanece intacto. MobileMenu utiliza las mismas superficies claras y foco azul.
SectionHeading ofrece eyebrow y size editorial opcionales; el tamaño estándar
continúa siendo el predeterminado y /design-system no se modifica.

FaqSection utiliza details/summary nativos, sin scripts nuevos, con tres
respuestas limitadas a información de contacto y recursos ya existentes.
Validación: pnpm astro check correcto (24 archivos), pnpm build correcto,
git diff --check correcto; HTML con enlaces internos verificados y un h1/main.
La revisión visual a 375, 768, 1280 y 1440 px sigue pendiente por falta de
herramienta de navegador en esta sesión.
