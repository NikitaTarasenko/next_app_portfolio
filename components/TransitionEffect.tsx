'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

type TType = {
    children: React.ReactNode;
    keys: string;
};
const TransitionEffect = ({ children, keys }: TType) => {
    return (
        <div className="h-full w-full" key={keys}>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark"
                initial={{ x: '100%', width: '100%' }}
                animate={{ x: '0%', width: '0%' }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
            />
            {children}
        </div>
    );
};

export default TransitionEffect;
