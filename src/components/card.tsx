import {ReactNode, useMemo} from 'react';
import Badge from './badge';
import Link from 'next/link';
import Icon from './icon/icon';

export interface CardProps {
  link?: string;
  external?: boolean;
  header: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  body: ReactNode;
  tags?: string[];
}

export default function Card({link, header, title, subtitle, body, tags = []}: CardProps) {
  const titleLink = useMemo(() => {
    const isExternal = link?.startsWith('http') ?? false;

    if (link === undefined) {
      return (
        <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  text-base">
          {title}
        </span>
      );
    } else if (isExternal) {
      return (
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  text-base"
          href={link}
          target="_blank"
          rel="noopener">
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
          {title}
          <Icon name="up-right-arrow" className="inline-block h-4 w-4 ml-2" />
        </a>
      );
    } else {
      return (
        <Link
          href={link}
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  text-base">
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
          {title}
        </Link>
      );
    }
  }, [link, title]);

  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {header}
      </div>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">{titleLink}</h3>
        <div className="text-slate-500">{subtitle}</div>
        <p className="mt-2 text-sm leading-normal">{body}</p>
        <ul className="mt-2 flex flex-wrap">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
