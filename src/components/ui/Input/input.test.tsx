import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

import { Input } from './input';

describe('A truthy statement', () => {
  it('renders the Input component', () => {
    render(
      <MemoryRouter>
        <Input />
      </MemoryRouter>
    );

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
