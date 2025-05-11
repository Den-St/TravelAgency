import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { SignInForm } from './ui/SignInForm';
import { MemoryRouter } from 'react-router-dom';

describe('SignInForm Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );

    expect(getByTestId('SignInForm-testid')).toBeInTheDocument();
  });
});
