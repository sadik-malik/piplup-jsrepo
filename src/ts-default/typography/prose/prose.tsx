import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import classes from './prose.module.css';

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  enableGutter?: boolean;
  enableProse?: boolean;
}

export default function Prose(props: ProseProps): React.JSX.Element {
  const { asChild, enableGutter = true, enableProse = true, ...rest } = props;

  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      className={clsx({
        [classes.root]: enableProse,
        [classes['root--container']]: enableGutter,
        [classes['root--noMaxWidth']]: !enableGutter,
      })}
      {...rest}
    />
  );
}
