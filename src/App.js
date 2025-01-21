import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Feedback from "./pages/Feedback";
import Classroom from "./pages/Classroom";
import { Route, Routes } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="pt-16 w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/classroom" element={<Classroom />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
