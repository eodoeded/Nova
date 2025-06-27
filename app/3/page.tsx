import { Footer } from "@/components/footer";
import Image from "next/image";
import { Contact } from "@/components/contact";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Spacer } from "@/components/spacer";
import { Breadcrumb } from "@/components/breadcrumb";

export default function Three() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <Breadcrumb />
      </FadeIn.Item>
      {/* Header */}
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>3</h1>
            <h2>Systemic Brand for a New Era</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      {/* Summary */}
      <FadeIn.Item>
        <p>
          Nova is a fictional technology company reimagined for the future. This case study explores the creation of a systemic brand identity, from strategy to launch, with a focus on expressive ...
        </p>
      </FadeIn.Item>
      <Spacer />
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
      {/* 5th Big Image (5.png is now right after split images) */}
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
      {/* Arc Fullsize Image (arc.png is now after 5.png) */}
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
      {/* Split Images: 6.png & 7.png (directly after arc.png) */}
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
      {/* 2nd Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 2"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* 3rd Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 3"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* 4th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 4"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* 5th Split Image Section (placeholder, adjust as needed) */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-4">
            <div className="relative flex-1">
              <Image
                src="/preview.png"
                alt="Nova split 3"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/preview.png"
                alt="Nova split 4"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>
      {/* 6th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 6"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* 7th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 7"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto"
          />
        </div>
      </FadeIn.Item>
      {/* Section: Brand Strategy */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Brand Strategy</h2>
          <p>
            Nova's brand was built on the idea of adaptability and clarity. The strategy phase included workshops, competitor analysis, and the development of a flexible design system that could ...
          </p>
          <div className="w-full flex justify-center mt-8">
            <Image
              src="/circle.svg"
              alt="Brand system diagram"
              width={600}
              height={600}
              className="w-[60vw] max-w-2xl h-auto"
            />
          </div>
        </section>
      </FadeIn.Item>
      {/* Section: Visual Identity */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Visual Identity</h2>
          <p>
            The visual identity leverages bold geometry, a monochrome palette, and expressive motion. Key brand marks and iconography were designed to be instantly recognizable and highly adaptab...
          </p>
          <div className="w-full flex justify-center mt-8">
            <Image
              src="/key.svg"
              alt="Nova key icon"
              width={300}
              height={300}
              className="w-[40vw] max-w-lg h-auto"
            />
          </div>
        </section>
      </FadeIn.Item>
      {/* Section: Applications */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Applications</h2>
          <p>
            The Nova system was applied to web, mobile, print, and environmental graphics. Each touchpoint was designed to maximize clarity and impact, with imagery and layouts that extend beyond...
          </p>
          <div className="w-full flex justify-center mt-8">
            <Image
              src="/preview.png"
              alt="Nova application example"
              width={1600}
              height={900}
              className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto"
            />
          </div>
        </section>
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
