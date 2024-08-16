'use client'

import Image from "next/image";
import { NavbarItem } from "./navbar-item";
import { MobileMenu } from "./mobile-nav";
import { Bell, Search } from "lucide-react";
import { AccountMenu } from "./account-menu";

export function NavBar() {
  return (
    <nav className="w-full fixed z-10">
      <div className="px-4 md:px-12 py-4 transition duration-500 flex items-center bg-navbar-gradient">
        <Image src="/logo.png" alt="Logo" width={120} height={120} />
        <div className="ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Início" />
          <NavbarItem label="Séries" />
          <NavbarItem label="Filmes" />
          <NavbarItem label="Bombando" />
          <NavbarItem label="Minha lista" />
          <NavbarItem label="Navegar por idiomas" />
        </div>
        <MobileMenu />
        <div className="flex ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <Search className="size-4" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <Bell className="size-4" />
          </div>
          <AccountMenu />
        </div>
      </div>
    </nav>
  )
}