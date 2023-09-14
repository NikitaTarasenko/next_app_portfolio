'use client';
import Logo from './Logo';

import CustomLink from './CustomLink';

import SocialLinks from './SocialLinks';
import { useState } from 'react';
import CustomMobileLink from './CustomMobileLink';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:text-light dark:bg-dark relative
        lg:px-16 md:px-12 sm:px-8"
        >
            <button
                className=" flex-col justify-center items-center hidden lg:flex"
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300  ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300  ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300  ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                ></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href={'/'} title="Home" classname="mr-4" />
                    <CustomLink
                        href={'/about'}
                        title="About"
                        classname="mx-4"
                    />
                    <CustomLink
                        href={'/projects'}
                        title="Projects"
                        classname="mx-4"
                    />
                </nav>
                <SocialLinks />
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    z-20 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav className="flex items-center justify-center flex-col">
                        <CustomMobileLink
                            toggle={handleClick}
                            href={'/'}
                            title="Home"
                            classname=" "
                        />
                        <CustomMobileLink
                            toggle={handleClick}
                            href={'/about'}
                            title="About"
                            classname=" "
                        />
                        <CustomMobileLink
                            toggle={handleClick}
                            href={'/projects'}
                            title="Projects"
                            classname=" "
                        />
                    </nav>
                    <div className="mt-2">
                        <SocialLinks />
                    </div>
                </motion.div>
            ) : null}
            <div className="absolute left-[50%] top-2 translate-x-[-50%] z-20">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
