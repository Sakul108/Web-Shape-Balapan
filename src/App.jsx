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


// "Scroll to Top" behavior. Skipped when the URL points at a section
// (/projects?section=ebook or /projects#ebook): the page scrolls there itself.
function ScrollToTop() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    const hasSection = hash || new URLSearchParams(search).get("section");
    if (hasSection) return;

    window.scrollTo(0, 0);
  }, [pathname, hash, search]);

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