"use client";

import { Footer } from "@/components/footer";

import Link from "next/link";

function CVFooterLinks() {
  return (
    <div className="flex flex-row gap-x-4 text-sm">
      <a href="https://linkedin.com/in/maxmcisted" className="text-white transition-opacity hover:opacity-50" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="mailto:cv@mcisted.com" className="text-white transition-opacity hover:opacity-50">
        Email
      </a>
      <a href="/max-mcisted-cv.txt" download className="text-white transition-opacity hover:opacity-50">
        Download
      </a>
    </div>
  );
}

export default function CV() {
  return (
    <>
      {/* Homepage header, copied exactly */}
      <div className="flex justify-between">
        <div>
          <Link href="/" className="text-white transition-opacity hover:opacity-50">
            <h1 className="mb-0">Max McIsted</h1>
          </Link>
          <h2 className="mt-0">Brand Designer</h2>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Projects */}
        <section className="flex flex-col gap-1">
          <h2 className="mb-1 text-muted capitalize">Experience</h2>
          <div className="flex flex-col gap-1 font-normal text-default text-foreground">
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div className="text-foreground">Pragmatic Semiconductor</div>
              <div className="text-muted">Jul 2025 – Present</div>
              <div className="col-span-2 text-muted">Brand Designer</div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1">
              <div className="text-foreground">Arm</div>
              <div className="text-muted">Sep 2024 – May 2025</div>
              <div className="col-span-2 text-muted">Design Intern</div>
              <ul className="col-span-2 mt-1 list-disc space-y-1 pl-5 text-default text-foreground">
                <li>Worked on global rebrand across internal, campaign, and product comms</li>
                <li>Delivered brand systems for documentation, print, and web</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Divider: Projects → Education */}
        <div className="my-2 w-full border-border border-t" />

        {/* Education */}
        <section className="flex flex-col gap-1">
          <h2 className="mb-1 text-muted capitalize">Education</h2>
          <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 font-normal text-default text-foreground">
            <div className="text-foreground">Loughborough University</div>
            <div className="text-muted">2021–2026 (expected)</div>
            <div className="col-span-2 text-muted">BA Graphic Design & Visual Communication</div>
          </div>
        </section>

        {/* Divider: Education → Skills */}
        <div className="my-2 w-full border-border border-t" />

        {/* Skills */}
        <section className="flex flex-col gap-1">
          <h2 className="mb-1 text-muted capitalize">Skills</h2>
          <ul className="list-disc pl-5 font-normal text-default text-foreground">
            <li>Brand systems</li>
            <li>Campaign design</li>
            <li>Documentation</li>
            <li>Visual identity</li>
            <li>Technical brand writing</li>
            <li>Cross-functional collaboration</li>
          </ul>
        </section>

        {/* Divider: Skills → Tools */}
        <div className="my-2 w-full border-border border-t" />

        {/* Tools */}
        <section className="flex flex-col gap-1">
          <h2 className="mb-1 text-muted capitalize">Tools</h2>
          <div className="font-normal text-default text-foreground leading-relaxed">
            <div>
              <span className="text-muted">Design:</span> Figma, Illustrator, Photoshop, InDesign
            </div>
            <div>
              <span className="text-muted">Docs:</span> Notion, Google Docs, Miro, Acrobat
            </div>
            <div>
              <span className="text-muted">Proto:</span> Framer, Webflow, Keynote
            </div>
          </div>
        </section>

        {/* Footer with left-side links for CV page */}
        <footer className="mt-16 flex w-full items-center justify-between border-border border-t pt-6">
          <CVFooterLinks />
          <Footer showBuildInfo={false} />
        </footer>
      </div>
    </>
  );
}
