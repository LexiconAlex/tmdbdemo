import { MovieCard } from "@/components/MovieCard";
import { getMovies } from "@/lib/tmdb";
import { Movie } from "@/lib/types";

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
