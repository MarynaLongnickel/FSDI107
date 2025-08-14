import './App.css';
import Header from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"

import{ BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/FSDI107/my-react-store/home' element={<Home />}></Route>
        <Route path='/FSDI107/my-react-store/catalog' element={<Catalog />}></Route>
        <Route path='/FSDI107/my-react-store/about' element={<About />}></Route>
        <Route path='/FSDI107/my-react-store/contact' element={<Contact />}></Route>
        <Route path='/FSDI107/my-react-store/cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
