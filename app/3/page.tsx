import type { Post } from "@/types";

import { Layout } from "@/components/screens/posts";
import { getPosts } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

const route = "projects";

const Posts = getPosts(route);

interface PageProps {
  params: Post;
}

export function generateMetadata({ params }: PageProps) {
  const post = Posts.find((post: { slug: string }) => post.slug === params.slug);
  const title = post ? post.title : "Arm Rebrand Case Study";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph.openGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Three() {
  return (
    <>
      {/* Hero Image */}
      <div className="mb-8">
        <Image
          src="https://raw.githubusercontent.com/maxmcisted7/Nova/main/Screenshot%202025-06-16%20at%2008.28.50.png"
          alt="All sports brand identity hero image"
          width={1200}
          height={675}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Title Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          All sports
        </h1>
        <p className="mt-2 text-lg text-neutral-500 dark:text-neutral-400">
          Brand identity and campaign visuals for a sportswear reinvention.
        </p>
      </section>

      {/* Body Copy Section */}
      <section className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </section>

      <Footer />
    </>
  );
}
