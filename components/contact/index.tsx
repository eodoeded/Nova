import { Link } from "next-view-transitions";

export const Contact = () => {
  return (
    <div className="mt-6 flex flex-col">
      <h2 className="py-2 text-muted capitalize">Contact me</h2>
      <div className="border-border border-t" />
      <div className="flex flex-col gap-2 py-2">
        <Link href="https://www.linkedin.com/in/maxmcisted" className="transition-opacity hover:opacity-50">
          LinkedIn
        </Link>
        <a href="mailto:mcistedm@gmail.com" className="transition-opacity hover:opacity-50">
          Email
        </a>
      </div>
    </div>
  );
};
