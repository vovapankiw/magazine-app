import { useRef, useState, useEffect, RefObject } from 'react';

type UseObserverProps = [RefObject<HTMLDivElement>, boolean];

type OptionProps = {
  root: null | HTMLElement;
  rootMargin: string;
  threshold: number;
};

export const useObserver = (options: OptionProps): UseObserverProps => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    let observerRefValue: HTMLDivElement | null = null;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
