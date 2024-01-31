import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import CepSearch from 'pages/CepSearch';

const MyRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cepsearch" element={<CepSearch />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
