import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/component/footer'
import { NavigationComponent } from '@/components/component/navigation-component'

const notoSans = Noto_Sans({
    subsets: ['latin'],
    axes: ['wdth'],
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={notoSans.className}>
                <NavigationComponent />
                <main className="content min-h-screen justify-between gap-44 p-8 text-sm font-medium">
                    <div />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
