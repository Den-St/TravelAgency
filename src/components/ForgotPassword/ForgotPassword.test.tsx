import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ForgotPasswordForm } from './ui/ForgotPasswordForm';
import { ForgotPasswordLinkSent } from './ui/ForgotPasswordLinkSent';
import { MemoryRouter } from 'react-router-dom';

describe('ForgotPasswordForm Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ForgotPasswordForm />
      </MemoryRouter>
    );

    expect(getByTestId('ForgotPasswordForm-testid')).toBeInTheDocument();
  });
});
describe('ForgotPasswordLinkSent Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ForgotPasswordLinkSent />
      </MemoryRouter>
    );

    expect(
      getByTestId('forgotPasswordFormEmailSentTestId-testid')
    ).toBeInTheDocument();
  });
});
