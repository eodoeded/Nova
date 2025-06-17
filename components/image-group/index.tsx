import type React from "react";

import { cn } from "@/lib/cn";

interface ImageGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ImageGroup = ({ children, className }: ImageGroupProps) => {
  return <div className={cn("my-16 grid grid-cols-1 md:grid-cols-2 gap-8", className)}>{children}</div>;
};
