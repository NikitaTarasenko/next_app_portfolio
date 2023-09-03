import HomeLayout from '@/components/HomeLayout';
import Image from 'next/image';
import profilePic from '../public/images/Home/developer-pic-1.png';
import Animatedtext from '@/components/Animatedtext';

export default function Home() {
    return (
        <main className="flex items-center text-dark w-full min-h-screen">
            <HomeLayout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <Image
                            src={profilePic}
                            alt="programmer"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center">
                        <Animatedtext
                            text="Turning Vision Into Reality With Code."
                            className="!text-6xl !text-left"
                        />
                        <p>
                            As a skilled Front-end developer, I am dedicated to
                            turning ideas into innovative web applications.
                            Explore my latest projects and articles, showcasing
                            my expertise in React.js and web development.
                        </p>
                    </div>
                </div>
            </HomeLayout>
        </main>
    );
}
