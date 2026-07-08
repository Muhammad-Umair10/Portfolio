import './App.css'
import Home from './home.jsx'
import Navbar from './navbar.jsx'
import Faq from './components/faq.jsx'
import Contact from './components/contact.jsx'
import ScrollToTop from './components/scrollToTop.jsx'
import NeonCursor from './components/neonCursor.jsx'

function App() {

  return (
    <>
      <NeonCursor className="hidden lg:block" />
      <Navbar />
      <Home />
      <ScrollToTop />
    </>
  )
}

export default App
