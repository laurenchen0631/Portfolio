import Image from 'next/image';
import Card from './card';
import Section, {SectionProps} from './section';

export default function Projects(props: Omit<SectionProps, 'id' | 'title'>) {
  return (
    <Section id="projects" title="Projects" {...props}>
      <ol>
        <li className="mb-12">
          <Card
            header={
              <Image
                alt="cooking"
                src="/img/maintain.jpeg"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            title="Cooking Composer"
            subtitle="In Progress"
            body="An application that allows users to compare multiple recipes easily and compose their own version of recipe by drag-and-drop. The application also provides scientific unit conversion."
            tags={[
              'Rust',
              'Axum',
              'OpenAPI',
              'Protobuf',
              'PostgresSQL',
              'React',
              'TypeScript',
              'Next.js',
              'TailwindCSS',
              'Docker',
              // 'Swift',
              // 'iOS',
              // 'Kotlin',
              // 'Android',
            ]}
          />
        </li>

        <li className="mb-12">
          <Card
            header={
              <Image
                alt="leetcode"
                src="/img/leetcode.png"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            link="https://github.com/laurenchen0631/interview/tree/master/leetcode"
            title="Leetcode Writeup"
            body="My Leetcode solutions with detailed explanation and analysis."
            tags={['Python', 'TypeScript', 'C++', 'Rust', 'Swift', 'Algorithm', 'Data Structure']}
          />
        </li>

        <li className="mb-12">
          <Card
            header={
              <Image
                alt="ctf"
                src="/img/ctf.jpeg"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            link="https://github.com/laurenchen0631/CTF-writeup"
            title="CTF Writeup"
            body="The records of CTF problems and my solutions."
            tags={[
              'Web Attacking',
              'Injection',
              'XSS',
              'OSINT',
              'Reverse Engineering',
              'Forensics',
              'Cryptography',
              'Linux',
              'Windows',
            ]}
          />
        </li>

        <li className="mb-12">
          <Card
            // header={
            //   <Image
            //     alt="GeoRush"
            //     src="/IMG_3515.jpeg"
            //     width={200}
            //     height={48}
            //     className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
            //   />
            // }
            link="https://github.com/laurenchen0631/GeoRush"
            title="GeoRush"
            body="A running game that was made by Unity on WebGL."
            tags={['Unity', 'C#', 'WebGL', 'Game Development']}
          />
        </li>

        {/* <li className="mb-12">
          <Card
            header={
              <Image
                alt=""
                src="/IMG_3515.jpeg"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            title="HighBelow"
            body="A third-person shooting arcade game as spin-off of GeoRush."
            tags={['Unity', 'C#']}
          />
        </li> */}

        <li className="mb-12">
          <Card
            header={
              <Image
                alt="logic prover"
                src="/img/resolution.jpeg"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            title="First-Order Logic Prover"
            body="A first-order logic prover that can prove the validity of a given formula."
            tags={['Python', 'Parser']}
          />
        </li>

        <li className="mb-12">
          <Card
            header={
              <Image
                alt="pente"
                src="/img/pente.png"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            title="PenteAI"
            body="A Pente game AI that can play against human players."
            tags={['C++', 'AI', 'Alpha-Beta Pruning', 'Minimax']}
          />
        </li>

        <li className="mb-12">
          <Card
            // header={
            //   <Image
            //     alt=""
            //     src="/IMG_3515.jpeg"
            //     width={200}
            //     height={48}
            //     className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
            //   />
            // }
            link="https://github.com/studentBC/panoramaProject"
            title="Video Panorama"
            body="A video panorama generator that can generate a panorama image from a video."
            tags={['Python', 'OpenCV', 'Image Processing']}
          />
        </li>

        <li className="mb-12">
          <Card
            // header={
            //   <Image
            //     alt=""
            //     src="/IMG_3515.jpeg"
            //     width={200}
            //     height={48}
            //     className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
            //   />
            // }
            link="https://github.com/laurenchen0631/RNews"
            title="RNews"
            body="A news app built with React Native."
            tags={['React Native', 'TypeScript']}
          />
        </li>

        <li className="mb-12">
          <Card
            header={
              <Image
                alt="exwd"
                src="/img/exwd.png"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            title="ExchangeWorld"
            body="A social website that aims to help people exchange their items."
            link="https://github.com/ExchangeWorld"
            tags={[
              'Angular',
              'jQuery',
              'Node.js',
              'Express.js',
              'MongoDB',
              'Google Map API',
              'JavaScript',
              'HTML',
              'CSS',
            ]}
          />
        </li>

        <li className="mb-12">
          <Card
            header={
              <Image
                alt="owl carousel"
                src="/img/owl.png"
                width={200}
                height={48}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
              />
            }
            link="https://github.com/laurenchen0631/react-owl-carousel"
            title="React Owl Carousel"
            body="A React component that wraps Owl Carousel 2."
            tags={['React', 'Webpack', 'Rollup', 'TypeScript', 'JavaScript']}
          />
        </li>
      </ol>
    </Section>
  );
}
