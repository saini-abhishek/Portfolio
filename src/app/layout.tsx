import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";
import TransitionEffect from "./components/TransitionEffect";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont",
});

export const metadata: Metadata = {
    title: "Abhishek Saini",
    description: "Abhishek Saini, iamabhisheksaini",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
            >
                <Script id="theme-switcher" strategy="beforeInteractive">
                    {`
                        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                            document.documentElement.classList.add('dark')
                          } else {
                            document.documentElement.classList.remove('dark')
                          }
                    `}
                </Script>
                <NavBar />
                <div
                    className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 pt-0 xl:p-24 lg:p-16 md:p-12 sm:p-8 md:pt-16 sm:pt-8`}
                >
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
