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



function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
  
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    
    const id = decodeURIComponent(hash.slice(1));
    const goToTarget = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });

    
    goToTarget();
    const interval = setInterval(goToTarget, 100);
    const stop = setTimeout(() => clearInterval(interval), 3000);

   
    const cancel = () => {
      clearInterval(interval);
      clearTimeout(stop);
    };
    const events = ["wheel", "touchstart", "keydown", "pointerdown"];
    events.forEach((e) => window.addEventListener(e, cancel, { once: true, passive: true }));

    return () => {
      cancel();
      events.forEach((e) => window.removeEventListener(e, cancel));
    };
  }, [pathname, hash]);

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