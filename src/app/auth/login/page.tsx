import Link from "next/link";

export default function LoginPage() {
    return (
        <>
        <div className="min-h-screen flex items-center justify-content-center bg-blue-300 px-3 ">
        <div className="bg-yellow-500 p-8 rounded-2xl shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold text-center md-6">inscription</h2>

            <form className="space-y-4">
              
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium ">email</label>
                    <input type="text" id="email" name="email" required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label htmlFor="nom" className="block text-sm font-medium">password</label>
                    <input type="password" id="password" name="password" required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white rounded-md ">
                <Link href="/blog">connexion</Link>
                </button>
                <p className="mt-4 text-center text-sm"> pas encore inscrit ? <Link href="/auth/sign-up" className="text-red-700 hover:underline">inscription</Link></p>
            </form>

        </div>

      </div>
      </>
    )
};
