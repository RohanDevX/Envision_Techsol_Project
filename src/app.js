import React from 'react';
import Header from './components/header/header';
import Tripnav from './components/Tripnav/Tripnav';
import VideoSection from './components/VideoSection/VideoSection';
import International from './components/International/International';

function App() {
  return (
    <div>
      <Header />
      <Tripnav />
      <VideoSection />
      <International />
    </div>
  );
}

export default App;
