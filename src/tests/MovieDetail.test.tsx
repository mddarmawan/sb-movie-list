import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import MovieDetail from '../components/MovieDetail';

const mockData = {"Title":"Batman v Superman: Dawn of Justice","Year":"2016","Rated":"PG-13","Released":"25 Mar 2016","Runtime":"152 min","Genre":"Action, Adventure, Sci-Fi","Director":"Zack Snyder","Writer":"Chris Terrio, David S. Goyer, Bob Kane","Actors":"Ben Affleck, Henry Cavill, Amy Adams","Plot":"Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.","Language":"English","Country":"United States","Awards":"14 wins & 33 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"},{"Source":"Rotten Tomatoes","Value":"29%"},{"Source":"Metacritic","Value":"44/100"}],"Metascore":"44","imdbRating":"6.4","imdbVotes":"663,872","imdbID":"tt2975590","Type":"movie","DVD":"19 Jul 2016","BoxOffice":"$330,360,194","Production":"N/A","Website":"N/A","Response":"True"};

test('renders correct search input', () => {
  render(
  <Router>
    <MovieDetail movie={mockData as Movie} />
  </Router>);

  const titleElement = screen.getByTestId("title");
  const posterElement = screen.getByTestId("poster");
  const backBtn = screen.getByTestId("backBtn");
  const elements = [{
    object: screen.getByRole("Year"),
    value: "2016"
  }, {
    object: screen.getByRole("Director"),
    value: "Zack Snyder"
  }, {
    object: screen.getByRole("Actors"),
    value: "Ben Affleck, Henry Cavill, Amy Adams"
  }, {
    object: screen.getByRole("Genre"),
    value: "Action, Adventure, Sci-Fi"
  }, {
    object: screen.getByRole("Released"),
    value: "25 Mar 2016"
  }, {
    object: screen.getByRole("Runtime"),
    value: "152 min"
  }];

  expect(titleElement).toBeInTheDocument();
  expect(posterElement).toHaveAttribute('src', mockData.Poster);
  expect(backBtn).toHaveTextContent("Back");

  elements.forEach((element) => {
    expect(element.object).toBeInTheDocument();
    expect(element.object).toHaveTextContent(element.value);
  });
});
