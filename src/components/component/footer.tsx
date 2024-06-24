import AnimatedSection from "../animatedSection";

export default function Footer() {
    return (
        <>
            <AnimatedSection className="text-4xl font-semibold leading-snug">
                <p>
                    Let's work together.
                </p>
                <p className="text-gray-400">
                    Get in touch.
                </p>
            </AnimatedSection>
            <footer className="flex flex-row justify-between gap-4 items-center w-full">
                <p>© 2024, All rights reserved.</p>
                <div className="flex flex-row gap-4 items-center">
                    <p>X</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </footer>
        </>
    );
}