import AnimatedSection from '@/components/component/animatedSection'

export default function Home() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <AnimatedSection className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug md:max-w-xl">
          A brand and product
          designer working with clients
          globally
        </h1>
        <p className="hidden md:flex items-center gap-2">
          Expertise
          <span className="rounded-[100px] bg-gray-200/60 px-3 py-2">
            Branding
          </span>
          <span className="rounded-[100px] bg-gray-200/60 px-3 py-2">
            Product
          </span>
          <span className="rounded-[100px] bg-gray-200/60 px-3 py-2">
            Design Systems
          </span>
        </p>
      </AnimatedSection>
      <AnimatedSection
        delay={1}
        className="grid  w-full grid-cols-1 md:grid-cols-2 gap-4"
      >
        {array.map((item) => (
          <div
            key={item}
            className="rounded-[10px] bg-red-500/60 px-2 py-1 h-72"
          >
            {item}
          </div>
        ))}
      </AnimatedSection>
    </>
  )
}
