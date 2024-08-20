"use server";

import { Movie } from "@/lib/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_KEY}`,
  },
};

export async function getMovies(page: string): Promise<Movie[]> {
  console.log(page);
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + page,
    options
  );
  const data = await response.json();
  console.log(data);
  return data.results;
}
