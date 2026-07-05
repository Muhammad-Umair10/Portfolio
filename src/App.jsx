import './App.css'
import home from './home.jsx'
import navbar from './navbar.jsx'
import faq from './components/faq.jsx'
import contact from './components/contact.jsx'
import scrolltotop from './components/scrollToTop.jsx'
import neonCursor from './components/neonCursor.jsx'

function App() {

  return (
    <>
      <neonCursor />
      <navbar />
      <home />
      <faq />
      <contact />
      <scrolltotop />
    </>
  )
}

export default App
