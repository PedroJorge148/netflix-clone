'use client'

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  
  return (
    <div className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer relative" onClick={() => setOpen(!open)}>
      <p className="text-white font-medium text-sm">Browse</p>
      <ChevronDown className="text-white size-4" />
      {open && (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-neutral-800">
          <div className="flex flex-col gap-4">
            <div className="px-3 text-center text-white hover:underline">
              <Link href="google">
                Home
              </Link>
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Series
            </div>
            <div className="px-3 text-center text-white hover:underline">
              New & Popular
            </div>
            <div className="px-3 text-center text-white hover:underline">
              My List
            </div>
            <div className="px-3 text-center text-white hover:underline">
              Browse by languages
            </div>
          </div>
        </div>
      )}
    </div>
  )
}