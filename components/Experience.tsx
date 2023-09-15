'use client';
import { useScroll, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import LiIcon from './LiIcon';

type DetailsProps = {
    posiiton: string;
    company: string;
    time: string;
    work: string;
    companyLink: string;
};

const Details = ({
    posiiton,
    company,
    time,
    companyLink,
    work,
}: DetailsProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <figure className="absolute left-0 stroke-dark  dark:stroke-light">
                <svg
                    className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
                    width="75"
                    height="75"
                    viewBox="0 0 100 100"
                >
                    <circle
                        cx="75"
                        cy="50"
                        r="20"
                        pathLength="1"
                        className="stroke-primary  dark:stroke-primaryDark stroke-1 fill-none"
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
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {posiiton}{' '}
                    <a
                        className="text-primary capitalize dark:text-primaryDark"
                        href={companyLink}
                        target="_blank"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 xs:text-sm">
                    {time}
                </span>

                <p className="font-medium w-full xs:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });
    return (
        <div className="my-64 lg:my-32 text-dark/75 dark:text-light/75">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
            >
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        posiiton="Front-end developer"
                        companyLink="https://startup.ua/"
                        company="StartupNetwork"
                        time="01.2019 – 01.2022 | 09.2022 — 07.2023"
                        work="
                        Worked with a team to build from scratch an application for investors to
                         select and edit events using diffrent libraries and frameworks. Developed a large library
                          of components for future and ongoing projects that were covered in Storybook
                           tests. In addition to this I developed websites for specific company tasks
                            all the time, both MPA and SPA."
                    />
                    <Details
                        posiiton="Front-end developer"
                        companyLink="https://wiseit.com.ua/ru/"
                        company="Wise.It"
                        time="January 2022 – March2022"
                        work="
                        Improved and fixed bugs in existing projects on React.js/Next.js. 
                         I wrote functionality for tasks. But unfortunately, I had to quit because of the war,
                          because I couldn't work for a certain period of time."
                    />
                    <Details
                        posiiton="Junior Front-end developer"
                        companyLink="https://www.whiteweb.ua/"
                        company="WhiteWeb"
                        time="October – December 2018"
                        work="
                        My first job in the firm as a web developer. During that time I wrote markup for CRM-system for 'Epicenter'™,
                         customised components for the set tasks."
                    />
                    <Details
                        posiiton="Front-end developer"
                        companyLink="https://www.whiteweb.ua/"
                        company="Freelance"
                        time="July2018 – till present"
                        work="
                        I do various commissions from time to time as a freelancer for clients, trying to constantly contribute my vision and ideas to the visual part of websites, apart from the functionality."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
