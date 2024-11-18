import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import BannerCarousel from './components/BannerCarousel';
import GameList from './components/GameList';
import Header from './components/Header';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <BannerCarousel />
        <Marquee />
        <GameList />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
