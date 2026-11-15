import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'
//App is a React component, a JavaScript function that returns JSX
//JSX lets us write out HTML interface inside JS
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}
//allows other files to import and use this component
export default App
