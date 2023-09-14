'use client';
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

type HomeLayoutProps = {
    children: React.ReactNode;
    className?: string | undefined;
};

const Layout = ({ children, className = '' }: HomeLayoutProps) => {
    const router = usePathname();
    return (
        <AnimatePresence mode="wait">
            <TransitionEffect keys={router}>
                <div
                    className={`pt-12 w-full   inline-block z-0 relative bg-light dark:bg-dark p-32 ${className}`}
                >
                    {children}
                </div>
            </TransitionEffect>
        </AnimatePresence>
    );
};

export default Layout;
