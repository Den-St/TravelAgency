import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { ShadowWrapper } from './ShadowWrapper';

describe('ShadowWrapper Component', () => {
  it('should render', () => {
    const { getByTestId } = render(<ShadowWrapper>Click Me</ShadowWrapper>);

    expect(getByTestId('shadow-wrapper')).toBeInTheDocument();
  });
});
