import React from 'react';

type HomeLayoutProps = {
    children: React.ReactNode;
    className?: string | undefined;
};

const HomeLayout = ({ children, className = '' }: HomeLayoutProps) => {
    return (
        <div
            className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
        >
            {children}
        </div>
    );
};

export default HomeLayout;
