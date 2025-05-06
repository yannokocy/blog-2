
export default function InputPage() {
    return(

        <div className="flex flex-col md:flex-row p-6 gap-6 pt-20 bg-green-100 min-h-screen">
            <div className="flex-1 space-y-4">
                <input type="text" placeholder="titre du post" className="border w-full p-3 border-gray-300 shadow-sm rounded-lg focus:outline-none focus-ring-2 focus:ring-blue-400"/>

                 <textarea placeholder="contenue" className="w-full h-64 p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-400 focus:ring-2 focus:outline-none"/>

                 <input type="text" placeholder="rediger par.." className="border border-gray-300 rounded-lg p-3 " />

    
                 <button className="bg-blue-600 text-white px-1 py-5  rounded-full  hover:bg-blue-700 ml-2"> publier </button>
            </div>

            <div className="flex flex-col justify-between w-full md:w-64">
                <div className="space-y-3">

                <div>
                     <label
                           htmlFor="imageUpload"
                          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition duration-200 inline-block text-center"
                     >
                        Ajouter une image

                      </label>
                    <input
                         type="file"
                         id="imageUpload"
                         accept="image/*"
                        
                     />
                 </div>

                 <div>
                     <label
                            htmlFor="videoUpload"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition duration-200 inline-block text-center"
                     >
                         Ajouter une video

                     </label>
                     <input
                         type="file"
                         id="videoUpload"
                         accept="video/*"
                         
                     />
                </div>

                <div>
                     <label
                          htmlFor="docUpload"
                             className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer transition duration-200 inline-block text-center"
                      >
                         lier un doc

                     </label>
                     <input
                        type="file"
                        id="docUpload"
                        accept="doc/*"
                        
                     />
                </div>

                </div>

            </div>
        </div>
    );
}