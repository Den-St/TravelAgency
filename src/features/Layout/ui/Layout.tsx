import { useShowHeader } from '../hooks/showHeader';
import type { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const showHeader = useShowHeader();

  return (
    <div className="flex flex-col h-screen">
      {showHeader && (
        <header className="bg-gray-800 text-white p-4">Header Content</header>
      )}
      <main className="flex-1 bg-blue-300 overflow-auto">{children}</main>
    </div>
  );
};
