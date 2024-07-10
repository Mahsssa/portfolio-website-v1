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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <Hero />
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
