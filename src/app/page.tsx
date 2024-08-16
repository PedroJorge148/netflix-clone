import { Billboard } from "@/components/billboard";
import { MovieList } from "@/components/movie-list";
import { NavBar } from "@/components/navbar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Billboard />
      <div className="absolute -mt-60 pb-40 z-30">
        <MovieList title="Trending Now" />
      </div>
    </>
  );
}
