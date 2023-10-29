'use client';

import About from '@/components/about';
import Header from '@/components/header';
import Projects from '@/components/projects';
import Timeline from '@/components/timeline';
import {useParams, usePathname} from 'next/navigation';
import {useCallback, useState} from 'react';

export default function Home() {
  const [section, setSection] = useState('about');

  const reachAbout = useCallback(() => {
    setSection('about');
  }, []);
  const reachProjects = useCallback(() => {
    setSection('projects');
  }, []);
  const reachTimeline = useCallback(() => {
    setSection('timeline');
  }, []);
  // console.log(section);

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
          activeSection={section}
        />

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About onVisible={reachAbout} />
          <Timeline onVisible={reachTimeline} />
          <Projects onVisible={reachProjects} />
        </main>
      </div>
    </div>
  );
}
