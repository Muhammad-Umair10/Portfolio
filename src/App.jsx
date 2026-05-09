import './App.css'
import Home from './home.jsx'
import Navbar from './navbar.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import NeonCursor from './components/NeonCursor.jsx'

function App() {

  return (
    <>
      <NeonCursor />
      <Navbar />
      <Home />
      <Faq />
      <Contact />
      <ScrollToTop />
    </>
  )
}

export default App
