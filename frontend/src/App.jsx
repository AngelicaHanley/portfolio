import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Resume from './pages/Resume'
import Encore from './pages/Encore'
import Campbell from './pages/Campbell'
import BehindDesign from './pages/BehindDesign'
import FilmPop from './pages/FilmPop'
import AfterDark from './pages/AfterDark'
import './App.css'

function App() {

  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/encore" element={<Encore />} />
        <Route path="/campbell" element={<Campbell />} />
        <Route path="/behindDesign" element={<BehindDesign />} />
        <Route path="/filmPop" element={<FilmPop />} />
        <Route path="/afterDark" element={<AfterDark />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
