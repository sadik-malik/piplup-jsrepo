'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import MasonryPolyfill from './masonry-polyfill';
import styles from './masonry.module.css';

function noop() {}

export type MasonryProps = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

function Masonry(props: MasonryProps) {
  const { asChild, children, className, ...rest } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  const Comp = asChild ? Slot : 'div';

  React.useEffect(() => {
    if (!ref.current) {
      return noop;
    }
    const polyfill = new MasonryPolyfill(ref.current);
    return () => {
      polyfill.destroy();
    };
  }, []);

  return (
    <Comp {...rest} className={clsx(styles.root, className)} ref={ref}>
      {children}
    </Comp>
  );
}

export default Masonry;
