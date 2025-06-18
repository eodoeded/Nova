"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export const DownloadPdfButton = () => {
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <button onClick={handleDownloadPdf} className="inline-flex items-center gap-1 text-muted" type="button">
      <ArrowDownTrayIcon className="h-5 w-5" />
      <span>Download PDF</span>
    </button>
  );
};
