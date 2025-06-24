"use client";

import { Footer } from "@/components/footer";
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
    <>
      {/* Homepage header, copied exactly */}
      <div className="flex justify-between">
        <div>
          <Link href="/" className="text-white hover:opacity-50 transition-opacity">
            <h1>Max McIsted</h1>
          </Link>
          <h2>Brand Designer</h2>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Projects */}
        <section className="flex flex-col gap-2">
          <h2 className="py-2 mb-3 text-muted capitalize">Projects</h2>
          <div className="flex flex-col gap-4 text-default text-foreground font-normal">
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

        {/* Divider: Projects → Education */}
        <div className="border-t border-border w-full my-8" />

        {/* Education */}
        <section className="flex flex-col gap-2">
          <h2 className="py-2 mb-3 text-muted capitalize">Education</h2>
          <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 text-default text-foreground font-normal">
            <div className="text-foreground">Loughborough University</div>
            <div className="text-muted">2021–2026 (expected)</div>
            <div className="col-span-2 text-muted">BA Graphic Design & Visual Communication</div>
          </div>
        </section>

        {/* Divider: Education → Skills */}
        <div className="border-t border-border w-full my-8" />

        {/* Skills */}
        <section className="flex flex-col gap-2">
          <h2 className="py-2 mb-3 text-muted capitalize">Skills</h2>
          <ul className="list-disc pl-5 text-default text-foreground font-normal space-y-1">
            <li>Brand systems</li>
            <li>Campaign design</li>
            <li>Documentation</li>
            <li>Visual identity</li>
            <li>Technical brand writing</li>
            <li>Cross-functional collaboration</li>
          </ul>
        </section>

        {/* Divider: Skills → Tools */}
        <div className="border-t border-border w-full my-8" />

        {/* Tools */}
        <section className="flex flex-col gap-2">
          <h2 className="py-2 mb-3 text-muted capitalize">Tools</h2>
          <div className="text-default text-foreground font-normal leading-relaxed">
            <div><span className="text-muted">Design:</span> Figma, Illustrator, Photoshop, InDesign</div>
            <div><span className="text-muted">Docs:</span>   Notion, Google Docs, Miro, Acrobat</div>
            <div><span className="text-muted">Proto:</span>  Framer, Webflow, Keynote</div>
          </div>
        </section>

        {/* Footer with left-side links for CV page */}
        <footer className="border-border flex w-full items-center justify-between border-t pt-6 mt-16">
          <CVFooterLinks />
          <Footer showBuildInfo={false} />
        </footer>
      </div>
    </>
  );
}
