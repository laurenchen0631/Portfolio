import Card from './card';
import Icon from './icon/icon';
import Section, {SectionProps} from './section';

export default function Timeline(props: Omit<SectionProps, 'id' | 'title'>) {
  return (
    <Section id="timeline" title="Timeline" {...props}>
      <ol>
        <li className="mb-12">
          <Card
            header="Jan 2022 - Present"
            title="Master at University of Southern California"
            subtitle="Los Angeles, CA"
            body="Computer Science, GPA: 3.85"
            tags={[
              'Cybersecurity',
              'DBMS',
              'Multimedia',
              'Information Retrieval',
              'Artificial Intelligence',
              'Algorithm',
              'Unity',
              'C++',
              'Python',
              'Java',
            ]}
          />
        </li>
        <li className="mb-12">
          <Card
            header="Jan 2021 - Oct 2021"
            title="Staff Software Engineer at AuroraTech"
            subtitle="Frontend Team Lead"
            body="Led a team of 5 frontend engineers to develop a high-performance trading app, processing 100,000+ quotes per second, and its content management system to handle internationalization setting, product management, user management, and deployment. Executed rigorous code reviews and provided constructive feedback to ensure the quality of the codebase."
            link="https://101invest.app/"
            tags={[
              'Next.js',
              'React',
              'Redux',
              'Flutter',
              'TypeScript',
              'TailwindCSS',
              'Material UI',
              'Jest',
              'Cypress',
              'Docker',
              'Nginx',
              'Python',
              'Bash',
              'Team Leadership',
            ]}
          />
        </li>
        <li className="mb-12">
          <Card
            header="2017 - 2020"
            title="Senior Software Engineer at AuroraTech"
            body="Delivered high-quality products for clients from various industries including finance and entertainment. Worked closely with clients to understand their needs and provide technical solutions. Skilled in React Native, TypeScript, microservices architecture, and Go. Achieved up to 70% code reusability between web and mobile platforms, which improved efficiency and reduced development costs."
            tags={[
              'React',
              'React Native',
              'WebGL',
              'iOS',
              'gRPC',
              'TypeScript',
              'JavaScript',
              'PHP',
              'Go',
              'Swift',
              'Docker',
              'Jenkins',
              'PostCSS',
              'SCSS',
            ]}
          />
        </li>
        <li className="mb-12">
          <Card
            header="2015 - 2016"
            title="Intern at Fandora"
            subtitle="Part-time frontend developer"
            link="https://www.fandorashop.com/en"
            body="Built content management system for Fandora, a fashion brand in Taiwan. Delivered text editor and image editor using Canvas API for the business partner to customize the product image and preview the result in real-time. Optimized application performance with Webpack and collaborated with backend developers to implement efficient GraphQL queries."
            tags={[
              'React',
              'Node.js',
              'Material UI',
              'GraphQL',
              'Canvas',
              'JavaScript',
              'jQuery',
              'Google Analytics',
              'Webpack',
              'Gulp',
            ]}
          />
        </li>
        <li className="mb-12">
          <Card
            header="2012 - 2016"
            title="Bachelor at National Chengchi University"
            subtitle="Taipei, Taiwan"
            body="Major: Computer Science, Minor: Japanese"
            tags={[
              'Game Development',
              'Software Engineering',
              'Algorithm',
              'Data Structure',
              'Networking',
              'Operating System',
              'Human Computer Interaction',
              'C',
              'C++',
              'C#',
              'Java',
              'Swift',
            ]}
          />
        </li>
      </ol>

      <a className="leading-tight text-slate-200 font-semibold group" href="/resume.pdf">
        <span className="inline-flex items-center border-b border-transparent group-hover:border-teal-300">
          View Full Resume
          <Icon name="arrow-right" className="w-4 h-4 ml-2" />
        </span>
      </a>
    </Section>
  );
}
