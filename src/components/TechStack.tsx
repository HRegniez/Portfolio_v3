import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    // {
    //   title: "React",
    //   src: "/images/logos/react.png",

    //   className: "h-10 w-14",
    // },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
    {
      title: "Supabase",
      src: "/images/logos/supabase.png",

      className: "h-10 w-24",
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
      <div className="flex flex-wrap justify-center gap-4 ">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
