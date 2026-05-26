export type Category = 'interview' | 'corporate' | 'reportage' | 'documentaire';

export type Project = {
  slug: string;
  title: string;
  category: Category;
  tags?: ('drone')[];
  year: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'atelier-rivage',
    title: 'Atelier Rivage',
    category: 'interview',
    year: '2025',
    description: 'Portrait d artisan autour de la transmission du geste et du rythme de l atelier.',
    thumbnail:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    featured: true
  },
  {
    slug: 'les-vignes-en-commun',
    title: 'Les Vignes en Commun',
    category: 'reportage',
    tags: ['drone'],
    year: '2025',
    description: 'Reportage de terrain sur une dynamique collective entre producteurs et habitants.',
    thumbnail:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1'
  },
  {
    slug: 'cap-atlantique',
    title: 'Cap Atlantique',
    category: 'corporate',
    tags: ['drone'],
    year: '2024',
    description: 'Film de valorisation d activite pour un acteur territorial, entre site et savoir-faire.',
    thumbnail:
      'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://player.vimeo.com/video/22439234?autoplay=1'
  },
  {
    slug: 'regards-croises',
    title: 'Regards Croises',
    category: 'documentaire',
    year: '2024',
    description: 'Immersion longue dans un lieu de vie pour capter la presence, les details et le temps.',
    thumbnail:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1'
  },
  {
    slug: 'matiere-vive',
    title: 'Matiere Vive',
    category: 'interview',
    year: '2023',
    description: 'Serie d interviews pour documenter une filiere locale et les personnes qui la font vivre.',
    thumbnail:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://player.vimeo.com/video/1084537?autoplay=1'
  },
  {
    slug: 'horizon-metier',
    title: 'Horizon Metier',
    category: 'corporate',
    year: '2023',
    description: 'Film d entreprise centre sur une equipe et son organisation au quotidien.',
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1'
  },
  {
    slug: 'passage-littoral',
    title: 'Passage Littoral',
    category: 'reportage',
    tags: ['drone'],
    year: '2022',
    description: 'Reportage entre terre et mer pour suivre un projet associatif sur plusieurs semaines.',
    thumbnail:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://player.vimeo.com/video/357274789?autoplay=1'
  },
  {
    slug: 'traces-et-territoires',
    title: 'Traces et Territoires',
    category: 'documentaire',
    year: '2022',
    description: 'Recit documentaire autour d un territoire, de ses usages et de ses memoires locales.',
    thumbnail:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];

export const byCategory = (category: Category) =>
  projects.filter((project) => project.category === category);

export const withDrone = () => projects.filter((project) => project.tags?.includes('drone'));
