// Types
export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  fullBio: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  impact: string;
  stack: string[];
  github: string;
  demo?: string;
  featured: boolean;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Skills {
  frontend: Skill[];
  uxResearch: Skill[];
  backend: Skill[];
  tools: Skill[];
}

// Data
export const personalInfo: PersonalInfo = {
  name: "Linamaría Martínez",
  title: "Frontend Developer | UX Researcher",
  shortBio: "Frontend Developer con formación en antropología y 10+ años en investigación UX. Combino React/TypeScript/Next.js con metodologías etnográficas para crear productos que resuelven problemas reales.",
  fullBio: "De facilitar talleres en comunidades rurales a crear apps que la gente realmente usa.\n\nEmpecé como antropóloga facilitando más de 60 talleres con comunidades, empresas y gobierno en proyectos ambientales. Aprendí que la tecnología falla cuando no entiende a los usuarios reales.\n\nAhora combino 10+ años de investigación cualitativa con React, TypeScript y Next.js. No solo escribo código que funciona - creo productos que resuelven problemas reales porque sé hacer las preguntas correctas.",
  email: "linamariamartinezp@icloud.com",
  location: "Quindío, Colombia",
  github: "https://github.com/LinamariaMartinez",
  linkedin: "https://www.linkedin.com/in/linamariamartinezp/"
};

export const stats: Stat[] = [
  { label: "Talleres facilitados", value: "60+", icon: "users" },
  { label: "Proyectos en producción", value: "3", icon: "code" },
  { label: "Años en UX Research", value: "10+", icon: "search" },
  { label: "Alumnithon 2025", value: "🥈 2º lugar", icon: "trophy" }
];

export const projects: Project[] = [
  {
    id: "event-master",
    title: "Event Master",
    subtitle: "Plataforma de Gestión de Eventos",
    description: "Aplicación full-stack en producción para automatizar invitaciones digitales y gestión de confirmaciones para agencia de eventos corporativos y sociales.",
    role: "Full Stack Developer + UX/UI Designer",
    impact: "Cliente real usando en producción. Sistema completo de gestión con dashboard, editor visual y sincronización Google Sheets.",
    stack: ["Next.js 14", "TypeScript", "Supabase", "Tailwind", "Google Sheets API"],
    github: "https://github.com/LinamariaMartinez/eventMaster",
    demo: "https://event-master-sand.vercel.app",
    featured: true,
    image: "/projects/event-master.jpg"
  },
  {
    id: "comfachoco",
    title: "Comfachocó Sistema de Gestión",
    subtitle: "Hackathon Talento Tech 2025",
    description: "Sistema inteligente de gestión de talento humano con chatbot IA. Desarrollado en equipo de 5 personas para el Hackathon Talento Tech.",
    role: "Frontend Developer - Desarrollé toda la interfaz de usuario",
    impact: "Dashboard por roles, chatbot conversacional, calendarios interactivos y gestión de estado con Zustand.",
    stack: ["React 19", "Vite", "Tailwind v4", "Zustand", "Supabase"],
    github: "https://github.com/LinamariaMartinez/Hackaton-Comfachoco",
    featured: false,
    image: "/projects/comfachoco.jpg"
  },
  {
    id: "alumnithon",
    title: "Alumnithon 2025 - Plataforma de Mentorías",
    subtitle: "🥈 2º lugar + Mención especial",
    description: "Plataforma de mentorías para Oracle Next Education. Ganamos 2º lugar entre 8 equipos + mención especial por integración técnica.",
    role: "UX Designer + Frontend Developer",
    impact: "Sistema completo de autenticación JWT, perfiles dinámicos, gestión de oportunidades y dashboard por roles.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind", "Zustand", "React Query"],
    github: "https://github.com/alumnithon",
    featured: true,
    image: "/projects/alumnithon.jpg"
  }
];

export const skills: Skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript ES6+", level: 90 }
  ],
  uxResearch: [
    { name: "Entrevistas de usuario", level: 100 },
    { name: "Investigación cualitativa", level: 100 },
    { name: "Mapeo de experiencia", level: 95 },
    { name: "Análisis etnográfico", level: 100 }
  ],
  backend: [
    { name: "Node.js", level: 65 },
    { name: "MySQL", level: 60 },
    { name: "API REST", level: 70 },
    { name: "Supabase", level: 80 }
  ],
  tools: [
    { name: "Figma", level: 85 },
    { name: "Git/GitHub", level: 90 },
    { name: "VS Code", level: 95 }
  ]
};
