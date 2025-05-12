import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { RegistrationForm } from './ui/RegistrationForm';
import { MemoryRouter } from 'react-router-dom';

describe('RegistrationForm Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <RegistrationForm />
      </MemoryRouter>
    );

    expect(getByTestId('RegistrationForm-testid')).toBeInTheDocument();
  });
});
