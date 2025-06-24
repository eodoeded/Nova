"use client";

import Link from "next/link";

function CVFooterLinks() {
  return (
    <div className="flex flex-row gap-x-4 text-sm">
      <a href="https://linkedin.com/in/maxmcisted" className="text-white hover:opacity-50 transition-opacity" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:cv@mcisted.com" className="text-white hover:opacity-50 transition-opacity">Email</a>
      <a href="/max-mcisted-cv.txt" download className="text-white hover:opacity-50 transition-opacity">Download</a>
    </div>
  );
}

export default function CV() {
  return (
    <div className="max-w-screen-sm px-4 md:px-6 mx-auto flex flex-col items-start">
      {/* Name and role, homepage style */}
      <Link href="/" className="text-white hover:opacity-50 transition-opacity">
        <h1 className="mb-0">Max McIsted</h1>
      </Link>
      <h2 className="mt-0 text-muted font-normal">Brand Designer</h2>
      {/* Bio, homepage style */}
      <p className="mt-2 mb-4 text-default text-foreground">
        Currently at Pragmatic Semiconductor. Previously at Arm. Builds brands that survive implementation.
      </p>
      {/* Divider */}
      <div className="border-t border-border w-full my-4" />
      {/* Roles */}
      <div className="w-full flex flex-col gap-1 text-default text-foreground">
        <div>Pragmatic Semiconductor · Brand Designer · 2025–</div>
        <div>Arm · Design Intern · 2024–25</div>
      </div>
      {/* Divider */}
      <div className="border-t border-border w-full my-4" />
      {/* Education */}
      <div className="w-full flex flex-col gap-1 text-default text-foreground">
        <div>Loughborough University · BA Graphic Design & Visual Communication · 2021–26</div>
      </div>
      {/* Divider */}
      <div className="border-t border-border w-full my-4" />
      {/* Skills/Tools combined, inline */}
      <div className="w-full flex flex-col gap-1 text-default text-foreground">
        <div>Brand systems / Technical brand writing / Campaign execution</div>
        <div>Figma / Illustrator / InDesign / Framer</div>
      </div>
      {/* Divider */}
      <div className="border-t border-border w-full my-4" />
      {/* Links, inline */}
      <div className="w-full flex flex-row gap-x-4 text-sm">
        <a href="mailto:cv@mcisted.com" className="text-white hover:opacity-50 transition-opacity">Email</a>
        <a href="https://linkedin.com/in/maxmcisted" className="text-white hover:opacity-50 transition-opacity" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/max-mcisted-cv.txt" className="text-white hover:opacity-50 transition-opacity">CV</a>
      </div>
    </div>
  );
}
