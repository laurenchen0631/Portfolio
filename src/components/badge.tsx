import clsx from 'clsx';
import {HTMLProps, PropsWithChildren} from 'react';

export default function Badge({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
  return (
    <div
      className={clsx(
        'mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300',
        className,
      )}>
      {children}
    </div>
  );
}
