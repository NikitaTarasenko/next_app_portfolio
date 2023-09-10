'use client';
import { motion } from 'framer-motion';
import React from 'react';

type skillType = {
    name: string;
    x: string;
    y: string;
};

const Skill = ({ name, x, y }: skillType) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center mb-10">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight mt-10 bg-light">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    Frontend
                </motion.div>

                <Skill name="HTML" x="-27vw" y="-2vw" />
                <Skill name="CSS/SASS" x="-19vw" y="-17vw" />
                <Skill name="Tailwind" x="-5vw" y="-10vw" />
                <Skill name="JavaScript" x="0vw" y="19vw" />
                <Skill name="React.js" x="11vw" y="10vw" />
                <Skill name="TypeScript" x="18vw" y="-15vw" />
                <Skill name="Next.js" x="15vw" y="-2vw" />
                <Skill name="Redux-Toolkit" x="32vw" y="-5vw" />
                <Skill name="MobX" x="0vw" y="-21vw" />
                <Skill name="Storybook" x="-25vw" y="18vw" />
                <Skill name="Webpack" x="-6vw" y="6vw" />
                <Skill name="Jest" x="-22vw" y="10vw" />
                <Skill name="Git" x="22vw" y="17vw" />
                <Skill name="Cypress" x="25vw" y=" 7vw" />
            </div>
        </>
    );
};

export default Skills;
