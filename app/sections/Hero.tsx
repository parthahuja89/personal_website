import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Spline from "@splinetool/react-spline";
import { useToast } from "@/components/ui/use-toast";

import {
    GithubIcon,
    Linkedin,
    FileText,
    Mail,
    ChevronDown,
  } from "lucide-react";

export default function Hero() {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("parthahuj@gmail.com");
    toast({
      title: "Email copied to clipboard",
      description: "PS: Not a fan of email links.",
      duration: 3000,
    });
  };

  const { toast } = useToast();
  return (
    <section id="home" className="container mx-auto px-4 py-16 xl:py-24">
      <div className="flex flex-col xl:flex-row-reverse md:mx-24">
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 2, delay: 0.75 }} // Animation duration
        >
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Spline scene="https://prod.spline.design/O3PFwdW0tQbfGDrm/scene.splinecode" />
            </Suspense>
          </div>
        </motion.div>
        <div>
          <motion.p
            className="text-gray-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Hi! My Name is
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Parth Ahuja
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-2xl"
            >
              <p className="text-gray-300 mb-8">
                Welcome to my website! I'm a Software Engineer currently working
                at Labcorp. I've previously worked at Citrix and Willis Towers
                Watson. I graduated from Purdue University in 2023. I like
                working on web-apps and DevOps automations. On this website, you
                can find my social links, resume, and contact information. Feel
                free to reach out!
              </p>

              <div className="flex gap-4 mb-8">
                <motion.a
                  href="https://github.com/parthahuja89"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/parthahuja1/"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1WIVE6B3MHMhiQRDUkapcB5oYeaCYQmxz/view"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6"
                    onClick={copyEmailToClipboard}
                  >
                    <Mail className="w-4 h-4 mr-2" /> Email me
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4 lg:mt-32">
        <motion.button
          onClick={() => {
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-gray-400 hover:text-white transition-colors"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          whileHover={{ y: 5 }}
        >
          <ChevronDown />
        </motion.button>
      </div>
    </section>
  );
}
