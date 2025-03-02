import React from "react";
import { twMerge } from "tailwind-merge";

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        "text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900",
        className
      )}
    >
      {children}
    </Tag>
  );
};
