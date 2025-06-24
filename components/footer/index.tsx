"use client";

import { Link } from "next-view-transitions";
import { AppThemeSwitcher } from "../theme";

export const Footer = ({ showBuildInfo = true }) => {
  if (!showBuildInfo) {
    return <AppThemeSwitcher />;
  }
  return (
    <footer className="border-border flex flex-col gap-2 border-t py-6 mt-8">
      <div className="flex justify-between">
        <div className="flex gap-2 text-sm">
          <p className="text-xs text-muted">
            Built with{" "}
            <Link href="https://nextjs.org" className="transition-opacity hover:opacity-50 text-muted" target="_blank">
              Next.js
            </Link>
            .
          </p>
        </div>
        <AppThemeSwitcher />
      </div>
    </footer>
  );
};
