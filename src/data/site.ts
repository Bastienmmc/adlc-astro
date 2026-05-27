export const site = {
  name: 'Au-dela du cadre',
  email: 'contact@audeladucadre.fr',
  location: 'Base en Charente-Maritime, disponible selon les projets.'
};

export const mainNav = [
  { label: 'Films de marque', href: '/#films-marque' },
  { label: 'Portraits & recits', href: '/#portraits-recits' },
  { label: 'Culture & sport', href: '/#culture-sport' },
  { label: 'Contact', href: '/#contact' }
];

export const secondaryNav = [
  { label: 'Bio', href: '/bio' },
  { label: 'Equipement', href: '/equipement' }
];

export const categoryBlocs = [
  {
    title: 'Films de marque',
    key: 'films-marque',
    description:
      'Films pensés pour porter une image de marque, rendre une activite lisible et affirmer un positionnement.'
  },
  {
    title: 'Portraits & recits',
    key: 'portraits-recits',
    description:
      'Portraits, temoignages et formes plus narratives qui laissent de la place a une parole, un parcours ou un regard.'
  },
  {
    title: 'Culture & sport',
    key: 'culture-sport',
    description:
      'Reportages et captations sur le terrain pour suivre un evenement, un lieu, une dynamique ou une pratique.'
  }
] as const;
