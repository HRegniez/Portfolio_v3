"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { IconMail } from "@tabler/icons-react";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 max-w-[14rem] lg:w-fit fixed lg:relative h-screen left-0 flex flex-col pb-10 border-r"
          >
            <div className="flex-1 overflow-y-auto min-h-0">
              <SidebarHeader />
              <Navigation setOpen={setOpen} isActive={isActive} />
            </div>
            <div className="mt-auto pt-4 pb-safe" onClick={() => isMobile() && setOpen(false)}>
              <Link
                key="contact"
                href="/contact"
                onClick={() => isMobile() && setOpen(false)}
                className={twMerge(
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90 transition duration-200 flex items-center space-x-2 py-2 px-2 mb-8 md:mb-0 rounded-md text-sm",
                  isActive("/contact") && "bg-accent text-accent-foreground shadow-sm"
                )}
              >
                <IconMail className="h-4 w-4 flex-shrink-0" />
                <span>contact</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-6 right-6 h-10 w-10 border-2 border-primary/70 rounded-full backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse className="h-6 w-6 text-primary/80" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
  isActive,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: (href: string) => boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-muted-foreground hover:text-foreground transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-accent text-accent-foreground shadow-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
      
      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          key={link.href}
          href={link.href}
          className={twMerge(
            "text-muted-foreground hover:text-foreground transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="/images/profile.jpeg"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-foreground">Henri Régniez</p>
        <p className="font-light text-muted-foreground">Developer</p>
      </div>
    </div>
  );
};
