import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import About from "./components/about/AboutInfo";
import Footer from "./components/footer/Footer";
import ParticleBackground from "./components/background/ParticleBackground";

const App = () => {
  return (
    <div className="App">
      <ParticleBackground className="particle"></ParticleBackground>
      <div className="AppContent">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/projects" element={<Project />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
        <Footer />
    </div>
  );
};

export default App;
