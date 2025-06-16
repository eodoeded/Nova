import type React from "react";

interface ImageGroupProps {
  children: React.ReactNode;
}

export const ImageGroup = ({ children }: ImageGroupProps) => {
  return <div className="my-6 flex flex-col gap-6 md:flex-row md:items-stretch">{children}</div>;
};
