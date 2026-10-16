/** Redacción basada en quienessomos.png y en los textos aportados por el usuario.
 * La revisión institucional se registra en docs/content-review.md.
 * Se omiten convenios y vínculos de red cuya vigencia no está confirmada.
 */
export const institutional = {
  introduction: [
    'Somos un centro especialista en tratamiento de adicciones en la Región del Maule. Acompañamos procesos de rehabilitación y reinserción social.',
    'Nuestro propósito es atender las necesidades de las personas usuarias y otras instituciones, con un servicio orientado a la calidad y la mejora continua.',
  ],
  mission: 'Contribuir a la Región del Maule brindando atención especializada a personas con problemas de adicciones y apoyando su rehabilitación y reinserción social, mediante un servicio orientado a la calidad y la excelencia.',
  vision: 'Ser un centro de rehabilitación de referencia regional, reconocido por instituciones, organizaciones, profesionales y personas usuarias por su excelencia, eficacia, confianza, cercanía y compromiso con la comunidad.',
} as const;

export interface InstitutionalCommitment {
  title: string;
  description: string;
  iconPath: string;
}
/** Síntesis temática del contenido, no una declaración formal de valores. */
export const commitments: InstitutionalCommitment[] = [
  { title: 'Atención especializada', description: 'El tratamiento de adicciones como foco de nuestro trabajo.', iconPath: 'M16 5v22M5 16h22' },
  { title: 'Calidad del servicio', description: 'La mejora continua como orientación del servicio.', iconPath: 'm8 16 5 5 11-12M6 5h20v24H6z' },
  { title: 'Cercanía y compromiso', description: 'Un vínculo cercano y comprometido con la comunidad.', iconPath: 'M16 27 5 16C-1 7 10 1 16 9c6-8 17-2 11 7Z' },
  { title: 'Rehabilitación y reinserción social', description: 'El acompañamiento de estos procesos como parte de nuestro propósito.', iconPath: 'M5 25h6v-6h7v-6h9M22 8h5v5' },
];
