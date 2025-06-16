import type React from "react";

interface ImageGroupProps {
  children: React.ReactNode;
}

export const ImageGroup = ({ children }: ImageGroupProps) => {
  return (
    <div className="my-6 flex h-[25rem] flex-col gap-6 md:flex-row">
      {children}
    </div>
  );
}; 