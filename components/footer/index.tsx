"use client";

import { Link } from "next-view-transitions";

import { AppThemeSwitcher } from "../theme";

export const Footer = ({ showBuildInfo = true }) => {
  if (!showBuildInfo) {
    return <AppThemeSwitcher />;
  }
  return (
    <footer className="mt-8 flex flex-col gap-2 border-border border-t py-6">
      <div className="flex justify-between">
        <div className="flex gap-2 text-sm">
          <p className="text-muted text-xs">
            Built with{" "}
            <Link href="https://nextjs.org" className="text-muted" target="_blank">
              <span className="transition-opacity hover:opacity-50">Next.js</span>
            </Link>
            .
          </p>
        </div>
        <AppThemeSwitcher />
      </div>
    </footer>
  );
};
