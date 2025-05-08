import Link from "next/link";
import Button from "@/component/Bouton";

export function WebsiteHeader(){

    return<header className="w-full h-20 bg-gray-300 py-5 text-gray-950 px-6 flex items-center justify-between">
        {/* Titre */}
        <h1 className="text-2xl font-bold text-blue-400">Mon Blog</h1>

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
                    className="w-full mt-4 px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <Link
                href="/auth/login">
                <Button

                    title="login"
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 pt-2 py-3 px-4 mt-3 rounded text-white" onClick={undefined}/>

            </Link>
            <Link
                href="/auth/sign-up">
                <Button

                    title="sign up"
                    type="button"
                    className="bg-green-500 hover:bg-green-600 pt-2 py-3 px-4 mt-3 rounded text-white" onClick={undefined}/>
            </Link>
        </div>
    </header>
}