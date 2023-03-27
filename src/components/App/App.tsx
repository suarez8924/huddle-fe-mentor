import { Fragment } from 'react';
import { CtaContent } from '../CtaContent/CtaContent';
import { Header } from '../Header/Header';
import ScreenMockups from '../../assets/images/svg/screen-mockups.svg';
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="app">
        <CtaContent
          className="main-section"
          heading="Build The Community Your Fans Will Love"
          body="Huddle re-imagines the way we build communities. You are a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
          button={{ label: 'Get Started For Free', onClick: () => {} }}
          image={ScreenMockups}
        />
      </main>
    </Fragment>
  );
};

export default App;
