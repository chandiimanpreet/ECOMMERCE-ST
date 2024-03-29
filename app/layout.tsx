import { Urbanist } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';

import './globals.css';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
    title: 'Store',
    description: 'Store',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ModalProvider />
                <ToastProvider />
                <Navbar />
                {children}
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-62TK09FGMK" />
            <GoogleTagManager gtmId="GTM-M5Q2J93L" />
        </html>
    )
}
