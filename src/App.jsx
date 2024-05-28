import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Prizes from "./components/Prizes";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Prizes />
      <Tracks />
      <Schedule />
      <Faq />
      <Partners />
    </>
  );
}

export default App;
