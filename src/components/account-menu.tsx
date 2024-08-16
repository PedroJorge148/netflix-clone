'use client'

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AccountMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center gap-2 cursor-pointer relative" onClick={() => setOpen(!open)}>
      <div className="size-6 lg:size-10 overflow-hidden">
        <Image src="/avatar.png" alt="Profile" width={32} height={23} className="rounded-md" />
      </div>
      <ChevronDown className="size-6 text-white transition" />
      {open && (
        <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-zinc-800">
          <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex gap-3 items-center w-full">
              <Image src="/avatar.png" alt="Profile" width={32} height={32} className="w-8 rounded-md" />
              <p className="text-white text-sm group-hover/item:underline">
                Username
              </p>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div className="px-3 text-center text-white text-sm hover:underline">
              Sign out of Netflix
            </div>
          </div>
        </div>
      )}
    </div>
  )
}