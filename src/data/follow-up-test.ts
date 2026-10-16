export interface FollowUpQuestion {
  id: string;
  title: string;
  type: 'radio' | 'checkbox';
  options: readonly string[];
  exclusiveOption?: string;
}
export interface FollowUpSection {
  id: string;
  title: string;
  description: string;
  questions: FollowUpQuestion[];
}
const substances = ['Cigarro', 'Alcohol', 'Marihuana', 'Cocaína', 'Pasta base', 'Medicamentos sin indicación médica'] as const;
const afterExitSubstances = [...substances, 'Otras', 'Ninguna'];
const abstinencePeriods = ['Menos de 1 mes', 'Entre 1 y 2 meses', 'Entre 2 y 3 meses', 'Entre 3 y 4 meses', 'Entre 4 y 5 meses', 'Entre 5 y 12 meses', 'Entre 1 y 2 años', 'Entre 2 y 4 años'];
const consumptionPeriods = [...abstinencePeriods.slice(0, 7), 'No he consumido'];
const triggers = ['Creencias favorables', 'Ambiente de consumo', 'Problemas familiares', 'Trauma no resuelto', 'Dificultad para regular emociones y estrés', 'Mantener conductas de riesgo', 'Problemas para dormir', 'No he consumido'];
export const dischargeQuestion: FollowUpQuestion = {id: 'exit-type', title: 'Modalidad de egreso', type: 'radio', options: ['Alta terapéutica', 'Abandono', 'Alta administrativa', 'Derivación']};
/** Opciones fieles a las capturas, sin puntuaciones ni intervalos adicionales. */
export const followUpSections: FollowUpSection[] = [
  {id: 'treatment', title: 'Tratamiento y abstinencia', description: 'Responde en relación con tu tratamiento y egreso de CEADT.', questions: [
    {id: 'duration', title: '¿Cuánto tiempo estuviste en tratamiento en CEADT?', type: 'radio', options: ['Menos de 1 mes', 'Entre 1 y 2 meses', 'Entre 2 y 3 meses', 'Entre 3 y 4 meses', 'Entre 4 y 5 meses', 'Entre 5 y 6 meses', 'Entre 7 y 8 meses', 'Entre 8 y 12 meses']},
    {id: 'main-substance', title: '¿Cuál fue la droga principal que te llevó a consultar en CEADT?', type: 'radio', options: substances},
    {id: 'abstinence', title: 'En relación con la droga principal por la que consultaste, ¿cuánto tiempo de abstinencia has logrado desde tu egreso de CEADT?', type: 'radio', options: abstinencePeriods},
    {id: 'measures', title: '¿Qué medidas has adoptado para lograr ese tiempo de abstinencia?', type: 'checkbox', options: ['Mantener contacto con profesionales de CEADT y seguir sus recomendaciones', 'No frecuentar personas ni ambientes de consumo', 'Brindar solución a problemas familiares y del día a día', 'Tomar conciencia de los pensamientos, estados emocionales y físicos, y regularlos', 'Dar un nuevo uso a los momentos de ocio y tiempo libre', 'Gestionar el manejo del dinero según las recomendaciones de los terapeutas', 'No consumir otras drogas', 'Realizar actividades saludables que generen bienestar personal y en otras personas']},
    {id: 'substances-after-exit', title: 'Después de egresar de CEADT, ¿has vuelto a consumir alguna droga?', type: 'checkbox', options: afterExitSubstances, exclusiveOption: 'Ninguna'},
  ]},
  ...(['primera', 'segunda', 'tercera'] as const).map((order, index): FollowUpSection => ({id: `consumption-${index+1}`, title: `Consumo posterior · ${order} droga`, description: 'Si no has consumido, selecciona «Ninguna» o «No he consumido», según la pregunta.', questions: [
    {id: `substance-${index+1}`, title: `Si has consumido alguna droga desde tu egreso de CEADT, ¿cuál fue la ${order}?`, type: 'radio', options: afterExitSubstances},
    {id: `time-${index+1}`, title: `¿Cuánto tiempo después de egresar de CEADT consumiste esa ${order} droga?`, type: 'radio', options: consumptionPeriods},
    {id: `triggers-${index+1}`, title: `¿Qué factores consideras que fueron gatillantes para volver a consumir esa ${order} droga?`, type: 'checkbox', options: triggers, exclusiveOption: 'No he consumido'},
  ]})),
  {id: 'continuity', title: 'Seguimiento y contacto', description: 'Cuéntanos sobre las indicaciones recibidas y el contacto posterior con tus terapeutas.', questions: [
    {id: 'medication', title: 'Si egresaste de CEADT con indicación farmacológica, ¿sigues la indicación al pie de la letra?', type: 'radio', options: ['Nunca', 'Rara vez', 'Pocas veces', 'A veces', 'Ocasionalmente', 'Casi siempre', 'Siempre', 'Egresé sin indicación']},
    {id: 'therapist-contact', title: 'Después del egreso de CEADT, ¿por qué motivo perdiste el contacto con tus terapeutas?', type: 'radio', options: ['Falta de interés personal', 'No ser necesario mantener contacto', 'No tener tiempo', 'Falta de recursos económicos', 'Por vergüenza al haber recaído', 'No volví a ser contactado', 'Falta de interés de CEADT por los pacientes', 'Mantengo el contacto con mis terapeutas']},
  ]},
];
