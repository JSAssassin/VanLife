import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
