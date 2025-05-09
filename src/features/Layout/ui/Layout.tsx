import type { LayoutProps } from "../types/LayoutProps"
import { useShowHeader } from "../hooks/showHeader";

export const Layout:React.FC<LayoutProps> = ({children}) => {
   const showHeader = useShowHeader();

    return (
        <div className="flex flex-col h-screen">
            {showHeader && <header className="bg-gray-800 text-white p-4">
            </header>}
            <main className="bg-blue-300">
                {children}
            </main>
        </div>
    )
}