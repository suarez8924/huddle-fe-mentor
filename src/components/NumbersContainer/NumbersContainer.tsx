import './NumbersContainer.scss';
import { Numbers } from '../Numbers/Numbers';
import iconCommunities from '../../assets/images/svg/icon-communities.svg';
import iconMessages from '../../assets/images/svg/icon-messages.svg';

export const NumbersContainer = () => {
  return (
    <section className="numbers-container">
      <Numbers
        icon={iconCommunities}
        numbers="1.4k+"
        label="Communities formed"
      />
      <Numbers icon={iconMessages} numbers="2.7m+" label="Messages sent" />
    </section>
  );
};
