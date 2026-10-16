import type { ImageMetadata } from 'astro';
import drugsBrainBehavior from '../assets/articles/drugs-brain-behavior.jpg';
import familyCheckup from '../assets/articles/family-checkup.jpg';
import recoveryPath from '../assets/articles/recovery-path.png';
import drugMyths from '../assets/articles/drug-myths.jpg';
import comorbidity from '../assets/articles/comorbidity.jpg';

export interface ArticleResource {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  pdfUrl?: string;
}

// Incorporar las rutas locales de los PDF cuando el usuario entregue los documentos.
export const articles: readonly ArticleResource[] = [
  { id: 'drugs-brain-behavior', title: 'Las drogas, el cerebro y la conducta', description: 'Bases científicas de la adicción', image: drugsBrainBehavior },
  { id: 'family-checkup', title: 'Chequeo Familiar', description: 'El buen cuidado parental previene el consumo de drogas', image: familyCheckup },
  { id: 'recovery-path', title: 'El Camino de la Recuperación', description: 'CEADT', image: recoveryPath },
  { id: 'drug-myths', title: 'Drogas', description: 'Derribemos los mitos', image: drugMyths },
  { id: 'comorbidity', title: 'Comorbilidad', description: 'Los trastornos por consumo de drogas y otras enfermedades mentales.', image: comorbidity },
];
