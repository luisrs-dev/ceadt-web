import { programs, type Program } from './programs';

export interface ProgramPreview {
  title: string;
  modality: string;
}
export interface ProgramRegion {
  id: string;
  title: string;
  description: string;
  programs: Program[];
  previews: ProgramPreview[];
}

/** Distribución de presentación pendiente de validación institucional.
 * Curicó se muestra por separado hasta confirmar si corresponde al programa actual.
 * No se trasladan requisitos ni contactos a programas sin información confirmada.
 */
export const programRegions: ProgramRegion[] = [
  {
    id: 'maule',
    title: 'Región del Maule',
    description: 'Programas residenciales, atención ambulatoria y apoyo a la integración social.',
    programs,
    previews: [
      { title: 'Programa Ambulatorio Intensivo PAI Alameda', modality: 'Ambulatorio intensivo' },
      { title: 'Programa Residencial Hombres Curicó', modality: 'Residencial' },
      { title: 'Viviendas de Apoyo a la Integración Social VAIS', modality: 'Apoyo a la integración social' },
    ],
  },
  {
    id: 'biobio',
    title: 'Región del Biobío',
    description: 'Presentación del programa residencial y ambulatorio de Concepción.',
    programs: [],
    previews: [
      { title: 'Programa Residencial y Ambulatorio Concepción', modality: 'Residencial y ambulatorio' },
    ],
  },
];
