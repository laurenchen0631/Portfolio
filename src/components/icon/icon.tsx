import { SVGProps } from "react";
import IconGithub from "./github";
import IconLeetcode from "./leetcode";
import IconLinkedin from "./linkedin";

export interface IconProps extends SVGProps<SVGSVGElement> {
    name: 'github' | 'leetcode' | 'linkedin' ;
}

export default function Icon({name, ...props}: IconProps) {
    switch (name) {
        case 'github':
            return <IconGithub {...props} />;
        case 'leetcode':
            return <IconLeetcode {...props} />;
        case 'linkedin':
            return <IconLinkedin {...props} />;
    }
}