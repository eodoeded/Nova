import type React from "react";

import { cn } from "@/lib/cn";

interface CodeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CodeCard = ({ children, className, ...props }: CodeCardProps) => {
  return (
    <div className={cn("my-6 flex flex-col overflow-hidden rounded-base border border-border bg-gray-1 text-foreground", className)} {...props}>
      {children}
    </div>
  );
};
