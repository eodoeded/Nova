import { Footer } from "@/components/footer";
import Image from "next/image";
import { Contact } from "@/components/contact";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Spacer } from "@/components/spacer";
import { Breadcrumb } from "@/components/breadcrumb";

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
        <div className="flex justify-between mb-4">
          <div>
            <h1>Arm</h1>
            <h2>Visual Identity & Brand</h2>
          </div>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Opening statement */}
      <FadeIn.Item>
        <p className="text-lg md:text-xl max-w-2xl mb-2">
          British semiconductor giant reimagined as an AI-first leader.
        </p>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Hero Video */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-8">
          <video
            src="/hero-fixed.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAYAAABJkM5iAAAAAklEQVR4nO3BMQEAAAgDoJvc5F9F7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwHuE9AAHjAy6tAAAAAElFTkSuQmCC"
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
            style={{ background: "#111", opacity: 1 }}
          />
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Deliverables - before split images */}
      <FadeIn.Item>
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Deliverables</h3>
          <ul className="list-disc list-inside space-y-0.5">
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
        <div className="mdx-full-bleed flex justify-center mb-8">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-3">
            <div className="relative flex-1">
              <Image
                src="/neoverse-v-series.png"
                alt="Neoverse V-Series"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1536px) 50vw, 768px"
                priority
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/powering-the-world-3.png"
                alt="Powering the world's tech"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1536px) 50vw, 768px"
                priority
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Outputs - before 5.png */}
      <FadeIn.Item>
        {/* ...rest of your page... */}
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
