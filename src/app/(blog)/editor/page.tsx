"use client";

import { useEditorController } from "@/app/(blog)/editor/use-editor-controller";

export default function InputPage() {
  const { post, changeTitle, changeContent, onSubmit } = useEditorController();

  return (
    <div className="flex py-12 gap-x-3">
      <Header className="w-3/4 flex flex-col items-center space-y-6 border border-blue-300 p-6">
        <input
          onChange={(evt) => changeTitle(evt.target.value)}
          value={post.title}
          type="text"
          placeholder="titre du post"
          className="w-full p-3 mt-10 bg-white border border-gray-300 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          onChange={(evt) => changeContent(evt.target.value)}
          value={post.content}
          placeholder="contenu"
          className="w-full h-72 p-3 rounded-lg border bg-white border-gray-300 shadow-sm focus:ring-blue-400 focus:ring-2 focus:outline-none"
        />

        <button
          onClick={onSubmit}
          className="bg-blue-600 text-white px-4 py-3 w-100 rounded-lg hover:bg-blue-700"
        >
          Enregistrer
        </button>
      </Header>

      {/* Boutons de fichier à droite */}
      <aside className="w-1/4 flex flex-col justify-start space-y-4">
        <label
          htmlFor="imageUpload"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer text-center"
        >
          Ajouter une image
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="hidden"
        />

        <label
          htmlFor="videoUpload"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer text-center"
        >
          Ajouter une vidéo
        </label>
        <input
          type="file"
          id="videoUpload"
          accept="video/*"
          className="hidden"
        />

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
      </aside>
    </div>
  );
}
