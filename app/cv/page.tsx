"use client";

import { FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

export default function CV() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 flex flex-col gap-8">
      {/* Intro Block */}
      <section className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span>Max McIsted</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-base font-normal text-neutral-500">Brand Designer</span>
          </div>
          <div className="flex gap-3 text-sm">
            <a href="https://linkedin.com/in/maxmcisted" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" target="_blank" rel="noopener noreferrer"><FiLinkedin className="inline" />LinkedIn</a>
            <a href="mailto:cv@mcisted.com" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition font-mono"><FiMail className="inline" />Email</a>
            <a href="/max-mcisted-cv.txt" download className="flex items-center gap-1 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition font-mono"><FiDownload className="inline" />Download</a>
          </div>
        </div>
        <div className="text-sm text-neutral-500 mt-1">Designer building brand systems that survive implementation. Previously at Arm, now at Pragmatic Semiconductor.</div>
      </section>

      {/* Experience */}
      <section className="flex flex-col gap-4 py-4">
        <h2 className="uppercase tracking-wider text-xs text-neutral-400 font-semibold">Experience</h2>
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Pragmatic Semiconductor</span>
              <span className="text-xs text-neutral-500">Jul 2025 – Present</span>
            </div>
            <div className="text-sm text-neutral-500 font-normal">Brand Designer</div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Arm</span>
              <span className="text-xs text-neutral-500">Sep 2024 – May 2025</span>
            </div>
            <div className="text-sm text-neutral-500 font-normal">Design Intern</div>
            <ul className="list-disc pl-5 mt-1 text-sm text-neutral-500">
              <li>Worked on global rebrand across internal, campaign, and product comms</li>
              <li>Delivered brand systems for documentation, print, and web</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="flex flex-col gap-2 py-4">
        <h2 className="uppercase tracking-wider text-xs text-neutral-400 font-semibold">Education</h2>
        <div className="flex items-center justify-between">
          <span className="font-medium">Loughborough University</span>
          <span className="text-xs text-neutral-500">2021–2026 (expected)</span>
        </div>
        <div className="text-sm text-neutral-500 font-normal">BA Graphic Design & Visual Communication</div>
      </section>

      {/* Skills */}
      <section className="flex flex-col gap-2 py-4">
        <h2 className="uppercase tracking-wider text-xs text-neutral-400 font-semibold">Skills</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Brand systems</li>
          <li>Visual identity</li>
          <li>Campaign design</li>
          <li>Technical brand writing</li>
          <li>Documentation</li>
          <li>Cross-functional collaboration</li>
        </ul>
      </section>

      {/* Tools */}
      <section className="flex flex-col gap-2 py-4">
        <h2 className="uppercase tracking-wider text-xs text-neutral-400 font-semibold">Tools</h2>
        <div className="text-sm text-neutral-700 dark:text-neutral-300">
          <span className="font-medium">Design:</span> Figma, Illustrator, Photoshop, InDesign<br />
          <span className="font-medium">Docs:</span> Notion, Google Docs, Miro, Acrobat<br />
          <span className="font-medium">Prototyping:</span> Framer, Webflow, Keynote
        </div>
      </section>

      {/* Contact */}
      <section className="flex flex-col gap-2 py-4">
        <h2 className="uppercase tracking-wider text-xs text-neutral-400 font-semibold">Contact</h2>
        <div className="grid grid-cols-3 gap-3">
          <a href="https://linkedin.com/in/maxmcisted" className="flex items-center justify-center gap-1 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" target="_blank" rel="noopener noreferrer"><FiLinkedin className="inline" />LinkedIn</a>
          <a href="mailto:cv@mcisted.com" className="flex items-center justify-center gap-1 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition font-mono"><FiMail className="inline" />Email</a>
          <a href="/max-mcisted-cv.txt" download className="flex items-center justify-center gap-1 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition font-mono"><FiDownload className="inline" />Download CV</a>
        </div>
      </section>

      {/* Trigger Vercel Redeploy */}
    </main>
  );
}
