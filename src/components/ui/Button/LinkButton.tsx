import { Link, type LinkProps } from 'react-router-dom';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import { buttonVariants } from './Button';

export function LinkButton({
  className,
  variant,
  size,
  to,
  ...props
}: LinkProps & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      to={to}
      data-slot="link-button"
      className={`${cn(buttonVariants({ variant, size, className }))} button`}
      {...props}
    />
  );
}
