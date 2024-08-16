import { Info, Play } from "lucide-react";

export function Billboard() {
  return (
    <div className="relative aspect-video">
      <video
        autoPlay
        muted
        loop
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"
        className="aspect-video w-full object-cover"
      />
      <div className="absolute inset-y-0 left-0 right-1/4 bg-hero-gradient" />
      <div className="absolute inset-x-0 bottom-0 top-3/4 bg-gradient-to-t from-zinc-900" />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-4/5 lg:text-6xl font-extrabold drop-shadow-xl">
          Big Buck Bunny
        </p>
        <p className="text-white text-xs md:text-lg mt-3 w-[75%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-3">
          <button className="gap-2 bg-white text-black rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-opacity-50 transition">
            <Play className="fill-black" />
            Assistir
          </button>
          <button className="gap-2 bg-white/30 text-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-opacity-50 transition">
            <Info />
            Mais informações
          </button>
        </div>
      </div>
    </div>
  )
}