import Navbar from "./src/components/Navbar";
import HeroSlider from "./src/components/HeroSlider";
import Stats from "./src/components/Stats";
import Reviews from "./src/components/Reviews";
import ContactForm from "./src/components/ContactForm";
import Address from "./src/components/Address";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Stats />
      <Reviews />
      <ContactForm />
      <Address />
    </>
  );
}

export default App;