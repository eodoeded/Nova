"use client";

import type { ImageProps } from "next/image";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/cn";

interface MDXImageProps extends ImageProps {
  alt: string;
  caption?: string;
  variant?: "default" | "full";
}

export default function MDXImage({ caption, alt, variant = "default", ...props }: MDXImageProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);
  const href = props.src.toString();

  return (
    <motion.a className="my-6 flex cursor-pointer flex-col justify-end gap-2" href={href} whileHover={{ scale: 0.975, opacity: 0.9 }}>
      <div className={cn(
        "relative w-full overflow-hidden rounded-large border border-border",
        {
          "max-h-96": variant === "default",
        }
      )}>
        <Image
          unoptimized
          alt={alt}
          width={1000}
          height={1000}
          sizes="100vw"
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            objectPosition: "center",
            WebkitFilter: isImageLoading ? "blur(8px)" : "none",
            transition: "all 0.5s ease",
          }}
          onLoad={() => setImageLoading(false)}
          {...props}
        />
      </div>
      {caption && <sub className="pt-2 text-center">{caption}</sub>}
    </motion.a>
  );
}
