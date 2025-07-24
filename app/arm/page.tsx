import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Spacer } from "@/components/spacer";

import { useRef, useState } from "react";

function TightSectionSpacer() {
  // Smaller vertical gap between sections
  return <div className="h-5 md:h-6" />;
}

export default function Arm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [posterVisible, setPosterVisible] = useState(true);

  const handlePlay = () => setPosterVisible(false);

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
          <div style={{ position: "relative", width: "85vw", maxWidth: "96rem" }}>
            <video
              ref={videoRef}
              src="/hero-fixed.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/preview.png"
              className="h-auto w-full rounded-lg object-cover"
              style={{ background: "#111", opacity: 1, display: "block" }}
              onPlay={handlePlay}
            />
            {posterVisible && (
              <img
                src="/preview.png"
                alt="Preview"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                  background: "#111",
                  zIndex: 2,
                  pointerEvents: "none",
                  transition: "opacity 0.3s",
                  opacity: posterVisible ? 1 : 0,
                }}
              />
            )}
          </div>
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
              <img
                src="/neoverse-v-series.png"
                alt="Neoverse V-Series"
                className="rounded-lg object-cover"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
            <div className="relative flex-1">
              <img
                src="/powering-the-world-3.png"
                alt="Powering the world's tech"
                className="rounded-lg object-cover"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Outputs - before 5.png */}
      <FadeIn.Item>
        <div className="mb-4">
          <h3 className="mb-1 font-semibold">Outputs</h3>
          <ul className="list-inside list-disc space-y-0.5">
            <li>AI-First Brand Narrative</li>
            <li>Premium Aesthetic</li>
            <li>Data-Driven Transformation</li>
          </ul>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* 5th Big Image (5.png) */}
      <FadeIn.Item>
        <div className="mdx-full-bleed mb-8 flex justify-center">
          <img src="/5.png" alt="Nova showcase 5" width={1920} height={1080} className="h-auto w-[85vw] max-w-6xl rounded-lg object-cover" />
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Arc Fullsize Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed mb-8 flex justify-center">
          <img src="/arc.png" alt="Arm Arc fullsize" width={1920} height={1080} className="h-auto w-[85vw] max-w-6xl rounded-lg object-cover" />
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Impact - after arc image */}
      <FadeIn.Item>
        <div className="mb-4">
          <h3 className="mb-1 font-semibold">Impact</h3>
          <ul className="list-inside list-disc space-y-0.5">
            <li>+3.2 pts | Brand Equity Score (↑ 15.9%)</li>
            <li>+98% | Unprompted Brand Awareness (4.8% → 9.5%)</li>
            <li>+25% | 'Innovative' Brand Association (28% → 35%)</li>
          </ul>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* Split Images: 6.png & 7.png */}
      <FadeIn.Item>
        <div className="mdx-full-bleed mb-8 flex justify-center">
          <div className="flex aspect-[16/9] w-[85vw] max-w-6xl gap-3">
            <div className="relative flex-1">
              <img src="/6.png" alt="Nova split 6" className="rounded-lg object-cover" sizes="(max-width: 1536px) 50vw, 768px" />
            </div>
            <div className="relative flex-1">
              <img src="/7.png" alt="Nova split 7" className="rounded-lg object-cover" sizes="(max-width: 1536px) 50vw, 768px" />
            </div>
          </div>
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* 8th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed mb-8 flex justify-center">
          <img src="/8.png" alt="Nova showcase 8" width={1920} height={1080} className="h-auto w-[85vw] max-w-6xl rounded-lg object-cover" />
        </div>
      </FadeIn.Item>

      <TightSectionSpacer />

      {/* 9th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed mb-12 flex justify-center">
          <img src="/9.png" alt="Nova showcase 9" width={1920} height={1080} className="h-auto w-[85vw] max-w-6xl rounded-lg object-cover" />
        </div>
      </FadeIn.Item>

      <Spacer />
      <FadeIn.Item>
        <Contact />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
