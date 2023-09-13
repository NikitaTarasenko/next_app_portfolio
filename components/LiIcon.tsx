'use client';
import React, { RefObject, forwardRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const LiIcon = forwardRef(function LiIcon(props, ref) {
    const { scrollYProgress } = useScroll({
        target: ref as RefObject<HTMLElement> | undefined,
        offset: ['center end', 'center center'],
    });
    console.log(ref);
    const usePref = window.localStorage.getItem('theme');
    const [mode, setMode] = useThemeSwitcher();
    // const [state, setState] = useState<any>();
    // useEffect(() => {
    //     console.log('icon ' + trigger + '===' + scrollYProgress);
    //     console.log();
    //     setState(scrollYProgress);
    // }, [scrollYProgress, trigger]);

    return (
        <figure className="absolute left-0 stroke-dark">
            <svg
                className="-rotate-90"
                width="75"
                height="75"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="75"
                    cy="50"
                    r="20"
                    pathLength="1"
                    className="stroke-primary  stroke-1 fill-none"
                />
                <motion.circle
                    initial={{ pathLength: 0 }}
                    cx="75"
                    cy="50"
                    r="20"
                    pathLength="1"
                    className={`stroke-[5px]    `}
                    style={{ pathLength: scrollYProgress }}
                />
                <circle
                    cx="75"
                    cy="50"
                    r="10"
                    pathLength="1"
                    className="animate-pulse  stroke-1 fill-primary  dark:fill-primaryDark"
                />
            </svg>
        </figure>
    );
});

export default LiIcon;
