import { getPosts } from "@/lib/mdx";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface PostProps {
  category: string;
}

export const Posts = ({ category }: PostProps) => {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";
  
  const posts = getPosts(category)
    .filter((post) => post.slug !== "cv")
    .sort((a, b) => {
      const dateA = new Date(a.time.created).getTime();
      const dateB = new Date(b.time.created).getTime();
      return dateB - dateA;
    });

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    return null;
  }

  const CategoryHeader = () => (
    <h2 className="py-2 text-muted capitalize">
      {category} {posts.length > 0 && `(${posts.length})`}
    </h2>
  );

  return (
    <div className="mt-6 flex flex-col">
      {isProjectsPage ? (
        <CategoryHeader />
      ) : (
        <Link href={`/${category}`} className="flex justify-between">
          <CategoryHeader />
        </Link>
      )}

      {posts.map((post) => {
        const content = (
          <div className="flex w-full justify-between py-2">
            <p className={category === "projects" ? "text-muted" : "cursor-pointer transition-opacity hover:opacity-50"}>{post.title}</p>
          </div>
        );

        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            {category === "projects" ? content : <Link href={`/${category}/${post.slug}`}>{content}</Link>}
          </React.Fragment>
        );
      })}
    </div>
  );
};
