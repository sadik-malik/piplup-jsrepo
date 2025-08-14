import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import styles from './hero-section-one.module.css';

function Root(
  props: React.ComponentProps<'section'> & {
    asChild?: boolean;
  },
) {
  const { asChild, children, className, ...rest } = props;
  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      className={clsx(styles.root, className)}
      itemType="https://schema.org/WPHeader"
      role="banner"
      itemScope
      {...rest}
    >
      {children}
    </Comp>
  );
}

function Image(
  props: React.ComponentProps<'img'> & {
    asChild?: boolean;
  },
) {
  const { alt, asChild, className, src, ...rest } = props;

  const Comp = asChild ? Slot : 'img';

  return (
    <Comp
      alt={alt}
      className={clsx(styles.image, className)}
      fetchPriority="high"
      itemProp="image"
      loading="eager"
      sizes="100vw"
      src={src}
      {...rest}
    />
  );
}

function Backdrop(
  props: React.ComponentProps<'div'> & {
    asChild?: boolean;
  },
) {
  const { asChild, className, ...rest } = props;

  const Comp = asChild ? Slot : 'div';

  return <Comp className={clsx(styles.backdrop, className)} {...rest} />;
}

function Content(
  props: React.ComponentProps<'div'> & {
    asChild?: boolean;
  },
) {
  const { asChild, className, ...rest } = props;

  const Comp = asChild ? Slot : 'div';

  return <Comp className={clsx(styles.content, className)} {...rest} />;
}

function Title(
  props: React.ComponentProps<'h1'> & {
    asChild?: boolean;
  },
) {
  const { asChild, className, ...rest } = props;

  const Comp = asChild ? Slot : 'h1';

  return (
    <Comp className={clsx(styles.title, className)} itemProp="headline" {...rest}>
      {props.children}
    </Comp>
  );
}

function Description(
  props: React.ComponentProps<'p'> & {
    asChild?: boolean;
  },
) {
  const { asChild, className, ...rest } = props;

  const Comp = asChild ? Slot : 'p';

  return (
    <Comp className={clsx(styles.description, className)} itemProp="description" {...rest}>
      {props.children}
    </Comp>
  );
}

export { Backdrop, Content, Description, Image, Root, Title };
