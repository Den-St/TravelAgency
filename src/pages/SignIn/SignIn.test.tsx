import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignIn } from './SignIn';

describe('SignIn Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignIn data-testid="SignIn-testid" />
      </MemoryRouter>
    );

    expect(getByTestId('SignIn-testid')).toBeInTheDocument();
  });
});
