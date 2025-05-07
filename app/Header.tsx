import React from 'react'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    </motion.div>

    <motion.nav
      className="fixed top-0 right-0 p-4 z-50 w-full backdrop-blur-sm flex justify-end"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Button
        variant="ghost"
        className="hover:bg-gray-800 transition-colors"
        onClick={() => {
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Home
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-gray-800 transition-colors"
        onClick={() => {
          document
            .getElementById("experience")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Experience
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-gray-800 transition-colors"
        onClick={() => {
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Projects
      </Button>
      <Button
        variant="ghost"
        className="hover:bg-gray-800 transition-colors"
        onClick={() => {
          window.open("https://drive.google.com/file/d/1WIVE6B3MHMhiQRDUkapcB5oYeaCYQmxz/view", "_blank");
        }}
      >
        Resume
      </Button>
    </motion.nav>
  </header>
  )
}
