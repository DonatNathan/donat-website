import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Deadline/i);
  expect(linkElement).toBeInTheDocument();
});
