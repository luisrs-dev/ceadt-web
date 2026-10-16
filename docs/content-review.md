# Contenido pendiente de revisión institucional

Este documento concentra las verificaciones editoriales fuera de la interfaz.
Eliminar los avisos de desarrollo no implica que se haya confirmado la vigencia
de los datos históricos. No publicar nuevas afirmaciones a partir de ellos.

## Fuentes y decisiones

| Contenido | Fuente disponible | Tratamiento en Home | Revisión necesaria |
| --- | --- | --- | --- |
| Nombre institucional | Solicitud y logo del proyecto | Se conserva | Confirmar denominación editorial final |
| Título y descripción del hero | Propuesta editorial del usuario | Se conservan con la composición visual aprobada | Aprobación institucional de la redacción |
| Ubicación en Región del Maule | Capturas originales y solicitud | Referencia regional breve | Confirmar redacción final |
| Convenio SENDA-MINSAL y vínculo con red pública | Captura quienessomos.png | Omitidos de Home | Verificar vigencia, alcance y autorización antes de reincorporar |
| Rehabilitación y reinserción social | Propuesta del hero y contenido histórico | Descripción breve, sin resultados o garantías | Confirmar formulación institucional |
| Programas Residencial Hombres y Mujeres | programas.png y solicitud | Nombres conservados, invitación a consultar | Validar oferta y disponibilidad vigentes; no se añaden prestaciones clínicas |
| Ingreso y derivación | Solo referencias de contacto | Invitación a contactar cada centro | Solicitar procedimientos oficiales; no se enumeran requisitos ni pasos |
| Compromiso Biopsicosocial, Alerta de Recaídas y Test de Seguimiento | test.png | Solo títulos e invitación a consultar | Validar finalidad, contenido, autoría y permisos; no hay cuestionarios ni resultados |
| Teléfonos y correos | Footer de image.png, centralizados en src/data/contact.ts | Datos existentes intactos, enlaces tel y mailto | Confirmar vigencia; hay diferencias históricas entre barra superior y footer para Mujeres |
| Redes sociales | Iconos sin URLs confirmadas en capturas | Omitidas | Proporcionar URLs oficiales |
| Fotografía de instalaciones | public/images/home.jpg aportada por usuario | Hero y Quiénes somos, optimizada desde src/assets/home.jpg | Confirmar derechos y aportar otra foto real para Quiénes somos si existe |
| Fotografías de programas | Sin archivos disponibles | Iconografía SVG de edificio, sin fotografías de personas | Incorporar solo imágenes reales autorizadas |

## Navegación disponible

Inicio lleva a `/` y Nosotros a `/nosotros`. Programas, Tests y Contacto
conservan sus anclas reales de Home. Convenios, Noticias y Artículos se ocultan hasta disponer de páginas.
Las rutas futuras permanecen en src/data/navigation.ts para planificación;
publicNavigation solo expone destinos disponibles. Los CTA de programas llevan
al contacto de Hombres o Mujeres y los recursos al bloque de contacto. No se
presenta una consulta como si abriera una ficha de programa o un cuestionario.

## Publicación

No se muestran mensajes técnicos, asteriscos o placeholders de fotografías en
Home. No se sustituye contenido clínico faltante con información inventada.
Revisar este documento antes de incorporar páginas interiores o publicar
contenido institucional definitivo. El dominio de producción y los metadatos
Open Graph absolutos siguen pendientes.


## Adaptación a la referencia visual Centro Volver

Los encabezados se ajustaron editorialmente manteniendo los hechos existentes.
Las tres preguntas frecuentes solo explican los canales de consulta disponibles;
revisar su redacción junto con el resto del contenido. No se incorporaron las
modalidades ambulatorias, FONASA, telemedicina, evaluación, seguimiento ni las
condiciones familiares mostradas por la referencia. Sus fotografías y contactos
no se reutilizan en CEADT.


## Nosotros — primera página interior

- Introducción: redacción simplificada del texto aportado y de quienessomos.png.
  Se conserva el propósito de atención especializada, calidad y mejora continua.
- Se omiten red de salud pública y convenio SENDA-MINSAL hasta confirmar vigencia.
- Misión y visión: adaptación ortográfica y de legibilidad de las formulaciones
  históricas aportadas. Se presentan como propósito y aspiración, no garantías
  clínicas ni resultados demostrados. Confirmar su versión institucional actual.
- Nuestro compromiso: síntesis de cuatro ejes del contenido disponible; no se
  denominan valores formalmente declarados, acreditaciones ni prestaciones nuevas.
- Foto: se reutiliza home.jpg por ser la única fotografía real autorizada disponible.
- Contenido institucional centralizado en src/data/institutional.ts. No se cambian
  teléfonos, correos, programas ni procedimientos.
- El dominio aún no está configurado: no se inventa canonical ni URLs OG absolutas.


## Programas — catálogo y páginas de detalle

Implementadas /programas, /programas/hombres y /programas/mujeres. Los datos
se centralizan en src/data/programs.ts y referencian los contactos existentes,
sin copiar ni modificar teléfonos o correos. La solicitud de esta etapa ratifica
los números y correos mostrados para cada programa; mantener su revisión de
vigencia institucional antes de publicación final.

Información aún necesaria: descripciones clínicas oficiales, duración, capacidad,
edades, equipo, prestaciones, financiación y condiciones de ingreso. Ninguna
se deduce del nombre del programa ni se presenta como confirmada.
Los procedimientos de ingreso y protocolos de derivación no están disponibles:
las páginas invitan a consultar directamente, sin enumerar pasos ni requisitos.
Faltan fotografías específicas autorizadas de Hombres y Mujeres; las tarjetas
usan iconografía discreta sin atribuir una foto general a una sede concreta.
Validar la redacción introductoria y aportar contenido diferenciado antes de
ampliar las páginas; se evita rellenarlas con afirmaciones clínicas genéricas.

Programas ya apunta a /programas en navegación y CTA; las tarjetas de Home
abren cada detalle. Tests, Noticias, Artículos y Convenios no se implementan.


## Ampliación de Hombres desde capturas aportadas

El usuario aporta la ficha original completa de Hombres: objetivo, cuatro etapas
(acogida/adaptación, integración social, reinserción social-laboral y seguimiento),
actividades terapéuticas, deportivas, recreativas, de agrado y vinculación con el
medio. Se transcriben a datos tipados y HTML accesible; no se publican capturas
como bloques de texto ni se reutilizan las fotografías de personas sin originales
y autorización. Esta fuente permite completar la descripción antes ausente.

Confirmar vigencia de las etapas y actividades antes de publicación institucional.
La lista histórica de profesionales no se publica como dotación vigente; no se
prometen prestaciones ni disponibilidad permanente. La información sobre ingreso
y derivación aún no se aporta: se conserva consulta directa, sin protocolos
inventados. Las etapas y actividades no se extrapolan al programa de Mujeres.


## Ingreso y derivación — capturas adicionales

La captura aportada ahora describe para Hombres: inscripción en CESFAM del
sector, evaluación/tratamiento en Salud Mental, PAB (CESFAM) o PAI (hospitales
o COSAM), evaluación de pertinencia y criterios y eventual informe a CEADT.
Se presentan tres pasos y las tres alternativas separadas, sin tratarlas como
etapas consecutivas ni garantizar aceptación.

La segunda captura dirige derivaciones a profesionales de la red SENDA-MINSAL
y muestra un formulario con ficha adjunta. Se recoge su audiencia y finalidad,
pero se conserva contacto directo, sin backend, campos de pacientes, carga de
archivos ni envío simulado. Coordinar un canal autorizado para antecedentes.
Verificar vigencia del alcance de la red y del procedimiento antes de publicar.

Faltan: URL real del enlace «pincha aquí» y contenido de los acordeones cerrados
(Criterios de ingreso, Recepción y respuesta, Preparación y Momento del ingreso).
No se inventan contenidos ni enlaces; esas consultas se dirigen al centro.
La exclusividad de derivación de la captura no se extiende a otras instituciones
ni se extrapola al programa Mujeres. Confirmar el circuito propio de Mujeres.


## Acordeones de ingreso Hombres — contenido completo recibido

El usuario aporta las cuatro secciones desplegadas. Se incorporan a datos tipados
los criterios (18 años, motivación, identidad, FONASA, derivación de red pública,
compromiso biopsicosocial severo, acompañante), recepción y evaluación,
preparación por el equipo derivador y documentación del momento del ingreso.
Se conserva BTEI sin desarrollar la sigla, al no estar definida en la fuente.
La preparación clínica se atribuye expresamente al equipo derivador, no como
instrucciones de desintoxicación o modificación de medicación para la persona.
El requisito de medicamentos para 15 días se conserva como elemento a coordinar,
sin indicar fármacos ni dosis. Confirmar vigencia de estos requisitos con CEADT.

El usuario responde que desconoce la vigencia de los requisitos COVID-19 y pide
dejarlos pendientes. No se publican: restricción por síntomas/sospecha/contagio,
cuarentena domiciliaria de 14 días, PCR al día 14 ni su comprobante al ingresar.
La documentación no implica que estos requisitos se hayan derogado; su vigencia
permanece sin confirmar. No se extrapola ningún criterio a Mujeres.
El enlace externo de búsqueda de programas todavía no tiene URL disponible.


## Formulario de derivación — diseño autorizado

El usuario solicita únicamente el diseño con documentos adjuntos, basado en la
ficha original y la composición visual de Centro Volver. Se permite probar
campos y seleccionar archivos locales, con aviso visible de vista previa y
recomendación de usar datos ficticios. Enviar está deshabilitado; no se muestra
confirmación de recepción ni se promete un plazo de respuesta.
Antes de activar: definir canal y backend, autorización y privacidad, campos
obligatorios, formatos y tamaños permitidos, validación y gestión de documentos.
No se inventa política de privacidad ni enlace a una página inexistente.


## Enlace SENDA de la orientación de ingreso

El usuario proporciona https://www.senda.gob.cl/mapa-del-sitio/ como destino del
enlace original. Se incorpora con etiqueta descriptiva «mapa del sitio de SENDA»,
sin afirmar que sea un buscador directo. La consulta automática respondió HTTP
403; verificar manualmente su contenido y disponibilidad. La introducción se
reorganiza en un bloque con alternativas numeradas, enlace, evaluación y
derivación, seguido de los acordeones existentes.


## Ingreso Mujeres — capturas completas recibidas

Las cinco capturas aportadas de Mujeres acreditan el mismo circuito CESFAM,
Salud Mental/PAB/PAI y los cuatro acordeones: criterios, recepción, preparación
y momento del ingreso. Los datos coincidentes se comparten mediante
sharedAdmission en programs.ts con redacción neutra y contacto propio.
Esta evidencia sustituye el pendiente previo de contenido de ingreso Mujeres.
Se conserva SENDA como enlace de orientación ya aportado por el usuario.
Los requisitos COVID-19 siguen pendientes, según su instrucción previa.
No se extrapolan etapas, actividades ni exclusividad de derivación desde Hombres.
La audiencia profesional y la vista previa de formulario permanecen separadas
del contenido de ingreso: no se habilitan automáticamente al incorporar admission.


## Programa y derivación Mujeres — capturas complementarias

Se recibe fuente específica para el objetivo, cuatro etapas, actividades y
formulario de derivación Mujeres. Se comparten las etapas coincidentes mediante
sharedStages. Las actividades conservan las diferencias de la fuente: no se
añaden deportivas, videojuegos ni labores del hogar a Mujeres.
La descripción terapéutica recoge acompañamiento individual, familiar y grupal.
La captura enumera médico psiquiatra, psicóloga/o, trabajador social, terapeuta
ocupacional, técnico en trabajo social y técnico en enfermería: confirmar
dotación vigente antes de publicar esa lista como equipo actual.
La nueva fuente acredita la audiencia SENDA-MINSAL y habilita la misma vista
previa del formulario, con Contact de Mujeres; envío y almacenamiento siguen
deshabilitados. Esto resuelve el pendiente de contenido y derivación Mujeres,
sin considerar verificada la vigencia clínica o la dotación histórica.


El usuario solicita expresamente incorporar la composición profesional de las
actividades terapéuticas de Mujeres. Se incluye su lista con redacción editorial,
sin añadir profesiones ni extrapolarla a Hombres. Esta indicación reemplaza la
decisión previa de omitir la lista en esta sección.


## Test Grado de Compromiso Biopsicosocial

Se transcriben editorialmente las 15 preguntas y sus tres alternativas de las
capturas aportadas. Los conceptos de consumo perjudicial y dependencia se
reproducen como referencia incluida en la fuente, no como diagnóstico del sitio.
No se actualiza ni valida clínicamente el instrumento mediante esta implementación.
Revisión necesaria: versión, autoría, permisos, finalidad, población destinataria,
redacción y pertinencia de las referencias CIE-10; pauta oficial y rangos de
interpretación. No se inventan valores, umbrales, baremos ni resultados clínicos.

La instrucción de la captura menciona 1 a 7, pero las preguntas muestran tres
alternativas: se sustituye por selección de una respuesta por pregunta. Se ha
solicitado al usuario la pauta. El botón revisa selecciones localmente; no envía
respuestas ni indica un grado de compromiso o elegibilidad para ingreso.
No se usa servidor, almacenamiento web ni identificadores personales.
Alerta de Recaídas y Seguimiento no se implementan; siguen enlazando a contacto.


### Puntuación confirmada por el usuario

El usuario confirma 1, 2 y 3 puntos respectivamente para la primera, segunda y
tercera alternativa de cada pregunta. Se suma el total de las 15 respuestas
(rango 15–45). Esta confirmación reemplaza el pendiente previo de valores por
alternativa. Permanecen pendientes la pauta oficial y los rangos clínicos: no se
asignan categorías leve/moderada/severa ni se determina diagnóstico o ingreso.


## Test Alerta de Recaídas

Las capturas aportan 27 enunciados y la escala Nunca/Pocas veces/A veces/
Relativamente a menudo/A menudo/Casi siempre/Siempre, valorada de 1 a 7 por
el usuario. El usuario completa la pregunta 7: «Me dedico a hacerme ilusiones
sobre el consumo». Se implementan así los 28 enunciados completos.
Se muestra la suma directa como resumen aritmético (28–196); no se aplica
inversión a enunciados positivos ni se asignan categorías de riesgo. Confirmar
pauta oficial, ítems invertidos, umbrales, versión y autorización clínica antes
de presentar el total como resultado interpretado. No diagnostica ni predice
recaídas. Las respuestas permanecen locales sin envío ni almacenamiento.
Test de Seguimiento continúa sin implementar.


## Test de Seguimiento — capturas completas

Se implementan 17 preguntas descriptivas y tres datos de egreso opcionales
(nombre, teléfono y año), sin puntajes. Las capturas repetidas de la tercera
sustancia y medicación se transcriben una sola vez. Se conserva la diferencia
entre selección simple y múltiple; Ninguna/No he consumido excluyen las demás
opciones de su mismo grupo, sin deducir respuestas de otras preguntas.
Se permite revisar respuestas parciales, marcadas como Sin responder. No se
envía, guarda ni promete contacto. No se añaden instrucciones de medicación.

Revisión editorial/institucional: finalidad y población, campos obligatorios
en una futura versión operativa, canales de recepción, permisos y privacidad.
La lista de duración original omite 6–7 meses y otras duraciones; se conservan
las opciones recibidas sin inventar intervalos. Confirmar si deben ampliarse.
Ninguna captura aporta reglas de puntuación o interpretación, por lo que no
se calcula ningún resultado clínico.


## Convenios — una página institucional

Fuente: siete capturas aportadas (índice y fichas SENDA, Universidad Autónoma,
INACAP, Fundación Elige, Mensal y Kay). /convenios reúne las seis instituciones
con propósito y resumen, sin páginas intermedias ni botones Volver repetidos.
Redacción en pasado para no afirmar vigencia actual de acuerdos históricos.
Confirmar contratos, períodos, alcance y condiciones antes de ofrecer beneficios.
No se publican como actuales: gratuidad/FONASA condicionada del convenio SENDA,
cifra histórica de 41 centros del Maule ni suministro alimentario permanente.
Fundación Elige se contextualiza expresamente en la pandemia. Confirmar la
actualidad de las actividades de formación, atención Mensal y plataforma Kimün.
No se presume que Kimün sea backend del sitio ni se implementan integraciones.

Enlaces UA, INACAP, Mensal y Kay provienen de las capturas; SENDA apunta al sitio
institucional general, sin inventar URL de un programa. No se dispone de URL
confirmada para Fundación Elige ni originales de los seis logos: se usan nombres
tipográficos, sin recrear marcas ni publicar capturas. Verificación web: Kay
respondió; UA/Mensal dieron timeout e INACAP 502. La respuesta web no confirma
que un convenio siga vigente. Revisar manualmente esos destinos.


## Logos de convenios recibidos

El usuario aporta los seis JPG: senda, autonoma, inacap, fundacion_elige, mensal
y kay. Se copian sin editar a src/assets/agreements y se asocian a los datos
tipados. Se usan estos archivos aportados, no descargas ni capturas recortadas.
Esta entrega resuelve el pendiente de originales de logos registrado arriba.
Se conservan proporciones y colores; Astro genera WebP y tamaños responsivos.

## Primera noticia — 19 de febrero de 2021

Contenido e imagen entregados por el usuario: «SENDA Maule cuenta con nuevo Centro de Tratamiento residencial para mujeres en las afueras de Talca». Se conserva el texto completo y la fecha original. El resumen de la tarjeta se deriva del contenido y el texto alternativo describe la imagen sin identificar personas. Fuente externa y crédito fotográfico pendientes; no se atribuyen autores. Las cifras, autoridades y condiciones mencionadas se presentan como información histórica de 2021, sin trasladarlas a los programas actuales.

## Segunda noticia — 7 de agosto de 2020

«Visita del Director Nacional»: texto completo y fotografía proporcionados por el usuario. Fecha conservada, resumen derivado del contenido y descripción alternativa de la escena sin identificar personas. «Centro de tratamiento» se presenta como subtítulo. Cifras, cargos y referencias a la pandemia se mantienen en su contexto histórico. No se suministraron fuente externa ni crédito fotográfico.

## Tercera noticia — 27 de enero de 2020

«Veinte personas obtienen alta terapéutica tras egresar exitosamente de programa de tratamiento»: contenido completo y fotografía entregados por el usuario. Se conserva la fecha, las citas y el testimonio, con «Testimonios» como subtítulo. Resumen derivado del texto y descripción alternativa de la escena. Sin fuente externa ni crédito suministrados. Las condiciones del programa y las autoridades corresponden al contexto histórico de la publicación.

## Cuarta noticia — 22 de enero de 2019

«12 usuarios atendidos en el centro CEADT de Talca recibieron su alta terapéutica en el consumo de sustancias»: texto completo y fotografía proporcionados por el usuario. Fecha original conservada, resumen derivado del contenido y texto alternativo descriptivo. Se normaliza un espacio duplicado. No se suministraron fuente externa ni crédito fotográfico. La publicación mantiene el aviso de contexto histórico compartido por las noticias.

## Quinta noticia — 15 de enero de 2018

«11 usuarios de programa residencial recibieron el alta terapéutica de consumo de alcohol y otras drogas»: texto completo y fotografía entregados por el usuario. Fecha original conservada, resumen derivado del título y contenido, texto alternativo descriptivo. Sin fuente externa ni crédito fotográfico suministrados. Mantiene el contexto histórico y el diseño compartido, con orden cronológico descendente en el índice.

## Artículos — catálogo inicial

Cinco títulos, descripciones y portadas provienen de la captura y los archivos 1.jpg, 2.jpg, 3.png, 4.jpg y 5.jpg entregados por el usuario. Se conserva el orden original. No se inventan autores, fechas, fuentes ni documentos. Los cinco PDF quedan pendientes por solicitud expresa: controles deshabilitados y estado visible. Las portadas se mantienen completas, sin recorte; texto alternativo vacío porque ilustran los títulos adyacentes.

## WhatsApp de orientación confirmado

El usuario confirmó +56969186636 para el botón general de orientación. Se activa el enlace wa.me con ese número; los teléfonos de los centros se mantienen sin cambios.

## Ubicaciones de contacto

El usuario proporcionó los enlaces de Google Maps de CEADT Hombres (cid 2466325098543320171) y CEADT Mujeres (cid 16639876544803516152). Se incorporan bajo el correo de cada tarjeta de contacto. Se conserva el identificador de lugar y se omite el parámetro auxiliar g_mp. No se deducen direcciones postales ni se carga un mapa externo incrustado.
