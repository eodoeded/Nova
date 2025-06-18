"use client";

import { AppThemeSwitcher } from "@/components/theme";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Spacer } from "@/components/spacer";

export default function CV() {
  const handleDownloadCV = () => {
    const cvContent = `Max McIsted
Brand Designer
mcisted.com`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('cv@mcisted.com');
    // Show toast
    const toast = document.createElement('div');
    toast.textContent = 'copied to clipboard.';
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: #000;
      color: #fff;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 1000;
      font-family: inherit;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 2000);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Max McIsted</h1>
            <h2>Brand Designer</h2>
          </div>
        </div>
      </FadeIn.Item>
      
      <FadeIn.Item>
        <p className="text-sm">
          mcisted.com | linkedin.com/in/maxmcisted | <button 
            type="button"
            className="cursor-pointer hover:opacity-50 transition-opacity bg-transparent border-none p-0 text-inherit font-inherit" 
            onClick={handleEmailCopy}
            onKeyDown={(e) => handleKeyDown(e, handleEmailCopy)}
            aria-label="Copy email to clipboard"
          >cv@mcisted.com</button>
        </p>
      </FadeIn.Item>

      <FadeIn.Item>
        <p>
          Designer building brand systems that survive implementation. Previously at Arm, now at Pragmatic Semiconductor.
        </p>
      </FadeIn.Item>

      <FadeIn.Item>
        <div className="mt-16">
          <h3 className="text-white dark:text-white font-semibold text-lg mb-8">Experience</h3>
          
          <div className="mb-12">
            <h4 className="text-white dark:text-white font-semibold text-sm mb-2">Pragmatic Semiconductor</h4>
            <p className="text-white dark:text-white text-sm mb-1">Brand Designer</p>
            <p className="text-muted text-sm">Jul 2025 – Present</p>
          </div>

          <div className="mb-12">
            <h4 className="text-white dark:text-white font-semibold text-sm mb-2">Arm</h4>
            <p className="text-white dark:text-white text-sm mb-1">Design Intern</p>
            <p className="text-muted text-sm mb-4">Sep 2024 – May 2025</p>
            <ul className="text-muted text-sm space-y-1">
              <li>– Worked on Arm's global rebrand across internal, campaign, and product comms</li>
              <li>– Delivered branded systems for documentation, print, and web</li>
            </ul>
          </div>
        </div>
      </FadeIn.Item>

      <FadeIn.Item>
        <div className="mt-16">
          <h3 className="text-white dark:text-white font-semibold text-lg mb-8">Education</h3>
          
          <div className="mb-12">
            <h4 className="text-white dark:text-white font-semibold text-sm mb-2">Loughborough University</h4>
            <p className="text-white dark:text-white text-sm mb-1">BA Graphic Design & Visual Communication</p>
            <p className="text-muted text-sm">2021 – 2026 (expected)</p>
          </div>
        </div>
      </FadeIn.Item>

      <FadeIn.Item>
        <div className="mt-16">
          <h3 className="text-white dark:text-white font-semibold text-lg mb-8">Skills</h3>
          
          <ul className="text-muted text-sm space-y-1">
            <li>– Brand systems</li>
            <li>– Visual identity</li>
            <li>– Technical brand writing</li>
            <li>– Campaign design</li>
            <li>– Cross-functional collaboration</li>
            <li>– Documentation design</li>
          </ul>
        </div>
      </FadeIn.Item>

      <FadeIn.Item>
        <div className="mt-16">
          <h3 className="text-white dark:text-white font-semibold text-lg mb-8">Tools</h3>
          
          <div className="mb-8">
            <h4 className="text-white dark:text-white font-semibold text-sm mb-2">Design</h4>
            <p className="text-muted text-sm">Figma · Illustrator · Photoshop · InDesign</p>
          </div>

          <div className="mb-8">
            <h4 className="text-white dark:text-white font-semibold text-sm mb-2">Docs & Writing</h4>
            <p className="text-muted text-sm">Notion · Google Docs · Miro · Acrobat</p>
          </div>

          <div className="mb-8">
            <h4 className="text-white dark:text-white font-semibold text-sm mb-2">Prototyping</h4>
            <p className="text-muted text-sm">Framer · Webflow · Keynote</p>
          </div>
        </div>
      </FadeIn.Item>

      <FadeIn.Item>
        <div className="mt-16">
          <h3 className="text-white dark:text-white font-semibold text-lg mb-8">Contact</h3>
          
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/in/maxmcisted" className="text-muted transition-opacity hover:opacity-50">
              LinkedIn
            </a>
            <button 
              type="button"
              className="text-muted cursor-pointer transition-opacity hover:opacity-50 bg-transparent border-none p-0 text-left font-inherit" 
              onClick={handleEmailCopy}
              onKeyDown={(e) => handleKeyDown(e, handleEmailCopy)}
              aria-label="Copy email to clipboard"
            >
              Email
            </button>
            <button 
              type="button"
              className="text-muted cursor-pointer transition-opacity hover:opacity-50 bg-transparent border-none p-0 text-left font-inherit" 
              onClick={handleDownloadCV}
              onKeyDown={(e) => handleKeyDown(e, handleDownloadCV)}
              aria-label="Download CV as text file"
            >
              Download CV (.txt)
            </button>
          </div>
        </div>
      </FadeIn.Item>

      <Spacer />

      {/* Theme Toggle - positioned bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <AppThemeSwitcher />
      </div>
    </FadeIn.Container>
  );
}
