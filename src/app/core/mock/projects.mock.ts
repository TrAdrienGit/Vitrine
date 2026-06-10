export const PROJECTS = [
  {
    id: 'p1',
    title: 'Angular Vitrine',
    description: 'CMS personnel de présentation',
    cover: 'assets/images/project_background_template.jpg',
    stack: ['Angular', 'Tailwind'],
    ownerId: '1',
    supplementary_link: [
      {
        text: "GitHub",
        link: "https://example.com/",
      },
      {
        text: "Live demo",
        link: "https://example.com/",
      }
    ],

    blocks: [
      { type: 'title', toc_title: "Introduction", content: 'Introduction' },
      { type: 'text', toc_title: "", content: 'Explication du projet, contexte, objectifs, problèmes résolus.' },

      { type: 'title', toc_title: "Architecture", content: 'Architecture' },
      { type: 'text', toc_title: "", content: 'Explication technique du projet.' },
      { type: 'image', toc_title: "", content: 'assets/images/project_background_template.jpg' },

      { type: 'title', toc_title: "Fonctionnalités", content: 'Fonctionnalités' },
      { type: 'text', toc_title: "", content: 'Explication du projet, contexte, objectifs, problèmes résolus.' },
      { type: 'text', toc_title: "", content: 'Explication du projet, contexte, objectifs, problèmes résolus.' },
      { type: 'text', toc_title: "", content: 'Explication du projet, contexte, objectifs, problèmes résolus.' },

      { type: 'title', toc_title: "Media", content: 'Media' },
      { type: 'image', toc_title: "", content: 'assets/images/project_background_template.jpg' },
      { type: 'gif', toc_title: "", content: 'assets/images/project_background_template.jpg' },
      { type: 'video', toc_title: "", content: 'assets/images/project_background_template.jpg' },
    ]
  }
];
