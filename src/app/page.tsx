import AnimatedSection from "@/components/animatedSection";
import { NavigationComponent } from "@/components/component/navigation-component";

export default function Home() {
  return (
    <>

      <main className='content p-4'>
        <NavigationComponent />
        <div className=" h-[30vh] w-full" />
        <AnimatedSection>
          <h1 className="text-4xl font-semibold">A brand and product designer working with clients globally</h1>

        </AnimatedSection>
        <AnimatedSection className="second">
          <h2>Last Section</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <p>Thanks for scrolling!</p>
        </AnimatedSection>
      </main>
    </>
  );
}