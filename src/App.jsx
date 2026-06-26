import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <ScrollProgress />
      <CursorGlow />
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
