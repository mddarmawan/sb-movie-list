import React from "react";
import Lightbox from 'react-image-lightbox';
import { AxiosResponse } from "axios";
import 'react-image-lightbox/style.css';
import { getMovies, getUniqueListBy, resizePopupImage } from "../helper";
import MovieCard from "./MovieCard";

interface MovieListStates {
  movies: Movie[];
  loading: boolean;
  search: string;
  query: string;
  page: number;
  prevY: number;
  lastPage: boolean;
  notFound: boolean;
  popupStatus: boolean;
  popupImage: null | string;
}

class MovieList extends React.Component<{}, MovieListStates> {
  private loadingRef: HTMLDivElement | null = null;
  private observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };
  private observer = new IntersectionObserver(
    this.handleObserver.bind(this),
    this.observerOptions
  );

  constructor(props: MovieListStates) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
      search: '',
      query: '',
      page: 1,
      prevY: 0,
      lastPage: false,
      notFound: false,
      popupStatus: false,
      popupImage: null,
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePopup = this.handlePopup.bind(this);
  }

  componentDidMount() {
    if (this.loadingRef) {
      this.observer.observe(this.loadingRef);
    }
  }

  handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event: React.FormEvent) {
    this.setState({ loading: true });
    this.setState({ movies: [] });
    this.setState({ page: 1 });
    this.setState({ search: this.state.query });
    this.setState({ prevY: 0 });

    getMovies(this.state.query, 1, (res: AxiosResponse<ApiResponse<Movie>>) => this.handleMovies(res));
    event.preventDefault();
  }

  handleMovies(res: AxiosResponse<ApiResponse<Movie>>) {
    if (res.data.Response === "True") {
      const movies = getUniqueListBy<Movie>(res.data.Search ?? [], "imdbID");

      this.setState({ movies: [...this.state.movies, ...movies] });
      this.setState({ notFound: false });
      this.setState({ lastPage: false });
    } else {
      if (res.data.Error === "Movie not found!" && this.state.page === 1) {
        this.setState({ notFound: true });
      }

      this.setState({ lastPage: true });
    }

    this.setState({ loading: false });
  }

  handleObserver(entities: IntersectionObserverEntry[]) {
    if (this.state.lastPage === false) {
      const y = entities[0].boundingClientRect.y;
      if (this.state.prevY > y) {
        const nextPage = this.state.page + 1;

        getMovies(this.state.query, nextPage, (res: AxiosResponse<ApiResponse<Movie>>) => this.handleMovies(res));
        this.setState({ page: nextPage });
      }
      this.setState({ prevY: y });
    }
  }

  handlePopup(url: string) {
    this.setState({ popupImage: resizePopupImage(url) });
    this.setState({ popupStatus: true });
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-100 p-10">
        <div className="pb-10">
          <form onSubmit={this.handleSubmit}>
            <div className="bg-white shadow p-4 flex">
              <input className="w-full rounded p-2" type="text" placeholder="Search Movie" value={this.state.query} onChange={this.handleQueryChange} />
              <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
                <p className="font-semibold text-xs">Search</p>
              </button>
            </div>
          </form>
        </div>

        {this.state.popupStatus && (
          <Lightbox
            enableZoom={false}
            mainSrc={this.state.popupImage ?? ''}
            onCloseRequest={() => this.setState({ popupStatus: false })}
          />
        )}

        {this.state.search !== '' &&
          this.state.notFound ? <div style={{ textAlign: "center" }}><span className="text-4xl">No movies found.</span></div> :
            <div>
              <div style={{ textAlign: "center" }}>
                <div className="flex flex-wrap">
                  {this.state.movies.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} handlePopup={this.handlePopup} />
                  ))}
                </div>
              </div>
            </div>
        }

        <div ref={loadingRef => (this.loadingRef = loadingRef)}></div>
      </div>
    );
  }
}

export default MovieList;
