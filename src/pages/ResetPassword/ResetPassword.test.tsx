import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ResetPassword } from './ResetPassword';

describe('ResetPassword Component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ResetPassword />
      </MemoryRouter>
    );

    expect(getByTestId('ResetPassword-testid')).toBeInTheDocument();
  });
});
