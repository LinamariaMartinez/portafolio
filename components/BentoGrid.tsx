"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  Folder,
  Users,
  Coffee,
} from "lucide-react";
import { getData } from "@/lib/get-data";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

// Icon mapping for stats
const iconMap = {
  calendar: Calendar,
  folder: Folder,
  users: Users,
  coffee: Coffee,
};

export function BentoGrid() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const { personalInfo, stats, skills, projects } = getData(locale);
  const featuredProject = projects.find((p) => p.featured);
  const topSkills = skills[0].items.slice(0, 3); // Top 3 frontend skills

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-white dark:bg-slate-900">
      {/* Bento Grid Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Row 1: Header Card (2cols) + Featured Project (2cols) */}

          {/* Header Card - Nombre + Título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 p-8 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4
              bg-gradient-to-r from-primary via-secondary to-accent
              bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium">
              {personalInfo.title}
            </h2>
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Featured Project Card */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 p-6 rounded-2xl backdrop-blur-sm
                bg-white dark:bg-slate-800
                border border-gray-200 dark:border-slate-600
                hover:border-gray-300 dark:hover:border-slate-500
                transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10
                group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {t("featuredProject")}
                  </span>
                </div>

                {/* Project Image Placeholder */}
                <div
                  className="w-full h-32 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20
                  flex items-center justify-center overflow-hidden"
                >
                  <div className="text-4xl">🎯</div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {featuredProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  {featuredProject.demo && (
                    <motion.a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-4 py-2 rounded-lg bg-primary text-white
                        hover:bg-primary/90 transition-all duration-300
                        flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("demo")}
                    </motion.a>
                  )}
                  <motion.a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600
                      hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300
                      flex items-center justify-center gap-2 text-sm font-medium text-foreground
                      ${!featuredProject.demo ? "flex-1" : ""}`}
                  >
                    <Github className="h-4 w-4" />
                    {t("github")}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Row 2: Avatar (1col) + Stats Grid (1col) */}

          {/* Avatar/Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 md:row-span-2 p-6 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10
              flex flex-col items-center justify-center"
          >
            {/* Avatar */}
            <div
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mb-4
              bg-gradient-to-br from-primary via-secondary to-accent p-1"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
                <Image
                  src="/avatar.png"
                  alt="Linamaría Martínez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20
                  transition-all duration-300 border border-primary/20
                  hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20
                  transition-all duration-300 border border-primary/20
                  hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20
                  transition-all duration-300 border border-primary/20
                  hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* Stats Grid (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 p-6 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((stat, index) => {
                const Icon =
                  iconMap[stat.icon as keyof typeof iconMap] || Calendar;
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex flex-col items-center justify-center p-3 rounded-xl
                      bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20
                      border border-primary/20 dark:border-primary/30 hover:border-primary/40 dark:hover:border-primary/50
                      transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/70 text-center leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Row 3: Bio + CTA (2cols) + Quick Skills (1col) */}

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 p-8 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10"
          >
            <h3 className="text-xl font-bold mb-4 text-foreground">
              {t("aboutMe")}
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              {personalInfo.fullBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg bg-primary text-white
                  hover:bg-primary/90 transition-all duration-300
                  flex items-center gap-2 font-medium"
              >
                <Download className="h-4 w-4" />
                {t("downloadCV")}
              </motion.button>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-600
                  hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300
                  flex items-center gap-2 font-medium text-foreground"
              >
                <Mail className="h-4 w-4" />
                {t("contact")}
              </motion.a>
            </div>
          </motion.div>

          {/* Skills Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-1 p-6 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10"
          >
            <h3 className="text-lg font-bold mb-4 text-foreground">
              {t("topSkills")}
            </h3>
            <div className="space-y-4">
              {topSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground/80">
                      {skill.name}
                    </span>
                    <span className="text-xs text-foreground/60">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.7 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
