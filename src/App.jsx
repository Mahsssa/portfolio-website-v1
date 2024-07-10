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
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <MyProjects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
