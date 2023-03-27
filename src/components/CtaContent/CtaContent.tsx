import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import './CtaContent.scss';

interface CtaContentProps {
  heading: string;
  body?: string;
  button: {
    label: string;
    onClick: () => void;
  };
  image?: string;
  hasDecorativeWave?: boolean;
  className?: string;
}

export const CtaContent = ({
  heading,
  body,
  button,
  image,
  hasDecorativeWave = false,
  className = '',
}: CtaContentProps) => {
  return (
    <section
      className={`cta-content ${
        hasDecorativeWave ? 'has-decorative-wave' : ''
      } ${className}`}
    >
      <h2 className="heading">{heading}</h2>
      {body && <p>{body}</p>}
      <PrimaryButton onClick={button.onClick}>{button.label}</PrimaryButton>
      {image && (
        <picture>
          <img src={image} alt="" />
        </picture>
      )}
    </section>
  );
};
