'use client';
import HomeLayout from '@/components/HomeLayout';
import Image from 'next/image';
import profilePic from '../public/images/Home/developer-pic-1.png';
import Animatedtext from '@/components/Animatedtext';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Hire from '@/components/Hire';

export default function Home() {
    return (
        <main className="flex items-center text-dark w-full  h-[calc(100vh-96px)] relative dark:text-light overflow-y-hidden  ">
            <HomeLayout className="pt-0">
                <div className="flex items-center justify-between w-full h-full mt-24">
                    <div className="w-1/2  relative ">
                        <Image
                            src={profilePic}
                            alt="programmer"
                            className="w-full h-[calc(100vh-122px)] object-contain z-0  relative "
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-start self-center ">
                        <Animatedtext
                            text="Turning Vision Into Reality With Code."
                            className="!text-6xl !text-left"
                        />
                        <p className="my-4 text-base font-medium">
                            As a skilled Front-end developer, I am dedicated to
                            turning ideas into innovative web applications.
                            Explore my latest projects, showcasing my expertise
                            in React.js and web development.
                        </p>
                        <div className="flex items-center self-start mt-2">
                            <Link
                                href="/"
                                target="_blank "
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:text-dark  dark:bg-light
                            hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                            >
                                Resume <LinkArrow className={'w-6 ml-1'} />
                            </Link>
                            <Link
                                href="mailto:shantaramnik@gmail.com"
                                className="ml-4 text-lg font-medium capitalize text-dark underline  dark:text-light"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </HomeLayout>

            <Hire />
        </main>
    );
}
