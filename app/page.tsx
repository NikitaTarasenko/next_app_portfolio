'use client';
import HomeLayout from '@/components/HomeLayout';
import Animatedtext from '@/components/Animatedtext';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import Hire from '@/components/Hire';
import dynamic from 'next/dynamic';
import VoxelDogLoader from '../components/voxel-dog-loader.js';

const LazyVoxelDog = dynamic(() => import('../components/voxel-dog.js'), {
    ssr: false,
    loading: () => <VoxelDogLoader />,
});

export default function Home() {
    return (
        <>
            <main className="flex items-center text-dark w-full  h-full lg:min-h-screen relative dark:text-light overflow-y-hidden  md:h-full">
                <HomeLayout className="pt-0 md:p-20 sm:pt-0  lg:h-full">
                    <div className="flex items-center justify-between w-full   mt-24 lg:flex-col  lg:mt-6 lg:justify-start">
                        <div className="w-1/2 lg:w-full relative md:w-full  ">
                            {/* <Image
                                src={profilePic}
                                alt="programmer"
                                className="w-full h-[calc(100vh-122px)] lg:h-full  object-contain z-0  relative lg:hidden md:inline-block md:w-full md:h-[80vh]"
                                priority
                                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            /> */}
                            <div className="tree">
                                <LazyVoxelDog />
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-start self-center lg:text-center md:w-full">
                            <Animatedtext
                                text="Turning Vision Into Reality With Code."
                                className="!text-6xl !text-left
                                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                As a skilled Front-end developer, I am dedicated
                                to turning ideas into innovative web
                                applications. Explore my latest projects,
                                showcasing my expertise in React.js and web
                                development.
                            </p>
                            <div className="flex items-center self-start mt-2 lg:self-center">
                                <Link
                                    href="/cv2.pdf"
                                    target="_blank "
                                    download={true}
                                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:text-dark  dark:bg-light
                            hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-1 md:text-sm"
                                >
                                    Resume <LinkArrow className={'w-6 ml-1'} />
                                </Link>
                                <Link
                                    href="mailto:shantaramnik@gmail.com"
                                    className="ml-4 text-lg font-medium capitalize text-dark underline  dark:text-light md:p-1 md:text-sm"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </HomeLayout>

                <Hire />
            </main>
        </>
    );
}
