import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button Component', () => {
  it('should render', () => {
    const { getByText } = render(<Button>Click Me</Button>);

    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when button is disabled and clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
