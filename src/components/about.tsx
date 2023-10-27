import Section, {SectionProps} from './section';

export default function About(props: Omit<SectionProps, 'id' | 'title'>) {
  return (
    <Section id="about" title="About" {...props}>
      <div>
        <p className="mb-4">
          A versatile software engineer with a Master degree from the University of Southern
          California, specializing in full-stack development. With over 5 years of experience in
          software development, I excel in web development and cross-platform applications.
          Proficient in leveraging cutting-edge technologies such as TypeScript, WebAssembly,
          Golang, and Rust to deliver outstanding results.
        </p>
        <p className="mb-4">
          Since 2021, I made the decision to venture beyond frontend development, embarking on a
          journey into the realm of cybersecurity. Diligently, I honed my skills through extensive
          coursework on platforms like Hack The Box and TryHackMe, delving into various domains
          including cryptography, secret cracking, reverse engineering, web attacking, and pawn
          techniques. During my tenure at the Cyborg in USC, I actively engaged in Capture The Flag
          (CTF) competitions, earning commendable rankings.
        </p>
        <p className="mb-4">
          In my downtime, you'll often find me in the kitchen, experimenting with various cooking
          and baking recipes. I love tweaking them to add my own personal touch. When not in chef
          mode, I'm immersed in the gaming world. Whether it's diving into the latest blockbuster
          titles or exploring unique indie games, I'm always up for an epic gaming session.
        </p>
      </div>
    </Section>
  );
}
