import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
                className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
            >
                <NavBar />
                <div
                    className={`w-full h-full inline-block z-0 bg-light p-32 pt-0`}
                >
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
