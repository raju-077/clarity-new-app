import { Link } from "react-router-dom";

export default function Footer() {

    return(
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="logo">Clarity News</div>
                    <div className="copyright">© 2026 Clarity News. Professional, helpful, and transparent reporting.</div>
                </div>
                <div className="footer-links">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <Link to="https://www.linkedin.com/in/nelli-hari-736696257/">Contact Us</Link>
                    <Link to="/aboutus">About Us</Link>
                </div>
          </div>
  </footer>
    );
}