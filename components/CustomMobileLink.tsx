'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type CustomLinkProps = {
    href: string;
    title: string;
    classname: string | undefined;
    toggle: () => void;
};

const CustomMobileLink = ({
    href,
    title,
    classname = '',
    toggle,
}: CustomLinkProps) => {
    const routerPath = usePathname();
    const router = useRouter();
    const currentLink = routerPath === href ? 'w-full' : 'w-0';

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            className={`${classname} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1.5px] inline-block  bg-light absolute left-0
                 bottom-0 group-hover:w-full
                 transition-[width] ease duration-300 ${currentLink} dark:bg-dark`}
            >
                {'\u00A0'}
            </span>
        </button>
    );
};

export default CustomMobileLink;
