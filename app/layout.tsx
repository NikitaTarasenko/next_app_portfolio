import NavBar from '@/components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

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
            <body className={`${montserrat.variable} font-mont w-full  z-10`}>
                <Script id="theme-switcher" defer>
                    {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
                </Script>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
