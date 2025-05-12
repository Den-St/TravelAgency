import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from './ui/Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(getByTestId('Header-testid')).toBeInTheDocument();
  });
});
