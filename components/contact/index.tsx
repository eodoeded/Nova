"use client";

import Link from "next/link";
import React from "react";

export const Contact = () => {
  return (
    <div className="mt-6">
      <h2 className="text-muted mb-2 text-sm capitalize">Links</h2>
      <div className="border-border flex flex-col border-t">
        <Link
          href="mailto:contact@mcisted.com"
          className="border-border flex cursor-pointer justify-between border-b py-2 transition-opacity hover:opacity-50"
        >
          <p>Email</p>
        </Link>
        <Link
          href="https://github.com/eodoeded"
          className="border-border flex cursor-pointer justify-between border-b py-2 transition-opacity hover:opacity-50"
          target="_blank"
        >
          <p>GitHub</p>
        </Link>
        <div className="border-border flex justify-between border-b py-2 text-neutral-500">
          <p>CV</p>
        </div>
        <Link
          href="https://linkedin.com/in/maxmcisted"
          className="border-border flex cursor-pointer justify-between border-b py-2 transition-opacity hover:opacity-50"
          target="_blank"
        >
          <p>LinkedIn</p>
        </Link>
      </div>
    </div>
  );
};
