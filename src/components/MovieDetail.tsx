import React from 'react';
import { contentFallback } from '../helper';
import BackButton from './BackButton';

const MovieDetail = (props: { movie: Movie }) => {
  const movie = props.movie;

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img data-testid="poster" alt="" className="rounded-3xl shadow-lg" src={movie.Poster} />
            <div style={{ textAlign: "center" }}>
              <BackButton />
            </div>
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 data-testid="title" className="text-3xl font-bold">{movie.Title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">{movie.imdbRating}</div>
            </div>

            <Partial title="Year" content={movie.Year} />
            <Partial title="Plot" content={movie.Plot} />
            <div>
              <div className="text-sm text-gray-400 capitalize">Box Office</div>
              <div className="text-lg font-bold text-gray-800">{movie.BoxOffice ?? '-'}</div>
            </div>
            <Partial title="Director" content={movie.Director} />
            <Partial title="Actors" content={movie.Actors} />
            <Partial title="Genre" content={movie.Genre} />
            <Partial title="Released" content={movie.Released} />
            <Partial title="Runtime" content={movie.Runtime} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Partial = (props: {
  title: string;
  content: string;
}) => {
  return (
    <div role={props.title}>
      <div className="text-sm text-gray-400 capitalize">{props.title}</div>
      <div className="text-lg text-gray-800">{contentFallback(props.content)}</div>
    </div>
  );
}

export default MovieDetail;
