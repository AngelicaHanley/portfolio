import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Resume from './pages/Resume'
import Encore from './pages/Encore'
import ComingSoon from './pages/ComingSoon'
import BehindDesign from './pages/BehindDesign'
import './App.css'

function App() {

  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/encore" element={<Encore />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="/behindDesign" element={<BehindDesign />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
