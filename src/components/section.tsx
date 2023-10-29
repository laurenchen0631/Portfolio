'use client';

import {PropsWithChildren, useEffect, useRef} from 'react';

export interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  onVisible?: () => void;
}

export default function Section({id, title, onVisible, children}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!onVisible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.25) {
            onVisible();
          }
        });
      },
      {
        root: null,
        threshold: 0.25,
      },
    );

    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
    };
  }, [onVisible, id]);

  return (
    <section ref={ref} id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">{title}</h2>
      </div>

      {children}
    </section>
  );
}
