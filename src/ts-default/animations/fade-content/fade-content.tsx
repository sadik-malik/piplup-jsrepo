import * as React from 'react';
import clsx from 'clsx';
import classes from './fade-content.module.css';

export interface FadeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: boolean;
  delay?: number;
  threshold?: number;
}

function FadeContent(props: FadeContentProps) {
  const { blur = false, children, className = '', delay = 0, threshold = 0.1, ...rest } = props;
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

  return (
    <div
      {...rest}
      className={clsx(
        classes.root,
        {
          [classes.blur]: blur,
          [classes['root--visible']]: inView,
        },
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
}

export default FadeContent;
