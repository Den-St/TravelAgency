import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ForgotPassword } from './ForgotPassword';

describe('ForgotPassword Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    );

    expect(getByTestId('ForgotPassword-testid')).toBeInTheDocument();
  });
});
