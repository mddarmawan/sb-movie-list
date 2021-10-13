import React from "react";
import { Link } from "react-router-dom";
import { getMoviePoster } from "../helper";

interface MovieCardProps {
  movie: Movie;
  handlePopup: (url: string) => void;
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;

  return (
    <div className="w-full p-5 mb-10 max-w-sm rounded-lg overflow-hidden mx-auto">
      <div onClick={() => props.handlePopup(movie.Poster)} className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 movie-item text-white movie-card" style={{width: "100%", height: "100%"}}>
        <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black to-transparent"></div>
        <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
          <div className="poster__info align-self-end w-full">
            <div className="h-32"></div>
            <div className="space-y-6 detail_info" style={{marginTop: "100px"}}>
              <div className="flex flex-col space-y-2 inner">
                <h3 data-testid="title" className="text-2xl font-bold text-white" data-unsp-sanitized="clean">{movie.Title}</h3>
                <div className="mb-0 text-lg text-gray-400">{movie.Year}</div>
              </div>
            </div>
          </div>
        </div>
        <img data-testid="poster" alt="" className="absolute inset-0 transform w-full -translate-y-4" src={getMoviePoster(movie.Poster)} style={{ filter: "grayscale(0)" }} />
        <div className="poster__footer flex flex-row relative pb-10 pt-5 space-x-4 z-10">
          <Link
            data-testid="detailBtn"
            className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
            to={`/movie/${movie.imdbID}`}
          >
            <div className="text-sm text-white">Movie Detail</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
