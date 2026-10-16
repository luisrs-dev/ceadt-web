export interface TestQuestion {
  id: string;
  title: string;
  number?: number;
  options: readonly string[];
  explanation?: { title: string; text: string }[];
}
/** Transcripción editorial de las capturas. Puntuación confirmada por el usuario: alternativas 1, 2 y 3. Sin rangos clínicos. */
export const biopsychosocialQuestions: TestQuestion[] = [
  { id: 'consumption', title: 'Patrón de consumo: tipo de sustancia, vía de administración y frecuencia', options: [
    'Una sola sustancia, de forma esporádica, por vía oral o respiratoria.',
    'Dos o más sustancias, con consumo semanal o de fin de semana, por vía oral o respiratoria.',
    'Dos o más sustancias, con consumo durante la semana y los fines de semana, crisis de ingesta, aumento de dosis y incorporación de vía inyectable.',
  ] },
  { id: 'diagnosis', title: 'Diagnóstico de trastorno por consumo de sustancias (CIE-10)', options: [
    'Consumo perjudicial.', 'Consumo perjudicial y hasta tres criterios de dependencia.', 'Más de tres criterios de dependencia.',
  ], explanation: [
    { title: 'Consumo perjudicial (CIE-10)', text: 'Forma de consumo que afecta la salud física o mental de quien consume la sustancia; suele ser criticada por otras personas y puede dar lugar a consecuencias sociales adversas.' },
    { title: 'Síndrome de dependencia (CIE-10)', text: 'La descripción original considera: deseo intenso o compulsión por consumir; disminución de la capacidad de controlar el comienzo, el término o la cantidad del consumo; síntomas de abstinencia o consumo para aliviarlos; tolerancia, con necesidad de aumentar la dosis para conseguir los mismos efectos; abandono progresivo de otras fuentes de placer o diversión y aumento del tiempo dedicado a obtener, ingerir o recuperarse de la sustancia; persistencia en el consumo pese a sus consecuencias perjudiciales.' },
  ] },
  { id: 'withdrawal', title: 'Síndrome de abstinencia', options: ['Ausente.', 'Con molestias físicas y psicológicas que puede controlar.', 'Requiere ayuda para tolerar las molestias y signos de abstinencia.'] },
  { id: 'psychiatric', title: 'Patología psiquiátrica', options: ['Descartada.', 'Trastorno psiquiátrico leve a moderado.', 'Trastorno psiquiátrico severo.'] },
  { id: 'physical-health', title: 'Percepción de problemas de salud físicos asociados', options: ['Leves o ausentes.', 'Presentes, pero no limitantes.', 'Presentes y limitantes.'] },
  { id: 'consultation', title: 'Contexto del motivo de consulta', options: ['Voluntario.', 'Condicionado por la familia o el ámbito judicial.', 'Obligado por el ámbito judicial u otro.'] },
  { id: 'motivation', title: 'Motivación al cambio', options: ['Convincente en su propósito de iniciar un proceso de cambio.', 'Ambivalente y contradictoria (etapa de contemplación).', 'Muy contradictoria, débil o ausente (etapa precontemplativa).'] },
  { id: 'previous-treatments', title: 'Tratamientos anteriores', options: ['Ninguno.', 'De uno a tres, incompletos.', 'Más de tres, con abandonos antes de los tres meses.'] },
  { id: 'abstinence-attempts', title: 'Intentos de abstinencia sin tratamiento', options: ['Sí, con logros parciales.', 'Con recaídas frecuentes.', 'Sin intentos ni períodos de abstinencia.'] },
  { id: 'self-efficacy', title: 'Percepción de autoeficacia', options: ['Percepción de obtención de logros en la resolución de problemas.', 'Percepción de bajo control del medio y de la conducta de consumo.', 'Percepción de muy bajo control del medio o de absoluta ineficacia en el control del consumo.'] },
  { id: 'occupation', title: 'Situación ocupacional', options: ['Mantiene su trabajo o estudios.', 'Asiste de forma intermitente.', 'Despidos laborales, interrupción de estudios o abandono de actividades ocupacionales.'] },
  { id: 'family-consumption', title: 'Consumo o tráfico en otros familiares', options: ['Ambos descartados.', 'Consumo presente, sin tráfico.', 'Ambos presentes.'] },
  { id: 'legal-problems', title: 'Problemas judiciales asociados', options: ['Sin antecedentes penales.', 'Detenciones o formalizaciones, sin condena o medida.', 'Con antecedentes penales (sentencias o sanciones).'] },
  { id: 'family-support', title: 'Apoyo familiar', options: ['Presencia de una red familiar de apoyo.', 'Dispuesta, con reparos.', 'Ausente o con gran conflicto relacional.'] },
  { id: 'social-support', title: 'Red de apoyo social', options: ['Presencia de una red de amistades de apoyo.', 'Red precaria o dispuesta con reparos.', 'Ausente o con gran conflicto relacional.'] },
];
