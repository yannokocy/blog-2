"use client";

import Link from "next/link";
import Button from "@/component/Bouton";
import { useAuthApi } from "@/api/auth/use-auth-api";

export default function SignupPage() {
  const { onRegister } = useAuthApi();

  const handler = async (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const payload: any = {};

    for (const [key, value] of formData) {
      payload[key] = value;
    }

    await onRegister(payload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-blue-400 px-3">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Inscription</h2>

        <form className="space-y-4" onSubmit={handler}>
          <div>
            <label htmlFor="nom" className="block text-sm font-medium">
              Nom complet
            </label>
            <input
              type="text"
              id="nom"
              name="fullName"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Lien qui remplace le bouton submit */}
          <Button
            title="s'inscrire"
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          />

          <p className="mt-4 text-center text-sm">
            Déjà inscrit ?{" "}
            <Link
              href="/src/app/(auth)/auth/login"
              className="text-green-500 hover:underline"
            >
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
