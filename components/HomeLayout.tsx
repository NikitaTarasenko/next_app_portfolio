import React from 'react';

type HomeLayoutProps = {
    children: React.ReactNode;
    className?: string | undefined;
};

const HomeLayout = ({ children, className = '' }: HomeLayoutProps) => {
    return (
        <div
            className={`w-full  inline-block z-0 relative bg-light dark:bg-dark p-40  ${className}`}
        >
            {children}
        </div>
    );
};

export default HomeLayout;
