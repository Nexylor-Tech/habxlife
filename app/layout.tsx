import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    metadataBase: new URL('https://habx.life'),
    title: "HabX",
    description: "AI Habit builder, tracker.",
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        siteName: 'HabX',
        images: ['opengraph.png'],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['opengraph.png'],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
