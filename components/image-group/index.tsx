import type React from "react";

import { cn } from "@/lib/cn";

interface ImageGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ImageGroup = ({ children, className }: ImageGroupProps) => {
  return <div className={cn("my-6 flex flex-col gap-4 md:flex-row md:flex-nowrap md:items-stretch md:gap-8", className)}>{children}</div>;
};
