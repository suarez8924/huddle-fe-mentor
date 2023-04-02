import { ReactComponent as IconFacebook } from '../../assets/images/svg/icon-facebook.svg';
import { ReactComponent as IconInstagram } from '../../assets/images/svg/icon-instagram.svg';
import { ReactComponent as IconTwitter } from '../../assets/images/svg/icon-twitter.svg';
import './SocialMediaIcon.scss';

type SocialMedia = 'FACEBOOK' | 'INSTAGRAM' | 'TWITTER';

const Icons = {
  FACEBOOK: IconFacebook,
  INSTAGRAM: IconInstagram,
  TWITTER: IconTwitter,
};

interface SocialMediaIconProps {
  href: string;
  ariaLabel: string;
  icon: SocialMedia;
  className?: string;
}

export const SocialMediaIcon = ({
  href,
  ariaLabel,
  icon,
  className = '',
}: SocialMediaIconProps) => {
  const Icon = Icons[icon];
  return (
    <a
      className={`social-media-icon ${className}`}
      href={href}
      target="_blank"
      aria-label={ariaLabel}
    >
      <Icon />
    </a>
  );
};
