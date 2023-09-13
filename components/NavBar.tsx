import Logo from './Logo';

import CustomLink from './CustomLink';

import SocialLinks from './SocialLinks';

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:text-light dark:bg-dark">
            <nav>
                <CustomLink href={'/'} title="Home" classname="mr-4" />
                <CustomLink href={'/about'} title="About" classname="mx-4" />
                <CustomLink
                    href={'/projects'}
                    title="Projects"
                    classname="mx-4"
                />
            </nav>
            <SocialLinks />
            <div className="absolute left-[50%] top-2 translate-x-[-50%] z-20">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
