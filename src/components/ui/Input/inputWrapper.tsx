import { cn } from '@/lib/utils';
import type { PropsWithChildren } from 'react';

function InputWrapper({
  className,
  children,
}: React.ComponentProps<'div'> & PropsWithChildren) {
  return <div className={cn('flex flex-col gap-2', className)}>{children}</div>;
}

export { InputWrapper };
