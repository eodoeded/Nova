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
      {/* Hero Video (full width) */}
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
      {/* Full width image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="https://placehold.co/1600x900/png"
            alt="Placeholder full width 1"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Split image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center gap-6 mb-12">
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 1a"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 1b"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Split image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center gap-6 mb-12">
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 2a"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 2b"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Full width image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="https://placehold.co/1600x900/png"
            alt="Placeholder full width 2"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Split image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center gap-6 mb-12">
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 3a"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 3b"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Split image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center gap-6 mb-12">
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 4a"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 4b"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Full width image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="https://placehold.co/1600x900/png"
            alt="Placeholder full width 3"
            width={1600}
            height={900}
            className="rounded-lg object-cover w-[75vw] max-w-5xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Split image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center gap-6 mb-12">
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 5a"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
          <Image
            src="https://placehold.co/800x900/png"
            alt="Placeholder split 5b"
            width={800}
            height={900}
            className="rounded-lg object-cover w-[36vw] max-w-2xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>
      {/* Full width image */}
      <FadeIn.Item>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="https://placehold.co/1600x900/png"
            alt="Placeholder full width 4"
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
