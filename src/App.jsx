import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Acquisitions from "./pages/Acquisitions.jsx";
import Transparency from "./pages/Transparency.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/despre" element={<About />} />
          <Route path="/noutăți" element={<News />} />
          <Route path="/achiziții" element={<Acquisitions />} />
          <Route path="/transparență" element={<Transparency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
