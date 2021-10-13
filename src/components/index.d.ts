interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Runtime: string;
  Poster: string;
  imdbRating: string;
  Type: string;
  Plot: string;
  Director: string;
  BoxOffice: string;
  Actors: string;
  Genre: string;
  Released: string;
}

type ApiResponse<T> = T & {
  Response: string;
  Search?: T[];
  Error?: string;
}
