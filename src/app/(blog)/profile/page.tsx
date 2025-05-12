'use client';

import React from 'react';

export default function Profile() {
  return (
    <div className="flex min-h-screen w-full">
      <main className="w-full relative">
        {/* Bandeau bleu pleine largeur */}
        <div className="w-470 h-[280px] -ml-35 bg-blue-300 relative">
          <img
            src="image/Image 17.jpg"
            alt="profile"
            className="h-70 w-500"
            />
        </div>

        {/* Image de profil centrée sur le bandeau */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-10">
          <img
            src="image/Image 9.jpg"
            alt="Photo de profil de l'utilisateur"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-8 border-white object-cover bg-white transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Texte de bienvenue */}
        <div className="mt-32 p-4 text-center">
          <h1 className="text-xl font-semibold">
            Bienvenue sur ton profil
          </h1>
        </div>
      </main>
    </div>
  );
}