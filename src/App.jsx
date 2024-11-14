import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/vans/About';
import Dashboard from './pages/host/Dashboard';
import Home from './pages/vans/Home';
import HostLayout from './components/HostLayout';
import HostVanDetails from './pages/host/HostVanDetails';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanDetailLayout from './components/HostVanDetailLayout';
import HostVans from './pages/host/HostVans';
import Income from './pages/host/Income';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Reviews from './pages/host/Reviews';
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

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetailLayout />}>
              <Route index element={<HostVanDetails />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' index element={<HostVanPhotos />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
