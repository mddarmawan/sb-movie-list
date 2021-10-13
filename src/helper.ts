import axios from "axios";

export const getMovie = (id: string, callback: Function) => {
  axios
    .get<ApiResponse<Movie>>(
      `${getEndpoint()}&i=${id}`
    )
    .then((res) => callback(res));
}

export const getMovies = (query: string, page: number, callback: Function) => {
  axios
    .get<ApiResponse<Movie>>(
      `${getEndpoint()}&s=${query}&page=${page}`
    )
    .then((res) => callback(res));
}

export const getUniqueListBy = <T extends unknown>(arr: T[], key: keyof T) => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export const resizePopupImage = (url: string) => {
  return url.replace('SX300', 'SX600');
}

export const getEndpoint = () => {
  return "https://www.omdbapi.com/?apikey=faf7e5bb";
}

export const getMoviePoster = (url: string) => {
  return url === "N/A" ? "https://www.kindpng.com/picc/m/35-357033_movies-png-vector-vector-clipart-psd-movie-icon.png" : url;
}

export const contentFallback = (content: string) => {
  return content === "N/A" ? "-" : content;
}
