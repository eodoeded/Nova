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
  const isExperiencePage = pathname === "/experience";

  const posts = getPosts(category)
    .filter((post) => post.slug !== "cv")
    .sort((a, b) => {
      const dateA = new Date(a.time.created).getTime();
      const dateB = new Date(b.time.created).getTime();
      return dateB - dateA;
    });

  // Debug logging
  // console.log('Posts component:', { category, postsCount: posts.length, posts: posts.map(p => p.title) });

  const Separator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    // console.log('No posts found for category:', category);
    return null;
  }

  const CategoryHeader = () => (
    <h2 className="py-2 text-muted capitalize">
      {category === "experience" ? "Experience" : category}
    </h2>
  );

  return (
    <div className="mt-6 flex flex-col">
      {isExperiencePage ? (
        <CategoryHeader />
      ) : (
        <Link href={`/${category}`} className="flex justify-between">
          <CategoryHeader />
        </Link>
      )}

      {posts.map((post) => (
        <React.Fragment key={post.slug}>
          <Separator />
          {category === "experience" ? (
            NON_CLICKABLE_TITLES.includes(post.title) ? (
              <div className="py-2">
                <p className="text-muted">{post.title}</p>
              </div>
            ) : (
              <div className="py-2">
                <Link href={`/${post.slug}`} className="no-underline focus:outline-none active:outline-none">
                  <p className="text-white hover:opacity-50 transition-opacity">{post.title}</p>
                </Link>
              </div>
            )
          ) : (
            <div className="py-2">
              <Link href={`/${category}/${post.slug}`} className="no-underline focus:outline-none active:outline-none">
                <span className="hover:opacity-50 transition-opacity">{post.title}</span>
              </Link>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
