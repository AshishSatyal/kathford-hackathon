import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Prizes from './components/Prizes';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Ourteam from './components/Ourteam';
import Partners from './components/Partners';
import Blob from './components/Blob';

const App = () => {
  return (
    <>
      <div className="relative">
        <div className="cursor-pointer absolute z-0">
          <Blob />
        </div>
        <div className="body-section relative z-10">
          <Header />
          <Hero />
          <Prizes />
          <Tracks />
          <Schedule />
          <Ourteam />
          <Faq />
          <Partners />
        </div>
      </div>
    </>
  );
};

export default App;
