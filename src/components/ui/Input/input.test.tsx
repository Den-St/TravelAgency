import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Input } from './input';

describe('Input Component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Input data-testid="input-testid" />);

    expect(getByTestId('input-testid')).toBeInTheDocument();
  });

  it('should render', () => {
    const { getByTestId } = render(<Input data-testid="input-testid" />);

    expect(getByTestId('input-testid')).toBeInTheDocument();
  });
});
