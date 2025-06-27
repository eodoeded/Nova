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
          Nova is a fictional technology company reimagined for the future. This case study explores the creation of a systemic brand identity, from strategy to launch, with a focus on expressive design and clarity.
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
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
            style={{ background: "#111", opacity: 1 }}
          />
        </div>
      </FadeIn.Item>
      {/* 1st Big Image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/Group%2010102663.png"
            alt="Nova showcase 1"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 2nd Split Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-4">
            <div className="relative flex-1">
              <Image
                src="/preview.png"
                alt="Nova split 1"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/preview.png"
                alt="Nova split 2"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>
      {/* 3rd Big Image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 2"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 4th Big Image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 3"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 5th Split Image Section */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-4">
            <div className="relative flex-1">
              <Image
                src="/preview.png"
                alt="Nova split 3"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/preview.png"
                alt="Nova split 4"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1536px) 50vw, 768px"
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>
      {/* 6th Big Image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 4"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 7th Big Image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 5"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* 8th Big Image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/preview.png"
            alt="Nova showcase 6"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Section: Brand Strategy */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Brand Strategy</h2>
          <p>
            Nova's brand was built on the idea of adaptability and clarity. The strategy phase included workshops, competitor analysis, and the development of a flexible design system that could scale.
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
      {/* Section: Applications */}
      <FadeIn.Item>
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-2">Applications</h2>
          <p>
            The Nova system was applied to web, mobile, print, and environmental graphics. Each touchpoint was designed to maximize clarity and impact, with imagery and layouts that extend beyond the expected.
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
