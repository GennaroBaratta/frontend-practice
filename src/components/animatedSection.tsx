'use client'
import useIntersectionObserver from "@/utils/hook/useIntersectionObserver";
import { useRef, useEffect, useCallback } from "react";

interface SectionProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}


const AnimatedSection: React.FC<SectionProps> = ({ className = "", children, delay = 0 }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const { observe } = useIntersectionObserver();

    const setRecursiveDelay = useCallback((element: HTMLElement, baseDelay: number = delay): number => {
        let currentDelay = baseDelay;
        Array.from(element.children).forEach((child) => {
            if (child instanceof HTMLElement) {
                child.style.setProperty('--delay', `${currentDelay}s`);
                currentDelay += 0.1; // Increment delay for next element
                currentDelay = setRecursiveDelay(child, currentDelay); // Recurse into child's children
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