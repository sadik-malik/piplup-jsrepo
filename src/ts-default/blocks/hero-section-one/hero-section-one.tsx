import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import styles from './hero-section-one.module.css';

const SectionContext = React.createContext<null | {
  description?: React.ReactNode;
  title: React.ReactNode;
}>(null);

function Root(
  props: React.ComponentProps<'section'> & {
    asChild?: boolean;
    description?: React.ReactNode;
    title?: React.ReactNode;
  },
) {
  const { asChild, children, className, description, title, ...rest } = props;
  const Comp = asChild ? Slot : 'section';

  const contextValue = React.useMemo<{
    description?: React.ReactNode;
    title: React.ReactNode;
  }>(
    () => ({
      description,
      title,
    }),
    [title, description],
  );
  return (
    <SectionContext.Provider value={contextValue}>
      <Comp
        aria-label={typeof title === 'string' ? title : 'Hero section'}
        className={clsx(styles.root, className)}
        itemType="https://schema.org/WPHeader"
        role="banner"
        itemScope
        {...rest}
      >
        {children}
      </Comp>
    </SectionContext.Provider>
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

  const context = React.useContext(SectionContext);
  if (!context) {
    throw new Error('HeroSectionOne.Title must be used within HeroSectionOne.Root');
  }

  return (
    <Comp className={clsx(styles.title, className)} itemProp="headline" {...rest}>
      {props.children || context?.title}
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

  const context = React.useContext(SectionContext);
  if (!context) {
    throw new Error('HeroSectionOne.Description must be used within HeroSectionOne.Root');
  }

  return (
    <Comp className={clsx(styles.description, className)} itemProp="description" {...rest}>
      {props.children || context?.description}
    </Comp>
  );
}

export { Backdrop, Content, Description, Image, Root, Title };
