import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const Hire = () => {
    return (
        <div className="fixed left-2 bottom-1 flex items-center justify-center overflow-hidden z-40 scale-150 ">
            <div className="w-48 h-44 flex items-center justify-center relative ">
                <div className="w-48 h-44 flex items-center justify-center   animate-spin-slow ">
                    <CircularText className={'fill-dark '} />
                </div>
                <Link
                    href="https://t.me/NikMaill"
                    target="_blank"
                    className="w-63 h-63 bg-dark text-light rounded-full
                     flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     shadow-md border border-solid border-dark text-center text-sm hover:bg-light hover:text-dark transition-colors
                     ease-in-out"
                >
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default Hire;
