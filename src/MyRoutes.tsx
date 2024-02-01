import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import ProfileSearch from 'pages/ProfileSearch';

const MyRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profiles" element={<ProfileSearch />} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
