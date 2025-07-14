import { Breadcrumb } from "@/components/breadcrumb";
import * as FadeIn from "@/components/motion/staggers/fade";

import Image from "next/image";

function TightSectionSpacer() {
  // Smaller vertical gap between sections
  return <div className="h-5 md:h-6" />;
}

export default function Arm() {
  return (
    <FadeIn.Container>
      {/* Breadcrumb at top */}
      <FadeIn.Item>
        <Breadcrumb />
      </FadeIn.Item>

      {/* Title and Subtitle */}
      <FadeIn.Item>
        <div className="mb-4 flex justify-between">
          <div>
            <h1>Arm</h1>
            <h2>Visual Identity & Brand</h2>
          </div>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Opening statement */}
      <FadeIn.Item>
        <p className="mb-2 max-w-2xl text-lg md:text-xl">British semiconductor giant reimagined as an AI-first leader.</p>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Hero Video */}
      <FadeIn.Item>
        <div className="mdx-full-bleed mb-8 flex justify-center">
          <video
            src="/hero-fixed.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAYAAABJkM5iAAAAAklEQVR4nO3BMQEAAAgDoJvc5F9F7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwHuE9AAHjAy6tAAAAAElFTkSuQmCC"
            className="h-auto w-[85vw] max-w-6xl rounded-lg object-cover"
            style={{ background: "#111", opacity: 1 }}
          />
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Deliverables - before split images */}
      <FadeIn.Item>
        <div className="mb-4">
          <h3 className="mb-1 font-semibold">Deliverables</h3>
          <ul className="list-inside list-disc space-y-0.5">
            <li>Visual Identity System</li>
            <li>Brand Architecture</li>
            <li>Brand Guidelines</li>
            <li>Modular Asset Library</li>
          </ul>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Split Images: Neoverse V-Series & Powering the world's tech */}
      <FadeIn.Item>
        <div className="mdx-full-bleed mb-8 flex justify-center">
          <div className="flex aspect-[16/9] w-[85vw] max-w-6xl gap-3">
            <div className="relative flex-1">
              <Image
                src="/neoverse-v-series.png"
                alt="Neoverse V-Series"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1536px) 50vw, 768px"
                priority
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/powering-the-world-3.png"
                alt="Powering the world's tech"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1536px) 50vw, 768px"
                priority
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Outputs - before 5.png */}
      <FadeIn.Item>{/* ...rest of your page... */}</FadeIn.Item>
    </FadeIn.Container>
  );
}
