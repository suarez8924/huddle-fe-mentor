import { Fragment } from 'react';
import { CtaContent } from '../CtaContent/CtaContent';
import { Header } from '../Header/Header';
import screenMockups from '../../assets/images/svg/screen-mockups.svg';
import './App.scss';
import { ContentWithImage } from '../ContentWithImage/ContentWithImage';
import illustrationGrowTogether from '../../assets/images/svg/illustration-grow-together.svg';
import illustrationFlowingConversation from '../../assets/images/svg/illustration-flowing-conversation.svg';
import illustrationYourUsers from '../../assets/images/svg/illustration-your-users.svg';

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
          image={screenMockups}
        />
        <ContentWithImage
          heading="Flowing conversations"
          body="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          image={illustrationGrowTogether}
        />
        <ContentWithImage
          heading="Grow together"
          body="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
          image={illustrationFlowingConversation}
          isReversed
        />
        <ContentWithImage
          heading="Your users"
          body="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
          image={illustrationYourUsers}
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
