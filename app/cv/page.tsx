"use client";

import { Layout } from "@/components/screens/posts";
import { getPost } from "@/lib/mdx";

import { notFound } from "next/navigation";

export default async function Page() {
  const post = await getPost("projects", "cv");

  if (!post) {
    notFound();
  }

  return <Layout post={post} route="projects" />;
}
