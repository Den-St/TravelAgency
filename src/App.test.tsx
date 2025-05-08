import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

import App from './App';

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1 + 1).toEqual(2);
  });

  it('renders the App component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
