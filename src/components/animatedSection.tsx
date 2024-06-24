'use client'
import useIntersectionObserver from "@/utils/hook/useIntersectionObserver";
import { useRef, useEffect, useCallback } from "react";

interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

// Define the recursive function to set delay
function setDelayRecursively(element: Element, delay = 0) {
    let newDelay = delay;
    if (element instanceof HTMLElement) {
        // Set the delay for the current element
        element.style.setProperty('--delay', `${delay}s`);

        // Calculate the new delay for children
        newDelay += 0.2;
    }
    // Iterate over each child and apply the function recursively
    Array.from(element.children).forEach((child, index) => {
        setDelayRecursively(child, newDelay);
    });
}

const AnimatedSection: React.FC<SectionProps> = ({ className = "", children }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const { observe } = useIntersectionObserver();

    const setRecursiveDelay = useCallback((element: HTMLElement, baseDelay: number = 0): number => {
        let delay = baseDelay;
        Array.from(element.children).forEach((child) => {
            if (child instanceof HTMLElement) {
                child.style.setProperty('--delay', `${delay}s`);
                delay += 0.1; // Increment delay for next element
                delay = setRecursiveDelay(child, delay); // Recurse into child's children
            }
        });
        return delay; // Return the last delay used
    }, []);


    useEffect(() => {
        const section = sectionRef.current;
        if (section) {
            section.style.visibility = 'hidden';
            setRecursiveDelay(section);
            observe(section);
        }
    }, [observe, setRecursiveDelay]);

    return (
        <section ref={sectionRef} className={`animated-section ${className}`}>
            {children}
        </section>
    );
};
export default AnimatedSection;