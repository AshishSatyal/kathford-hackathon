import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Prizes from "./components/Prizes";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Prizes />
      <Schedule />
      <Faq />
    </>
  );
}

export default App;
