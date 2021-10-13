import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import MovieCard from '../components/MovieCard';

const mockData = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
};

test('renders correct search input', () => {
  render(
  <Router>
    <MovieCard movie={mockData as Movie} handlePopup={(url: string) => { return url }}/>
  </Router>);

  const titleElement = screen.getByTestId("title");
  const posterElement = screen.getByTestId("poster");
  const detailBtn = screen.getByTestId("detailBtn");

  expect(titleElement).toBeInTheDocument();
  expect(posterElement).toHaveAttribute('src', mockData.Poster);
  expect(detailBtn).toHaveTextContent('Movie Detail');
  expect(detailBtn).toHaveAttribute('href', `/movie/${mockData.imdbID}`)
});
