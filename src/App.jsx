import "./App.css";

import Header from "./components/header";
import Btnblack from "./components/btnblack";
import Btnwhite from "./components/btnwhite";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Otzive from "./components/otzive";
import Footer from "./components/footer";


import img1 from "./assets/Ultimate.png";
import img2 from "./assets/Untitled design(109) 1.png";
import img3 from "./assets/symbols.png";
import img4 from "./assets/shopping.png";
import img5 from "./assets/AJIO.png"
import img6 from "./assets/image.png";
import img7 from "./assets/image copy.png";
import img8 from "./assets/image copy 2.png";
import img9 from "./assets/Slick.png";
import img10 from "./assets/man-brown-suede-sneakers 1.png";
import img11 from "./assets/image copy 3.png";
import img12 from "./assets/image copy 4.png";
import img13 from "./assets/image copy 5.png";
import img14 from "./assets/Untitled design(108) 1.png";
import img15 from "./assets/Untitled design(108) 1 (1).png";
import img16 from "./assets/Untitled design(108) 1 (2).png";
import img17 from "./assets/Untitled design(108) 1 (3).png";
import img18 from "./assets/Untitled design(108) 1 (4).png";
import img19 from "./assets/Untitled design(108) 1 (5).png";
import img20 from "./assets/image1.png";
import img21 from "./assets/image copy 6.png";


let disFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const App = () => {
  return (
    <div>
      <Header />

      <div className="section1">
        <div className="div1sec1">
          <p className="p1">Find Your Sole Mate with Us</p>

          <p className="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </p>
          <Btnblack name="Shop Now" />
        </div>

        <div className="div2sec1">
          <img className="img1" src={img1} alt="" />

          <div className="d1sec1">
            <img className="img2" src={img2} alt="" />
            <p className="p3">Trendy slick pro</p>
            <p className="p4">₹ 3999.00</p>
          </div>
        </div>
      </div>

      <div className="section2">
        <img className="img3" src={img3} alt="" />
        <img className="img4" src={img4} alt="" />
        <img className="img5" src={img5} alt="" />
        <img className="img3" src={img3} alt="" />
        <img className="img4" src={img4} alt="" />
        <img className="img5" src={img5} alt="" />
      </div>

      <div className="section3">
        <div className="div1sec3">
          <p className="p1sec3">Our trending shoes</p>
          <p className="p2sec3">Most popular products</p>
          <p className="p3sec3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <Btnblack name="Explore" />
        </div>

        <div className="div2sec3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="box">
            <Card1 sena="Rs. 2999.00" name="Running canvas shoes" img={img6} />
            <Card1 sena="Rs. 2999.00" name="Running casual shoes" img={img7} />
            <Card1 sena="Rs. 2999.00" name="casual nike shoes" img={img8} />
            <Card1 sena="Rs. 2999.00" name="Running canvas shoes" img={img6} />
            <Card1 sena="Rs. 2999.00" name="Running casual shoes" img={img7} />
            <Card1 sena="Rs. 2999.00" name="casual nike shoes" img={img8} />
            <Card1 sena="Rs. 2999.00" name="Running canvas shoes" img={img6} />
            <Card1 sena="Rs. 2999.00" name="Running casual shoes" img={img7} />
            <Card1 sena="Rs. 2999.00" name="casual nike shoes" img={img8} />
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="section4">
        <img className="img9" src={img9} alt="" />
        <img className="img100" src={img10} alt="" />

        <div className="div1sec4">
          <p className="p1sec4">Are you ready to lead the way</p>
          <p className="p2sec4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>

          <button className="btnExp">Explore</button>

          <div className="divimgsec4">
            <img className="img11" src={img11} alt="" />
            <img className="img11" src={img12} alt="" />
            <img className="img11" src={img13} alt="" />
          </div>
        </div>
      </div>

      <div className="section5">
        <p className="p1sec5">best selling</p>

        <div className="div1sec5">
          <Btnblack name="Man" />
          <Btnwhite name="Woman" />
          <Btnwhite name="Boy" />
          <Btnwhite name="Child" />
        </div>

        <div className="box2">
          <Card2
            img={img14}
            name="Formal canvas shoe for man"
            nowsena="₹2999.00"
            lastsena="₹4999.00"
          />
          <Card2
            img={img15}
            name="Sneakers shoe for man"
            nowsena="₹2999.00"
            lastsena="₹4999.00"
          />
          <Card2
            img={img16}
            name="Slick Sneakers shoe "
            nowsena="₹2999.00"
            lastsena="₹4999.00"
          />
          <Card2
            img={img17}
            name="Slick running shoes"
            nowsena="₹2999.00"
            lastsena="₹4999.00"
          />
          <Card2
            img={img18}
            name="Formal canvas shoe for man"
            nowsena="₹2999.00"
            lastsena="₹4999.00"
          />
          <Card2
            img={img19}
            name="Formal Slick shoe for man"
            nowsena="₹2999.00"
            lastsena="₹4999.00"
          />
        </div>
      </div>

      <div className="section6">
        <p className="p1sec5">Client Testimonial</p>

        <div className="divsec6">
          <Otzive
            img={img20}
            name="Meythli odex"
            img2={img21}
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Otzive
            img={img20}
            name="Meythli odex"
            img2={img21}
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Otzive
            img={img20}
            name="Meythli odex"
            img2={img21}
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Otzive
            img={img20}
            name="Meythli odex"
            img2={img21}
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>

      <Footer/>

    </div>
  );
};

export default App;
