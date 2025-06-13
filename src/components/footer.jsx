import "./footer.css";

import img22 from "../assets/facebook.png";
import img23 from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="divf1">
          <p className="p1f1">Slick </p>
          <p className="p2f1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <img src={img22} alt="" />
          <img src={img23} alt="" />
        </div>

        <form className="divf2">
          <label htmlFor="email">Subscribe to our news latter</label>
          <input type="email" id="email" placeholder="Enter Email..." />
        </form>

        <div className="divf3">
          <h2>Quick Link’s</h2>
          <p>
            <a href="">Home</a>
          </p>
          <p>
            <a href="">Shop</a>
          </p>
          <p>
            <a href="">Collection</a>
          </p>
          <p>
            <a href="">Contact</a>
          </p>
          <p>
            <a href="">Privacy</a>
          </p>
        </div>
      </div>
      <hr className="hr" />
      <p className="email">slick.com©allrightreserve</p>
    </footer>
  );
};

export default Footer;
