'use client';
import React from 'react';
import { motion } from 'framer-motion';

type AnimatedtextProps = {
    text: string;
    className?: string | undefined;
    delay?: number;
};

const Animatedtext = ({ text, className = '', delay }: AnimatedtextProps) => {
    const quote = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: delay ? delay : 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const singleWOrd = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };
    return (
        <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden  ">
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}  dark:text-light`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text.split(' ').map((word, index) => (
                    <motion.span
                        key={word + '-' + index}
                        className="inline-block"
                        variants={singleWOrd}
                    >
                        {word}
                        {'\u00A0'}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};

export default Animatedtext;
