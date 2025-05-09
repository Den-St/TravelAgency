import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { Input } from './input';

describe('Input Component', () => {
  it('should render', () => {
    const { getByTestId } = render(<Input data-testid="input-testid" />);

    expect(getByTestId('input-testid')).toBeInTheDocument();
  });

  it('input type should change after eye button clicked', () => {
    const { getByTestId } = render(
      <Input data-testid="input-testid2" type="password" isHidden />
    );

    const eyeButton = getByTestId('eye');

    expect((getByTestId('input-testid2') as HTMLInputElement).type).toBe(
      'password'
    );
    fireEvent.click(eyeButton);
    expect((getByTestId('input-testid2') as HTMLInputElement).type).toBe(
      'text'
    );
    const eyeCrossedButton = getByTestId('eye-crossed');
    fireEvent.click(eyeCrossedButton);
    expect((getByTestId('input-testid2') as HTMLInputElement).type).toBe(
      'password'
    );
  });
});
