import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      data-testid="input"
      type={type}
      data-slot="input"
      className={cn(
        'flex rounded-[8px] border bg-transparent outline-none',
        'border-[1px] border-grey-500 p-4 text-[14px] text-blue-900 placeholder:text-grey-600 leading-[24px] w-full min-w-0',
        className
      )}
      {...props}
    />
  );
}

export { Input };
