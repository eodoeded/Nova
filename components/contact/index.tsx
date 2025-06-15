import React from "react";
import { Link } from "next-view-transitions";

export const Contact = () => {
  return (
    <div className="mt-6 flex flex-col">
      <h2 className="py-2 text-muted capitalize">Contact me</h2>
      <div className="border-border border-t" />
      <div className="flex flex-col gap-2 py-2">
        <Link href="https://www.linkedin.com/in/maxmcisted" className="hover:opacity-50 transition-opacity">
          LinkedIn
        </Link>
        <a href="mailto:mcistedm@gmail.com" className="hover:opacity-50 transition-opacity">
          Email
        </a>
      </div>
    </div>
  );
}; 