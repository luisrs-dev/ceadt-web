import type { ImageMetadata } from 'astro';
import biobio2026 from '../assets/news/senda-biobio-2026.jpeg';
import rights2025 from '../assets/news/decalogo-2025.jpeg';
import sendaMaule from '../assets/news/senda-maule.jpg';
import directorVisit from '../assets/news/visita-director.jpg';
import therapeuticDischarge from '../assets/news/20-personas.jpg';
import twelveUsers from '../assets/news/12-usuarios.jpg';
import elevenUsers from '../assets/news/11-usuarios-2018.jpg';

export interface NewsArticle {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image?: ImageMetadata;
  sourceUrl?: string;
  imageCredit?: string;
  imageAlt: string;
  paragraphs: readonly string[];
  sections?: readonly { title: string; paragraphs: readonly string[] }[];
}

export const news: readonly NewsArticle[] = [
  {
    slug: "senda-biobio-inaugura-centro-tratamiento",
    title: "SENDA Biobío inaugura un nuevo centro de tratamiento para fortalecer la red regional de rehabilitación",
    publishedAt: "2026-04-01",
    summary: "SENDA presentó en Concepción un centro ejecutado por CEADT, con atención ambulatoria intensiva y residencial para población adulta.",
    imageAlt: "Personas sentadas escuchan a una expositora frente a pendones de SENDA y CEADT.",
    sourceUrl: "https://www.senda.gob.cl/noticia/senda-biobio-inaugura-un-nuevo-centro-de-tratamiento-para-fortalecer-la-red-regional-de-rehabilitacion/",
    image: biobio2026,
    imageCredit: "SENDA",
    paragraphs: [
      "SENDA informó la inauguración de un centro especializado en Concepción, ejecutado por CEADT, para apoyar la recuperación de personas adultas con consumo problemático de alcohol y otras drogas.",
      "La publicación describe una modalidad ambulatoria intensiva con 15 cupos mensuales para hombres y mujeres de Concepción, Chiguayante y San Pedro de la Paz, y una modalidad residencial masculina con 10 cupos mensuales de cobertura regional.",
      "El centro cuenta con un equipo interdisciplinario que elabora planes de intervención individuales. La noticia destaca la experiencia previa de CEADT en el Maule y su ampliación al Biobío. Las condiciones y capacidades indicadas corresponden a la fecha de la publicación.",
    ],
  },
  {
    slug: "decalogo-derechos-recuperacion-2025",
    title: "Presentan decálogo de derechos de personas en proceso de recuperación",
    publishedAt: "2025-10-30",
    summary: "SENDA presentó el decálogo de derechos en el centro residencial masculino CEADT durante las actividades del Mes de la Recuperación.",
    imageAlt: "Participantes conversan alrededor de una mesa en una sala con paredes de ladrillo.",
    sourceUrl: "https://www.senda.gob.cl/noticia/presentan-decalogo-de-derechos-de-personas-en-proceso-de-recuperacion/",
    image: rights2025,
    imageCredit: "SENDA",
    paragraphs: [
      "En el cierre del Mes de la Recuperación, la directora regional de SENDA, Ana María Rodríguez, participó en un conversatorio con personas del centro residencial masculino CEADT, ubicado en la comuna de Maule.",
      "La actividad abordó el decálogo de derechos de personas usuarias de programas de recuperación. El documento reúne nueve derechos y un deber orientados a proteger la dignidad y los derechos humanos durante los procesos de tratamiento.",
      "También se conversó sobre la audioserie “1412, Esto es sin Juzgar”, que presenta distintas experiencias relacionadas con el consumo y la recuperación. La jornada incluyó testimonios y reflexiones de las personas participantes.",
    ],
  },
  {
    slug: "decalogo-derechos-residencial-femenino-2024",
    title: "En Centro de Tratamiento residencial femenino de Maule fue presentado decálogo de derechos de personas en recuperación",
    publishedAt: "2024-11-13",
    summary: "Usuarias del centro residencial femenino CEADT participaron en un conversatorio sobre derechos en los procesos de recuperación.",
    imageAlt: "",
    sourceUrl: "https://www.senda.gob.cl/noticia/en-centro-de-tratamiento-residencial-femenino-de-maule-fue-presentado-decalogo-de-derechos-de-personas-en-recuperacion/",
    paragraphs: [
      "SENDA Maule presentó el decálogo de derechos de personas usuarias de programas de recuperación en un conversatorio realizado en el centro residencial femenino CEADT.",
      "Participaron autoridades regionales, integrantes del equipo profesional y diez usuarias. La actividad destacó que las personas en recuperación son titulares de derechos humanos y deben recibir una atención respetuosa de su dignidad.",
      "Entre los temas abordados estuvieron el acceso a prestaciones de salud de calidad, la igualdad y no discriminación, y la protección de la privacidad y la confidencialidad. El instrumento busca orientar tanto la atención como la formación de los equipos de recuperación.",
    ],
  },
  {
    slug: "dia-internacional-mujer-ceadt-2023",
    title: "Con usuarias de Centro de Tratamiento residencial SENDA Maule conmemora Día Internacional de la Mujer",
    publishedAt: "2023-03-13",
    summary: "SENDA conmemoró el Día Internacional de la Mujer con usuarias del centro residencial CEADT del sector de Colín.",
    imageAlt: "",
    sourceUrl: "https://www.senda.gob.cl/noticia/con-usuarias-de-centro-de-tratamiento-residencial-senda-maule-conmemora-dia-internacional-de-la-mujer/",
    paragraphs: [
      "Usuarias del centro residencial CEADT, ubicado en el sector de Colín, participaron en un encuentro de conmemoración del Día Internacional de la Mujer organizado por SENDA.",
      "La actividad fue liderada por la directora regional subrogante de SENDA, Ana María Rodríguez, y la seremi de la Mujer y la Equidad de Género, Claudia Morales. Se abordaron la autonomía de las mujeres y el acompañamiento durante la recuperación.",
      "Las participantes compartieron testimonios sobre sus procesos y la importancia de contar con oportunidades sin discriminación. SENDA reafirmó su compromiso con la recuperación y los proyectos de vida de las mujeres en tratamiento.",
    ],
  },

  {
    slug: 'senda-maule-centro-residencial-mujeres-talca',
    title: 'SENDA Maule cuenta con nuevo Centro de Tratamiento residencial para mujeres en las afueras de Talca',
    publishedAt: '2021-02-19',
    summary: 'Un nuevo centro residencial de CEADT, en convenio con SENDA, recibe a mujeres con consumos problemáticos de alcohol u otras drogas en las afueras de Talca.',
    image: sendaMaule,
    imageAlt: 'Dos personas con mascarilla conversan en una habitación del centro residencial.',
    paragraphs: [
      'En pleno funcionamiento se encuentra un nuevo Centro de Tratamiento residencial, destinado a acoger a mujeres que presentan consumos problemáticos de alcohol u otras drogas.',
      'El establecimiento está a cargo del Centro Especialista en Tratamiento de Adicciones -CEADT- como parte de un convenio con SENDA y se ubica a la altura del kilómetro 5 de la ruta hacia Colín, en las afueras de la capital maulina.',
      'El director regional de SENDA, Mario Fuenzalida, visitó las dependencias, que fueron adecuadas a las necesidades de las usuarias. Pueden acoger a mujeres mayores de 18 años de edad que, de manera voluntaria, quieran rehabilitarse. Sus hijos, hasta los 5 años, también son recibidos allí.',
      '“El gobierno del Presidente, Sebastián Piñera, y nuestro director nacional, Carlos Charme, tienen una especial preocupación por la rehabilitación de las personas con consumos problemáticos de alcohol u otras drogas y, por eso, son destinados importantes recursos para asegurar el funcionamiento de estos centros especializados”, sostuvo Fuenzalida.',
      'En el Maule, junto a SENDA trabajan 41 centros de tratamiento, tanto residenciales como ambulatorios, con cerca de 1.500 usuarios y usuarias anuales.',
    ],
  },
  {
    slug: 'visita-del-director-nacional',
    title: 'Visita del Director Nacional',
    publishedAt: '2020-08-07',
    summary: 'El Director Nacional de SENDA, Carlos Charme, visitó la región del Maule y el centro CEADT de Talca, donde conversó con usuarios residentes sobre su tratamiento y los desafíos de la pandemia.',
    image: directorVisit,
    imageAlt: 'Grupo de personas con mascarillas reunidas en el patio de un edificio de fachada naranja.',
    paragraphs: [
      'En su visita a la región del Maule, la máxima autoridad del Servicio mostró preocupación por las últimas cifras de la encuesta de consumo de alcohol y otras drogas en pandemia, realizada por Senda y reiteró su llamado a prevenir el consumo de estas sustancias.',
      'El Director Nacional del Servicio Nacional para la Prevención y Rehabilitación del Consumo de Drogas y Alcohol (SENDA), Carlos Charme, visitó las comunas de Río Claro y Talca, donde participó de un operativo sanitario, y sostuvo reuniones con parte del equipo regional, y visitó el Centro Especialista en Tratamiento de Adicciones de Talca (CEADT), donde compartió con sus usuarios, entre otras actividades.',
      'En su recorrido por la región, el Director Nacional mostró su preocupación por el consumo de alcohol y otras drogas en la zona, donde de acuerdo a la encuesta Covid-19 realizada por Senda durante la pandemia, un 18,5% de los consumidores encuestados declara haber usado más alcohol y un 31,4% más marihuana, entre otros resultados.',
      '“Mientras exista una persona con consumo problemático de alcohol y otras drogas, seguiremos trabajando con toda nuestra fuerza para evitarlo. El consumo de sustancias no sólo hace mal para nuestra salud física y mental, sino que destruye a nuestras familias y entornos. Debemos prevenir su consumo y proteger a quienes más queremos, sobretodo a nuestros niños, niñas y adolescentes”, dijo la máxima autoridad del servicio.',
      'Durante la mañana, el Director Nacional llegó hasta Cumpeo (capital de la comuna de Río Claro), donde fue recibido por el Director Regional de Senda, Mario Fuenzalida y el alcalde de la comuna, Américo Guajardo, con quien recorrió las nuevas oficinas del programa SENDA Previene, que por primera vez se está implementado en la zona para llevar las políticas preventivas institucionales los vecinos. De esta manera, SENDA tendrá presencia en 18 de las 30 comunas del Maule.',
      'Posteriormente, el Director Nacional se trasladó hasta el sector de Las Mercedes, donde el equipo sanitario móvil del programa “Tolerancia Cero”, compuesto por un médico, enfermera, TENS y una ambulancia, se encuentra apoyando al municipio en rondas médicas rurales, especialmente dirigidas a adultos mayores. Esta iniciativa comenzó en la región y se ha mantenido durante la emergencia sanitaria, poniendo a disposición de la comunidad la ambulancia de Senda que habitualmente es utilizada para los operativos.',
      '“Pese a la pandemia, seguimos trabajando en nuestros programas de Prevención y Tratamiento, pero también nos encontramos apoyando en la emergencia sanitaria. Hoy estamos en un operativo médico, entregándoles medicamentos a vecinos adultos mayores, pero también hemos estado en puntos preventivos de salud. Estamos a disposición de lo que nos indique la autoridad sanitaria, siempre buscando ser un apoyo y ayuda en estos difíciles tiempos” explicó el Director Regional del SENDA, Mario Fuenzalida.',
      '“Tengan confianza en lo que estamos haciendo, hay un gran equipo de trabajo detrás y estamos trabajando todos los días. Acá no hay diferencias entre gobiernos regionales, comunas, ni colores políticos. Estamos al servicio de las personas, somos un equipo con un solo norte, que es prevenir el consumo de alcohol y otras drogas y ayudar a las personas que más lo necesitan, especialmente a nuestros niños, niñas y adolescentes”, indicó el Director Nacional.',
      'Este tipo de actividades también han sido realizados en las comunas de Molina, Parral y Pelarco, totalizando 15 operativos y 102 personas atendidas.',
      'El Director Nacional también dialogó con los 18 equipos comunales Senda Previene en la región, donde conversó sobre la implementación del Plan Elige Vivir Sin Drogas y sus desafíos en medio de la crisis sanitaria.',
    ],
    sections: [
      {
        title: 'Centro de tratamiento',
        paragraphs: [
          'En la capital regional, el Director Nacional visitó el Centro Especialista en Tratamiento de Adicciones -CEADT- que forma parte de la red de instituciones de rehabilitación que trabajan con SENDA, donde recorrió las instalaciones y conversó con los usuarios residentes, con quienes dialogó sobre su proceso de tratamiento y los desafíos a los que se enfrentan por la pandemia.',
          'En la Región del Maule, existen 41 centros de tratamiento públicos y privados contratados por SENDA y a los cuales asisten 750 personas, entre hombres y mujeres, adultos y jóvenes, tanto en modalidad ambulatoria o residencial.',
          'La máxima autoridad del Servicio también se reunió de manera virtual con los funcionarios y funcionarias de la Dirección Regional y con profesionales de los equipos comunales, a quienes agradeció la labor que realizan día a día, especialmente en el contexto de la emergencia sanitaria.',
        ],
      },
    ],
  },
  {
    slug: 'veinte-personas-alta-terapeutica',
    title: 'Veinte personas obtienen alta terapéutica tras egresar exitosamente de programa de tratamiento',
    publishedAt: '2020-01-27',
    summary: 'Veinte personas recibieron su alta terapéutica tras participar en el programa residencial de CEADT. La ceremonia reunió a egresados y familiares en la Universidad Autónoma de Talca.',
    image: therapeuticDischarge,
    imageAlt: 'Asistentes sentados en un auditorio durante una ceremonia, frente a un escenario con un pendón de SENDA.',
    paragraphs: [
      'Durante un año, pacientes estuvieron en programa de rehabilitación ejecutado por Centro Especialista en Tratamiento de Adicciones de Talca.',
      'Veinte personas, que de manera voluntaria decidieron someterse a un programa de rehabilitación ofrecido por SENDA, recibieron su alta terapéutica tras superar una etapa de consumo problemático de sustancias.',
      'La ceremonia se realizó en el salón paraninfo de la Universidad Autónoma sede Talca y fue encabezado por el director regional del SENDA, Mario Fuenzalida. También estuvieron familiares de los pacientes, cuyo apoyo resultó fundamental en este proceso.',
      'Los usuarios y usuarias asistieron al Centro Especialista en Tratamiento de Adicciones -CEADT- que trabaja junto a SENDA desde el año 2017. El establecimiento cuenta con un equipo multidisciplinario, integrado por psicólogos, trabajador social, médico especialista, terapeuta ocupacional, técnico en rehabilitación y enfermería. El tratamiento tiene una duración aproximada de un año, en régimen residencial, con un trabajo a nivel personal, familiar y también de integración social. En esto último, a los egresados se les ofrece seguir vinculados al centro para que puedan participar en talleres grupales de seguimiento y obtener apoyo si fuera necesario. De hecho, nueve personas recibieron un reconocimiento por participar en actividades grupales de acompañamiento y que han mantenido sus logros terapéuticos.',
      '“El consumo de riesgo y abusivo de alcohol y otras drogas, constituye un problema de relevancia para la salud pública del país, en tanto aumenta la vulnerabilidad de las personas, familias y comunidades, profundizando las inequidades”, señaló Fuenzalida.',
      'El directivo felicitó a los egresados y egresadas por este logro. “Ustedes tomaron la decisión de someterse a este programa para rehabilitarse y, tal vez, no fue fácil. Han tenido la voluntad de salir adelante, sortearon obstáculos, pero lo consiguieron. A partir de hoy, se les abren nuevas oportunidades en la vida; volverán con sus familias y estarán en condiciones de reinsertarse social y laboralmente. Siéntanse orgullosos, como seguramente lo están sus familiares que ahora están acá con Ustedes”, recalcó.',
    ],
    sections: [
      {
        title: 'Testimonios',
        paragraphs: [
          'Miguel, uno de los pacientes egresados, señaló que “sin darme cuenta, empecé una escalada con las drogas sin sospechar cómo iba a terminar y a medida que pasaba el tiempo, mi consumo era ascendente. Estaba convencido que era capaz de detenerme, pero en realidad nunca pude solo. Las drogas, más que una satisfacción, eran un refugio para mí, toqué fondo y quedé solo, viviendo en un auto, había estropeado la vida de mi familia y entorno. La última luz que vi en el camino, fue el lugar donde me dieron la oportunidad de un tratamiento y con mucha fuerza comencé la batalla contra la adicción. A 28 meses de haber iniciado mi tratamiento, sigo esta lucha diaria para enfrentar esta enfermedad. Pero sigo dando la pelea para ser parte de la solución y no del problema y hoy puedo controlar mi adicción y mi vida ha vuelto a la normalidad paso a paso, pero se puede, aunque toma tiempo”.',
        ],
      },
    ],
  },
  {
    slug: 'doce-usuarios-alta-terapeutica-talca',
    title: '12 usuarios atendidos en el centro CEADT de Talca recibieron su alta terapéutica en el consumo de sustancias',
    publishedAt: '2019-01-22',
    summary: 'Doce usuarios del programa residencial de CEADT en Talca recibieron su alta terapéutica tras completar su tratamiento. También se reconoció a diez usuarios que continuaban en seguimiento.',
    image: twelveUsers,
    imageAlt: 'Personas frente a una mesa y una pantalla de proyección durante una ceremonia, con asistentes y un pendón de CEADT.',
    paragraphs: [
      'El consumo de alcohol y otras drogas constituye uno de los principales problemas de salud pública del país, incidiendo profundamente en la vulnerabilidad social, profundizando desigualdades e inequidades, obstaculizando el desarrollo de personas y comunidades y contribuyendo además, a la inseguridad ciudadana.',
      '12 usuarios del centro CEADT de Talca, el cual es de modalidad residencial, recibieron el alta terapéutica del consumo de sustancias, donde los beneficiarios han completado íntegramente su proceso de tratamiento y rehabilitación de aproximadamente un año de trabajo a nivel personal, familiar y también de integración social. Además, se realizaron 10 reconocimientos a los usuarios antiguos que se han mantenido en seguimiento en el centro.',
      'El tratamiento y la rehabilitación de personas con problemas de consumo de alcohol y otras drogas, es posible y funciona, los estudios realizados por SENDA en los años de implementación y la evidencia internacional así lo indican. La experiencia demuestra que quienes ingresan a un tratamiento pueden lograr resultados satisfactorios a través de un proceso de rehabilitación sistemático e integral, que considere factores biológicos, psicológicos, sociales y de contexto, asociados al consumo de sustancias.',
      'El tratamiento de personas que presentan consumo problemático debe asegurar programas terapéuticos flexibles y personalizados, que permitan fluctuaciones en la intensidad del tratamiento según la etapa en que se encuentren los usuarios y usuarias; que faciliten recuperación del individuo y su plena integración social.',
    ],
  },
  {
    slug: 'once-usuarios-alta-terapeutica-2018',
    title: '11 usuarios de programa residencial recibieron el alta terapéutica de consumo de alcohol y otras drogas',
    publishedAt: '2018-01-15',
    summary: 'Once usuarios del programa residencial de CEADT recibieron su alta terapéutica tras completar aproximadamente doce meses de tratamiento, con trabajo personal, familiar y de integración social.',
    image: elevenUsers,
    imageAlt: 'Asistentes en un auditorio de INACAP frente a un expositor y dos pantallas de proyección durante una ceremonia.',
    paragraphs: [
      'El consumo de alcohol y otras drogas constituye uno de los principales problemas de salud pública del país, incidiendo profundamente en la vulnerabilidad social, profundizando desigualdades e inequidades, obstaculizando el desarrollo de personas y comunidades y contribuyendo además, a la inseguridad ciudadana.',
      '11 usuarios del centro CEADT modalidad residencial, lugar donde los beneficiarios han completado íntegramente su proceso de tratamiento y rehabilitación de aproximadamente 12 meses con objetivos de trabajo a nivel personal, familiar y también de integración social.',
      'El tratamiento y la rehabilitación de personas con problemas de consumo de alcohol y otras drogas, es posible y funciona, los estudios realizados por SENDA en los años de implementación y la evidencia internacional así lo indican. La experiencia demuestra que quienes ingresan a un tratamiento pueden lograr resultados satisfactorios a través de un proceso de rehabilitación sistemático e integral, que considere factores biológicos, psicológicos, sociales y de contexto, asociados al consumo de sustancias.',
      'El tratamiento de personas que presentan consumo problemático debe asegurar programas terapéuticos flexibles y personalizados, que permitan fluctuaciones en la intensidad del tratamiento según la etapa en que se encuentren los usuarios y usuarias; que faciliten recuperación del individuo y su plena integración social.',
    ],
  },
];

export function formatNewsDate(date: string): string {
  return new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
}
