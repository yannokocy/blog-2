
 import Link from "next/link";

export default function InputPage() {
  return (
    <div className="flex min-h-screen bg-green-100 gap-6">
      {/* Barre latérale gauche */}
        <div className="w-40 p-4 bg-gray-800 flex flex-col ">
            <div className="space-y-10 pt-20">
                 <Link href="/pro">
                <button className="px-10 py-2 bg-white border border-blue-300 hover:bg-blue-100 rounded-2xl shadow-lg">
                    profile
                </button>
                </Link>

                <Link href="">
                <button className="px-9 py-2 bg-white border border-blue-300 hover:bg-blue-100 rounded-2xl shadow-lg">
                    settings
                </button>
                </Link>
            </div>

            <div className="mt-200">
                <img src="image/Image 2.jpg" alt="yanno" className="w-16 h-16 rounded-full border border-gray-200"/>
            </div>
        </div>

      {/* Zone centrale avec les inputs */}
      <main className="flex-1 flex flex-col items-center space-y-6">
        <input
          type="text"
          placeholder="titre du post"
          className="w-300 p-3 mt-10 bg-white border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="contenu"
          className="w-300 h-200 p-3 rounded-lg border bg-white border-gray-300 shadow-sm focus:ring-blue-400 focus:ring-2 focus:outline-none"
        />

        <button className="bg-blue-600 text-white px-4 py-3 w-100 rounded-lg hover:bg-blue-700">
          publier
        </button>
      </main>

      {/* Boutons de fichier à droite */}
      <div className="w-64 flex flex-col justify-start space-y-4">
        <label
          htmlFor="imageUpload"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer text-center"
        >
          Ajouter une image
        </label>
        <input type="file" id="imageUpload" accept="image/*" className="hidden" />

        <label
          htmlFor="videoUpload"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer text-center"
        >
          Ajouter une vidéo
        </label>
        <input type="file" id="videoUpload" accept="video/*" className="hidden" />

        <label
          htmlFor="docUpload"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer text-center"
        >
          Lier un doc
        </label>
        <input
          type="file"
          id="docUpload"
          accept=".pdf,.doc,.docx"
          className="hidden"
        />
      </div>
    </div>
  );
}