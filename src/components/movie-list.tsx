import { MovieCard } from "./movie-card"

interface MovieListProps {
  title: string
}

export function MovieList({ title }: MovieListProps) {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-sm md:text-xl lg:text-2xl mb-4 font-semibold">
          {title}
        </p>
        <div className="grid grid-flow-col gap-2 pb-40">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />      
          <MovieCard />        
        </div>
      </div>
    </div>
  )
}