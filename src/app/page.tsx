"use client";

import Header from '@/components/header';
import Icon from '@/components/icon/icon'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('about', entry.intersectionRatio)
      });
    }, {
      root: null, 
      threshold: 1,
    })

    observer.observe(aboutRef.current!);

    return () => {
      observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('timeline', entry.intersectionRatio)
      });
    }, {
      root: null, 
      threshold: 1,
    })

    observer.observe(timelineRef.current!);

    return () => {
      observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('project', entry.intersectionRatio)
      });
    }, {
      root: null, 
      threshold: 1,
    })

    observer.observe(projectRef.current!);

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header
          name="Pinchia Chen"
          title="Software Engineer / Ethical Hacker @ USC"
          socialMedias={[
            {name: 'github', url: 'https://github.com/laurenchen0631/'},
            {name: 'linkedin', url: 'https://www.linkedin.com/in/pinchiachen/'},
            {name: 'leetcode', url: 'https://leetcode.com/Xhriman/'},
          ]}
          sections={[
            {id: 'about', title: 'About'},
            {id: 'timeline', title: 'Timeline'},
            {id: 'projects', title: 'Projects'},
          ]}
          activeSection="about"
        />
        
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section ref={aboutRef} id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>

            <div>
              <p className="mb-4">Phasellus mauris sapien, congue sit amet massa ut, porta condimentum erat. Nulla eu elit rutrum, hendrerit felis tempus, aliquet orci. Ut sodales mattis erat sit amet sollicitudin. Duis viverra ex sed euismod varius. Morbi convallis feugiat nisi, vel semper nisi sagittis quis. Fusce at nunc sit amet felis accumsan venenatis in sit amet nunc. Suspendisse varius diam at ultrices pharetra. Vestibulum facilisis ante mi, eu accumsan ex eleifend eu. Aenean consequat condimentum leo, non hendrerit sem iaculis sed. Etiam mollis lectus sit amet nisl venenatis, quis pretium nunc convallis. Maecenas ut turpis sed risus bibendum consectetur. Mauris vel bibendum quam.</p>
              <p className="mb-4">In sed nisl eu est tempor efficitur. Phasellus consectetur et turpis id dignissim. Aliquam vehicula est vitae odio luctus, in laoreet sapien venenatis. Mauris et mi non sem efficitur condimentum eget ac tellus. Quisque aliquet est non nisl mattis, vitae sollicitudin mauris luctus. Ut at ipsum consectetur, auctor tortor quis, consequat tellus. Nunc quis volutpat augue, at gravida orci. Phasellus tincidunt, dui ullamcorper laoreet convallis, eros lorem vestibulum nisl, vitae posuere nibh tortor eget libero. Pellentesque sodales faucibus gravida. Ut vitae nibh eu augue aliquam posuere nec eu libero. Sed tempus consectetur lacus quis euismod. Integer vitae tortor ut felis pulvinar facilisis a vitae ligula. Mauris quis ex mi.
              </p>
            </div>
          </section>

          <section ref={timelineRef} id="timeline" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Timeline</h2>
            </div>

            <ol>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                  <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2021 — Present
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://upstatement.com" target="_blank" rel="noopener">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Lead Engineer</span>
                      </a>
                    </h3>
                    <div className="text-slate-500">Senior Engineer</div>
                    <p className="mt-2 text-sm leading-normal">
                    Curabitur aliquam pellentesque cursus. Nunc volutpat urna quis dignissim lobortis. Proin nec nulla massa. Nam id tincidunt risus. Quisque imperdiet aliquam feugiat. Nunc consectetur est eget tincidunt fermentum. Etiam imperdiet erat congue, volutpat justo nec, accumsan purus. Mauris porttitor fringilla mauris in tincidunt. Duis eros arcu, suscipit sit amet velit nec, efficitur pharetra urna. In ultricies est in sem pharetra, quis hendrerit nulla consectetur.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </li>
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React Native
                      </li>
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        SCSS
                      </li>
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        WordPress
                      </li>
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        JavaScript
                      </li>
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>

            <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" href="/resume.pdf">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Resume
              </span>
            </a>
          </section>

          <section ref={projectRef} id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>

            <ol>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
  
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://upstatement.com" target="_blank" rel="noopener">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Lead Engineer</span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                    Curabitur aliquam pellentesque cursus. Nunc volutpat urna quis dignissim lobortis. Proin nec nulla massa. Nam id tincidunt risus. Quisque imperdiet aliquam feugiat. Nunc consectetur est eget tincidunt fermentum. Etiam imperdiet erat congue, volutpat justo nec, accumsan purus. Mauris porttitor fringilla mauris in tincidunt. Duis eros arcu, suscipit sit amet velit nec, efficitur pharetra urna. In ultricies est in sem pharetra, quis hendrerit nulla consectetur.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </li>
                      <li className="mr-1.5 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React Native
                      </li>
                    </ul>

                  </div>

                  <Image alt="" src="/IMG_3515.jpeg" width={200} height={48} className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" />
                </div>
              </li>
            </ol>
          </section>


        </main>
      </div>
    </div>
  )
}
