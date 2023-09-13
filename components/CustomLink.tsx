'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CustomLinkProps = {
    href: string;
    title: string;
    classname: string | undefined;
};

const CustomLink = ({ href, title, classname = '' }: CustomLinkProps) => {
    const routerPath = usePathname();
    const currentLink = routerPath === href ? 'w-full' : 'w-0';

    return (
        <Link href={href} className={`${classname} relative group`}>
            {title}
            <span
                className={`h-[1.5px] inline-block  bg-dark absolute left-0
                 bottom-0 group-hover:w-full
                 transition-[width] ease duration-300 ${currentLink} dark:bg-light`}
            >
                {'\u00A0'}
            </span>
        </Link>
    );
};

export default CustomLink;
