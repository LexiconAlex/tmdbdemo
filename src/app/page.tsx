import { MovieCard } from "@/components/MovieCard";
import { getMovies } from "@/lib/tmdb";
import { Movie } from "@/lib/types";

export default async function Home({
  searchParams,
}: {
  searchParams: { p: string };
}) {
  const page = String(searchParams.p || 1);

  const movies = await getMovies(page);
  console.log(page);
  return (
    <div className="flex flex-wrap">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
