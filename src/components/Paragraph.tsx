import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Paragraph: React.FC<ParagraphProps> = ({ className, children, style }) => {
  return (
    <p
      className={twMerge(
        "text-sm lg:text-base font-normal text-secondary",
        className
      )}
      style={style}
    >
      {children}
    </p>
  );
};
