'use client';

import * as React from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import styles from './fade-content.module.css';

export interface FadeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, renders the component as a child using Radix Slot.
   * @default 'div'
   */
  asChild?: boolean;
  /**
   * If true, applies a blur effect on fade in
   * @default false
   */
  blur?: boolean;
  /**
   * Delay in ms before fade in after entering viewport
   * @default 0
   */
  delay?: number;
  /**
   * Intersection observer threshold (0-1)
   * @default 0.1
   */
  threshold?: number;
}

/**
 * FadeContent animates its children into view when they enter the viewport, with optional blur and delay effects.
 * Useful for scroll-based reveal animations in React apps.
 */
function FadeContent(props: FadeContentProps) {
  const {
    asChild,
    blur = false,
    children,
    className = '',
    delay = 0,
    threshold = 0.1,
    ...rest
  } = props;

  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) {
      return () => {};
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      {...rest}
      className={clsx(
        styles.root,
        {
          [styles.blur]: blur,
          [styles['root--visible']]: inView,
        },
        className,
      )}
      ref={ref}
    >
      {children}
    </Comp>
  );
}

export default FadeContent;
