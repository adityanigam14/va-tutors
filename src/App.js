import Navbar from "./Navbar"
import Home from "./pages/Home"
import Team from "./pages/Team"
import Feedback from "./pages/Feedback"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="pt-16 w-full h-screen flex flex-col bg-emerald-100 items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  )
}

export default App