import { Footer } from "@/components/footer";
import Image from "next/image";
import { Contact } from "@/components/contact";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Spacer } from "@/components/spacer";

export default function Three() {
  return (
    <FadeIn.Container>
      {/* Header (from homepage) */}
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Nova</h1>
            <h2>Systemic Brand for a New Era</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      {/* Summary (from homepage, adapted) */}
      <FadeIn.Item>
        <p>
          Nova is a fictional technology company reimagined for the future. This case study explores the creation of a systemic brand identity, from strategy to launch, with a focus on expressive visuals and scalable systems.
        </p>
      </FadeIn.Item>
      <Spacer />
      {/* Hero Video */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <video
            src={"/hero-fixed.mp4"}
            autoPlay
            loop
            muted
            playsInline
            poster="/preview.png"
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
            style={{ background: '#111', opacity: 1 }}
          />
        </div>
      </FadeIn.Item>
      {/* 1st Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 1"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 2nd Image Section (split) */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12 gap-4">
          <Image
            src="/preview.png"
            alt="Nova split 1"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[37vw] max-w-[600px] h-auto shadow-xl"
          />
          <Image
            src="/preview.png"
            alt="Nova split 2"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[37vw] max-w-[600px] h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 3rd Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 2"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 4th Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 3"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 5th Image Section (split) */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12 gap-4">
          <Image
            src="/preview.png"
            alt="Nova split 3"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[37vw] max-w-[600px] h-auto shadow-xl"
          />
          <Image
            src="/preview.png"
            alt="Nova split 4"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[37vw] max-w-[600px] h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 6th Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 4"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 7th Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 5"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 8th Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 6"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Section 1: Brand Strategy */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Brand Strategy</h2>
          <p>
            Nova's brand was built on the idea of adaptability and clarity. The strategy phase included workshops, competitor analysis, and the development of a flexible design system that could scale across digital and physical touchpoints.
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
      {/* Section 2: Visual Identity */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Visual Identity</h2>
          <p>
            The visual identity leverages bold geometry, a monochrome palette, and expressive motion. Key brand marks and iconography were designed to be instantly recognizable and highly adaptable.
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
      {/* Section 3: Applications */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Applications</h2>
          <p>
            The Nova system was applied to web, mobile, print, and environmental graphics. Each touchpoint was designed to maximize clarity and impact, with imagery and layouts that extend beyond the grid for a dynamic, immersive feel.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Image
              src="/preview.png"
              alt="Nova application example"
              width={1600}
              height={900}
              className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
            />
          </div>
        </section>
      </FadeIn.Item>
      {/* Contact & Footer (from homepage) */}
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
