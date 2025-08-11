
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from 'clsx';
import classes from './prose.module.css';

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement>{
  asChild?: boolean;
};


export default function Prose({ asChild, ...props }: ProseProps): React.JSX.Element {
  const Comp = asChild ? Slot : "div";
  return <Comp className={clsx(classes.prose)} {...props} />;
}
