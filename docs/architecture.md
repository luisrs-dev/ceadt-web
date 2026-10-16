# Arquitectura de CEADT

## Alcance y análisis inicial

El proyecto ya incluía Astro 7, Tailwind CSS 4 mediante Vite y TypeScript
estricto. Inicio contenía el documento HTML completo; Layout y Welcome eran
restos de la plantilla. Se revisaron AGENTS.md y las guías oficiales antes de
implementar esta base. Home implementa las secciones institucionales y se conserva la herramienta visual
en /design-system. Las confirmaciones de contenido se registran en docs/content-review.md, fuera de Home.
Ver [home-review.md](./home-review.md) para decisiones técnicas y límites de validación,
y [content-review.md](./content-review.md) para fuentes y pendientes editoriales.

## Estructura y responsabilidades

```text
src/
├── assets/                 # Recursos importables y procesables por Astro
├── components/
│   ├── ui/                 # Container, Button y SectionHeading
│   ├── layout/             # Header, Footer y MobileMenu
│   └── sections/           # Secciones de Home y placeholder de fotografía
├── config/
│   └── site.ts             # Nombre e idioma compartidos
├── data/                   # Contactos históricos y rutas planificadas
├── layouts/
│   ├── BaseLayout.astro    # Documento HTML y metadatos comunes
│   └── Layout.astro        # Heredado de la plantilla, sin uso
├── pages/
│   ├── index.astro         # Composición de Home
│   ├── nosotros.astro      # Primera página interior institucional
│   └── design-system.astro # Referencia visual temporal con noindex
└── styles/
    ├── global.css          # Entrada de Tailwind y estilos base
    └── tokens.css          # Tokens de diseño con @theme
public/                     # Recursos copiados sin transformación
docs/
├── architecture.md         # Decisiones técnicas
└── references/             # Referencias existentes, no publicadas
```

Welcome.astro, Layout.astro y los recursos Astro de la plantilla se conservan,
pero Inicio no los utiliza. Las páginas nuevas deben utilizar BaseLayout.

Crear las siguientes carpetas cuando exista contenido real, evitando archivos
vacíos y abstracciones anticipadas:

- `components/ui/`: elementos pequeños reutilizables.
- `components/layout/`: cabecera, navegación y pie compartidos.
- `components/sections/`: bloques cuando su reutilización lo justifique.
- `data/`: datos institucionales confirmados y tipados, separados de la UI.
- `content/`: contenido editorial; evaluar colecciones y esquemas de Astro
  cuando existan requisitos y material aprobado.
- `types/`: interfaces con varios consumidores; las props locales permanecen
  junto al componente.

`pages/` contiene exclusivamente rutas. No crear páginas institucionales hasta
que se soliciten. Nombres de archivos y variables en inglés; textos en español.

## Layout

BaseLayout importa los estilos una vez y exige `title` y `description` mediante
una interfaz Props. El título añade CEADT; el idioma es es-CL. Ofrece un slot
principal y slots opcionales `head`, `header` y `footer`. Header y footer se
renderizan fuera del main; /design-system conserva su layout sin navegación pública.

El layout es propietario del único `main`, con `id="main-content"`, un destino
programáticamente enfocable y enlace para saltar al contenido. Cada página
aporta su h1 y contenido; no debe anidar otro main ni repetir el documento HTML.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Inicio" description="Descripción aprobada de esta página.">
  <h1>Inicio</h1>
</BaseLayout>
```

No se inventa un dominio ni metadatos institucionales. Configurar canonical,
Open Graph y favicon cuando existan valores aprobados. Los favicons de la
plantilla permanecen en public, pero el layout no los referencia.

## Estilos y tokens

Tailwind CSS 4 utiliza el plugin Vite existente. global.css importa Tailwind y
tokens.css; no se requiere tailwind.config.js. @theme genera utilidades como
`bg-background`, `text-foreground`, `text-muted`, `text-primary`,
`rounded-control` y `max-w-content`.

La identidad base, Inter local y las reglas de accesibilidad se documentan en
[design-system.md](./design-system.md). Los tres componentes básicos se encuentran
en `components/ui/`: Container, Button y SectionHeading. Los tokens incluyen
colores semánticos, radios, sombra discreta y anchos de contenido y lectura.
Se mantienen las escalas de espaciado, tipografía y breakpoints de Tailwind.
Preferir utilidades en componentes; reservar CSS global para fuente local,
reglas comunes, foco visible y reducción de movimiento.

## Renderizado y dependencias

astro.config.mjs declara `output: 'static'`. La compilación genera dist sin
adaptador ni servidor de producción. Se utilizan componentes Astro y TypeScript
con astro/tsconfigs/strict. Sharp es la única dependencia añadida para optimizar fotografías con Astro.
El menú móvil usa JavaScript nativo mínimo.

src/assets permite recursos procesados por Astro. public contiene archivos de
URL directa que se copian al resultado. docs/references no se publica.

## Validación y desarrollo

- `pnpm build`: compilación de Astro y generación de HTML/CSS estáticos.
- `git diff --check`: revisión de espacios del diff.
- `pnpm check` (o `pnpm astro check`): comprobación de tipos y diagnósticos
  de Astro mediante @astrojs/check y TypeScript 6, como dependencias de desarrollo.
  Se limita TypeScript a la versión mayor 6 porque TypeScript 7 no expone todavía
  la API programática que necesita el comprobador.
- No hay scripts de tests o lint. El build no sustituye la comprobación de tipos.
- Desarrollo: `pnpm exec astro dev --background`. Administrar mediante
  `pnpm exec astro dev status`, `pnpm exec astro dev logs` y
  `pnpm exec astro dev stop`, según las instrucciones del proyecto.

## Referencias consultadas

- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Estilos Astro](https://docs.astro.build/en/guides/styling/)
- [Rutas Astro](https://docs.astro.build/en/guides/routing/)
- [Tokens Tailwind CSS 4](https://tailwindcss.com/docs/theme)


## Patrón para páginas interiores

PageHeader.astro recibe title, description y breadcrumbs tipados, con un h1 y
breadcrumb semántico; el último elemento representa la página actual.
InstitutionalCta.astro centraliza la invitación final con enlaces a programas y
contactos existentes en Home. Nosotros reutiliza ambos y mantiene Header,
Footer y BaseLayout, sin modificar los tokens ni el diseño de Home.

Los textos institucionales y ejes temáticos se separan en data/institutional.ts.
Misión y visión se componen en la página: no se crea una abstracción para una
sola cuadrícula. /nosotros tiene metadatos propios y no configura canonical
porque astro.config.mjs aún no define un dominio.

Validación de esta etapa: pnpm astro check sin diagnósticos (28 archivos), build
estático correcto con tres rutas, revisión de HTML de Home/Nosotros y diff limpio.
Diseño previsto para 375, 768, 1280 y 1440 px: columnas desde md/lg, grilla de
compromisos en 1/2/4 columnas y CTA apilado en móvil. La inspección visual de
esos tamaños y la navegación real por teclado quedan pendientes por no disponer
de herramienta de navegador en esta sesión.


## Sección Programas

src/data/programs.ts define Program y referencia Contact desde contact.ts.
ProgramCard se comparte entre Home y catálogo conservando la composición visual.
ProgramContact se comparte entre catálogo y detalles; recibe Contact y el nivel
de encabezado. ProgramDetail contiene la estructura única de ambas páginas,
con layout, metadatos, breadcrumb, ingreso, derivación y contacto específico.
Las páginas hombres.astro y mujeres.astro solo seleccionan datos y componen
ProgramDetail. No hay backend ni dependencias adicionales.

Rutas estáticas: /programas, /programas/hombres y /programas/mujeres.
isNavigationActive centraliza coincidencia exacta o descendiente para que
Programas permanezca activo en los dos detalles, sin coincidir con rutas de
nombre parecido. Los demás destinos pendientes permanecen como estaban.
InstitutionalCta y el hero enlazan al catálogo real; Nosotros conserva su diseño.

Validaciones: pnpm astro check sin diagnósticos (35 archivos), build correcto
con seis rutas, diff limpio y auditoría de todos los destinos internos del HTML.
Grillas responsivas sin anchuras rígidas y controles que ajustan texto; la
inspección visual a 375, 768, 1280 y 1440 px continúa pendiente al no disponer
de herramienta de navegador en esta sesión.


Program.overview es opcional y contiene objetivo, etapas y categorías de actividades.
Solo Hombres dispone de contenido desde las capturas adicionales del usuario.
ProgramDetail muestra un índice de anclas y omite etapas/actividades cuando no hay
datos. ProgramCard permite abrir el detalle desde el título, el botón y accesos
directos a ingreso y derivación. No se añaden scripts ni dependencias.


ProgramGuidance concentra ingreso y derivación y conserva las anclas públicas.
Program.admission incorpora pasos, alternativas y audiencia solo cuando existe
contenido aportado; Mujeres conserva orientación general. Los contactos siguen
centralizados y no se implementan formularios ni almacenamiento de datos.


ProgramAdmission.panels almacena los cuatro acordeones tipados de Hombres.
ProgramGuidance usa details/summary nativos sin scripts, con el primero abierto
y varias secciones expandibles simultáneamente. Se utilizan listas HTML, foco
visible y texto adaptable. Tipos, build, estructura y anclas correctos; requisitos
COVID no confirmados excluidos del HTML.


## Índice persistente en los detalles de programas

ProgramNavigation recibe las secciones disponibles de ProgramDetail. Escritorio
desde lg: columna lateral sticky dentro del contenedor de contenido, sin invadir
el footer. Móvil y tablet: selector details/summary sticky con panel desplegable.
Se sincronizan aria-current=location, etiqueta de sección y aria-expanded.
Escape cierra y devuelve foco; seleccionar una sección cierra el panel y enfoca
el destino. Se conserva navegación nativa por hash y márgenes de desplazamiento.
El scroll usa un listener pasivo y requestAnimationFrame para agrupar lecturas.
Sin JavaScript, enlaces y selector nativo siguen funcionando; la sección actual
no se actualiza automáticamente. El header principal es sticky; el índice queda debajo de su altura medida.
Etapas se presentan en dos columnas en escritorio para preservar ancho de lectura.
La inspección visual y funcional en navegador continúa pendiente en esta sesión.


## Diseño del formulario de derivación

ReferralForm.astro recibe Contact centralizado y se usa en Hombres. Replica la
composición editorial de referencia con fieldsets, labels visibles, campos en
1/2 columnas, textarea y selector nativo de archivos múltiples. El script solo
muestra nombres mediante textContent y limpia la selección con reset. No lee
el contenido de los archivos, no realiza peticiones ni utiliza almacenamiento.
La vista previa usa method=dialog, submit deshabilitado y preventDefault como
protección adicional; los campos no tienen name ni existe action de envío.
No hay backend, servicio externo ni dependencias nuevas.


## Tests

/tests lista los recursos y /tests/compromiso-biopsicosocial compone el primer
cuestionario. data/biopsychosocial-test.ts centraliza TestQuestion y 15 preguntas.
BiopsychosocialQuestionnaire usa fieldset/legend, radios nativos requeridos,
progreso, revisión mediante elementos DOM y reset. JavaScript solo en cliente;
con suma local de 1/2/3 puntos, sin interpretación clínica, servicios externos ni persistencia. El formulario usa
method=dialog y preventDefault; el botón de revisión solo se habilita con JS.
Sin JS se pueden leer las preguntas, sin simular envío ni resultados.
Los rangos y la interpretación están pendientes en docs/content-review.md.
El diseño es fluido con controles de texto ajustable, ancho de lectura y acciones
apiladas en móvil. Validación visual e interacción real en navegador pendientes
por falta de herramienta de navegador en esta sesión.


Pruebas de la lógica cliente del test mediante su script TypeScript ejecutado
con un DOM simulado: sumas mínima 15, intermedia 30 y máxima 45, resumen de
15 respuestas, bloqueo de cuestionario incompleto y reset de progreso/resumen.
Auditoría HTML: 15 fieldsets y 45 radios requeridos, tres opciones 1/2/3 por
grupo, anclas y enlaces de ocho rutas correctos. pnpm astro check sin errores
ni advertencias (42 archivos), build correcto. Esto no sustituye prueba visual
o de interacción real con teclado en navegador.


## Cuestionarios compartidos

Questionnaire.astro recibe preguntas, instrucciones y descripción de puntuación;
soporta numeración explícita y escalas de distinta longitud, validación, progreso,
resumen, suma y reset locales. BiopsychosocialQuestionnaire conserva su interfaz
como wrapper de los datos originales. Alerta usa datos propios en
data/relapse-alert-test.ts y la ruta /tests/alerta-de-recaidas.
Ambos accesibles desde Home y Tests, sin servicios ni dependencias nuevas.
Pruebas del script con DOM simulado: mínimo/intermedio/máximo 28/112/196 en
Alerta y 15/30/45 en Biopsicosocial, bloqueo incompleto y limpieza correctos.
HTML: 28 grupos de siete radios requeridos (196 opciones), pregunta 7 incluida,
45 radios del test previo y enlaces internos de nueve rutas verificados.
Tipos sin diagnósticos (45 archivos) y compilación estática correctos.
Inspección visual e interacción real en navegador pendientes en esta sesión.


## Test de Seguimiento

/tests/seguimiento utiliza FollowUpQuestionnaire y FollowUpQuestion para
selección simple/múltiple y datos de egreso, definidos en follow-up-test.ts.
Tres bloques de consumo se generan desde datos compartidos, sin duplicar la
captura repetida. Se reutilizan layout, encabezado y UI del sitio. La revisión
y el progreso son locales, sin puntuación, almacenamiento ni servicios.
El formulario usa method=dialog y bloqueo de envío por JS; el botón de revisión
se habilita solo cuando el script está disponible. El resumen usa textContent.
Pruebas con DOM simulado: selección múltiple, exclusión de Ninguna, progreso,
resumen parcial, ocultación/limpieza al editar y reset correctos. Auditoría HTML:
17 fieldsets y tres datos opcionales, 40 checkboxes y enlaces de diez rutas.
pnpm astro check sin diagnósticos (49 archivos), build estático correcto y diff
limpio. La inspección visual en navegador sigue pendiente en esta sesión.


## Convenios

/convenios usa PageHeader y componentes UI existentes. agreements.ts centraliza
seis registros tipados con ámbito, propósito, descripción y enlace opcional.
Una única página presenta todo el contenido con índice de anclas y tarjetas de
una columna en móvil y dos desde md; sin modales, páginas de detalle, filtros ni
scripts adicionales. Header/Footer reciben el destino real mediante navegación
centralizada. Fuente y vigencia registradas en content-review.md.


## Retorno al menú y header persistente

Header usa position sticky y conserva su espacio original. ResizeObserver
sincroniza --site-header-height, con fallback CSS de 6rem. El índice lateral
y móvil de programas y los paneles móviles usan esa altura; scroll-padding-top
evita que los destinos queden ocultos. No hay dos barras superpuestas.
BackToTop se renderiza solo en layouts con header: enlace nativo al body
#page-top, visible con JS después de 500px y siempre disponible sin JS.
Al activarlo, el foco vuelve al enlace de inicio del header y scrollTo lleva
al inicio; respeta prefers-reduced-motion. Usa listener pasivo y rAF, no librerías.
No se oculta mientras conserva foco de teclado. El botón respeta safe-area.
Tipos/build y estructura HTML revisados; interacción visual en navegador
continúa pendiente por falta de esa herramienta en esta sesión.

## Noticias

`src/data/news.ts` separa los artículos del diseño. `/noticias` presenta tarjetas ordenadas por fecha y `src/pages/noticias/[slug].astro` genera los detalles estáticos. `NewsCard.astro` reutiliza el diseño de tarjetas y las imágenes locales se optimizan con Astro. La primera imagen original mide 400 × 250 px: el detalle limita su ancho a 400 px para evitar ampliarla. No se agregan dependencias ni JavaScript para esta sección. Noticias está disponible en la navegación compartida. El artículo conserva su fecha y distingue explícitamente el contexto histórico.

## Artículos

`src/pages/articulos.astro` presenta un catálogo estático responsive de cinco recursos, con datos en `src/data/articles.ts` y portadas locales optimizadas en `src/assets/articles`. Disponible en la navegación compartida. La propiedad opcional `pdfUrl` admite futuras rutas de descarga; mientras falta, se muestra un botón nativo deshabilitado con «PDF pendiente». No se generan detalles individuales ni se añaden dependencias o JavaScript. Pendiente recibir e incorporar los cinco PDF.

## Acceso flotante de orientación

`OrientationContact.astro` se incluye en el layout público, en la esquina inferior izquierda, separado del acceso para volver arriba. `orientationWhatsApp` en los datos de contacto usa el número +56969186636 confirmado por el usuario. El enlace utiliza wa.me con un mensaje general; si no se configura un número, lleva a Contacto. No se envían mensajes automáticamente ni se almacena información. No se implementó formulario de contacto ni servicio de envío.

## Mapas en Contacto

Cada tarjeta de contacto incorpora un iframe de Google Maps con el cid proporcionado por el usuario y `output=embed`. Los mapas tienen título accesible, carga diferida y altura responsive. El enlace externo permanece disponible y abre en otra pestaña con `noopener noreferrer`. La representación del proveedor requiere conexión; el enlace permite acceder al lugar directamente si el navegador bloquea el iframe.
