import './NumbersContainer.scss';
import { Numbers } from '../Numbers/Numbers';
import { ReactComponent as iconCommunities } from '../../assets/images/svg/icon-communities.svg';
import { ReactComponent as iconMessages } from '../../assets/images/svg/icon-messages.svg';

export const NumbersContainer = () => {
  return (
    <section className="numbers-container">
      <Numbers
        icon={iconCommunities}
        numbers="1.4k+"
        label="Communities formed"
      />
      <Numbers
        className="icon-pink"
        icon={iconMessages}
        numbers="2.7m+"
        label="Messages sent"
      />
    </section>
  );
};
