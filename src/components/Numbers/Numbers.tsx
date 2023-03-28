import './Numbers.scss';

interface numbersProps {
  icon: string;
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
  return (
    <div className={`numbers ${className}`}>
      <img src={icon} alt="" />
      <h2 className="heading-large">{numbers}</h2>
      <p className="body body-large">{label}</p>
    </div>
  );
};
