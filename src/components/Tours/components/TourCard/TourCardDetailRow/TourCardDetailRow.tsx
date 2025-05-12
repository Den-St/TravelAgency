import React, { type ReactNode } from 'react';

type TourCardDetailRowProps = {
  icon: React.ComponentType<{
    size: number;
    className?: string;
  }>;
  children: ReactNode;
  color?: string;
  className?: string;
};

export const TourCardDetailRow: React.FC<TourCardDetailRowProps> = ({
  icon: Icon,
  children,
  color = 'text-blue-900',
  className = '',
}) => (
  <div className="flex flex-row items-center gap-2 w-full">
    <Icon
      size={20}
      className={`w-[16px] shrink-0 self-start pt-1 ${color} ${className}`}
    />
    <p className={`block-title ${color}`}>{children}</p>
  </div>
);
