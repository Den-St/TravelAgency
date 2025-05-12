import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ResetPasswordForm } from './ui/ResetPassword';
import { MemoryRouter } from 'react-router-dom';

describe('ResetPasswordForm Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ResetPasswordForm />
      </MemoryRouter>
    );

    expect(getByTestId('ResetPasswordForm-testid')).toBeInTheDocument();
  });
});
