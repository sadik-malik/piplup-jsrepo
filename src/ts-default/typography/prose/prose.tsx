import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import styles from './prose.module.css';

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, renders the component as a child using Radix Slot.
   * @default 'div'
   */
  asChild?: boolean;
  /**
   * If true, disables the max-width constraint on the prose container.
   * @default false
   */
  disableMaxWidth?: boolean;
  /**
   * If true, enables the container styling for the prose.
   * @default true
   */
  enableContainer?: boolean;
  /**
   * If true, applies the prose styles to the content.
   * @default true
   */
  enableProse?: boolean;
}


/**
 * Renders a typography container with optional styling for prose content.
 */
export default function Prose(props: ProseProps): React.JSX.Element {
  const {
    asChild,
    disableMaxWidth = false,
    enableContainer = true,
    enableProse = true,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={clsx({
        [styles.root]: enableProse,
        [styles['root--container']]: enableContainer,
        [styles['root--noMaxWidth']]: disableMaxWidth,
      })}
      {...rest}
    />
  );
}
