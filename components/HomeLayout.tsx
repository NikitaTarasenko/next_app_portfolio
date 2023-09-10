import React from 'react';

type HomeLayoutProps = {
    children: React.ReactNode;
    className?: string | undefined;
};

const HomeLayout = ({ children, className = '' }: HomeLayoutProps) => {
    return (
        <div
            className={`w-full h-[calc(100vh-122px)] inline-block z-0 relative bg-light p-32 ${className}`}
        >
            {children}
        </div>
    );
};

export default HomeLayout;
