import { ReactNode } from "react";
import Icon, { IconProps } from "./icon/icon";

interface SocialMedia {
    name: IconProps['name'];
    url: string;
}

interface Section {
    id: string;
    title: string;
}

interface HeaderProps {
    name: ReactNode;
    title: ReactNode;
    socialMedias: SocialMedia[];
    sections: Section[];
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({name, title, socialMedias, sections, activeSection}) => {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                {name}
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {title}
            </h2>
            <ul className="ml-1 mt-8 flex items-center">
                {socialMedias.map(({name, url}) => (
                    <li className="mr-5 text-xs" key={url}>
                        <a className="block hover:text-slate-200" href={url} target='_blank' rel="noopener" title={name}>
                            <Icon name={name} className="w-5 h-5" />
                        </a>
                    </li>
                ))}
            </ul>

            <nav className="nav hidden lg:block">
                <ul className="mt-16 w-max" >
                    {sections.map(({id, title}) => (
                        <li key={id}>
                            <a className="group flex items-center py-3" href={`#${id}`}>
                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    {title}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;