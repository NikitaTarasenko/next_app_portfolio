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
        const springValue = useSpring(motionValue, { duration: 3000 });
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

        return <span ref={ref}></span>;
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
            <main className="flex w-full flex-col items-center justify-center bg-light">
                <Layout>
                    <Animatedtext
                        text="Passion Fuels Purpose!"
                        className="mb-16"
                        delay={1.5}
                    />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                                Biography
                            </h2>
                            <p className="font-medium ">
                                {`Hi, I'm CodeBucks, a web developer and UI/UX
                                designer with a passion for creating beautiful,
                                functional, and user-centered digital
                                experiences. With 4 years of experience in the
                                field. I am always looking for new and
                                innovative ways to bring my clients' visions to
                                life.`}
                            </p>

                            <p className="font-medium my-4">
                                {` I believe that design is about more than just
                                making things look pretty – it's about solving
                                problems and creating intuitive, enjoyable
                                experiences for users.`}
                            </p>

                            <p className="font-medium ">
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
                        bg-light p-8"
                        >
                            <div className="absolute -top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark" />

                            <Image
                                src={Me}
                                alt="me"
                                className="w-full h-auto rounded-2xl  "
                            />
                        </div>

                        <div className="flex col-span-2 flex-col items-end justify-between py-10 pb-56">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">
                                    Projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={5} />
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">
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
