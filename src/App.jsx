import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  MyProjects,
  Footer,
} from "./components";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading && <LoadingScreen />}
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />

          <Experience />

          <MyProjects />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
