'use client';
import Animatedtext from '@/components/Animatedtext';

import Head from 'next/head';
import Image from 'next/image';
import Me from '../../public/images/Me.jpg';
import { MutableRefObject, useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Layout from '@/components/Layout';

type AnimationType = {
    value: number;
};
const about = () => {
    const AnimatedNumbers = ({ value }: AnimationType) => {
        const ref = useRef(null) as MutableRefObject<any>;

        const motionValue = useMotionValue(0);
        const springValue = useSpring(motionValue, { duration: 5000 });
        const isInView = useInView(ref, { once: true });

        useEffect(() => {
            if (isInView) {
                motionValue.set(value);
            }
        }, [isInView, value, motionValue]);

        useEffect(() => {
            springValue.on('change', (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0);
                }
            });
        }, [springValue, value]);

        return (
            <span className="text-dark/75 dark:text-light/75" ref={ref}></span>
        );
    };
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta
                    name="desription"
                    content="Front-end developer,FE,Js,ts,React,HTML,CSS,JavaScript,TypeScript"
                />
            </Head>
            <main className="flex w-full flex-col items-center justify-center bg-light dark:text-light">
                <Layout>
                    <Animatedtext
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 lg:text-center"
                        delay={1.5}
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 text-dark/75 dark:text-light/75">
                            <h2 className="mb-4 text-lg font-bold uppercase ">
                                Biography
                            </h2>
                            <p className="font-medium text-dark dark:text-light/75">
                                {`Hi, I'm Nikita, a front-end developer  
                                  with a passion for creating beautiful,
                                functional, and user-centered digital
                                experiences. With 5 years of experience in the
                                field. I am always looking for new and
                                innovative ways to bring my clients' visions to
                                life.`}
                            </p>

                            <p className="font-medium my-4 text-dark dark:text-light/75">
                                {` I believe that coding is about more than just
                                making things functional and look pretty – it's about solving
                                problems and creating intuitive, enjoyable
                                experiences for users.`}
                            </p>

                            <p className="font-medium  text-dark/75 dark:text-light/75">
                                {` Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to
                                design excellence and user-centered thinking to
                                every project I work on. I look forward to the
                                opportunity to bring my skills and passion to
                                your next project.`}
                            </p>
                        </div>

                        <div
                            className="col-span-3 relative  h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8  dark:bg-dark  dark:border-light  xl:col-span-4 md:order-1 md:col-span-8"
                        >
                            <div className="absolute -top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />

                            <Image
                                src={Me}
                                alt="me"
                                className="w-full h-auto rounded-2xl  "
                                priority
                                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex col-span-2 flex-col items-end justify-between py-10 pb-56 md:pb-10 xl:col-span-8 xl:flex-row xl:items-center md:order-3 text-dark/75 dark:text-light/75">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl  md:flex md:w-full md:justify-center">
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl  md:flex md:w-full md:justify-center">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold md:text-center md:flex md:w-full md:justify-center md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5} />
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
