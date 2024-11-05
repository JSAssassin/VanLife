import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import VanDetail from './pages/VanDetail';
import Vans from './pages/Vans';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
