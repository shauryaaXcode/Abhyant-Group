import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for detecting when an element is in viewport using IntersectionObserver.
 * 
 * @param {Object} options Configuration options
 * @param {number} options.threshold Ratio of element visibility required (default: 0.15)
 * @param {string} options.rootMargin Margin around root (default: '0px 0px -40px 0px')
 * @param {boolean} options.triggerOnce Whether to unobserve after first intersection (default: true)
 * @returns {[React.RefObject, boolean]} [elementRef, isVisible]
 */
export function useIntersectionObserver({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Respect user's preference for reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Fallback if IntersectionObserver is not supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    // If already visible and triggerOnce is true, no need to re-observe
    if (isVisible && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, isVisible]);

  return [elementRef, isVisible];
}
