import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-8">Mon Blog</h1>
        <Link href="/auth/login">
          <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded w-full text-left">
            Login
          </button>
        </Link>
        <Link href="/auth/sign-up">
          <button className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded w-full text-left">
            Signup
          </button>
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-xl">Bienvenue sur mon blog</h2>
      </main>
    </div>
  );
}
