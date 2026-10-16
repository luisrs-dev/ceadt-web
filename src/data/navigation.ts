export interface NavigationItem {
  label: string;
  href: string;
  planned: boolean;
}
export const navigation: NavigationItem[] = [
  { label: 'Inicio', href: '/', planned: false },
  { label: 'Nosotros', href: '/nosotros', planned: false },
  { label: 'Programas', href: '/programas', planned: false },
  { label: 'Tests', href: '/tests', planned: false },
  { label: 'Convenios', href: '/convenios', planned: false },
  { label: 'Noticias', href: '/noticias', planned: false },
  { label: 'Artículos', href: '/articulos', planned: false },
  ...[
    ['Contacto', '/contacto'],
  ].map(([label, href]) => ({ label, href, planned: true })),
];

// Solo destinos disponibles: las páginas planificadas se conservan arriba.
const homeSections: Record<string, string> = {
  '/contacto': '/#contacto',
};
export const publicNavigation = navigation.flatMap((item) => {
  if (!item.planned) return [item];
  const href = homeSections[item.href];
  return href ? [{ ...item, href, planned: false }] : [];
});

// publicNavigation.splice(publicNavigation.length - 1, 0, { label: 'Preguntas', href: '/#preguntas', planned: false });

/** El enlace padre continúa activo en páginas de detalle, sin coincidencias parciales. */
export function isNavigationActive(currentPath: string, href: string): boolean {
  return currentPath === href || (!href.includes('#') && href !== '/' && currentPath.startsWith(`${href}/`));
}
