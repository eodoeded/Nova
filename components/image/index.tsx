"use client";

import { cn } from "@/lib/cn";

import Image from "next/image";
import React from "react";

interface MDXImageProps {
  alt: string;
  caption?: string;
  variant?: "default" | "full";
  fill?: boolean;
  className?: string;
  src: string;
}

export default function MDXImage({ caption, alt, variant = "default", fill = false, className, ...props }: MDXImageProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);

  return (
    <div className={cn("my-16 flex flex-col justify-end gap-2", className)}>
      <div
        className={cn("relative w-full overflow-hidden rounded-[12px]", {
          "h-full": fill,
          "w-screen -mx-4 md:-mx-8": variant === "full",
        })}
      >
        <Image
          unoptimized
          alt={alt}
          sizes="100vw"
          loading="lazy"
          style={{
            objectFit: fill ? "cover" : "contain",
            width: "100%",
            height: fill ? "100%" : "auto",
            objectPosition: "center",
            WebkitFilter: isImageLoading ? "blur(8px)" : "none",
            transition: "all 0.5s ease",
          }}
          onLoad={() => setImageLoading(false)}
          {...props}
        />
      </div>
      {caption && <sub className="pt-2 text-center text-muted">{caption}</sub>}
    </div>
  );
}
