import type { ImageMetadata } from 'astro';
import sendaLogo from '../assets/agreements/senda.jpg';
import autonomaLogo from '../assets/agreements/universidad-autonoma.jpg';
import inacapLogo from '../assets/agreements/inacap.jpg';
import eligeLogo from '../assets/agreements/fundacion-elige.jpg';
import mensalLogo from '../assets/agreements/mensal.jpg';
import kayLogo from '../assets/agreements/kay.jpg';

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
    id: 'fundacion-elige', logo: eligeLogo, name: 'Fundación Elige', category: 'Apoyo a personas y familias',
    purpose: 'Colaboración alimentaria y apoyo comunitario',
    description: 'Durante la pandemia de COVID-19 se estableció una colaboración con Fundación Elige, a través de Red de Alimentos, para canalizar insumos alimenticios hacia personas usuarias y familias afectadas por ese contexto.',
  },
  {
    id: 'mensal', logo: mensalLogo, name: 'Mensal Centro de Salud', category: 'Salud y acceso',
    purpose: 'Vinculación con atención de salud',
    description: 'El acuerdo se orientó a facilitar el acceso de las personas usuarias y su entorno de apoyo a una red de atención de salud particular, para distintas necesidades de salud.',
    website: { label: 'Sitio de Mensal', href: 'https://somosmensal.cl/' },
  },
  {
    id: 'kay', logo: kayLogo, name: 'Kay Soluciones Informáticas', category: 'Gestión y tecnología',
    purpose: 'Herramientas para el trabajo del equipo',
    description: 'La colaboración permitió incorporar la ficha electrónica Kimün, con el propósito de digitalizar los registros y mejorar la gestión interna y el trabajo del equipo profesional.',
    website: { label: 'Sitio de Kay', href: 'https://www.kay.cl/' },
  },
];
