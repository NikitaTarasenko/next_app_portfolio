import React from 'react';

type AnimatedtextProps = {
    text: string;
    className?: string | undefined;
};
const Animatedtext = ({ text, className = '' }: AnimatedtextProps) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <h1
                className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
            >
                {text.split(' ').map((word, index) => (
                    <span key={word + '-' + index} className="inline-block">
                        {word}
                        {'\u00A0'}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default Animatedtext;
