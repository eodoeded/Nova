"use client";

import Image from "next/image";
import FadeIn from "@/components/fade-in";

export default function Page() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Top Section or Hero */}
      {/* ... (Insert any additional top/hero content here if needed) */}

      {/* Split Images: Neoverse V-Series & Powering the world's tech */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-4">
            <div className="relative flex-1">
              <Image
                src="/neoverse-v-series.png"
                alt="Neoverse V-Series"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1536px) 50vw, 768px"
                priority
              />
            </div>
            <div className="relative flex-1">
              <Image
                src="/powering-the-world-3.png"
                alt="Powering the world's tech"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 1536px) 50vw, 768px"
                priority
              />
            </div>
          </div>
        </div>
      </FadeIn.Item>

      {/* Fullsize Image: Arm Arc (arc.png) directly after split images */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/arc.png"
            alt="Arm Arc fullsize"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
            priority
          />
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
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>

      {/* 3rd Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/Group%2010102668.png"
            alt="Nova showcase 3"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>

      {/* 4th Big Image */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <Image
            src="/Group%2010102666.png"
            alt="Nova showcase 4"
            width={1920}
            height={1080}
            className="rounded-lg object-cover w-[85vw] max-w-6xl h-auto shadow-xl"
          />
        </div>
      </FadeIn.Item>

      {/* 5th Split Image Section */}
      <FadeIn.Item>
        <div className="mdx-full-bleed flex justify-center mb-12">
          <div className="flex w-[85vw] max-w-6xl aspect-[16/9] gap-4">
            {/* Add split images here if needed */}
          </div>
        </div>
      </FadeIn.Item>
    </main>
  );
}
