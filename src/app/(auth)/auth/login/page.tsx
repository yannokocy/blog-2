
import Link from "next/link";
import Button from "@/component/Bouton";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 px-3">
      <div className="bg-green-200 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>

        <form className="space-y-4">

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Lien qui remplace le bouton submit */}
          <Link href="/blog" passHref>
            <Button
            title="connexion"
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            />
            
          </Link>

          <p className="mt-4 text-center text-sm">
            pas de compte ?{" "}
            <Link href="/src/app/(auth)/auth/sign-up" className="text-red-500 hover:underline">
              inscription
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}





