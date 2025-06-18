"use client";

import { cn } from "@/lib/cn";

import { useEffect, useState } from "react";

interface CopyToClipboardProps {
  textToCopy: string;
  children: React.ReactNode;
  className?: string;
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ textToCopy, children, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 2000); // Message fades after 2 seconds
    }
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button" // Ensure it's a button type
      onClick={handleCopy}
      aria-label={`Copy ${textToCopy} to clipboard`}
      className={cn(
        "relative inline-flex cursor-pointer select-none items-center",
        "transition-opacity duration-300 ease-in-out",
        "group", // For hover effects
        "border-none bg-transparent p-0", // Reset button default styles
        className,
      )}
    >
      {children}
      {copied && (
        <span
          className={cn(
            "-top-6 -translate-x-1/2 absolute left-1/2",
            "rounded-sm bg-gray-6 px-2 py-1 text-gray-12 text-xs opacity-0",
            "animate-fade-in-out", // Custom animation for fade in/out
          )}
        >
          Copied!
        </span>
      )}
    </button>
  );
};
