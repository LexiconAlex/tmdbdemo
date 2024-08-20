import type { Movie } from "@/lib/types";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="w-1/5 p-4">
      <Card>
        <CardHeader>
          <CardTitle>{movie.title.slice(0, 10)}</CardTitle>
          <CardDescription>{movie.release_date}</CardDescription>
        </CardHeader>
        <Image
          src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
          alt={movie.title}
          width={300}
          height={300}
          className="rounded-b-md"
        />
      </Card>
    </div>
  );
}
