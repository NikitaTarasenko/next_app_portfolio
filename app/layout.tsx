import NavBar from '@/components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export const metadata: Metadata = {
    title: 'My next app',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} font-mont bg-light w-full  z-10`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}