import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 font-bold text-3xl">Projects</h1>
      <ul className="space-y-6">
        <li>
          <Link href="/arm" className="block rounded-lg border border-gray-200 p-5 transition hover:border-black">
            <div>
              <div className="font-semibold text-xl">Arm</div>
              <div className="text-gray-600">Visual Identity & Brand</div>
              <div className="mt-1 text-gray-400 text-sm">mcisted.com/arm</div>
            </div>
          </Link>
        </li>
        {/* You can add more projects here */}
      </ul>
    </main>
  );
}
