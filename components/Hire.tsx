import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const Hire = () => {
    return (
        <div className="fixed left-2 bottom-1 flex items-center justify-center overflow-hidden z-20 scale-150 ">
            <div className="w-48 h-44 flex items-center justify-center relative ">
                <div className="w-48 h-44 flex items-center justify-center animate-spin-slow   ">
                    <CircularText className={'fill-dark  dark:fill-light '} />
                </div>
                <Link
                    href="https://t.me/NikMaill"
                    target="_blank"
                    className="w-63 h-63 bg-dark text-light rounded-full
                     flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     shadow-md border border-solid border-dark text-center text-sm hover:bg-light hover:text-dark transition-colors
                     ease-in-out  hover:dark:bg-light hover:dark:text-dark   dark:bg-light dark:text-dark
                     dark:shadow-lg   dark:hover:shadow-{#000}-500/50  dark:hover:dark:bg-dark
                       dark:hover:dark:text-light dark:hover:border-light"
                >
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default Hire;
