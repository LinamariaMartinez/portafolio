# Portfolio - Lina María Martínez

Portfolio web moderno construido con Next.js 14, TypeScript y Tailwind CSS.

## Características

- ✨ Diseño moderno tipo "Bento Box" (grid asimétrico)
- 🌓 Dark mode con next-themes
- 🎨 Colores personalizados (indigo, purple, pink)
- 📱 Responsive mobile-first
- ⚡ Animaciones con Framer Motion
- 🎯 TypeScript estricto
- 🚀 Next.js 14 App Router

## Tecnologías

- **Framework:** Next.js 14
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Temas:** next-themes

## Estructura del Proyecto

```
portfolio-lina/
├── app/
│   ├── layout.tsx      # Layout principal con ThemeProvider
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
├── components/
│   ├── BentoGrid.tsx      # Grid principal del portafolio
│   ├── ProjectCard.tsx    # Tarjeta de proyecto
│   ├── StatsCard.tsx      # Tarjeta de estadísticas
│   ├── SkillsCard.tsx     # Tarjeta de habilidades
│   ├── ThemeToggle.tsx    # Toggle de tema oscuro/claro
│   └── ThemeProvider.tsx  # Provider de temas
├── lib/
│   └── data.ts         # Datos del portafolio
└── public/
    └── projects/       # Imágenes de proyectos
```

## Instalación y Uso

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Personalización

### Datos del Portafolio

Edita el archivo `lib/data.ts` para personalizar:
- Información personal
- Estadísticas
- Habilidades
- Proyectos

### Colores

Los colores están definidos en `tailwind.config.ts`:
- **Primary:** Indigo (#6366f1)
- **Secondary:** Purple (#8b5cf6)
- **Accent:** Pink (#ec4899)
- **Dark:** Slate (#0f172a)

### Componentes

Todos los componentes están en la carpeta `components/` y son completamente personalizables.

## Despliegue

El proyecto está listo para desplegarse en Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Licencia

MIT
