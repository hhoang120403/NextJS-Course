import { movies } from '../db';

export const GET = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id);

  if (movie) {
    return new Response(JSON.stringify(movie), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response('Movie not found', { status: 404 });
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id);

  if (!movie) {
    return new Response(JSON.stringify({ error: 'Movie not found' }), {
      status: 404,
    });
  }

  try {
    const updatedMovie = await req.json();

    // Find the index of the movie to update
    const index = movies.findIndex((m) => m.id === +id);

    if (index === -1) {
      return new Response(JSON.stringify({ error: 'Movie not found' }), {
        status: 404,
      });
    }

    // Update the movie in place
    movies[index] = { ...movies[index], ...updatedMovie };

    return new Response(JSON.stringify(movies[index]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to parse JSON' }), {
      status: 400,
    });
  }
};

export const DELETE = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = await params;

  // Find the index of the movie to delete
  const index = movies.findIndex((m) => m.id === +id);

  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Movie not found' }), {
      status: 404,
    });
  }

  // Remove the movie from the array
  movies.splice(index, 1);

  return new Response(
    JSON.stringify({ message: 'Movie deleted successfully' }),
    { status: 200 }
  );
};
