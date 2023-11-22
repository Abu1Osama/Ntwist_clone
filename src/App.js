import { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

import Language from "./Components/Language";
import ScrollToTop from "./Components/ScrollToTop";
import Aos from "aos";
import SearchPage from "./Components/SearchPage";
import Navbar from "./Components/Navbar";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Language />
      <ScrollToTop />
    </>
  );
}

export default App;
