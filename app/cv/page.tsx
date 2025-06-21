"use client";

import { AppThemeSwitcher } from "@/components/theme";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Spacer } from "@/components/spacer";

export default function CV() {
  return (
    <main className="prose dark:prose-invert mx-auto py-16 px-4 max-w-2xl">
      <h1>Max McIsted</h1>
      <p className="text-sm text-muted-foreground">
        Brand Designer — <a href="https://mcisted.com">mcisted.com</a> — <a href="https://linkedin.com/in/maxmcisted">LinkedIn</a> — <a href="mailto:cv@mcisted.com">cv@mcisted.com</a>
      </p>
      <p>Designer building brand systems that survive implementation. Previously at Arm, now at Pragmatic Semiconductor.</p>
      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Pragmatic Semiconductor</strong><br />
            Brand Designer · Jul 2025 – Present
          </li>
          <li>
            <strong>Arm</strong><br />
            Design Intern · Sep 2024 – May 2025<br />
            <ul className="list-disc pl-5">
              <li>Worked on global rebrand across internal, campaign, and product comms</li>
              <li>Delivered brand systems for documentation, print, and web</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <p><strong>Loughborough University</strong><br /> BA Graphic Design & Visual Communication · 2021–2026 (expected)</p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul className="columns-2">
          <li>Brand systems</li>
          <li>Visual identity</li>
          <li>Campaign design</li>
          <li>Technical brand writing</li>
          <li>Documentation</li>
          <li>Cross-functional collaboration</li>
        </ul>
      </section>
      <section>
        <h2>Tools</h2>
        <p><strong>Design:</strong> Figma, Illustrator, Photoshop, InDesign<br />
        <strong>Docs:</strong> Notion, Google Docs, Miro, Acrobat<br />
        <strong>Prototyping:</strong> Framer, Webflow, Keynote</p>
      </section>
      <section>
        <h2>Contact</h2>
        <ul>
          <li><a href="https://linkedin.com/in/maxmcisted">LinkedIn</a></li>
          <li><a href="mailto:cv@mcisted.com">Email</a></li>
          <li><a href="/max-mcisted-cv.txt" download>Download CV (.txt)</a></li>
        </ul>
      </section>
    </main>
  );
}
