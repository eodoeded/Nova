"use client";

import { Footer } from "@/components/footer";

function CVFooterLinks() {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <a href="https://linkedin.com/in/maxmcisted" className="text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:cv@mcisted.com" className="text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Email</a>
      <a href="/max-mcisted-cv.txt" download className="text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">Download</a>
    </div>
  );
}

export default function CV() {
  return (
    <>
      {/* Homepage header, copied exactly */}
      <div className="flex justify-between">
        <div>
          <h1>Max McIsted</h1>
          <h2>Brand Designer</h2>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {/* Experience */}
        <section className="flex flex-col gap-4">
          <div className="border-border border-t" />
          <h2 className="text-default text-foreground font-normal">experience</h2>
          <div className="flex flex-col gap-6 text-default text-foreground font-normal">
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div>Pragmatic Semiconductor</div>
              <div>Jul 2025 – Present</div>
              <div className="col-span-2">Brand Designer</div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div>Arm</div>
              <div>Sep 2024 – May 2025</div>
              <div className="col-span-2">Design Intern</div>
              <ul className="list-disc pl-5 col-span-2">
                <li>Worked on global rebrand across internal, campaign, and product comms</li>
                <li>Delivered brand systems for documentation, print, and web</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="flex flex-col gap-3">
          <div className="border-border border-t" />
          <h2 className="text-default text-foreground font-normal">education</h2>
          <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 text-default text-foreground font-normal">
            <div>Loughborough University</div>
            <div>2021–2026 (expected)</div>
            <div className="col-span-2">BA Graphic Design & Visual Communication</div>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-3">
          <div className="border-border border-t" />
          <h2 className="text-default text-foreground font-normal">skills</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-default text-foreground font-normal">
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
          <div className="border-border border-t" />
          <h2 className="text-default text-foreground font-normal">tools</h2>
          <div className="text-default text-foreground font-normal leading-relaxed">
            <div><span>Design:</span> Figma, Illustrator, Photoshop, InDesign</div>
            <div><span>Docs:</span>   Notion, Google Docs, Miro, Acrobat</div>
            <div><span>Proto:</span>  Framer, Webflow, Keynote</div>
          </div>
        </section>
      </div>
      {/* Footer with left-side links for CV page */}
      <div className="flex w-full items-center justify-between pt-2 mt-12">
        <CVFooterLinks />
        <Footer showBuildInfo={false} />
      </div>
    </>
  );
}
