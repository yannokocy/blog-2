import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium">Nom complet</label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="conf-password" className="block text-sm font-medium">Confirmer le mot de passe</label>
            <input
              type="password"
              id="conf-password"
              name="conf-password"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Lien qui remplace le bouton submit */}
          <Link href="/blog" passHref>
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              S’inscrire
            </button>
          </Link>

          <p className="mt-4 text-center text-sm">
            Déjà inscrit ?{" "}
            <Link href="/auth/login" className="text-green-500 hover:underline">
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}





