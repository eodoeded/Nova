"use client";

import { Footer } from "@/components/footer";
import Link from "next/link";

export default function CV() {
  return (
    <>
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-8">
        <div>
          <Link href="/" className="group">
            <h1 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
              Max McIsted
            </h1>
          </Link>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Brand Designer</p>
        </div>
        <div className="flex items-baseline gap-4 text-sm">
          <a href="https://linkedin.com/in/maxmcisted" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:cv@mcisted.com" className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">Email</a>
          <a href="/max-mcisted-cv.txt" download className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">Download</a>
        </div>
      </header>

      <div className="flex flex-col gap-12">
        {/* Experience */}
        <section className="flex flex-col gap-4">
          <h3 className="uppercase tracking-wider text-sm text-neutral-400 font-semibold">Experience</h3>
          <div className="flex flex-col gap-6 text-sm">
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div className="font-medium">Pragmatic Semiconductor</div>
              <div className="text-neutral-500 text-sm">Jul 2025 – Present</div>
              <div className="col-span-2 text-neutral-600 dark:text-neutral-400">Brand Designer</div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div className="font-medium">Arm</div>
              <div className="text-neutral-500 text-sm">Sep 2024 – May 2025</div>
              <div className="col-span-2 text-neutral-600 dark:text-neutral-400">Design Intern</div>
              <ul className="list-disc pl-5 col-span-2 text-neutral-600 dark:text-neutral-400 mt-1 space-y-1">
                <li>Worked on global rebrand across internal, campaign, and product comms</li>
                <li>Delivered brand systems for documentation, print, and web</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="flex flex-col gap-3">
          <h3 className="uppercase tracking-wider text-sm text-neutral-400 font-semibold">Education</h3>
          <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 text-sm">
            <div className="font-medium">Loughborough University</div>
            <div className="text-neutral-500 text-sm">2021–2026 (expected)</div>
            <div className="col-span-2 text-neutral-600 dark:text-neutral-400">BA Graphic Design & Visual Communication</div>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-3">
          <h3 className="uppercase tracking-wider text-sm text-neutral-400 font-semibold">Skills</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-neutral-800 dark:text-neutral-300">
            <li>Brand systems</li>
            <li>Campaign design</li>
            <li>Documentation</li>
            <li>Visual identity</li>
            <li>Technical brand writing</li>
            <li>Cross-functional collaboration</li>
          </ul>
        </section>

        {/* Tools */}
        <section className="flex flex-col gap-3">
          <h3 className="uppercase tracking-wider text-sm text-neutral-400 font-semibold">Tools</h3>
          <div className="text-sm text-neutral-800 dark:text-neutral-300 leading-relaxed">
            <div><span className="font-semibold text-neutral-600 dark:text-neutral-400">Design:</span> Figma, Illustrator, Photoshop, InDesign</div>
            <div><span className="font-semibold text-neutral-600 dark:text-neutral-400">Docs:</span>   Notion, Google Docs, Miro, Acrobat</div>
            <div><span className="font-semibold text-neutral-600 dark:text-neutral-400">Proto:</span>  Framer, Webflow, Keynote</div>
          </div>
        </section>
      </div>
      <Footer showBuildInfo={false} />
    </>
  );
}
