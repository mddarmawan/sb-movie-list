import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { useParams } from 'react-router-dom';
import MovieDetail from "./MovieDetail";
import { getMovie } from "../helper";

const MovieSingle = (): JSX.Element => {
  const { id }: {
    id: string
  } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovie(id, (res: AxiosResponse<ApiResponse<Movie>>) => {
      if (res.data.Response === "True") {
        setMovie(res.data);
      } else {
        alert(res.data.Error)
        window.location.href = "/";
      }

      setLoading(false);
    });
  });

  return (
    <div>
      {loading || !movie ? (
        <div className="flex items-center justify-center w-full h-full pt-20">
          <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <svg fill='none' className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
              <path clip-rule='evenodd'
                d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                fill='currentColor' fill-rule='evenodd' />
            </svg>
            <div>Loading...</div>
          </div>
        </div>
      ) : <MovieDetail movie={movie} /> }
    </div>
  );
}

export default MovieSingle;
