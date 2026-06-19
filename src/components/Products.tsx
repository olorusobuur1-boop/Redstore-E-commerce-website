// import React from 'react'
import "./Hero.css";
import category1 from "../assets/images/category-1.jpg";
import category2 from "../assets/images/category-2.jpg";
import category3 from "../assets/images/category-3.jpg";
import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";
import product4 from "../assets/images/product-4.jpg";
import product5 from "../assets/images/product-5.jpg";
import product6 from "../assets/images/product-6.jpg";
import product7 from "../assets/images/product-7.jpg";
import product8 from "../assets/images/product-8.jpg";
import product9 from "../assets/images/product-9.jpg";
import product10 from "../assets/images/product-10.jpg";
import product11 from "../assets/images/product-11.jpg";
import product12 from "../assets/images/product-12.jpg";
import exclusive from "../assets/images/exclusive.png";
import Navbar from "./Navbar";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Footer from "./Footer";

const Products = () => {
  return (
    <>

    <div className="products-category">
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={category1} alt="" />
            </div>
            <div className="col-3">
              <img src={category2} alt="" />
            </div>
            <div className="col-3">
              <img src={category3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <img src={product1} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
              
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src={product2} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
            </div>
            <p>$54.00</p>
          </div>
          <div className="col-4">
            <img src={product3} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarHalfIcon/>
            </div>
            <p>$32.00</p>
          </div>
          <div className="col-4">
            <img src={product4} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarHalfIcon/>
              <StarBorderIcon/>
            </div>
            <p>$53.00</p>
          </div>
        </div>
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <img src={product5} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarBorderIcon/>
            </div>
            <p>$13.00</p>
          </div>
          <div className="col-4">
            <img src={product6} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarHalfIcon/>
              <StarBorderIcon/>
            </div>
            <p>$23.00</p>
          </div>
          <div className="col-4">
            <img src={product7} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarBorderIcon/>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src={product8} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarHalfIcon/>
            </div>
            <p>$50.09</p>
          </div>

          <div className="col-4">
            <img src={product9} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarBorderIcon/>
            </div>
            <p>$53.60</p>
          </div>
          <div className="col-4">
            <img src={product10} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarBorderIcon/>
            </div>
            <p>$388.00</p>
          </div>
          <div className="col-4">
            <img src={product11} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarBorderIcon/>
            </div>
            <p>$540.00</p>
          </div>
          <div className="col-4">
            <img src={product12} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
            </div>
            <p>$45.00</p>
          </div>
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={exclusive} className="offer-img" />
            </div>
            <div className="col-2">
              <p>Exclusively Avalaible on Redstore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is as clear as it can be.
              </small>
              <br />
              <a href="" className="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
