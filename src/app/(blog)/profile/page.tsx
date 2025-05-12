'use client';

import React from 'react';

export default function Profile() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <form className="bg-gray-100 p-4 space-y-4 w-1/4">
                <p className="font-bold text-lg">Name :</p>
                <p>Email :</p>
                <p>Post number :</p>
            </form>

            {/* Main content */}
            <main className="w-full relative">
                {/* Top banner */}
                <div className="h-70 bg-blue-300 relative" />

                {/* Profile image (cercle) au-dessus du cadre bleu */}
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-10">
                    <img
                        src="image/Image 9.jpg"
                        alt="profile"
                        className="w-60 h-60 rounded-full border-8 border-white object-cover bg-white"
                    />
                </div>

                {/* Welcome text */}
                <div className="mt-32 p-4 text-center">
                    <h1 className="text-xl font-semibold">
                        Bienvenue sur ton profil
                    </h1>
                </div>
            </main>
        </div>
    );
}