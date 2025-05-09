import { cn } from '@/lib/utils';
import { Eye, EyeCrossed } from '@/shared/ui-kit/Icons';
import { cva, type VariantProps } from 'class-variance-authority';
import { useState } from 'react';

const inputVariants = cva(
  'border-[1px] p-4 text-[14px] leading-[24px] w-full min-w-0 flex rounded-[8px] border bg-transparent outline-none duration-200',
  {
    variants: {
      variant: {
        default:
          'border-grey-500 text-blue-900 placeholder:text-grey-600 focus:border-blue-500 hover:border-blue-500',
        error: 'border-red-400 text-blue-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type InputProps = {
  wrapperClassName?: string;
  isHidden?: boolean;
};

function Input({
  className,
  wrapperClassName,
  isHidden,
  variant,
  type,
  ...props
}: React.ComponentProps<'input'> &
  InputProps &
  VariantProps<typeof inputVariants>) {
  const [localType, setLocalType] = useState<typeof type>(type);
  const togglePasswordVisibility = () => {
    setLocalType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={cn('w-full relative', wrapperClassName)}>
      <input
        data-testid="input"
        type={localType}
        data-slot="input"
        className={cn(inputVariants({ variant, className }), 'input')}
        {...props}
      />
      {isHidden && (
        <>
          {localType === 'password' ? (
            <Eye
              data-testid="eye"
              className="icon cursor-pointer absolute right-[12px] top-[16px]"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <EyeCrossed
              data-testid="eye-crossed"
              className="icon cursor-pointer absolute right-[12px] top-[16px]"
              onClick={togglePasswordVisibility}
            />
          )}
        </>
      )}
    </div>
  );
}

export { Input };
