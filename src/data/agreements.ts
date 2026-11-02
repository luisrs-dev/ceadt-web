import type { ImageMetadata } from 'astro';
import sendaLogo from '../assets/agreements/senda.jpg';
import autonomaLogo from '../assets/agreements/universidad-autonoma.jpg';
import inacapLogo from '../assets/agreements/inacap.jpg';
import utalcaLogo from '../assets/agreements/utalca-logo.jpg';
import santoTomasLogo from '../assets/agreements/logo-santo-tomas.png';

export interface Agreement {
  id: string;
  name: string;
  logo: ImageMetadata;
  category: string;
  purpose: string;
  description: string;
  website?: { label: string; href: string };
}
/** Síntesis de las capturas aportadas. Vigencia y condiciones en content-review.md. */
export const agreements: Agreement[] = [
  {
    id: 'senda', logo: sendaLogo, name: 'SENDA', category: 'Salud y acceso',
    purpose: 'Cobertura y sostenibilidad de la atención',
    description: 'La colaboración con el Servicio Nacional para la Prevención y Rehabilitación del Consumo de Drogas y Alcohol se estableció para ampliar la cobertura de atención de personas con problemas de consumo de alcohol u otras drogas, mediante la derivación desde su programa o CESFAM de referencia.',
    website: { label: 'Sitio de SENDA', href: 'https://www.senda.gob.cl/' },
  },
  {
    id: 'universidad-autonoma', logo: autonomaLogo, name: 'Universidad Autónoma de Chile', category: 'Formación y comunidad',
    purpose: 'Colaboración en la formación de estudiantes',
    description: 'El convenio se estableció para acercar a estudiantes en formación a la atención de personas con problemas asociados al consumo de alcohol u otras drogas. Esta colaboración también buscó ampliar las prestaciones y actividades terapéuticas guiadas para las personas usuarias.',
    website: { label: 'Sitio de Universidad Autónoma', href: 'https://www.uautonoma.cl/' },
  },
  {
    id: 'inacap', logo: inacapLogo, name: 'INACAP', category: 'Formación y comunidad',
    purpose: 'Formación de técnicos en enfermería',
    description: 'La colaboración con la carrera de Técnico en Enfermería de Nivel Superior se orientó a que sus estudiantes conocieran la atención de personas con problemas de consumo de alcohol u otras drogas y este ámbito de desempeño profesional. El acuerdo también buscó ampliar las actividades terapéuticas guiadas.',
    website: { label: 'Sitio de INACAP', href: 'https://portales.inacap.cl/' },
  },
  {
    id: 'universidad-de-talca', logo: utalcaLogo, name: 'Universidad de Talca', category: 'Convenio institucional',
    purpose: 'Convenio con Universidad de Talca',
    description: 'CEADT cuenta con un convenio con la Universidad de Talca, como parte de sus vínculos de colaboración institucional.',
  },
  {
    id: 'santo-tomas', logo: santoTomasLogo, name: 'Santo Tomás', category: 'Convenio institucional',
    purpose: 'Convenio con Santo Tomás',
    description: 'CEADT cuenta con un convenio con Santo Tomás, como parte de sus vínculos de colaboración institucional.',
  },
];
