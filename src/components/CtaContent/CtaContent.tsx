import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

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
      className={`${
        hasDecorativeWave ? 'has-decorative-wave' : ''
      } ${className}`}
    >
      <h2>{heading}</h2>
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
