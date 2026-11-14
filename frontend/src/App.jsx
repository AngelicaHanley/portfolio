import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
//App is a React component, a JavaScript function that returns JSX
//JSX lets us write out HTML interface inside JS
function App() {

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}
//allows other files to import and use this component
export default App
