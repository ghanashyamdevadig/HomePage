import React, { useState } from "react";
import "./Home.css";
import Card from "../Components/Card/Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export default function Home() {
  const [points, setPoints] = useState([
    {
      heading: "100% ORGANIC",
      description:
        " Moo Beyond Ghee Is 100% Organic And Uses Naturally Sourced Ingredients",
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729892/samples/Leaf_tnjfe1.png",
    },
    {
      heading: "Happy &amp; Healthy Cows",
      description:
        " Openly grazed and grass-fed cows of Malnad Gidda and Hallikar Breeds that produce the highest quality of A2 protein.",
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729886/samples/Group_167_ge15te.png",
    },
    {
      heading: "Farm fresh",
      description:
        "All raw material used is purely sourced in-house from our 120 acres of farm land.",
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729889/samples/Group_169_mpxrlt.png",
    },
    {
      heading: "Antibiotic and Hormone Free",
      description:
        "Natural A2 ghee, free of additives, chemicals. Certified organic and trusted by top Ayurvedic companies.",
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729888/samples/Group_172_db22nk.png",
    },
    {
      heading: "hygienic process",
      description:
        "We follow strict sanitary regulations to maintain and quality and consistency of our product",
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729887/samples/Group_168_iqz2ti.png",
    },
    {
      heading: "Organic Fodder",
      description:
        "Use of organic, natural fodder for our cows as per USDA and FDA regulations.",
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729903/samples/large-bag-white-flour-processing-grain-into-flour-flat-illustration-isolated_124715-1043_1_clwm9s.png",
    },
  ]);

  const [cardData, setCardData] = useState([
    {
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729885/samples/FDA-Approved_g6tqti.png",
      content:
        "This certification ensures the compliance of mandatory requirements for a product to be labelled and sold as organic, legally in national and international markets. The Cannada organic certification needs to be renewed every year.",
    },
    {
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729885/samples/Canada-Organic_blafy7.png",
      content:
        "The Food and Drug Administration ensures safety and efficacy of a manufactured products, and it needs to be renewed every 2 years. FDA approved means the productis safe for consumption and does not contain disease-causing pathogens ",
    },
    {
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669729891/samples/India-Organic_xe8k9u.png",
      content:
        "This certification ensures only raw organic materials were used to manufacture food products in India and is awarded only to organic foods that conform to the National Standards for Organic Products established in 2000",
    },
    {
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669818265/USDA-Organic_vybdh6.png",
      content:
        "USDA certified products are manufactured without the use of prohibited substances or methods like genetic engineering and using only organic methods of farming without the use of synthetic fertilizers or pesticides. USDA must be renewed annually.",
    },
    {
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669818265/HACCP-Certified_ekpixe.png",
      content:
        "Hazard Analysis Critical Control Points, is a food safety management system that runs analysis on raw materials from production to consumption of our product to assure food safety.",
    },
    {
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669818265/ISO-22000_eerblm.png",
      content:
        "The International Organization for Standardization certification regulates the requirements for a food safety management system. This controls food safety hazards and ensures food manufactured is safe for consumption",
    },
    {
      image:
        "https://res.cloudinary.com/dkblvak5a/image/upload/v1669818265/Aditi-Organic_1_jb9dcm.png",
      content:
        "ADITI Organic Certifications Pvt. Ltd., ensures the organic authenticity of products from origin to consumption, after rigorous testing and inspection of applied standards and systems in order to meet the requirements of quality, health and safety",
    },
  ]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div className="item" data-value="1">
      <img
        className="commenter-photo"
        src={require("../Assets/Images/unsplash_6anudmpILw4 (2).png")}
        alt=""
      />
      <p className="text-organic">
        I am very pleased with Moo Beyond’s A2 ghee. It is one of those products
        that I can binge on without feeling guilty or worrying about my diet. It
        provides the protein and nutrition I need after my work- outs. Super
        happy with this amazing product!
      </p>
      <p className="commenter-name">Nachiket Chaudhari</p>
    </div>,
    <div className="item" data-value="2">
      <img
        className="commenter-photo"
        src={require("../Assets/Images/unsplash_6anudmpILw4.png")}
        alt=""
      />
      <p className="text-organic">
        Moo Beyond has changed my lifestyle for the better. It was challenging
        to practice a healthy lifestyle, but with Moo Beyond A2 ghee, I don’t
        have to compromise on taste or health. This is a revolutionary product
        that makes even bland diet food a scrumptious feast.
      </p>
      <p className="commenter-name">-Twinkle Chatopadhyay</p>
    </div>,
    <div className="item" data-value="3">
      <img
        className="commenter-photo"
        src={require("../Assets/Images/unsplash_6anudmpILw4 (1).png")}
        alt=""
      />
      <p className="text-organic">
        I was introduced to Moo Beyond A2 ghee by a friend who swore by it. I
        know why now! I recommend it to everyone I know. The overall quality and
        texture of this ghee is unbelievable. I finally have a superfood that
        actually works wonders.
      </p>
      <p className="commenter-name">April D’Cruz</p>
    </div>,
    <div className="item" data-value="4">
      <img
        className="commenter-photo"
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
      <p className="commenter-name">shyam</p>
    </div>,
    <div className="item" data-value="5">
      <img
        className="commenter-photo"
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
      <p className="commenter-name">shyam</p>
    </div>,
  ];

  const items2 = cardData?.map((item, index) => {
    return <Card image={item?.image} contents={item.content} />;
  });

  const [count, setCount] = useState(0);

  const addition = () => {
    setCount(count + 1);
  };

  const deletion = () => {
    setCount(count - 1);
  };

  return (
    <div className="body-cntr">
     <Header/>
      <div className="main-back-cntr">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
        >
          <div>
            <img
              src={require("../Assets/Images/WhatsApp Image 2022-11-29 at 11.21 1.png")}
            />
          </div>
          <div>
            <img
              src={require("../Assets/Images/WhatsApp Image 2022-11-29 at 11.21 1.png")}
            />
          </div>
          <div>
            <img
              src={require("../Assets/Images/WhatsApp Image 2022-11-29 at 11.21 1.png")}
            />
          </div>
          <div>
            <img
              src={require("../Assets/Images/WhatsApp Image 2022-11-29 at 11.21 1.png")}
            />
          </div>
          <div>
            <img
              src={require("../Assets/Images/WhatsApp Image 2022-11-29 at 11.21 1.png")}
            />
          </div>
          <div>
            <img
              src={require("../Assets/Images/WhatsApp Image 2022-11-29 at 11.21 1.png")}
            />
          </div>
        </Carousel>
      </div>
      <div className="second-cntr">
        <div className="second-back-cntr">
          <div className="ghee-main-cntr">
            <img
              className="ghee-small"
              src={require("../Assets/Images/Ghee.png")}
            />
          </div>
          <div className="ghee-text-main">
            <img
              className="gheeText"
              src={require("../Assets/Images/Indias No 1.png")}
            />
          </div>
          <div className="order-button-div">
            <button className="order-button-now">ORDER NOW</button>
          </div>
        </div>
        {/* <div className="shyam">
          India’s No.1 Trusted A2 ghee, from Farm to Table. Get it Delivered Now!
        </div> */}
        {/* <div>
        <img
              className="new-ghee-bottle"
              src={require("../Assets/Images/.png")}
            />
        </div> */}
      </div>
      <div className="organic">
        <h1 className="certified-organic">100% CERTIFIED & ORGANIC</h1>
        <p className="text-organic-certi">
          Moo Beyond 100% organic A2 ghee comes backed with major testing and
          certifications to verify its authenticity. These certifications matter
          to validate an original and natural product and set it aside from
          other brands and products. We are serious about how we can give back
          to society and prepared to show proof of it.
        </p>
      </div>

      <div className="card-container">
        <AliceCarousel
          disableButtonsControls={true}
          disableDotsControls={true}
          mouseTracking
          items={items2}
          responsive={responsive}
          controlsStrategy="alternate"
        />
        {/* {cardData?.map((item, index)=>{
return(
  <Card image={item?.image} contents={item.content}/>
)
       })} */}
      </div>

      <button className="view-more-btn">VIEW ALL</button>
      <div className="banner-cntr">
        <div className="add-banner-cntr">
          <div className="banner-lcontr">
            <h2 className="text-3">THE MOO BEYOND EDGE</h2>
            <div className="div-exchange">
              <p className="text-4">
                What are the characteristic markers of genuine organic A2 ghee?
                And how can you verify its authenticity? Let's check the facts,
                and investigate before we invest. Good A2 ghee can be identified
                by these essential points. First the verified certifications;
                many ghee products on the market today falsify claims of
                authenticity without obtaining verified certifications, unlike
                Moo Beyond which has gone a mile ahead other products by being
                the first A2 ghee to have more than 7 certifications
              </p>
              <button className="order-now-btn">ORDER NOW</button>
            </div>
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
                  src={require("../Assets/Images/Group 187.png")}
                />
              </div>
              <div className="sub-banner-image">
                <img
                  className="manwithghee"
                  src={require("../Assets/Images/Group 188.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="our-prd-cntr">
          <h1 className="text-5">OUR PRODUCT</h1>
          <div className="product-contr">
            <div className="product-info">
              <div className="prd-left-contr">
                <img
                  className="ghee-prd-main"
                  src={require("../Assets/Images/Ghee.png")}
                />
              </div>

              <div className="prd-right-contr">
                <div className="bill-cntr">
                  <img
                    className="bill-image1"
                    src={require("../Assets/Images/Group 199.png")}
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
              <h2 style={{ margin: "0", padding: "0" }} className="text-6">
                ORGANIC A2 COW GHEE
              </h2>
              <div>
                <div>
                  <p className="buttur-text">CLARIFIED BUTTER</p>
                  <h2 style={{ margin: "0" }}>&#8377;1200</h2>
                  <p className="buttur-text" style={{ margin: "0" }}>
                    500ml
                  </p>
                  <div className="product-action-contr">
                    <div className="product-counter">
                      <span
                        className="action"
                        style={{ cursor: "pointer" }}
                        onClick={deletion}
                      >
                        -
                      </span>
                      <span className="action">{count}</span>
                      <span
                        className="action"
                        style={{ cursor: "pointer" }}
                        onClick={addition}
                      >
                        +
                      </span>
                    </div>
                    <button className="product-cart-btn">ADD TO CART</button>
                  </div>
                </div>
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
          {/* <img
            className="point-logo"
            src={require("../Assets/Images/Moo-Beyond-Logo-Final 1.png")}
            alt=""
          /> */}
        </div>
        <h1 className="text-7">THE MOO BEYOND APPROACH</h1>
        <div className="points">
          {points?.map((item, index) => {
            return (
              <div className={`point-${index + 1}`}>
                <div className="point-img-head">
                  <img className="point-image" src={item?.image} alt="" />
                  <h3 className="point-heading">{item?.heading} </h3>
                </div>
                <p className="point-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="testimonial-container">
        <h1 className="text-9">OUR TESTIMONIALS</h1>
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

     <Footer/>
    </div>
  );
}
