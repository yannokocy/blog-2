
'use client';

import React from 'react';

export default function PostAffiche() {
  return (
    <div className="flex py-12 gap-x-3">
      <main className="flex-1 p-8 flex gap-x-8 ">
        {/* Contenu principal à gauche */}
        <div className="flex-1 ">
          <div className="bg-white h-150 w-250 shadow-md p-6 ml-20"></div>

          <button className="bg-blue-600  text-white px-4 py-3 w-50 ml-[450px] mt-10 rounded-lg hover:bg-blue-700">
            Publier
          </button>
        </div>

        {/* Colonne droite : les boutons */}
        <div className="w-1/4 flex flex-col items-end space-y-4 mr-[80px]">
          <button className="w-60 bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700">
            Ajouter un post
          </button>
          <button className="w-60 bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700">
            Modifier le post
          </button>
        </div>
      </main>
    </div>
  );
}
