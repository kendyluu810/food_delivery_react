import React from "react";
import { Container, Row, Col } from "reactstrap";
import cateImg1 from "../../../assets/img/category-01.png";
import cateImg2 from "../../../assets/img/category-02.png";
import cateImg3 from "../../../assets/img/category-03.png";
import cateImg4 from "../../../assets/img/category-04.png";

import "./category.css";

const categoryData = [
  {
    display: "Fast Food",
    imgUrl: cateImg1,
  },
  {
    display: "Pizza",
    imgUrl: cateImg2,
  },
  {
    display: "Asian Food",
    imgUrl: cateImg3,
  },
  {
    display: "Row Meat",
    imgUrl: cateImg4,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
            <div className="category_item d-flex align-items-center gap-3">
              <div className="category_img">
                <img src={item.imgUrl} alt="category item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
