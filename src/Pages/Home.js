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
          <h2>THE MOO BEYOND EDGE/LET'S MOO BEYOND</h2>
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
          <p>
            Second, is the product itself. Our A2 ghee surpasses any other in
            terms of quality, taste and consistency. the deep colour of golden
            dandelion yellow, the rich aroma of nutty earthiness, the grainy
            semi-liquid texture, and last but not the least is the taste which
            is an exploration into all five of the senses, a final testimony to
            the highest quality of standards we abide to. With Moo Beyond's 100%
            organic A2 ghee, you will finally discover the essential superiority
            of natural and authentic ghee, and realize that you have been
            missing out.
          </p>
        </div>
        <div className="banner-rcontr">
          <div>image1</div>
          <div>
            <div>image 2</div>
            <div>image 3</div>
          </div>
        </div>
      </div>

      <div className="product-contr">
        <div className="product-info">main image</div>
        <div className="product-descr">main image</div>
      </div>
    </div>
  );
}
