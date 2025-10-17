// export const GET = async () => {
//   return new Response('Hello World');
// };

import { NextRequest } from 'next/server';
import { movies } from './db';

export const POST = async (request: Request) => {
  const movie = await request.json();
  movies.push(movie);
  return Response.json(movie, { status: 201 });
};

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  if (query) {
    const filteredMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredMovies.length > 0) {
      return Response.json(filteredMovies);
    }
    return new Response('No movies found', { status: 404 });
  }
};
