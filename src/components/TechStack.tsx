"use client";

import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const DockIcon = ({ src, title, mouseX, index, total, isMobile }: {
  src: string;
  title: string;
  mouseX: any;
  index: number;
  total: number;
  isMobile: boolean;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const distance = useTransform(mouseX, (val: number) => {
    if (isMobile) return 0;
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-50, 0, 50],
    [56, 70, 56]
  );

  const scale = useSpring(widthSync, {
    mass: 0.001,
    stiffness: 1000,
    damping: 15,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: isMobile ? 64 : scale, height: isMobile ? 64 : scale }}
      className="flex items-center justify-center transition-all duration-150"
      whileHover={{ 
        zIndex: 10,
        filter: "brightness(1.1)",
        scale: isMobile ? 1.1 : 1
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
  const mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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
        className="text-xl mb-14 md:text-xl lg:text-2xl font-bold text-gray-900"
      >
        Tech Stack
      </Heading>
      <motion.div 
        className={`
          ${isMobile 
            ? 'grid grid-cols-2 sm:grid-cols-3 gap-4 p-4' 
            : 'flex justify-center items-center gap-8 p-4 rounded-2xl h-20'
          }
        `}
        onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
        onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
      >
        {stack.map((item, i) => (
          <div 
            key={item.src} 
            className={`
              flex flex-col items-center gap-2 group
              ${isMobile ? 'p-2' : ''}
            `}
          >
            <DockIcon
              {...item}
              mouseX={mouseX}
              index={i}
              total={stack.length}
              isMobile={isMobile}
            />
            <div className={`
              text-sm 
              ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} 
              text-gray-500 
              transition-all 
              duration-500 
              ease-in-out 
              font-bold 
              ${isMobile ? '' : 'delay-100'} 
              text-center
            `}>
              {item.title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
