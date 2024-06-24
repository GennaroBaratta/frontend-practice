import AnimatedSection from '../animatedSection'

export default function Footer() {
    return (
        <>
            <AnimatedSection className="text-4xl font-semibold leading-snug">
                <p>Let&apos;s work together.</p>
                <p className="text-gray-400">Get in touch.</p>
            </AnimatedSection>
            <footer className="flex w-full flex-row items-center justify-between gap-4">
                <p>© 2024, All rights reserved.</p>
                <div className="flex flex-row items-center gap-4">
                    <p>X</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </footer>
        </>
    )
}
