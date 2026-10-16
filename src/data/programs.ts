import { contacts, type Contact } from './contact';
export interface ProgramStage { title: string; description: string; items: string[]; }
export interface ProgramActivity { title: string; items: string[]; }
export interface ProgramOverview {
  objective: string;
  stages: ProgramStage[];
  activities: ProgramActivity[];
}
export interface AdmissionPanel {
  id: string;
  title: string;
  introduction: string;
  items: string[];
  note?: string;
}
export interface ProgramAdmission {
  resourceUrl: string;
  pathways: string[];
  steps: { title: string; description: string }[];
  panels?: AdmissionPanel[];
}
export interface Program {
  slug: 'hombres' | 'mujeres';
  audience: string;
  title: string;
  description: string;
  introduction: string;
  contact: Contact;
  overview?: ProgramOverview;
  admission?: ProgramAdmission;
  referralAudience?: string;
}
function contactFor(id: string): Contact {
  const contact = contacts.find((item) => item.id === id);
  if (!contact) throw new Error(`Falta el contacto del programa ${id}`);
  return contact;
}
/** Ingreso coincidente en las capturas aportadas de Hombres y Mujeres.
 * Los requisitos COVID-19 permanecen pendientes por indicación del usuario.
 */
const sharedAdmission: ProgramAdmission = {
  resourceUrl: 'https://www.senda.gob.cl/mapa-del-sitio/',
  pathways: [
    'Programa de Salud Mental de tu CESFAM',
    'Programa Ambulatorio Básico (PAB), ubicado en CESFAM',
    'Programa Ambulatorio Intensivo (PAI), ubicado en hospitales o COSAM',
  ],
  steps: [
    { title: 'Acércate a tu CESFAM', description: 'Debes contar con inscripción en el CESFAM de tu sector e iniciar un proceso de evaluación y tratamiento en uno de los programas indicados.' },
    { title: 'Evaluación del programa de origen', description: 'El equipo del programa evalúa la pertinencia y los criterios de ingreso.' },
    { title: 'Derivación a CEADT', description: 'Si el equipo determina que la derivación es pertinente, envía un informe de derivación a CEADT.' },
  ],
  // Requisitos COVID-19 omitidos: el usuario confirma que su vigencia es desconocida.
  panels: [
    {
      id: 'criterios-ingreso', title: 'Criterios de ingreso a CEADT',
      introduction: 'La evaluación de estos criterios corresponde a los equipos de atención y derivación.',
      items: [
        'Tener al menos 18 años de edad.',
        'Tener motivación y disposición para cambiar.',
        'Contar con carnet de identidad.',
        'Tener previsión FONASA.',
        'Contar con derivación desde la red de salud pública (CESFAM, PAB o PAI).',
        'Presentar un compromiso biopsicosocial severo.',
        'Contar con una persona acompañante que facilite el proceso.',
      ],
    },
    {
      id: 'recepcion-respuesta', title: 'Recepción y respuesta',
      introduction: 'Una vez recibida la derivación, CEADT realiza las siguientes acciones:',
      items: [
        'Envía una respuesta al centro derivador con una hora de evaluación agendada.',
        'Realiza la entrevista de evaluación a la persona derivada.',
        'Entrega retroalimentación a la persona y comunica las observaciones al centro derivador.',
      ],
      note: 'Si el ingreso se considera pertinente, se coordina el siguiente paso con el centro derivador.',
    },
    {
      id: 'preparacion-ingreso', title: 'Preparación para el ingreso',
      introduction: 'Antes del ingreso, el equipo derivador realiza las siguientes acciones:',
      items: [
        'Inicia el proceso de desintoxicación con acompañamiento biopsicosocial.',
        'Estabiliza las problemáticas de salud física y mental presentadas.',
        'Realiza un examen médico.',
        'Realiza trabajo motivacional BTEI.',
        'Regulariza la situación judicial.',
        'Recopila la documentación requerida.',
      ],
      note: 'El equipo de CEADT acompaña esta preparación en coordinación con el equipo derivador.',
    },
    {
      id: 'momento-ingreso', title: 'Momento del ingreso',
      introduction: 'La persona asiste a CEADT según la citación, junto a su persona de referencia. Deben presentar:',
      items: [
        'Exámenes de laboratorio.',
        'Informe médico con indicación y tratamiento, en caso de presentar una enfermedad física.',
        'Carnet de identidad.',
        'Certificado de FONASA activo.',
        'Certificado de antecedentes.',
        'Informe actualizado del centro derivador.',
        'Medicamentos para 15 días.',
      ],
      note: 'Confirma con el equipo la documentación y los medicamentos que debes llevar antes de asistir.',
    },
  ],
};

/** Las capturas de ambos programas describen las mismas cuatro etapas. */
const sharedStages: ProgramStage[] = [
  { title: 'Acogida y adaptación', description: 'Acogida y adaptación al programa, con énfasis en la motivación al cambio, la deshabituación de la conducta de consumo y la adherencia al tratamiento.', items: ['Acogida y adaptación', 'Motivación al cambio', 'Deshabituación de la conducta de consumo', 'Adherencia al tratamiento'] },
  { title: 'Integración social', description: 'Etapa centrada en la integración social y la prevención de recaídas como parte del proceso de tratamiento.', items: ['Integración social', 'Prevención de recaídas'] },
  { title: 'Reinserción social y laboral', description: 'Etapa orientada a la reinserción social y laboral, en continuidad con el proceso desarrollado en el programa.', items: ['Reinserción social-laboral'] },
  { title: 'Seguimiento', description: 'Etapa dedicada al seguimiento del proceso de tratamiento, después del trabajo de integración y reinserción social y laboral.', items: ['Seguimiento'] },
];

/** Nombres y modalidad del sitio original; no se infieren prestaciones. */
export const programs: Program[] = [
  {
    slug: 'hombres', audience: 'Hombres', title: 'Programa Residencial Hombres',
    description: 'Consulta al equipo de CEADT Hombres para conocer el programa.',
    introduction: 'El Programa Residencial Hombres forma parte de los programas de CEADT en tratamiento de adicciones. Para conocer más sobre el programa y consultar sobre ingreso o derivación, comunícate con CEADT Hombres.',
    contact: contactFor('hombres'),
    admission: sharedAdmission,
    referralAudience: 'Derivaciones exclusivas para profesionales de la red SENDA-MINSAL.',
    // Contenido transcrito de las capturas del programa Hombres aportadas por el usuario.
    overview: {
      objective: 'El programa busca desarrollar la responsabilidad personal y social y las herramientas de autocuidado a través de un proceso terapéutico acompañado.',
      stages: sharedStages,
      activities: [
        { title: 'Terapéuticas', items: ['Acompañamiento profesional individual, familiar y grupal'] },
        { title: 'Deportivas', items: ['Baby fútbol', 'Nado libre', 'Ejercicio', 'Trote libre', 'Tenis de mesa'] },
        { title: 'Recreativas', items: ['Juegos de mesa', 'Taca taca', 'Televisión', 'Videojuegos', 'Lectura'] },
        { title: 'Actividades de agrado', items: ['Cine', 'Música', 'Compartir', 'Paseos'] },
        { title: 'Vinculación responsable con el medio', items: ['Rutina diaria', 'Labores del hogar', 'Incorporación en CESFAM y control de salud', 'Nivelación de estudios', 'Orientación judicial', 'Revinculación familiar', 'Vinculación laboral'] },
      ],
    },
  },
  {
    slug: 'mujeres', audience: 'Mujeres', title: 'Programa Residencial Mujeres',
    description: 'Consulta al equipo de CEADT Mujeres para conocer el programa.',
    introduction: 'El Programa Residencial Mujeres es uno de los programas de CEADT en tratamiento de adicciones. CEADT Mujeres dispone de canales de contacto para realizar consultas sobre el programa, ingreso y derivaciones.',
    contact: contactFor('mujeres'),
    admission: sharedAdmission,
    referralAudience: 'Derivaciones exclusivas para profesionales de la red SENDA-MINSAL.',
    // Contenido específico de las capturas de Mujeres, sin extrapolar actividades.
    overview: {
      objective: 'El programa busca desarrollar la responsabilidad personal y social y las herramientas de autocuidado a través de un proceso terapéutico acompañado.',
      stages: sharedStages,
      activities: [
        { title: 'Terapéuticas', items: ['Acompañamiento profesional a nivel individual, familiar y grupal con Médico Psiquiatra, Psicóloga/o, Trabajador Social, Terapeuta Ocupacional, Técnico en Trabajo Social y Técnico en Enfermería'] },
        { title: 'Recreativas', items: ['Juegos de mesa', 'Taca taca', 'Televisión', 'Lectura'] },
        { title: 'Actividades de agrado', items: ['Cine', 'Compartir', 'Música', 'Paseos'] },
        { title: 'Vinculación responsable con el medio', items: ['Rutina diaria', 'Incorporación en CESFAM y control de salud', 'Nivelación de estudios', 'Orientación judicial', 'Revinculación familiar', 'Vinculación laboral'] },
      ],
    },
  },
];
