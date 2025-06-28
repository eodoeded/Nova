import { getPosts } from "@/lib/mdx";
import Link from "next/link";
import React from "react";

interface PostProps {
  category: string;
  pathname?: string;
}

// Titles that should NOT be clickable
const NON_CLICKABLE_TITLES = ["Pragmatic Semiconductor"];

export const Posts = ({ category, pathname = "" }: PostProps) => {
  const isExperiencePage = pathname === "/experience" || pathname === "/";

  const posts = getPosts(category)
    .filter((post) => post.slug !== "cv")
    .sort((a, b) => {
      const dateA = new Date(a.time.created).getTime();
      const dateB = new Date(b.time.created).getTime();
      return dateB - dateA;
    });

  const Separator = () => <div className="border-border border-t pointer-events-none" />;

  if (posts.length === 0) {
    return null;
  }

  const CategoryHeader = () => (
    <h2 className="py-2 text-muted capitalize">
      {category === "experience" ? "Experience" : category}
    </h2>
  );

  // helper for rendering a list section
  const renderPostRow = (post: any, isFirst: boolean = false) => {
    // If not clickable
    if (NON_CLICKABLE_TITLES.includes(post.title)) {
      return (
        <div className="py-2">
          <p className="text-muted">{post.title}</p>
        </div>
      );
    }
    // Clickable
    return (
      <div className="py-2">
        <Link
          href={`/${post.slug}`}
          className="no-underline focus:outline-none active:outline-none"
        >
          <span className="text-white hover:opacity-50 transition-opacity">{post.title}</span>
        </Link>
      </div>
    );
  };

  return (
    <div className="mt-6 flex flex-col">
      {isExperiencePage ? (
        <CategoryHeader />
      ) : (
        <Link href={`/${category}`} className="flex justify-between">
          <CategoryHeader />
        </Link>
      )}

      {posts.map((post, i) => (
        <React.Fragment key={post.slug}>
          <Separator />
          {renderPostRow(post)}
        </React.Fragment>
      ))}
    </div>
  );
};
