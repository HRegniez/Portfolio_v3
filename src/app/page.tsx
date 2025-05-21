"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { AnimatedEmoji } from "@/components/AnimatedEmoji";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
      >
        <AnimatedEmoji emoji="👋" />
        <Heading>Hello there! I&apos;m Henri</Heading>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Paragraph className="max-w-xl mt-12 text-gray-900">
          I&apos;m a front-end developer with a passion for{" "}
          <Highlight>crafting innovative products</Highlight> using{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Tailwind CSS</strong>.
        </Paragraph>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
          <Paragraph className="mt-24 md:w-2/3 w-full ml-auto text-gray-900 md:text-end text-left">
            I specialize in building performant, scalable web applications. My expertise in modern
            front-end technologies allows me to create responsive, accessible, and
          visually attractive interfaces.
        </Paragraph>
      </motion.div>
      
      <div className="flex justify-end mt-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8}}
          >
          <Link 
            href="/about" 
            className="inline-flex items-center gap-1 group/button rounded-sm hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto "
          >
            More about me
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <TechStack />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
      <Heading as="h2" className="text-xl mt-20 mb-4">
        What I&apos;ve been working on
      </Heading>
      <Products limit={3} showFilter={false} />
      <div className="flex justify-center mt-20">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-1 group/button rounded-sm hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto"
        >
          View all projects →
        </Link>
      </div>
      </motion.div>
    </Container>
  );
}
