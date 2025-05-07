import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  isVisible: boolean;
  delay: number;
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceCard({
  isVisible,
  delay,
  title,
  company,
  period,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      transition={{ duration: 0.7, delay: delay }}
    >
      <div className="text-gray-400">{period}</div>

      <motion.div
        className="bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/80 transition-colors"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 mb-4">{company}</p>

        <ul className="space-y-4 mb-4">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              className="flex gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -20,
              }}
              transition={{ duration: 0.5, delay: delay + 0.1 * index }}
            >
              <span className="text-gray-400">›</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 0.3, delay: delay + 0.5 + 0.1 * index }}
              whileHover={{ scale: 1.1 }}
            >
              <Badge
                variant="outline"
                className="bg-black/30 hover:bg-black/50 transition-colors"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
