export const site = {
  name: 'Au-dela du cadre',
  email: 'contact@audeladucadre.fr',
  location: 'Base en Charente-Maritime, disponible selon les projets.'
};

export const mainNav = [
  { label: 'Realisations', href: '/' },
  { label: 'Drone', href: '/drone' },
  { label: 'Documentaire', href: '/documentaire' },
  { label: 'A propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' }
];

export const secondaryNav = [
  { label: 'Bio', href: '/bio' },
  { label: 'Equipement', href: '/equipement' }
];

export const categoryBlocs = [
  {
    title: 'Interview',
    key: 'interview',
    description:
      'Portraits, temoignages et prises de parole, avec une attention portee a la presence, au rythme et a la sincerite.'
  },
  {
    title: 'Corporate',
    key: 'corporate',
    description:
      'Films pour entreprises, structures et institutions, penses pour presenter une activite, un savoir-faire ou une equipe avec clarte.'
  },
  {
    title: 'Reportage',
    key: 'reportage',
    description:
      'Captations et immersions sur le terrain, pour rendre compte d un evenement, d un lieu, d une action ou d une dynamique collective.'
  },
  {
    title: 'Documentaire',
    key: 'documentaire',
    description:
      'Projets plus narratifs, ou la mise en scene, la duree et le regard prennent davantage de place.'
  }
] as const;
