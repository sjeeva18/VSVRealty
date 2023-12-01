import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Properties from "./components/Properties/Properties";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Values from "./components/Values/Values";
import Lands from "./components/Lands/Lands";
import SoldOut from "./components/SoldOut/SoldOut";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Properties />
      <Lands />
      <Values />
      <SoldOut />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
