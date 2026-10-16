# Sistema de diseño CEADT

## Filosofía visual

Confianza y acompañamiento mediante superficies claras, tipografía legible,
jerarquías simples y espacio suficiente. El azul guía las acciones principales;
el verde aporta cercanía sin competir por atención. Evitar fluorescentes,
gradientes decorativos, sombras intensas y movimiento sin propósito.

Se revisaron las diez capturas de docs/references: muestran continuidad azul y
verde, pero también textos pequeños, contraste débil y márgenes irregulares.
Se conserva esa continuidad cromática con saturación moderada y reglas comunes.
Las capturas son referencias visuales, no una fuente de información validada.
Esta etapa no define el Home ni introduce contenido institucional.

## Paleta semántica

Los tokens viven en src/styles/tokens.css y se declaran con @theme de Tailwind 4.

| Token | Valor | Uso |
| --- | --- | --- |
| background / surface | #FFFFFF | Fondo principal y tarjetas |
| background-alt | #F4F8FA | Secciones alternas y hover de contorno |
| foreground | #243746 | Texto y encabezados |
| muted | #526675 | Descripciones y metadatos |
| primary | #0C5C99 | Acción principal y enlaces |
| primary-hover | #094A7B | Hover principal |
| on-primary | #FFFFFF | Texto sobre azul |
| secondary | #287A46 | Acción secundaria sólida |
| secondary-hover | #206338 | Hover secundario |
| on-secondary | #FFFFFF | Texto sobre verde oscuro |
| accent | #72B984 | Acentos decorativos |
| border | #D5E1E7 | Separadores y bordes decorativos |
| focus | #0C5C99 | Indicador de teclado sobre fondos claros |

### Ajuste a partir del logo

Se analizaron los píxeles opacos de `public/images/logo-ceadt.png`. Sus colores
saturados dominantes son azul #0C5C99 y verde #06E846, con pequeñas variaciones
por suavizado de bordes. El primario adopta el azul del logo, reemplazando el
azul anterior de matiz más turquesa.

El verde del logo es demasiado intenso para grandes superficies de interfaz.
Se mantiene su familia cromática con menor saturación: accent #72B984 para
acentos decorativos y secondary #287A46 para acciones con texto blanco.
El logo original no se modifica.

Contraste calculado con luminancia relativa sRGB:

| Combinación | Contraste |
| --- | --- |
| Blanco sobre primary #0C5C99 | 6.98:1 |
| Blanco sobre primary-hover #094A7B | 9.22:1 |
| Blanco sobre secondary #287A46 | 5.30:1 |
| Blanco sobre secondary-hover #206338 | 7.23:1 |

Accent no debe utilizarse para texto normal blanco ni para texto sobre fondos
claros: es un recurso decorativo. Foreground y muted conservan más de 4.5:1 en
ambos fondos claros. No utilizar border como único indicador de un control,
ya que su contraste es deliberadamente suave. Sobre superficies oscuras usar
un indicador de foco claro y comprobar su contraste en contexto.

## Tipografía y jerarquía

Inter variable normal, alojada en public/fonts/InterVariable.woff2, pesos 100–900,
con font-display: swap y fallback de sistema. Se usa un único archivo WOFF2 de
aproximadamente 344 KiB, sin petición a Google Fonts ni paquete adicional.
Licencia SIL Open Font License incluida en public/fonts/OFL.txt. Fuente obtenida
del [repositorio oficial Inter](https://github.com/rsms/inter); licencia de
[Google Fonts](https://github.com/google/fonts/tree/main/ofl/inter).
No se incluye cursiva; evitar síntesis de cursiva en elementos de UI.

| Elemento | Utilidades orientativas | Regla |
| --- | --- | --- |
| h1 | text-4xl sm:text-5xl font-semibold leading-tight | Uno por página |
| h2 | text-3xl sm:text-4xl font-semibold leading-tight | Sección principal |
| h3 | text-2xl font-semibold leading-snug | Subsección |
| Cuerpo | text-base leading-relaxed | 16 px con configuración estándar |
| Entradilla | text-base sm:text-lg leading-relaxed | Descripción breve |
| Metadatos | text-sm leading-normal | Información secundaria, nunca esencial muy pequeña |

No saltar niveles por motivos visuales. Mantener párrafos alineados al inicio,
sin justificación completa ni mayúsculas sostenidas. Ancho de lectura máximo
42rem y texto que crezca con preferencias del navegador.

## Espaciados, anchos y superficies

Se mantienen la unidad de 0.25rem y las escalas nativas de Tailwind, sin crear
una escala paralela. Usar gap-2/3 para elementos relacionados, gap-4/6 para grupos,
gap-8 para bloques y py-12 sm:py-16 lg:py-20 como pauta para secciones futuras.
Son pautas, no padding impuesto globalmente.

Container ofrece width="content" (72rem) y width="reading" (42rem), ambos con
w-full, mx-auto y gutters px-4 sm:px-6 lg:px-8. El máximo incluye el padding por
box-sizing de Tailwind. No añade semántica de sección ni espaciado vertical.

Radios: rounded-control (0.5rem) para controles, rounded-card (1rem) para tarjetas.
Las tarjetas futuras usarán bg-surface, border-border y p-6, con shadow-card
opcional: 0 2px 12px al 6%. Preferir borde sin sombra. No elevar tarjetas en hover,
ni hacer interactivo todo el bloque sin una necesidad real. No se crea Card en
esta etapa.

## Componentes y API

### Container.astro

Props: width (`content` predeterminado o `reading`), atributos HTML de div y class.
Slot predeterminado para contenido. No anidar contenedores innecesariamente.

### SectionHeading.astro

Props: title obligatorio, eyebrow opcional como etiqueta superior, size
(`standard` predeterminado o `editorial`, con h2 de hasta 48 px), description opcional, level (`h2` predeterminado o
`h3`), align (`start` predeterminado o `center`), id y class opcionales.
El id se aplica al título, para poder usar aria-labelledby en la sección externa.
No crea una sección por sí solo. El texto se limita al ancho de lectura.

### Button.astro

Props compartidas: variant (`primary`, `secondary`, `outline`), size (`md`, `lg`)
y class. Tamaños con altura mínima 44 y 48 px respectivamente; pueden crecer
si la etiqueta ocupa varias líneas. No usar altura fija.

Con href renderiza un enlace nativo y acepta atributos HTML de a. Usar destinos
reales: no href vacío, # aislado ni javascript:. Para enlaces que abran otra
pestaña, indicar ese comportamiento en el texto y añadir rel="noopener noreferrer".
Sin href exige type="submit" o type="reset" y admite atributos HTML de button,
incluidos form, name, value y disabled. Debe pertenecer a un formulario real o
identificarlo mediante form. No se ofrece type="button" hasta existir una acción
concreta que requiera JavaScript. El componente no añade eventos ni scripts.
No pasar funciones onclick desde frontmatter esperando ejecución cliente.

```astro
---
import Container from '../components/ui/Container.astro';
import SectionHeading from '../components/ui/SectionHeading.astro';
import Button from '../components/ui/Button.astro';
---
<Container width="reading">
  <section aria-labelledby="example-heading">
    <SectionHeading id="example-heading" title="Ejemplo de estructura" />
    <Button href="/" variant="outline">Volver al inicio</Button>
  </section>
</Container>
```

Ejemplo documental, no contenido para publicar. Las clases adicionales permiten
ajustes de composición; evitar utilidades que contradigan variantes del componente.

## Breakpoints y estados

Mobile-first con los breakpoints nativos: sm 40rem, md 48rem, lg 64rem,
xl 80rem y 2xl 96rem. Aplicarlos cuando el contenido lo necesite, no por modelo
de dispositivo. Verificar 320 px, zoom 200% y reflow a 400%.

Los botones sólidos oscurecen fondo y borde en hover; outline usa fondo alterno.
El foco es un contorno de 2px con separación de 4px; no eliminarlo. Mantener
espacio para que no quede recortado. Las transiciones solo afectan colores,
duran 150 ms y están condicionadas a motion-safe. Disabled solo está disponible
para button nativo; nunca simular enlaces deshabilitados con opacidad.

## Accesibilidad

- Objetivo WCAG 2.2 AA: 4.5:1 para texto normal, 3:1 para texto grande y señales
  esenciales de controles. Revisar combinaciones nuevas antes de utilizarlas.
- Semántica nativa: enlaces navegan, botones ejecutan acciones de formulario.
- Etiquetas visibles descriptivas y slot con nombre accesible; no botones solo
  con iconos sin alternativa textual.
- No transmitir significado únicamente mediante color, hover o animación.
- Mantener orden de teclado, foco visible y enlace para saltar al main del layout.
- Respetar prefers-reduced-motion; no añadir animaciones a esta base.
- Imágenes informativas con alt y decorativas con alt vacío; formularios con labels.
- No fijar anchos o alturas que corten texto traducido o ampliado.

La revisión de tokens no equivale a una auditoría completa: navegación de teclado,
lectores de pantalla y contraste contextual deberán validarse en páginas reales.

## Validación técnica

Ejecutar pnpm check, pnpm build y git diff --check. Se mantiene output: static,
TypeScript estricto y componentes Astro, sin frameworks ni dependencias nuevas.
Home reutiliza esta base; ver docs/home-review.md para el alcance y contenido pendiente.

Referencias: [componentes Astro](https://docs.astro.build/en/basics/astro-components/),
[estilos Astro](https://docs.astro.build/en/guides/styling/) y
[@theme de Tailwind](https://tailwindcss.com/docs/theme).


## Referencia visual temporal

Abrir `/design-system` para revisar tokens y componentes reales. Incluye paleta
leída de tokens.css, tipografía, botones con hover/foco interactivos, muestras de
foco persistente, disabled nativo, tarjetas, contenedores y prueba de reset.
La página usa grillas de una columna en móvil, dos en tablet y hasta cuatro en
escritorio; los controles se ajustan y las etiquetas pueden ocupar varias líneas.

Iniciar con `pnpm exec astro dev --background` y abrir
`http://localhost:4321/design-system` (consultar `pnpm exec astro dev status`
si se utiliza otro puerto). Administrar con los comandos status, logs y stop.

No hay enlaces desde Inicio o navegación pública. Se emite
`<meta name="robots" content="noindex, nofollow, noarchive">`. No bloquear esta
ruta en robots.txt: el rastreador necesita leer noindex. Esta directiva no es
control de acceso; la ruta está incluida en la compilación estática. Excluirla de
cualquier sitemap futuro y retirarla antes de publicar el sitio definitivo.
