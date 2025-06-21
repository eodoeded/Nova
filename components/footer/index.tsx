"use client";

import { Link } from "next-view-transitions";
import React from "react";
import { ThemeToggle } from "../theme-toggle";

export const Footer = ({ showBuildInfo = true }) => {
  return (
    <footer className="border-border flex flex-col gap-2 border-t py-2">
      <div className="flex justify-between">
        <div className="flex gap-2 text-sm">
          <Link href="/posts/guides" className="transition-opacity hover:opacity-50">
            Guides
          </Link>
          <Link href="/posts/projects" className="transition-opacity hover:opacity-50">
            Projects
          </Link>
        </div>
        <ThemeToggle />
      </div>
      {showBuildInfo && (
        <p className="text-xs text-muted">
          Built with{" "}
          <Link href="https://nextjs.org" className="transition-opacity hover:opacity-50" target="_blank">
            Next.js
          </Link>
          , deployed on{" "}
          <Link href="https://vercel.com" className="transition-opacity hover:opacity-50" target="_blank">
            Vercel
          </Link>
          .
        </p>
      )}
    </footer>
  );
};
