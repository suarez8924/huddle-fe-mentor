import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }) => {
  return (
    <header className={`header ${className}`}>
      <button className="header-button">
        <Logo className="logo-icon" />
        <h1 className="hidden-heading">Huddle</h1>
      </button>
      <PrimaryButton
        size="SMALL"
        variant="TRANSPARENT"
        onClick={() => {}}
        label="Try It Free"
      />
    </header>
  );
};
