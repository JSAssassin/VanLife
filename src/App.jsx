import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/vans/About';
import Home from './pages/vans/Home';
import Layout from './components/Layout';
import VanDetail from './pages/vans/VanDetail';
import Vans from './pages/vans/Vans';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
