import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import About from "./components/about/AboutInfo";
import Footer from "./components/footer/Footer";

const App = () =>  {
  return (
    <div className="App">
     
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/projects" element={<Project/>}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
