import { programs, type Program } from './programs';

export interface ProgramPreview {
  title: string;
  modality: string;
  category: 'residential' | 'outpatient' | 'integration' | 'combined';
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
      { title: 'Programa Ambulatorio Intensivo PAI Alameda', modality: 'Ambulatorio intensivo', category: 'outpatient' },
      { title: 'Programa Residencial Hombres Curicó', modality: 'Residencial', category: 'residential' },
      { title: 'Viviendas de Apoyo a la Integración Social VAIS', modality: 'Apoyo a la integración social', category: 'integration' },
    ],
  },
  {
    id: 'biobio',
    title: 'Región del Biobío',
    description: 'Presentación del programa residencial y ambulatorio de Concepción.',
    programs: [],
    previews: [
      { title: 'Programa Residencial y Ambulatorio Concepción', modality: 'Residencial y ambulatorio', category: 'combined' },
    ],
  },
];

export interface RegionalProgramEntry {
  title: string;
  href?: string;
}
export interface RegionalProgramGroup {
  id: ProgramPreview['category'];
  title: string;
  programs: RegionalProgramEntry[];
}

/** Orden de presentación por modalidad, independiente de la disponibilidad de contenido. */
export function getRegionalProgramGroups(region: ProgramRegion): RegionalProgramGroup[] {
  const groups: RegionalProgramGroup[] = [
    { id: 'residential', title: 'Residenciales', programs: region.programs.map((program) => ({ title: program.title, href: `/programas/${program.slug}` })) },
    { id: 'outpatient', title: 'Ambulatorios', programs: [] },
    { id: 'integration', title: 'Apoyo a la integración social', programs: [] },
    { id: 'combined', title: 'Residencial y ambulatorio', programs: [] },
  ];
  for (const preview of region.previews) {
    groups.find((group) => group.id === preview.category)?.programs.push({ title: preview.title });
  }
  return groups.filter((group) => group.programs.length > 0);
}
