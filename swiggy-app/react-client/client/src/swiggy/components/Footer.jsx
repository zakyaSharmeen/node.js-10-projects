import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="" />
          <p>© 2025 Swiggy Limited</p>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>

          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Available in:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
          <select className="city-dropdown">
            <option>685 cities</option>
          </select>
        </div>

        <div className="footer-section">
          <h3>Social Links</h3>
          <div className="social-icons">
            <a href="/"> <FaLinkedinIn /></a>
            <a href="/"> <FaInstagram /></a>
            <a href="/"> <FaFacebookF /></a>
            <a href="/"> <FaPinterestP /></a>
            <a href="/"> <FaTwitter /></a>

            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>For better experience, download the Swiggy app now</p>
        <div className="download-buttons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
