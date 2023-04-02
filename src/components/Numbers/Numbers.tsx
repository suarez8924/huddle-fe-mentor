import { FunctionComponent, SVGProps } from 'react';
import './Numbers.scss';

interface numbersProps {
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  numbers: string;
  label: string;
  className?: string;
}
export const Numbers = ({
  icon,
  numbers,
  label,
  className = '',
}: numbersProps) => {
  const Icon = icon;
  return (
    <div className={`numbers ${className}`}>
      <Icon />
      <h2 className="heading-large">{numbers}</h2>
      <p className="body body-large">{label}</p>
    </div>
  );
};
