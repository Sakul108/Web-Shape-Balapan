import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Vision from './components/Vision'
import Team from './components/Team'
import Stories from './components/Stories'

import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />}    />
        <Route path="/vision"  element={<Vision />}  />
        <Route path="/team"    element={<Team />}    />
        <Route path="/stories" element={<Stories />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App