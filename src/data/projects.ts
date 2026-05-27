export type Category = 'corporate' | 'interview' | 'reportage';

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
  featuredInCategory?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'oser-le-offroad',
    title: 'Oser le offroad',
    category: 'reportage',
    year: '2026',
    description:
      "Une réalisation centrée sur le passage à l'offroad, entre appréhension, apprentissage et envie d'aller plus loin.",
    thumbnail: 'https://i.ytimg.com/vi/OtL_iQfxWvU/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/OtL_iQfxWvU?autoplay=1',
    featured: true,
    featuredInCategory: true,
  },
  {
    slug: 'pourquoi-jai-change-de-moto',
    title: "Pourquoi j'ai changé de moto ?",
    category: 'reportage',
    year: '2026',
    description:
      "Un film autour du changement de moto, du rapport à la machine et de l'évolution du projet Bast'Rider.",
    thumbnail: 'https://i.ytimg.com/vi/_UKXK833fS4/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/_UKXK833fS4?autoplay=1',
  },
  {
    slug: 'ce-qui-me-pousse',
    title: 'Ce qui me pousse',
    category: 'interview',
    year: '2026',
    description:
      "Un film plus personnel sur ce qui nourrit l'envie de partir, de filmer et de continuer à faire évoluer le projet.",
    thumbnail: 'https://i.ytimg.com/vi/j0vtMMs8mt4/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/j0vtMMs8mt4?autoplay=1',
    featuredInCategory: true,
  },
  {
    slug: 'ce-qui-me-fait-douter',
    title: 'Ce qui me fait douter',
    category: 'interview',
    year: '2026',
    description:
      "Une vidéo plus introspective autour des hésitations, des questions et de la place que prend ce projet dans la durée.",
    thumbnail: 'https://i.ytimg.com/vi/7GOgDpcswBE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/7GOgDpcswBE?autoplay=1',
  },
  {
    slug: 'ce-qui-mappelle',
    title: "Ce qui m'appelle",
    category: 'interview',
    year: '2026',
    description:
      "Un récit sur l'appel de la route, le besoin d'avancer et ce qui revient, malgré les doutes, comme une évidence.",
    thumbnail: 'https://i.ytimg.com/vi/x9wYer5djkg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/x9wYer5djkg?autoplay=1',
  },
  {
    slug: 'tresors-caches-episode-1',
    title: 'Trésors cachés — épisode 1',
    category: 'corporate',
    year: '2026',
    description:
      "Un format plus éditorial, pensé comme un film de découverte et de mise en valeur d'un lieu, d'une ambiance ou d'un univers.",
    thumbnail: 'https://i.ytimg.com/vi/3QTM7xPS5oE/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/3QTM7xPS5oE?autoplay=1',
    featuredInCategory: true,
  }
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];

export const byCategory = (category: Category) =>
  projects.filter((project) => project.category === category);

export const byCategories = (categories: Category[]) =>
  projects.filter((project) => categories.includes(project.category));

export const withDrone = () => projects.filter((project) => project.tags?.includes('drone'));

export const categoryLabels: Record<Category, string> = {
  corporate: 'Film de marque',
  interview: 'Portrait & récit',
  reportage: 'Culture & sport',
};
