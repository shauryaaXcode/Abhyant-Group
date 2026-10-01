import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

/**
 * Premium scroll reveal component that animates its children when scrolled into view
 * using the IntersectionObserver API.
 */
export const ScrollReveal = ({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'zoom-in'
  delay = 0, // delay in milliseconds
  duration = 750, // duration in milliseconds
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getTransform = () => {
    if (isVisible) return 'none';

    switch (animation) {
      case 'fade-up':
        return 'translate3d(0, 30px, 0)';
      case 'fade-down':
        return 'translate3d(0, -30px, 0)';
      case 'fade-left':
        return 'translate3d(30px, 0, 0)';
      case 'fade-right':
        return 'translate3d(-30px, 0, 0)';
      case 'zoom-in':
        return 'scale(0.95)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <Component
      ref={ref}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
