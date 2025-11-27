"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";
import { getData } from "@/lib/get-data";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export function BentoGrid() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const { personalInfo, skills, projects } = getData(locale);
  const featuredProject = projects.find((p) => p.featured);
  const topSkills = skills[0].items.slice(0, 3); // Top 3 frontend skills

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 bg-white dark:bg-slate-900">
      {/* Bento Grid Hero Section */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Row 1: Header Card (1col) + About Me Card (1col) */}

          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10
              flex flex-col items-center justify-center text-center"
          >
            {/* Avatar */}
            <div className="mb-6">
              <div
                className="relative w-32 h-32 rounded-full
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
            </div>

            {/* Info */}
            <h1
              className="text-3xl md:text-4xl font-bold mb-3
              bg-gradient-to-r from-primary via-secondary to-accent
              bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </h1>
            <h2 className="text-lg md:text-xl text-foreground/80 mb-3 font-medium">
              {personalInfo.title}
            </h2>
            <div className="flex items-center justify-center gap-2 text-foreground/70 mb-4">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
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

          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10
              flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4 text-foreground">
              {t("aboutMe")}
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
              {personalInfo.fullBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 rounded-lg bg-primary text-white
                  hover:bg-primary/90 transition-all duration-300
                  flex items-center justify-center gap-2 font-medium"
              >
                <Download className="h-4 w-4" />
                {t("downloadCV")}
              </motion.button>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-slate-600
                  hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300
                  flex items-center justify-center gap-2 font-medium text-foreground"
              >
                <Mail className="h-4 w-4" />
                {t("contact")}
              </motion.a>
            </div>
          </motion.div>

          {/* Row 2: Featured Project (2cols full width) */}

          {/* Featured Project Card */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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

          {/* Row 3: Top Skills (1col) + Availability (1col) */}

          {/* Top Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10"
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">
              {t("topSkills")}
            </h3>
            <div className="space-y-6">
              {topSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-foreground/80">
                      {skill.name}
                    </span>
                    <span className="text-sm text-foreground/60 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-2xl backdrop-blur-sm
              bg-white dark:bg-slate-800
              border border-gray-200 dark:border-slate-600
              hover:border-gray-300 dark:hover:border-slate-500
              transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10
              flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">
              {t("availability")}
            </h3>

            {/* Status with pulsing dot */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-base font-semibold text-green-600 dark:text-green-400">
                {t("openToOpportunities")}
              </span>
            </div>

            {/* Location preference */}
            <div className="flex items-start gap-2 text-foreground/70">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span className="text-base">
                {t("workPreference")}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
