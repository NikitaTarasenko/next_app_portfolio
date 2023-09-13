'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const SocialLinks = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <nav className="flex items-center justify-center flex-wrap gap-1">
            <motion.a
                href="https://github.com/NikitaTarasenko"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
            >
                <GithubIcon />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/nikita-tarasenko-9763b1177/"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
            >
                <LinkedInIcon />
            </motion.a>

            <button
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                className={`flex items-center justify-center rounded-full p-1 
                ${
                    mode === 'light'
                        ? 'bg-dark text-light'
                        : 'bg-light text-dark'
                }`}
            >
                {mode === 'dark' ? (
                    <SunIcon className="fill-dark" />
                ) : (
                    <MoonIcon className="fill-dark" />
                )}
            </button>
        </nav>
    );
};

export default SocialLinks;
