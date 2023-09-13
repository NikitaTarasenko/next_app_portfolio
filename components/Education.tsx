import { useScroll, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import LiIcon from './LiIcon';

type DetailsProps = {
    type: string;
    place: string;
    time: string;
    info: string;
};

const Details = ({ type, time, place, info }: DetailsProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['center end', 'center center'],
    });
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
        >
            <figure className="absolute left-0 stroke-dark  dark:stroke-light">
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
                        className="stroke-primary stroke-1 fill-none  dark:stroke-primaryDark"
                    />
                    <motion.circle
                        initial={{ pathLength: 0 }}
                        cx="75"
                        cy="50"
                        r="20"
                        pathLength="1"
                        className="stroke-[5px] fill-light  dark:fill-dark"
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
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capitalize font-bold text-2xl">{type}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {place}
                </span>

                <p className="font-medium w-full">{info}</p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start center'],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative ">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
                />
                <ul className="w-full flex flex-col  first-letter:   justify-between ml-4">
                    <Details
                        type="Bachelor of Science in Telecommunications"
                        time="September 2013 - June 2017"
                        place=" State University of Telecommunications "
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering."
                    />

                    <Details
                        type="IT Courses"
                        time=" February 2018 – September 2018"
                        place=" Main Academy"
                        info="Technologies: 
                        •	HTML5/CSS3, SCSS, LESS;
                        •	JS, JQuery; 
                        •	React;
                        •	Git;
                        •	Gulp/Webpack;
                        "
                    />

                    <Details
                        type="Online Courses"
                        time="February 2023 - June 2023"
                        place="  UlbiTV"
                        info="Technologies: 
                        •	HTML5, SCSS;
                        •	JS, Typescript;
                        •	React.js;
                        •	Redux, Redux Toolkit (Redux-Thunk, RTK-Query);
                        •	Webpack/Vite. Babel.
                        •	FSD- architecture;
                        •	Git, CI/CD;
                        •	Jest, Storybook, Loki, Cypress;
                        •	ESlint, stylelint;
                        •	I18n;
                        •	Code splitting;
                        "
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
