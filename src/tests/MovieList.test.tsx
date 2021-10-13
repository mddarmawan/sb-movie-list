import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from '../components/MovieList';

// eslint-disable-next-line jest/no-mocks-import
import '../__mocks__/intersectionObserverMock';

test('renders correct search input', () => {
  render(<MovieList />);
  const searchElement = screen.getByPlaceholderText("Search Movie")
  expect(searchElement).toBeInTheDocument();
  expect(searchElement).toHaveClass("w-full rounded p-2");
  expect(searchElement).toHaveTextContent("");
});
