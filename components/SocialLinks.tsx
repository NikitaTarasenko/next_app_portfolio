'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon } from './Icons';

const SocialLinks = () => {
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
                href="https://www.linkedin.com/in/mykyta-tarasenko-9763b1177/"
                target={'_blank'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3"
            >
                <LinkedInIcon />
            </motion.a>
        </nav>
    );
};

export default SocialLinks;
