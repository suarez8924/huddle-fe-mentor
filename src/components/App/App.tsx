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
          heading="Build the community your fans will love"
          body="Huddle re-imagines the way we build communities. You are a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
          button={{ label: 'Get started for free', onClick: () => {} }}
          image={ScreenMockups}
        />
        <CtaContent
          className="end-section"
          heading="Ready to build your community?"
          button={{ label: 'Get started for free', onClick: () => {} }}
          hasDecorativeWave
        />
      </main>
    </Fragment>
  );
};

export default App;
