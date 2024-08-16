'use client'

import { MovieCard } from "@/components/movie-card";
import { useState } from "react";


export function Slider() {
  const [step, setStep] = useState(0)

  const slides = 12

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-4xl">Title</h3>
        
      </div>
      <div className="flex justify-center overflow-hidden">
        <button className="rounded-2xl flex-shrink-0 bg-black/25 z-10 w-12 flex items-center justify-center text-white leading-[0] transition">
          <div className="text">&#8249;</div>
        </button>
        <div className="flex flex-grow translate-x-0 transition">
          <img src="https://via.placeholder.com/210/00FF00?text=1" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/220/00FF00?text=2" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/230/00FF00?text=3" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/240/00FF00?text=4" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/250/00FF00?text=5" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/260/00FF00?text=6" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/270/00FF00?text=7" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/280/00FF00?text=8" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/250/00FF00?text=9" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/260/00FF00?text=10" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/270/00FF00?text=11" className="aspect-video mx-2" />
          <img src="https://via.placeholder.com/280/00FF00?text=12" className="aspect-video mx-2" />
        </div>
        <button className="rounded-2xl flex-shrink-0 bg-black/25 z-10 w-12 flex items-center justify-center text-white leading-[0] transition">
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
}
