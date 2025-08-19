
import './Footer.css'; // link the css file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#support">Customer Support</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>📧 support@mystore.com</span>
          <span>📞 1-800-MYSTORE</span>
          <span>📍 123 Commerce St, City, State 12345</span>
          <span>© 2025 My Online Store. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
