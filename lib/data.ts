export const personalInfo = {
  name: 'Linamaría Martínez',
  title: 'Desarrolladora Full Stack',
  bio: 'Apasionada por crear experiencias web modernas y funcionales. Especializada en React, Next.js y TypeScript.',
  fullBio: 'Desarrolladora Full Stack con más de 3 años de experiencia creando aplicaciones web modernas y escalables. Me especializo en el ecosistema de React y Next.js, con un fuerte enfoque en la experiencia del usuario y las mejores prácticas de desarrollo. Apasionada por el código limpio, la accesibilidad y el rendimiento.',
  location: 'Colombia',
  email: 'contacto@example.com',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
}

export const stats = [
  {
    id: 1,
    label: 'Años de experiencia',
    value: '3+',
    icon: 'calendar',
  },
  {
    id: 2,
    label: 'Proyectos completados',
    value: '20+',
    icon: 'folder',
  },
  {
    id: 3,
    label: 'Clientes satisfechos',
    value: '15+',
    icon: 'users',
  },
  {
    id: 4,
    label: 'Tazas de café',
    value: '∞',
    icon: 'coffee',
  },
]

export const skills = [
  {
    id: 1,
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 }
    ],
  },
  {
    id: 2,
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 87 },
      { name: 'Express', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'Prisma', level: 88 }
    ],
  },
  {
    id: 3,
    category: 'Herramientas',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Vercel', level: 92 },
      { name: 'Figma', level: 78 },
      { name: 'VS Code', level: 95 }
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Event Master',
    description: 'Plataforma completa de gestión de eventos con registro de asistentes, venta de tickets y análisis en tiempo real.',
    image: '/projects/event-master.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con funcionalidad de arrastrar y soltar, colaboración en tiempo real.',
    image: '/projects/project2.jpg',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Dashboard del clima con pronósticos de 7 días, mapas interactivos y alertas meteorológicas.',
    image: '/projects/project3.jpg',
    tags: ['Next.js', 'OpenWeather API', 'Mapbox', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Generator',
    description: 'Generador de portafolios personalizables con múltiples temas y exportación a PDF.',
    image: '/projects/project4.jpg',
    tags: ['React', 'TypeScript', 'jsPDF', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
]
