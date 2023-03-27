import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';

export const Header = () => {
  return (
    <header className="header">
      <button className="header-button">
        <Logo className="logo-icon" />
        <h1 className="hidden-heading">Huddle</h1>
      </button>
      <PrimaryButton onClick={() => {}}>Try It Free</PrimaryButton>
    </header>
  );
};
