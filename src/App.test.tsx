import App from './App';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders learn react myLink', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
