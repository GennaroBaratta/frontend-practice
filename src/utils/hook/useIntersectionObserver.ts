import { useEffect, useRef, useCallback } from 'react';

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};

export default function useIntersectionObserver(options = observerOptions) {
    const observerRef = useRef<IntersectionObserver | null>(null);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                target.style.visibility = 'visible';
                requestAnimationFrame(() => {
                    target.dataset.visible = 'true';
                });
                observerRef.current?.unobserve(target);
            }
        });
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(handleIntersection, options);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [handleIntersection, options]);

    const observe = useCallback((element: Element) => {
        observerRef.current?.observe(element);
    }, []);

    return { observe };
}