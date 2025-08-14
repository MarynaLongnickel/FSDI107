import "./Navbar.css"

import { Link, Links } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="welcome-message">
          <h2>Welcome to Our Amazing Store!</h2>
          <p>Discover incredible products at unbeatable prices</p>
        </div>
        <div className="header-actions">
          <ul className="menu">
            <li className="menu-item"><Link to="/FSDI107/my-react-store/home">Home</Link></li>
            <li className="menu-item"><Link to="/FSDI107/my-react-store/catalog">Catalog</Link></li>
            <li className="menu-item"><Link to="/FSDI107/my-react-store/about">About</Link></li>
            <li className="menu-item"><Link to="/FSDI107/my-react-store/contact">Contact</Link></li>
          </ul>
          {/* <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-button">🔍</button>
          </div> */}
          <div className="cart-icon">
            <Link to="/FSDI107/my-react-store/cart" className="menu-item">
            <span className="cart-symbol">🛒</span>
            <span className="cart-count">0</span>
            </Link>           
          </div>
        </div>
      </div>
    </header>
  );
}

// export new things
export default Header;
