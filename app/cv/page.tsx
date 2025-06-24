"use client";

import { Footer } from "@/components/footer";

function CVFooterLinks() {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <a href="https://linkedin.com/in/maxmcisted" className="text-white hover:opacity-50 transition-opacity" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:cv@mcisted.com" className="text-white hover:opacity-50 transition-opacity">Email</a>
      <a href="/max-mcisted-cv.txt" download className="text-white hover:opacity-50 transition-opacity">Download</a>
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

      <div className="flex flex-col gap-16">
        {/* Experience */}
        <section className="flex flex-col gap-4">
          <div className="border-border border-t mt-16" />
          <h2 className="text-default text-muted font-normal uppercase tracking-wide">experience</h2>
          <div className="flex flex-col gap-6 text-default text-foreground font-normal">
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div className="text-foreground">Pragmatic Semiconductor</div>
              <div className="text-muted">Jul 2025 – Present</div>
              <div className="col-span-2 text-muted">Brand Designer</div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div className="text-foreground">Arm</div>
              <div className="text-muted">Sep 2024 – May 2025</div>
              <div className="col-span-2 text-muted">Design Intern</div>
              <ul className="list-disc pl-5 col-span-2 text-default text-foreground mt-1 space-y-1">
                <li>Worked on global rebrand across internal, campaign, and product comms</li>
                <li>Delivered brand systems for documentation, print, and web</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="flex flex-col gap-4 mt-12">
          <div className="border-border border-t mt-16" />
          <h2 className="text-default text-muted font-normal uppercase tracking-wide">education</h2>
          <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 text-default text-foreground font-normal">
            <div className="text-foreground">Loughborough University</div>
            <div className="text-muted">2021–2026 (expected)</div>
            <div className="col-span-2 text-muted">BA Graphic Design & Visual Communication</div>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-4 mt-12">
          <div className="border-border border-t mt-16" />
          <h2 className="text-default text-muted font-normal uppercase tracking-wide">skills</h2>
          <ul className="list-disc pl-5 text-default text-foreground font-normal space-y-1">
            <li>Brand systems</li>
            <li>Campaign design</li>
            <li>Documentation</li>
            <li>Visual identity</li>
            <li>Technical brand writing</li>
            <li>Cross-functional collaboration</li>
          </ul>
        </section>

        {/* Tools */}
        <section className="flex flex-col gap-4 mt-12">
          <div className="border-border border-t mt-16" />
          <h2 className="text-default text-muted font-normal uppercase tracking-wide">tools</h2>
          <div className="text-default text-foreground font-normal leading-relaxed">
            <div><span className="text-muted">Design:</span> Figma, Illustrator, Photoshop, InDesign</div>
            <div><span className="text-muted">Docs:</span>   Notion, Google Docs, Miro, Acrobat</div>
            <div><span className="text-muted">Proto:</span>  Framer, Webflow, Keynote</div>
          </div>
        </section>

        {/* Footer with left-side links for CV page */}
        <div className="border-border border-t mt-16" />
        <div className="flex w-full items-center justify-between pt-2">
          <CVFooterLinks />
          <Footer showBuildInfo={false} />
        </div>
      </div>
    </>
  );
}
