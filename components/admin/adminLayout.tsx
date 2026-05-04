"use client";

import { signOut } from "firebase/auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { auth } from "../services/firebase.config";

export default function Layout({ children }: {children: ReactNode}) {
  const [open, setOpen] = useState(true);
  const path = usePathname();
  const router = useRouter();


  const nav = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Pages", href: "/content/pages" },
    { name: "Media", href: "/content/media" },
    { name: "Add Content", href: "/content/add-content" },
  ];


  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="flex min-h-screen bg-gray-100">
     
      <aside className={`bg-[#00407d] text-gray-300 transition-all duration-300 ${open ? "w-64" : "w-20"} flex flex-col`}>
 
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            {open ? "Skymark Digital Admin" : "SMD"}
          </h2>
        </div>


        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                path === item.href
                  ? "bg-[#006941] text-white"
                  : "hover:bg-blue-300 hover:text-black"
              }`}
            >
              <span className="text-lg">•</span>
              {open && item.name}
            </Link>
          ))}
        </nav>
      </aside>


      {/* Main */}
      <div className="flex-1">
        {/* <header className="flex justify-between items-center bg-white p-4 shadow">
          <button onClick={() => setOpen(!open)}>☰</button>
          <span className="text-red-500 cursor-pointer" onClick={handleLogout}>Logout</span>
        </header> */}
        <header className="flex justify-between items-center bg-[#00407d] border-b border-gray-200 px-6 py-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-400 hover:text-white text-xl"
          >
            ☰
          </button>


          <button
            onClick={handleLogout}
            className="text-sm bg-[#b0b0b5] hover:bg-red-300 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </header>


        {/* <main className="p-6">{children}</main> */}
        <main className="p-6 bg-[#f3f3f3] min-h-screen">{children}</main>
      </div>
    </div>
  );
}
