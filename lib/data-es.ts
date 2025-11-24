export const personalInfo = {
  name: "Linamaría Martínez",
  title: "Frontend Developer | UX Researcher",
  bio: "Frontend Developer con formación en antropología y 10+ años en investigación UX",
  fullBio:
    "Frontend Developer con formación en antropología y más de 10 años de experiencia en investigación UX. Me especializo en el ecosistema de React y Next.js, con un fuerte enfoque en la experiencia del usuario y las mejores prácticas de desarrollo. Apasionada por crear interfaces accesibles que resuelvan necesidades reales.",
  location: "Quindío, Colombia",
  email: "linamariamartinezp@gmail.com",
  social: {
    github: "https://github.com/LinamariaMartinez",
    linkedin: "https://www.linkedin.com/in/linamariamartinezp/",
    twitter: "https://twitter.com",
  },
};

export const stats = [
  {
    id: 1,
    label: "Años de experiencia",
    value: "10+",
    icon: "calendar",
  },
  {
    id: 2,
    label: "Proyectos completados",
    value: "20+",
    icon: "folder",
  },
  {
    id: 3,
    label: "Clientes satisfechos",
    value: "15+",
    icon: "users",
  },
  {
    id: 4,
    label: "Tazas de café",
    value: "∞",
    icon: "coffee",
  },
];

export const skills = [
  {
    id: 1,
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    id: 2,
    category: "UX Research",
    items: [
      { name: "Entrevistas de Usuario", level: 85 },
      { name: "Pruebas de Usabilidad", level: 88 },
      { name: "Wireframing", level: 90 },
      { name: "Prototipado", level: 87 },
      { name: "Sistemas de Diseño", level: 82 },
    ],
  },
  {
    id: 3,
    category: "Backend",
    items: [
      { name: "Node.js", level: 87 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "Prisma", level: 88 },
    ],
  },
  {
    id: 4,
    category: "Herramientas",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 92 },
      { name: "Figma", level: 78 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Event Master",
    description:
      "Plataforma completa de gestión de eventos con autenticación, registro de asistentes, gestión de tickets y dashboard administrativo.",
    image: "/projects/event-master.jpg",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Tailwind"],
    github: "https://github.com/LinamariaMartinez/eventMaster",
    demo: "https://event-master-sand.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Comfachocó Hackathon",
    description:
      "Sistema de gestión de clientes y productos desarrollado durante hackathon, con autenticación y manejo de estado global.",
    image: "/projects/project2.jpg",
    tags: ["React 19", "Vite", "Tailwind", "Zustand", "Supabase"],
    github: "https://github.com/LinamariaMartinez/Hackaton-Comfachoco",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "Alumnithon 2025",
    description:
      "🥈 Segundo lugar en hackathon. Proyecto colaborativo desarrollado con React y TypeScript para solución innovadora.",
    image: "/projects/project3.jpg",
    tags: ["React 18", "TypeScript", "Vite"],
    github: "https://github.com/alumnithon",
    demo: "",
    featured: true,
  },
  {
    id: 4,
    title: "AluraFlix",
    description:
      "Aplicación estilo Netflix para gestión de videos, con categorías personalizadas y diseño responsivo usando Styled Components.",
    image: "/projects/project4.jpg",
    tags: ["React 18", "Styled Components"],
    github: "https://github.com/LinamariaMartinez/AluraFlix",
    demo: "https://aluraflix-linamaria.netlify.app/",
    featured: false,
  },
];
