import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ul className="space-y-6">
        <li>
          <Link href="/arm" className="block border border-gray-200 hover:border-black rounded-lg p-5 transition">
            <div>
              <div className="text-xl font-semibold">Arm</div>
              <div className="text-gray-600">Visual Identity & Brand</div>
              <div className="text-sm text-gray-400 mt-1">mcisted.com/arm</div>
            </div>
          </Link>
        </li>
        {/* You can add more projects here */}
      </ul>
    </main>
  );
}
