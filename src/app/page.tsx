'use client';

import About from '@/components/about';
import Header from '@/components/header';
import Timeline from '@/components/timeline';
import {useParams, usePathname} from 'next/navigation';
import {useState} from 'react';

export default function Home() {
  const [section, setSection] = useState('about');

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
          <About onVisible={() => setSection('about')} />
          <Timeline onVisible={() => setSection('timeline')} />

          {/* <section ref={projectRef} id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
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
          </section> */}
        </main>
      </div>
    </div>
  );
}
