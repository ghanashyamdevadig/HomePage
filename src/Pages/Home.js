import React from "react";
import "./Home.css";
import Card from "../Components/Card/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div className="item" data-value="1">
      <img
        className="header-logo"
        src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
        alt=""
      />
      <p className="text-organic">
        Moo Beyond 100% organic A2 ghee comes backed with major testing and
        certifications to verify its authenticity. These certifications matter
        to validate an original and natural product and set it aside from other
        brands and products. We are serious about how we can give back to
        society and prepared to show proof of it.
      </p>
      <p className="commenter-name">Manja</p>
    </div>,
    <div className="item" data-value="2">
      <img
        className="header-logo"
        src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
        alt=""
      />
      <p className="text-organic">
        Moo Beyond 100% organic A2 ghee comes backed with major testing and
        certifications to verify its authenticity. These certifications matter
        to validate an original and natural product and set it aside from other
        brands and products. We are serious about how we can give back to
        society and prepared to show proof of it.
      </p>
      <p className="commenter-name">Manja</p>
    </div>,
    <div className="item" data-value="3">
      <img
        className="header-logo"
        src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
        alt=""
      />
      <p className="text-organic">
        Moo Beyond 100% organic A2 ghee comes backed with major testing and
        certifications to verify its authenticity. These certifications matter
        to validate an original and natural product and set it aside from other
        brands and products. We are serious about how we can give back to
        society and prepared to show proof of it.
      </p>
      <p className="commenter-name">Manja</p>
    </div>,
    <div className="item" data-value="4">
      <img
        className="header-logo"
        src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
        alt=""
      />
      <p className="text-organic">
        Moo Beyond 100% organic A2 ghee comes backed with major testing and
        certifications to verify its authenticity. These certifications matter
        to validate an original and natural product and set it aside from other
        brands and products. We are serious about how we can give back to
        society and prepared to show proof of it.
      </p>
      <p className="commenter-name">Manja</p>
    </div>,
    <div className="item" data-value="5">
      <img
        className="header-logo"
        src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
        alt=""
      />
      <p className="text-organic">
        Moo Beyond 100% organic A2 ghee comes backed with major testing and
        certifications to verify its authenticity. These certifications matter
        to validate an original and natural product and set it aside from other
        brands and products. We are serious about how we can give back to
        society and prepared to show proof of it.
      </p>
      <p className="commenter-name">Manja</p>
    </div>,
  ];
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="body-cntr">
      <div className="header-cntr">
        <div className="nav-container">
          <p className="nav-items">Home</p>
          <p className="nav-items">Home</p>
          <p className="nav-items">Home</p>
          <p className="nav-items">Home</p>
        </div>

        <div className="header-img">
          <img
            className="header-logo"
            src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          />
        </div>

        <div className="nav-container">
          <p className="nav-items">Home</p>
          <p className="nav-items">Home</p>
          <p className="nav-items">Home</p>
          <p className="nav-items">Home</p>
        </div>
      </div>
      <div className="main-back-cntr">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
        >
          <div>
            <img src="https://img.freepik.com/free-psd/horizontal-banner-hotel-resort_23-2148843057.jpg?w=2000&t=st=1669523012~exp=1669523612~hmac=20889db1ada3d9c5e07c11293ed3eed4bc5dfa21ecd05eb529a9e1ecfd7c17c2" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/horizontal-banner-hotel-resort_23-2148843057.jpg?w=2000&t=st=1669523012~exp=1669523612~hmac=20889db1ada3d9c5e07c11293ed3eed4bc5dfa21ecd05eb529a9e1ecfd7c17c2" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/horizontal-banner-hotel-resort_23-2148843057.jpg?w=2000&t=st=1669523012~exp=1669523612~hmac=20889db1ada3d9c5e07c11293ed3eed4bc5dfa21ecd05eb529a9e1ecfd7c17c2" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/horizontal-banner-hotel-resort_23-2148843057.jpg?w=2000&t=st=1669523012~exp=1669523612~hmac=20889db1ada3d9c5e07c11293ed3eed4bc5dfa21ecd05eb529a9e1ecfd7c17c2" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/horizontal-banner-hotel-resort_23-2148843057.jpg?w=2000&t=st=1669523012~exp=1669523612~hmac=20889db1ada3d9c5e07c11293ed3eed4bc5dfa21ecd05eb529a9e1ecfd7c17c2" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/horizontal-banner-hotel-resort_23-2148843057.jpg?w=2000&t=st=1669523012~exp=1669523612~hmac=20889db1ada3d9c5e07c11293ed3eed4bc5dfa21ecd05eb529a9e1ecfd7c17c2" />
          </div>
        </Carousel>
      </div>
      <div className="second-cntr">
        <div className="second-back-cntr"></div>
      </div>
      <div className="organic">
        <h1>100% CERTIFIED ORGANIC</h1>
        <p className="text-organic">
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
      <div className="banner-cntr">
        <div className="add-banner-cntr">
          <div className="banner-lcontr">
            <h2>THE MOO BEYOND EDGE</h2>
            <p>
              What are the characteristic markers of genuine organic A2 ghee?
              And how can you verify its authenticity? Let's check the facts,
              and investigate before we invest. Good A2 ghee can be identified
              by these essential points. First the verified certifications; many
              ghee products on the market today falsify claims of authenticity
              without obtaining verified certifications, unlike Moo Beyond which
              has gone a mile ahead other products by being the first A2 ghee to
              have more than 7 certifications
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
      </div>
      <div className="product">
        <div className="our-prd-cntr">
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
                <div className="bill-cntr">
                  <img
                    className="bill-image"
                    src={require("../Assets/Images/gee-box.png")}
                  />
                </div>
                <div className="bill-cntr">
                  <img
                    className="bill-image"
                    src={require("../Assets/Images/Group 186.png")}
                  />
                </div>
              </div>
            </div>
            <div className="product-descr">
              <h3>ORGANIC A2 COW GHEE</h3>
              <p>CLARIFIED BUTTER</p>
              <p>$1200</p>
              <div className="product-action-contr">
                <div className="product-counter">
                  <span className="action">-</span>
                  <span className="action">0</span>
                  <span className="action">+</span>
                </div>
                <button className="product-cart-btn">Add to cart</button>
              </div>
              <div>
                <p className="point">
                  1.
                  <span className="text-clr">
                    Rich in antioxidants and vital vitamins like{" "}
                  </span>
                  B2, B1, B6, C, E, K and fatty acids like Omega-3, Omega-6 as
                  well as healthy amino acids.
                </p>
                <p className="point">
                  2.
                  <span className="text-clr">
                    Moo Beyond organic A2 ghee can nourish the body, Improve
                    brain function,{" "}
                  </span>
                  bone health, increase immunity, strengthen the heart and
                  enhance digestion and improve liver health.
                </p>
                <p className="point">
                  3.<span className="text-clr">Great source of</span> nutrition
                  for pregnant women, under-nourished children
                  <span className="text-clr">
                    {" "}
                    and adolescents, health food enthusiasts,
                  </span>{" "}
                  diabetics and people with heart disease and dietary
                  restrictions<span className="text-clr"> as well as</span> Keto
                  Friendly.
                </p>
                <p className="point">
                  4.Cosmetic applications{" "}
                  <span className="text-clr">
                    like moisturising the skin. baby massage oil replacement,
                    reduce dark circles around and eyes and helps rejuvenate
                    chapped lips.
                  </span>
                </p>
                <p className="point">
                  5. <span className="text-clr">100% A2 protein from</span>
                  ayurvedically trusted Malnad Gidda and Hallikar cows.{" "}
                  <span className="text-clr">
                    {" "}
                    whose milk is rich in medicinal properties and increases
                    resistance to several diseases.
                  </span>
                </p>
                <p className="point">
                  6. <span className="text-clr">100% </span> manufactured and
                  packaged in-house{" "}
                  <span className="text-clr">
                    by Jayalakshmi Farms, the parent company of the Moo Beyond.
                  </span>
                </p>
                <p className="point">
                  7.Moo Beyond A2 ghee comes with a shelf life of 1 year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-points">
        <div style={{}}>
          <img
            className="point-logo"
            src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          />
        </div>
        <h1 style={{ backgroundColor: "green" }}>THE MOO BEYOND APPROACH</h1>
        <div className="points">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div className={`point-${index + 1}`}>
                <h3 className="point-heading">100% ORGANIC </h3>
                <p className="point-description">
                  Moo Beyond Ghee Is 100% Organic And Uses Naturally Sourced
                  Ingredients
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="testimonial-container">
        <h1>OUR TESTIMONIALS</h1>
        <p className="testimoial-description">
          Hear from our frequent clients, consumers, and partners we have been
          working with for several years.{" "}
        </p>
        <p className="testimoial-description">
          Our work speaks for itself, and clients have only praises for us.
        </p>
        <AliceCarousel
          disableButtonsControls={true}
          disableDotsControls={true}
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
        <div>
          {/* <img src={require("../Assets/Images/rightarrow.jpeg")}/>
          <img src={require("../Assets/Images/leftarrow.jpeg")}/> */}
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-sub-contr">
          <div>
            <div>
              <img
                className="footer-logo"
                src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
                alt=""
              />
            </div>
            <strong>
              Moo Beyond is an Organic Dairy Brand of Jayalakshmi Farms, India.
            </strong>
            <p>
              Our farm is located on the lush grasslands of Mysore, Karnataka
              region. Our flawless dairy production sets the benchmark of
              excellence for your everyday happy life.
            </p>
          </div>
        </div>
        <div className="footer-sub-contr follow-ups-links">
          <div className="quick-calls">
            <h3>QUICK LINKS</h3>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
          <div className="reach-us">
            <h3>REACH US</h3>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
        <div className="footer-sub-contr">
          <h3>follow us</h3>
          <div className="follw-icon-contr">
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
