export const personalInfo = {
  name: "Linamaría Martínez",
  title: "Frontend Developer | UX Researcher",
  bio: "Frontend Developer with anthropology background and 10+ years in UX research",
  fullBio:
    "Frontend Developer with anthropology background and over 10 years of experience in UX research. I specialize in the React and Next.js ecosystem, with a strong focus on user experience and development best practices. Passionate about creating accessible interfaces that solve real needs.",
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
    label: "Years of experience",
    value: "10+",
    icon: "calendar",
  },
  {
    id: 2,
    label: "Completed projects",
    value: "20+",
    icon: "folder",
  },
  {
    id: 3,
    label: "Satisfied clients",
    value: "15+",
    icon: "users",
  },
  {
    id: 4,
    label: "Cups of coffee",
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
      { name: "User Interviews", level: 85 },
      { name: "Usability Testing", level: 88 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 87 },
      { name: "Design Systems", level: 82 },
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
    category: "Tools",
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
      "Complete event management platform with authentication, attendee registration, ticket management, and administrative dashboard.",
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
      "Client and product management system developed during hackathon, with authentication and global state management.",
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
      "🥈 Second place in hackathon. Collaborative project developed with React and TypeScript for innovative solution.",
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
      "Netflix-style application for video management, with custom categories and responsive design using Styled Components.",
    image: "/projects/project4.jpg",
    tags: ["React 18", "Styled Components"],
    github: "https://github.com/LinamariaMartinez/AluraFlix",
    demo: "https://aluraflix-linamaria.netlify.app/",
    featured: false,
  },
];
