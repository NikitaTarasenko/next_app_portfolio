import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

type HomeLayoutProps = {
    children: React.ReactNode;
    className?: string | undefined;
};

const HomeLayout = ({ children, className = '' }: HomeLayoutProps) => {
    const router = usePathname();
    return (
        <AnimatePresence mode="wait">
            <TransitionEffect keys={router}>
                <div
                    className={`w-full min-h-[calc(100vh-96px)] sm:min-h-[calc(100vh-0px)] h-full inline-block z-0 relative bg-light dark:bg-dark p-40    ${className}
                   `}
                >
                    {children}
                </div>
            </TransitionEffect>
        </AnimatePresence>
    );
};

export default HomeLayout;
