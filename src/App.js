import Navbar from "./Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Team from "./pages/Team"
import Partners from "./pages/Partners"
import Feedback from "./pages/Feedback"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="pt-16 flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  )
}

export default App