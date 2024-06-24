import AnimatedSection from '@/components/component/animatedSection'
import { Badge } from '@/components/ui/badge'

export default function Profile() {
    return (
        <>
            <AnimatedSection className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-5xl font-semibold leading-snug">
                    Hey 👋🏼 I&apos;m Gennaro{' '}
                </h1>
            </AnimatedSection>
            <AnimatedSection
                delay={1}
                className="grid h-[30vh] w-full grid-cols-2 gap-4"
            >
                {[1, 2].map((item) => (
                    <div
                        key={item}
                        className="rounded-[10px] bg-red-500/60 px-2 py-1"
                    >
                        {item}
                    </div>
                ))}
            </AnimatedSection>
            <AnimatedSection>
                <div
                    className="rounded-[100px] bg-gray-200/60 px-3 py-1"
                >About </div>
            </AnimatedSection>
        </>
    )
}
