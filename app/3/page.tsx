import { Footer } from "@/components/footer";
import Image from "next/image";
import { Contact } from "@/components/contact";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Spacer } from "@/components/spacer";
import { Breadcrumb } from "@/components/breadcrumb";

export default function Arm() {
  return (
    <FadeIn.Container>
      {/* Breadcrumb at top */}
      <FadeIn.Item>
        <Breadcrumb />
      </FadeIn.Item>
      {/* Title and Subtitle */}
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Arm</h1>
            <h2>Visual Identity & Brand</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      {/* Main Summary Section */}
      <FadeIn.Item>
        <p>British semiconductor giant reimagined as an AI-first leader.</p>
      </FadeIn.Item>
      <Spacer />
      {/* Deliverables */}
      <FadeIn.Item>
        <div>
          <h3 className="font-semibold mb-1">Deliverables</h3>
          <ul className="list-disc list-inside space-y-0.5">
            <li>Visual Identity System</li>
            <li>Brand Architecture</li>
            <li>Brand Guidelines</li>
            <li>Modular Asset Library</li>
          </ul>
        </div>
      </FadeIn.Item>
      <Spacer />
      {/* Outputs */}
      <FadeIn.Item>
        <div>
          <h3 className="font-semibold mb-1">Outputs</h3>
          <ul className="list-disc list-inside space-y-0.5">
            <li>AI-First Brand Narrative</li>
            <li>Premium Aesthetic</li>
            <li>Data-Driven Transformation</li>
          </ul>
        </div>
      </FadeIn.Item>
      <Spacer />
      {/* Impact */}
      <FadeIn.Item>
        <div>
          <h3 className="font-semibold mb-1">Impact</h3>
          <ul className="list-disc list-inside space-y-0.5">
            <li>+3.2 pts | Brand Equity Score (↑ 15.9%)</li>
            <li>+98% | Unprompted Brand Awareness (4.8% → 9.5%)</li>
            <li>+25% | 'Innovative' Brand Association (28% → 35%)</li>
          </ul>
        </div>
      </FadeIn.Item>
      <Spacer />
      {/* Images */}
      {/* Hero Video */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <video
            src="/hero-fixed.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/preview.png"
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
            style={{ background: "#111", opacity: 1 }}
          />
        </div>
      </FadeIn.Item>
      {/* Split Images: Neoverse V-Series & Powering the world's tech */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-4">
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
      {/* 5th Big Image (5.png) */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/5.png"
            alt="Nova showcase 5"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* Arc Fullsize Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/arc.png"
            alt="Arm Arc fullsize"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
            priority
          />
        </div>
      </FadeIn.Item>
      {/* Split Images: 6.png & 7.png */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-4">
            <div className="relative flex-1">
              <Image
                src="/6.png"
                alt="Nova split 6"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/7.png"
                alt="Nova split 7"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>
      {/* 8th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/8.png"
            alt="Nova showcase 8"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* 9th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/9.png"
            alt="Nova showcase 9"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* Contact & Footer */}
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
