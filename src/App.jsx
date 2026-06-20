import './index.css'
import { useEffect } from 'react' 
import { useLocation, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Vision from './components/Vision'
import Team from './components/Team'
import Stories from './components/Stories'
import Projects from './components/Projects'
import Contact from './components/Contact'

// "Scroll to Top" behavior
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