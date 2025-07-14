"use client";

import type { Post } from "@/types";

import { DownloadPdfButton } from "@/components/download-pdf-button";
import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatDate } from "@/lib/date";
import { getPosts } from "@/lib/mdx";
import { useMDXComponents } from "@/mdx-components";

import { MDXRemote } from "next-mdx-remote-client/rsc";
import React from "react";
import { readingTime } from "reading-time-estimator";

interface Props {
  post: Post;
  route: string;
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);
  const mdxComponents = useMDXComponents({});

  const Seperator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <div>Published {formatDate(post.time.created)}</div>;
  };
  const UpdateTime = () => {
    return <div>Updated {formatDate(post.time.updated)}</div>;
  };

  const ReadingTime = () => {
    return <div>{readingTime(post.content).minutes} minutes read</div>;
  };

  return (
    <React.Fragment>
      {post.type !== "cv" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <h1>{post.title}</h1>
            {post.type === "cv" && <DownloadPdfButton />}
          </div>
          <div className="mt-1 flex gap-2 text-muted text-small">
            <PublishedTime />
            <Seperator />
            <UpdateTime />
            <Seperator />
            <ReadingTime />
          </div>
        </div>
      )}

      {post.type === "cv" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-2xl text-[#005dc5]">{post.title}</h1>
            <DownloadPdfButton />
          </div>
        </div>
      )}

      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            baseUrl: process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000",
          },
        }}
      />
      {post.type !== "cv" && <PostNavigation posts={posts} currentSlug={post.slug} />}
      {post.type === "cv" && <TableOfContents />}
    </React.Fragment>
  );
};
