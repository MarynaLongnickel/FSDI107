import './App.css';
import Header from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import About from './components/About';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Catalog />
      <About />
      <Footer />
    </>
  );
}

export default App;
