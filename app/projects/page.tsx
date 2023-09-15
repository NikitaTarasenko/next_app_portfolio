import Animatedtext from '@/components/Animatedtext';
import Image, { StaticImageData } from 'next/image';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import pr1 from '../../public/images/pr1.png';
import pr2 from '../../public/images/pr2.png';
import pr3 from '../../public/images/pr3.png';
import pr4 from '../../public/images/pr4.png';
import svc from '../../public/images/svc.png';
import oko from '../../public/images/oko.png';

type FeaturedProjectType = {
    link: string;
    link2?: string;
    type: string;
    img: StaticImageData;
    sumary?: string;
    title: string;
    githubLink: string;
};

const FeaturedProject = ({
    type,
    title,
    sumary,
    img,
    link,
    link2,
    githubLink,
}: FeaturedProjectType) => {
    return (
        <article
            className="w-full  pt-4 pl-6 pb-4 flex items-center justify-between rounded-3xl border border-solid border-dark
         bg-light shadow-2xl relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >
            <div
                className="absolute -top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
            />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg h-[90%] lg:w-full"
            >
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto hover:scale-[1.02] transition ease-in-out duration-300"
                    priority
                    sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-xl text-primary  font-medium dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold text-dark dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark pr-2 dark:text-light sm:text-sm">
                    {sumary}
                    {link2 && (
                        <Link
                            target="_blank"
                            href={link2}
                            className="first-line:text-lg font-semibold underline"
                        >
                            final version
                        </Link>
                    )}
                </p>
                <div className="mt-2 flex items-center">
                    <Link href={githubLink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({
    type,
    title,
    sumary,
    img,
    link,
    githubLink,
}: FeaturedProjectType) => {
    return (
        <article
            className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark
         dark:border-light xs:p-4 text-dark dark:text-light"
        >
            <div
                className="absolute -top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
                md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            "
            />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg p-6 "
            >
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto hover:scale-[1.03] transition ease-in-out duration-300"
                    priority
                    sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-xl text-primary  dark:text-primaryDark font-medium lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl text-dark dark:text-light">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark pr-2">{sumary}</p>
                <div className="mt-2 w-full flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className=" first-line:text-lg font-semibold underline  md:text-base"
                    >
                        Visit
                    </Link>
                    <Link
                        href={githubLink}
                        target="_blank"
                        className="w-8 md:w-6"
                    >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const page = () => {
    return (
        <>
            <Head>
                <title>Projects page</title>
                <meta name="description" content="Nikita Tarasenko porfolio" />
            </Head>
            <main className="w-full  flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <Animatedtext
                        text="Imagination Trumps Knowledge !"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12 sm:order-1">
                            <FeaturedProject
                                title="Silicon Valley Club"
                                img={svc}
                                link2="https://spr.sv.club/"
                                sumary="One of the latest projects in the company, which was handled only by me. Created with React.js + MobX. Animations are designed and developed by me and created using GSAP library.
                                 In the final version of site some animations were removed at the designer's request : "
                                link="https://svc-1a5172.netlify.app/"
                                type="Company website"
                                githubLink="https://github.com/NikitaTarasenko/svc"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12  sm:order-3">
                            <Project
                                title="Startup.Inc"
                                img={pr3}
                                link="https://startup.inc/en/"
                                type="Company website"
                                githubLink="https://github.com/NikitaTarasenko"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12  sm:order-4">
                            <Project
                                title="Education website for Kyivstar"
                                img={pr2}
                                link="https://nikitatarasenko.github.io/kievstar/index.html"
                                type="Freelance Project"
                                githubLink="https://github.com/NikitaTarasenko/NikitaTarasenko.github.io/tree/master/kievstar"
                            />
                        </div>

                        <div className="col-span-12  sm:order-2">
                            <FeaturedProject
                                title="Production project clone"
                                img={pr1}
                                sumary="It's a simulation of creating a real production project. Complete project configuration from scratch using Webpack. React, Typescript, Babel, scss, css modules, vite, prettier, test environments, jest, rtl, storybook, loki, Cypress are also configured. 
                                The project was created by following FSD architecture.
                                The site is optimised on component levels as well as asynchronous redusers. Libraries are loaded asynchronously only when they are required in the code. Lazy loading.
                                Almost all components are covered by tests (jest, rtl, storybook, loki, Cypress).
                                Role-based authorisation. Private Routes.
                                Internalisation available( 2 languages). 3 colour themes.
                                Server requests are generated both with axios instances and RTK QUERY.
                                The site is fully adapted for all devices."
                                link="https://nt-product-project-8fd0f8.netlify.app/"
                                type="Featured Project"
                                githubLink="https://github.com/NikitaTarasenko/production-project/blob/main/README.md"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12  sm:order-6">
                            <Project
                                title="Unicorn Events"
                                img={pr4}
                                link="https://unicorn.events/"
                                type="Company website"
                                githubLink="https://github.com/NikitaTarasenko/NikitaTarasenko.github.io/tree/master/SN"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12  sm:order-5">
                            <Project
                                title="Oko production"
                                img={oko}
                                link="https://nikitatarasenko.github.io/eye_project/Oko-Prodaction.html#main"
                                type="Freelance Project"
                                githubLink="https://github.com/NikitaTarasenko/NikitaTarasenko.github.io/tree/master/eye_project"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default page;
