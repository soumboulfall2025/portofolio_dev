import Meta from "./composants/Meta";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./composants/Header";
import Home from "./composants/Home";
import Services from "./composants/Services";
import Skills from "./composants/Skills";
import Education from "./composants/Education";
import Experience from "./composants/Experience";
import Contact from "./composants/Contact";

function App() {
  return (
    <>
      <Meta /> {/* ✅ Place-le ici */}
      <Router>
        <Header />
        <div className="pt-20 bg-black text-white min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
