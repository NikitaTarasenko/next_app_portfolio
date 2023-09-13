import React from 'react';

type HomeLayoutProps = {
    children: React.ReactNode;
    className?: string | undefined;
};

const Layout = ({ children, className = '' }: HomeLayoutProps) => {
    return (
        <div
            className={`pt-12 w-full   inline-block z-0 relative bg-light dark:bg-dark p-32 ${className}`}
        >
            {children}
        </div>
    );
};

export default Layout;
