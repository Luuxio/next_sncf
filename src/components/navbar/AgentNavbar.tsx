"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function AgentNavbar() {
    return (
        <nav className="p-4 flex items-center justify-between shadow-md">
            {/* Logo à gauche */}
            <div className="ml-4 flex items-center shrink-0">
                <Image
                    src="/local/logo.png"
                    alt="Logo"
                    width={80}
                    height={40}
                    className="h-10 w-20 mr-3"
                />
                <span className="text-white font-bold text-xl select-none">
                    AgentBoard
                </span>
            </div>

            {/* Liens stylisés */}
            <ul className="flex space-x-6 ml-12">
                <li>
                    <Link href="/agent">
                        <div className="bg-linear-to-r from-red-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Accueil
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/agent/map">
                        <div className="bg-linear-to-r from-red-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Map
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/agent/profil">
                        <div className="bg-linear-to-r from-red-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Profil
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/agent/support">
                        <div className="bg-linear-to-r from-red-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:brightness-110 transition">
                            Support
                        </div>
                    </Link>
                </li>
            </ul>

            {/* Déconnexion */}
            <button
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-xl shadow-md transition mr-4"
            >
                Déconnexion
            </button>
        </nav>
    );
}
