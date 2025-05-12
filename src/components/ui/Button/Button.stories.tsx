import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Defaul: Story = {
  name: 'Default',
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export const DefaultLg: Story = {
  name: 'Default LG size',
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Button',
  },
};

export const DefaultFull: Story = {
  name: 'Default Full size',
  args: {
    variant: 'default',
    size: 'full',
    children: 'Button',
  },
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Button',
  },
};

export const SecondaryLg: Story = {
  name: 'Secondary LG size',
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Button',
  },
};

export const SecondaryFull: Story = {
  name: 'Secondary Full size',
  args: {
    variant: 'secondary',
    size: 'full',
    children: 'Button',
  },
};
