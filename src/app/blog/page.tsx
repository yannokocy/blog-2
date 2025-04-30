import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar horizontale */}
      <aside className="w-full h-20 bg-white text-gray-950 px-6 flex items-center justify-between">
        {/* Titre */}
        <h1 className="text-2xl font-bold">Mon Blog</h1>

        {/* Onglets de navigation */}
        <nav className="flex gap-10">
          <Link href="/a-propos" className="hover:text-blue-400 font-bold">
            À propos
          </Link>
          <Link href="/contact" className="hover:text-blue-400 font-bold">
            Contact
          </Link>
          <Link href="/formations" className="hover:text-blue-400 font-bold">
            Formations
          </Link>
          <Link href="/en-ligne" className="hover:text-blue-400 font-bold">
            En ligne
          </Link>
        </nav>


        
        {/* Authentification */}
        <div className="flex gap-4">

        <div>
            <input
              type="search"
              name="search"
              id='search'
              placeholder='recherche . . .'
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link
            href="/auth/login"
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white"
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded text-white"
          >
            Signup
          </Link>
        </div>
      </aside>

      {/* Contenu principal */}
      <main className="h-full bg-gradient-to-br from-blue-500 flex flex-col items-center justify-end pb-2">


  <Link href="/post">
    <button
      type="button"
      className="w-40 bg-blue-500 hover:bg-blue-600 text-white py-2  rounded-md"
    >
      Poster
    </button>
  </Link>
</main>
    </div>
  );
}