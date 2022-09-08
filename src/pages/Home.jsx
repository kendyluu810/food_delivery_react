import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";
import Category from "../components/UI/category/Category";
import ProductCard from "../components/UI/product card/ProductCard";
import TestimonialSlider from "../components/UI/slide/TestimonialSlider";

import featureImg01 from "../assets/img/service-01.png";
import featureImg02 from "../assets/img/service-02.png";
import featureImg03 from "../assets/img/service-03.png";
import hero_img from "../assets/img/hero.svg";
import foodCategoryImg01 from "../assets/img/hamburger.png";
import foodCategoryImg02 from "../assets/img/pizza.png";
import foodCategoryImg03 from "../assets/img/bread.png";
import whyImg from "../assets/img/location.png";
import networkImg from "../assets/img/network.png";

import "../styles/hero-section.css";
import "../styles/home.css";

import products from "../assets/data/products";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quisquam dolor. Blanditiis, voluptate nobis. Itaque id blanditiis, quod minus esse natus in sunt doloribus sint, dolores consequuntur sed, voluptatibus nisi?",
  },
  {
    title: "Supper Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quisquam dolor. Blanditiis, voluptate nobis. Itaque id blanditiis, quod minus esse natus in sunt doloribus sint, dolores consequuntur sed, voluptatibus nisi?",
  },
  {
    title: "Easy Pick up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quisquam dolor. Blanditiis, voluptate nobis. Itaque id blanditiis, quod minus esse natus in sunt doloribus sint, dolores consequuntur sed, voluptatibus nisi?",
  },
];

const Home = () => {
  const [category, setCategory] = useState("All");
  const [allproducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="hero_title mb-4 ">
                  <span>NEED GIFTS OR NEED TO EAT?</span> just wait your
                  <br /> order at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
                  omnis?
                </p>
                <div className="hero_btns d-flex align-items-center gap-4 mt-4">
                  <button className="order_btn d-flex align-items-center justify-cotent-between">
                    <Link to="/foods">
                      order now <i class="ri-arrow-right-line"></i>
                    </Link>
                  </button>
                  <button className="all_foods-btn">
                    <Link to="/foods">See all</Link>
                  </button>
                </div>
                <div className="hero_service d-flex align-items-center gap-5 mt-4">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={hero_img} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>

      {/* feature */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature_subtitle mb-4">what we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum, a.
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum, a.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature_item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature_img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular food */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all_btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allproducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* why tasty treat */}
      <section className="why_chosse-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt=" why-taste-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why_taste-treat">
                <h2 className="tasty_treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty_treat-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, fuga?
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Fresh and tasty
                      foods
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illo totam recusandae dignissimos quod vel fugit!
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Quality support
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil dolore assumenda ducimus cum quibusdam laboriosam?
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Order any
                      location
                    </p>
                    <p className="choose_us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum, id!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* hot pizza */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="tesimonial">
                <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial_title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  repellendus sit minus dignissimos id, expedita aspernatur
                  nostrum pariatur veniam qui!
                </p>
                <TestimonialSlider />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
