"use client";

import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const DockIcon = ({ src, title, mouseX, index, total }: {
  src: string;
  title: string;
  mouseX: any;
  index: number;
  total: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Controls the width scaling based on mouse distance from icon center
  // [-150, 0, 150] = distance in pixels from center
  // [48, 120, 48] = width in pixels at each distance point
  const widthSync = useTransform(
    distance,
    [-50, 0, 50], // Increase these values to widen the hover area
    [56, 84, 56]   // Adjust min/max sizes of the icons
  );

  // Spring animation configuration for smooth scaling
  const scale = useSpring(widthSync, {
    mass: 0.001,      // Lower mass = faster reaction
    stiffness: 100, // Higher stiffness = more rigid movement
    damping: 0.001,    // Higher damping = less oscillation
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: scale, height: scale }}
      className="flex items-center justify-center transition-all duration-150"
      whileHover={{ 
        zIndex: 10,              // Brings hovered icon to front
        filter: "brightness(1.1)" // Subtle highlight effect
      }}
    >
      <Image
        src={src}
        width={200}
        height={200}
        alt={title}
        className="object-contain w-full h-full"
      />
    </motion.div>
  );
};

export const TechStack = () => {
  // Infinity initial value keeps icons at rest state until mouse interaction
  const mouseX = useMotionValue(Infinity);
  
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",
    },
    {
      title: "React",
      src: "/images/logos/react.png",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.png",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",
    },
    {
      title: "Supabase",
      src: "/images/logos/supabase.png",
    },
  ];

  return (
    <div className="mt-12">
      <Heading
        as="h2"
        className="text-xl mb-10 md:text-xl lg:text-2xl font-bold text-gray-900"
      >
        Tech Stack
      </Heading>
      <motion.div 
        className="flex justify-center items-center gap-8 p-4 rounded-2xl h-20"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)} // Reset icons to rest state
      >
        {stack.map((item, i) => (
          <div key={item.src} className="flex flex-col items-center gap-2 group">
            <DockIcon
              
              {...item}
              mouseX={mouseX}
              index={i}
              total={stack.length}
          />
          <div className="text-sm opacity-0 group-hover:opacity-100 text-gray-500 transition-all duration-500 ease-in-out font-bold delay-100 text-center">{item.title}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
