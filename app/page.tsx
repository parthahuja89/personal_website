"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Egg } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import { experiences, projects } from "@/data/portfolio-data";
import { useInView } from "framer-motion";
import Spline from "@splinetool/react-spline";
import ProjectCard from "./projectCard";
import ExperienceCard from "./experienceCard";
import Header from "./Header";
import Hero from "./sections/Hero";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [counter, setCounter] = useState(10);
  const [showEgg, setShowEgg] = useState(true);

  const isExperienceInView = useInView(experienceRef, {
    once: true,
    margin: "-100px",
  });
  const isProjectsInView = useInView(projectsRef, {
    once: true,
    margin: "-100px",
  });

  async function easterEgg() {
    setCounter(counter - 1);
    if (counter == 1) {
      toast({
        title: "Cylons in bound. Watch out!",
        duration: 3000,
      });
      setShowEgg(false);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsReady(true);
    }
  }
  useEffect(() => {
    // Trigger visibility for animations
    const timeout = setTimeout(() => setIsVisible(true), 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen  text-white">
        <div>
          {isReady && (
            <div className="fixed inset-0 z-50 pointer-events-none">
              <Spline scene="https://prod.spline.design/KXB-QrDZL1TIt3K0/scene.splinecode" />
            </div>
          )}
        </div>

        {showEgg && (
          <>
            <motion.div
              className="bottom-12 right-0 fixed p-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: counter < 10 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {counter} clicks remaining
            </motion.div>
            <motion.button
              type="button"
              onClick={easterEgg}
              className="fixed bottom-0 right-0 p-2 hidden md:block"
              animate={{
              rotate: [0, -20, 20, -20, 20, 0],
              }}
              transition={{
              delay: 1,
              repeat: Infinity,
              duration: 1,
              repeatDelay: 5
              }}
            >
              <Egg size={32} />
            </motion.button>
          </>
        )}

        {/* Header Section */}
        <Header />

        {/* Hero Section */}
        <Hero />

      </div>
      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExperienceInView ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Experience
          </motion.h2>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                isVisible={isExperienceInView}
                delay={index * 0.3 + 0.4}
                title={experience.title}
                company={experience.company}
                period={experience.period}
                achievements={experience.achievements}
                technologies={experience.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isProjectsInView ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            Projects
          </motion.h2>

          <motion.p
            className="text-3xl text-gray-500 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isProjectsInView ? 1 : 0,
              y: isProjectsInView ? 0 : 20,
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Most of my code is on github
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                isVisible={isProjectsInView}
                delay={0.3 + index * 0.1}
                title={project.title}
                subtitle={project.subtitle}
                link={project.link}
                description={project.description}
              />
            ))}
          </div>

          <motion.div
            className="mt-16 p-6 bg-gray-900/30 rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isProjectsInView ? 1 : 0,
              y: isProjectsInView ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <p className="mb-4 text-gray-300">galactica.ts</p>
            <pre className="font-mono text-sm text-blue-400">
              <code className="text-code break-words whitespace-pre-wrap">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-300">quote</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-white">{"{"}</span>
                <br />
                <span className="text-purple-400">{"  "}text:</span>{" "}
                <span className="text-green-300">
                  "All of this has happened before. All of this will happen
                  again."
                </span>
                ,
                <br />
                <span className="text-purple-400">{"  "}subtext:</span>{" "}
                <span className="text-green-300">"So say we all."</span>,
                <br />
                <span className="text-white">{"}"}</span>;
              </code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        ></motion.p>
      </footer>

      <Toaster />
    </ThemeProvider>
  );
}
