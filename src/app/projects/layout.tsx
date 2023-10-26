import { FC, PropsWithChildren } from "react";

interface ProjectLayoutProps extends PropsWithChildren {

}

const ProjectLayout: FC<ProjectLayoutProps> = ({children}) => {
    return (
        <main className="p-16">
            {children}
        </main>
    )
}

export default ProjectLayout;