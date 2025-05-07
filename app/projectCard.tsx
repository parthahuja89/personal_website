import { motion } from "framer-motion";

interface ProjectCardProps {
    isVisible: boolean;
    delay: number;
    title: string;
    subtitle: string;
    link: string;
    description: string;
  }

export default function ProjectCard({
    isVisible,
    delay,
    title,
    subtitle,
    link,
    description,
  }: ProjectCardProps) {
    return (
      <motion.div
        className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 hover:bg-gray-900/50 transition-all"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.7, delay: delay }}
        whileHover={{ borderColor: "rgba(75, 85, 99, 0.5)" }}
      >
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-md mb-2">{subtitle}</p>
        <p className="text-gray-300 mb-4">{description}</p>
  
        <motion.a
          href={link}
          className="text-gray-400 hover:text-white inline-block"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.1 }}
        >
          Project Link
        </motion.a>
      </motion.div>
    );
  }