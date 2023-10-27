import {SVGProps} from 'react';
import IconGithub from './github';
import IconLeetcode from './leetcode';
import IconLinkedin from './linkedin';
import IconArrowRight from './arrowRight';
import IconUpRightArrow from './upRightArrow';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: 'github' | 'leetcode' | 'linkedin' | 'arrow-right' | 'up-right-arrow';
}

export default function Icon({name, ...props}: IconProps) {
  switch (name) {
    case 'github':
      return <IconGithub {...props} />;
    case 'leetcode':
      return <IconLeetcode {...props} />;
    case 'linkedin':
      return <IconLinkedin {...props} />;
    case 'arrow-right':
      return <IconArrowRight {...props} />;
    case 'up-right-arrow':
      return <IconUpRightArrow {...props} />;
  }
}
