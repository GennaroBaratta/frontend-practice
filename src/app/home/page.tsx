import AnimatedSection from '@/components/animatedSection'

export default function Home() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <AnimatedSection className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-5xl font-semibold leading-snug">
                    A brand and product
                    <br />
                    designer working with clients <br />
                    globally
                </h1>
                <p className="flex items-center gap-2">
                    Expertise
                    <span className="rounded-[100px] bg-gray-200/60 px-2 py-1">
                        Branding
                    </span>
                    <span className="rounded-[100px] bg-gray-200/60 px-2 py-1">
                        Product
                    </span>
                    <span className="rounded-[100px] bg-gray-200/60 px-2 py-1">
                        Design Systems
                    </span>
                </p>
            </AnimatedSection>
            <AnimatedSection
                delay={1}
                className="grid h-[180vh] w-full grid-cols-2 gap-4"
            >
                {array.map((item) => (
                    <div
                        key={item}
                        className="rounded-[10px] bg-red-500/60 px-2 py-1"
                    >
                        {item}
                    </div>
                ))}
            </AnimatedSection>
        </>
    )
}
