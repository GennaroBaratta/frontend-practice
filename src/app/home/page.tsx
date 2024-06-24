import AnimatedSection from "@/components/animatedSection";

export default function Home() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
        <AnimatedSection className="flex flex-col gap-8 justify-center items-center" >
          <h1 className="text-5xl font-semibold leading-snug">A brand and product<br />designer working with clients <br />globally</h1>
          <p className="flex gap-2 items-center">
            Expertise
            <span className="bg-gray-200  bg-opacity-60 px-2 py-1 rounded-[100px] ">Branding</span>
            <span className="bg-gray-200  bg-opacity-60 px-2 py-1 rounded-[100px] ">Product</span>
            <span className="bg-gray-200  bg-opacity-60 px-2 py-1 rounded-[100px] ">Design Systems</span>
          </p>
        </AnimatedSection>
        <AnimatedSection
          delay={1}
          className="grid grid-cols-2 gap-4 w-full h-[180vh]">
          {array.map((item) => (
            <div key={item} className="bg-red-500 bg-opacity-60 px-2 py-1 rounded-[10px] ">{item}</div>
          ))}
        </AnimatedSection>
    </>
  );
}