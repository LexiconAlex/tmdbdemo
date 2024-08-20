import type { Movie } from "@/lib/types";

export function MovieCard({ movie }: { movie: Movie }) {
  return <div>{movie.title}</div>;
}
