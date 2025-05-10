import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { AuthPageBanner } from './AuthPageBanner';

describe('Auth page banner Component', () => {
  it('should render', () => {
    const { getByTestId } = render(<AuthPageBanner />);

    expect(getByTestId('AuthPageBanner-testid')).toBeInTheDocument();
  });
});
