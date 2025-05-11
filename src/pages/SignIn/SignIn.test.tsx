import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignIn } from './SignIn';

describe('RegistrationForm Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignIn />
      </MemoryRouter>
    );

    expect(getByTestId('SignIn-testid')).toBeInTheDocument();
  });
});
