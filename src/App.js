import React from 'react';
import Layout from './components/Layout/Layout';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import Countdown from './components/Countdown/Countdown';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import BouncingArrow from './components/BouncingArrow/BouncingArrow';
import ScrollAnimatedContainer from './components/Invitation/ScrollAnimatedContainer';
import '@fontsource/dancing-script';
import '@fontsource/montserrat';

function App() {
  return (
    <Layout>
      <WelcomeMessage />
      <Countdown />
      <MusicPlayer />
      <BouncingArrow />
      <ScrollAnimatedContainer />
    </Layout>
  );
}

export default App;