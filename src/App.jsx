import './index.css'
import { useEffect } from 'react' // Added this
import { useLocation, Routes, Route } from 'react-router-dom' // Added useLocation
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Vision from './components/Vision'
import Team from './components/Team'
import Stories from './components/Stories'
import Projects from './components/Projects'
import Contact from './components/Contact'

// 1. This function handles the "Scroll to Top" behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      {/* 2. ScrollToTop MUST be inside the fragment <> */}
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Team />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App