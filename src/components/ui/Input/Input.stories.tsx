import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  name: 'Default',
  args: {
    variant: 'default',
    wrapperClassName: '',
    hasVisibilityToggle: false,
    placeholder: 'Default',
  },
};

export const Error: Story = {
  name: 'In Error state',
  args: {
    variant: 'error',
    wrapperClassName: '',
    hasVisibilityToggle: false,
    placeholder: 'Error',
  },
};
