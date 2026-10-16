export interface Contact {
  id: string;
  name: string;
  phones: { label: string; href: string }[];
  email: string;
  mapsUrl: string;
}
/** Número confirmado por el usuario para orientación general por WhatsApp. */
export const orientationWhatsApp: { number: string; label: string } | null = {
  number: '+56969186636',
  label: '+56 9 6918 6636',
};
/** Transcripción del pie de docs/references/image.png; vigencia pendiente de revisión. */
export const contacts: Contact[] = [
  {
    id: 'hombres', name: 'CEADT Hombres',
    phones: [
      { label: '712 683439', href: 'tel:+56712683439' },
      { label: '712 683351', href: 'tel:+56712683351' },
    ],
    email: 'centrohombres@ceadt.cl',
    mapsUrl: 'https://www.google.com/maps?cid=2466325098543320171',
  },
  {
    id: 'mujeres', name: 'CEADT Mujeres',
    phones: [
      { label: '+569 5604 3749', href: 'tel:+56956043749' },
      { label: '712 478350', href: 'tel:+56712478350' },
    ],
    email: 'centromujeres@ceadt.cl',
    mapsUrl: 'https://www.google.com/maps?cid=16639876544803516152',
  },
];
