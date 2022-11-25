import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../Components/Card/Card";
export default function Home() {
  return (
    <div className="body-cntr">
      <div className="header-cntr">
        <div className="nav-container">
          <p className="nav-items">Hone</p>
          <p className="nav-items">Hone</p>
          <p className="nav-items">Hone</p>
          <p className="nav-items">Hone</p>
        </div>

        <div className="header-img">
          <img
            className="header-logo"
            src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          />
        </div>

        <div className="nav-container">
          <p className="nav-items">Hone</p>
          <p className="nav-items">Hone</p>
          <p className="nav-items">Hone</p>
          <p className="nav-items">Hone</p>
        </div>
      </div>

      <div>
        <h1>100% CERTIFIED ORGANIC</h1>
        <p>
          Moo Beyond 100% organic A2 ghee comes backed with major testing and
          certifications to verify its authenticity. These certifications matter
          to validate an original and natural product and set it aside from
          other brands and products. We are serious about how we can give back
          to society and prepared to show proof of it.
        </p>
      </div>

      <div className="card-container">
        <Card
          contents={
            "This certification ensures the compliance of mandatory requirements to be fulfilled in order for a product to be labelled and sold as organic. This also allows for the product to be legally exported to international countries as it meets the international standards for consumption. The Canada Organic certification needs to be renewed every vear"
          }
        />
        <Card
          contents={
            "This certification ensures the compliance of mandatory requirements to be fulfilled in order for a product to be labelled and sold as organic. This also allows for the product to be legally exported to international countries as it meets the international standards for consumption. The Canada Organic certification needs to be renewed every vear"
          }
        />
        <Card
          contents={
            "This certification ensures the compliance of mandatory requirements to be fulfilled in order for a product to be labelled and sold as organic. This also allows for the product to be legally exported to international countries as it meets the international standards for consumption. The Canada Organic certification needs to be renewed every vear"
          }
        />
      </div>
      <button className="view-more-btn">view more</button>
      <div className="add-banner-cntr">
        <div className="banner-lcontr">
          <h2>THE MOO BEYOND EDGE</h2>
          <p>
            What are the characteristic markers of genuine organic A2 ghee? And
            how can you verify its authenticity? Let's check the facts, and
            investigate before we invest. Good A2 ghee can be identified by
            these essential points. First the verified certifications; many ghee
            products on the market today falsify claims of authenticity without
            obtaining verified certifications, unlike Moo Beyond which has gone
            a mile ahead other products by being the first A2 ghee to have more
            than 7 certifications
          </p>
          <button className="order-now-btn">ORDER NOW</button>
        </div>
        <div className="banner-rcontr">
          <div className="banner-image">
            <img
              className="banner-points-image"
              src={require("../Assets/Images/young-male.png")}
            />
          </div>

          <div className="image-botm-contr">
            <div className="sub-banner-image">
              <img
                className="motherdaughter"
                src={require("../Assets/Images/mother-doughter.png")}
              />
            </div>
            <div className="sub-banner-image">
              <img
                className="manwithghee"
                src={require("../Assets/Images/man-with-ghee.png")}
              />
            </div>
          </div>
        </div>
      </div>
      <h2>OUR PRODUCT</h2>
      <div className="product-contr">
        <div className="product-info">
          <div className="prd-left-contr">
            <img
              className="ghee-prd-main"
              src={require("../Assets/Images/gee-box.png")}
            />
          </div>

          <div className="prd-right-contr">
            <img
              className="bill-image"
              src={require("../Assets/Images/gee-box.png")}
            />
            <img
              className="bill-image"
              src={require("../Assets/Images/gee-box.png")}
            />
          </div>
        </div>
        <div className="product-descr">
          <h3>ORGANIC A2 COW GHEE</h3>
          <p>CLARIFIED BUTTER</p>
          <p>$1200</p>
          <div className="product-action-contr">
            <div  className="product-counter"><span className="action">-</span><span className="action" >0</span><span className="action">+</span ></div >
            <button  className="product-cart-btn">Add to cart</button>
          </div>
          <div>
            <p className="point">
              1.Rich in antioxidants and vital vitamins like B2. B12. B6. C. E.
              K and fattv acids like Omega-3. Omega-6 as well as healthy amino
              acids.
            </p>
            <p className="point">
              2.Moo Beyond organic A ghee can nourish the body, Improve brain
              tunction, hone health increase immunity, strength en the and
              enhance digestion and imorove liver neatn.
            </p>
            <p className="point">
              3.Great source of nutrition for pregnant women, under-nourished
              children and adolescents, health tood enthusiasts, diabetics and
              people with heart disease and dietary restrictions as well as Keto
              Friendly.
            </p>
            <p className="point">
              4.Cosmetic adolications like moisturising the skin. babv massage
              oil replacement, reduce dark circles around and eves and helps
              reiuvenate chapped lips.
            </p>
            <p className="point">
              5. 100% A2 protein from ayurvedically trusted Man cows. whose milk
              is rich in medicinal properties and increases resistance to
              several diseases.
            </p>
            <p className="point">
              5. 100% A2 protein from ayurvedically trusted Man cows. whose milk
              is rich in medicinal properties and increases resistance to
              several diseases.
            </p>
            <p className="point">
              5. 100% A2 protein from ayurvedically trusted Moo Bevond A2 ghee
              comes with a shelf- ife of 1 veal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
