"use server";

import { Movie } from "@/lib/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_KEY}`,
  },
};

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  const data = await response.json();
  return data.results;
}
