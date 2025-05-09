import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'button bg-blue-500 hover:bg-blue-700 text-white border-2 border-blue-500 hover:border-blue-700',
        secondary:
          'bg-white text-blue-500 border-2 border-blue-500 hover:text-blue-700 hover:border-blue-700',
      },
      size: {
        default: 'px-3 py-1.5',
        lg: 'px-8.5 py-[2px]',
        full: 'px-3 py-1.5 w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  const Comp = 'button';

  return (
    <Comp
      data-slot="button"
      className={`${cn(buttonVariants({ variant, size, className }))} button`}
      {...props}
    />
  );
}

export { Button, buttonVariants };
