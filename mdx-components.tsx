"use client";

import type { MDXComponents } from "mdx/types";

import { CodeCard } from "@/components/code-card";
import { CopyToClipboard } from "@/components/copy-to-clipboard";
import { DownloadPdfButton } from "@/components/download-pdf-button";
import FootnoteBackReference from "@/components/footnote/back-reference";
import FootnoteForwardReference from "@/components/footnote/forward-reference";
import MDXImage from "@/components/image";
import { ImageGroup } from "@/components/image-group";
import Link from "@/components/link";
import Preview from "@/components/preview";
import { cn } from "@/lib/cn";

import React from "react";

export function useMDXComponents(inputComponents: MDXComponents): MDXComponents {
  return {
    PreviewExample: () => {
      return (
        <div className="min- flex h-10 w-32 items-center justify-center rounded-lg border border-yellow-6 bg-yellow-3 text-yellow-11">
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="min-w-full">
                <div className="min-w-full">Showcase</div>
              </div>
            </div>
          </div>
        </div>
      );
    },
    Preview: ({ children, codeblock }) => <Preview codeblock={codeblock ? codeblock : undefined}>{children}</Preview>,
    Image: ({ caption, alt, variant = "default", fill = false, className, ...props }) => (
      <MDXImage
        {...props}
        caption={caption}
        alt={alt}
        className={cn(className, "my-6", {
          "mdx-full-bleed": variant === "full",
        })}
      />
    ),
    ImageGroup: ({ children, className }) => <ImageGroup className={cn("mdx-full-bleed my-6 overflow-hidden", className)}>{children}</ImageGroup>,
    h1: ({ children }) => <h1 className="mb-4 font-bold text-4xl">{children}</h1>,
    h2: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
      if (id?.includes("footnote-label")) {
        return null;
      }
      return (
        <h2 id={id} className="font-semibold text-[#005dc5] text-lg mb-8 mt-16">
          {children}
        </h2>
      );
    },
    h3: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 id={id} className="font-semibold text-sm text-white">
        {children}
      </h3>
    ),
    p: ({ children }) => <p className="mb-4 text-gray-4 text-sm leading-relaxed dark:text-gray-7">{children}</p>,
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className={cn("list-inside list-disc space-y-0.5 text-gray-4 text-sm dark:text-gray-7", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
      if (
        React.Children.toArray(props.children).some(
          (child) => React.isValidElement(child) && (child as React.ReactElement).props.id?.includes("user-content-fn-"),
        )
      ) {
        return (
          <ol data-footnotes>
            <div className="mt-6 mb-2 text-muted text-small">Footnotes</div>
            {props.children}
          </ol>
        );
      }
      return <ol className={cn("mt-2 ml-2 list-decimal text-gray-4 text-sm dark:text-gray-7", className)} {...props} />;
    },
    li: ({ className, children, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
      if (props.id?.includes("user-content-fn-")) {
        return (
          <li id={props.id}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                if (child.type === "p") {
                  const href = child.props.children.find((child: React.ReactNode) => {
                    if (React.isValidElement(child)) {
                      return React.isValidElement(child) && "props" in child && (child.props as { href?: string }).href?.includes("user-content-fnref-");
                    }
                    return false;
                  })?.props.href;

                  const filtered = child.props.children.filter((child: React.ReactNode) => {
                    if (React.isValidElement(child)) {
                      return !(React.isValidElement(child) && "props" in child && (child.props as { href?: string }).href?.includes("user-content-fnref-"));
                    }
                    return true;
                  });

                  return <FootnoteBackReference href={href}>{filtered}</FootnoteBackReference>;
                }
                return child;
              }
              return child;
            })}
          </li>
        );
      }
      return <li className={cn("mt-2 ml-2 list-item text-gray-4 text-sm dark:text-gray-7", className)}>{children}</li>;
    },
    a: ({ children, href }) => {
      if (href?.startsWith("#user-content-fn-")) {
        return <FootnoteForwardReference href={href}>{children}</FootnoteForwardReference>;
      }
      return (
        <Link href={href} className="inline-flex items-center gap-1 text-muted" underline>
          {children}
        </Link>
      );
    },
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <blockquote className={cn("mt-6 border-gray-4 border-l-2 pl-6 text-muted", className)} {...props} />
    ),
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-hidden overflow-y-auto">
        <table className={cn("w-full overflow-hidden", className)} {...props} />
      </div>
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className={cn("border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td className={cn("border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
    ),
    CopyToClipboard: CopyToClipboard,
    CodeCard: CodeCard,
    DownloadPdfButton: DownloadPdfButton,
    ...inputComponents,
  };
}
