"use client";

import type { Post } from "@/types/post";
import { formatDate } from "@/lib/date";

import Link from "next/link";

interface PostNavigationProps {
  posts: Post[];
  currentSlug: string;
}

export const PostNavigation = ({ posts, currentSlug }: PostNavigationProps) => {
  const currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  const previousPost = posts[currentIndex + 1];
  const nextPost = posts[currentIndex - 1];

  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="mt-16 flex w-full justify-between border-t border-border pt-8">
      {previousPost && (
        <Link href={`/projects/${previousPost.slug}`} className="flex w-full flex-col gap-1 text-left">
          <span className="text-muted">Previous</span>
          <span className="transition-opacity hover:opacity-50">{previousPost.title}</span>
          <span className="text-muted">({formatDate(previousPost.time.created)})</span>
        </Link>
      )}

      {nextPost && (
        <Link href={`/projects/${nextPost.slug}`} className="flex w-full flex-col gap-1 text-right">
          <span className="text-muted">Next</span>
          <span className="transition-opacity hover:opacity-50">{nextPost.title}</span>
          <span className="text-muted">({formatDate(nextPost.time.created)})</span>
        </Link>
      )}
    </div>
  );
};
