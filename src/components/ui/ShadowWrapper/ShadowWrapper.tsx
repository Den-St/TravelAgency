import type { FC, ReactNode } from 'react';

interface ShadowWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ShadowWrapper: FC<ShadowWrapperProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      data-testid="shadow-wrapper"
      className={`p-6 w-full bg-white shadow-[0px_2px_10px_6px_rgba(2,126,172,0.2)] rounded-[12px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
