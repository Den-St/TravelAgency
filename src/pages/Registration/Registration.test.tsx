import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Registration } from './Registration';

describe('RegistrationForm Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>
    );

    expect(getByTestId('Registration-testid')).toBeInTheDocument();
  });
});
