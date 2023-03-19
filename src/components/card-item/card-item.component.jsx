import React from "react";
import "./card-item.styles.scss";
import Carousel from "react-bootstrap/Carousel";

export const CardItem = ({ image }) => {


  // useEffect(() => {
  //   data.fivestar.map(item => {
  //     return setImage(item.imageUrl);
  //   })
  // }, []);
  
  return (
    <div className="cards-wrapper row">
      <Carousel
        className="tour-carousel"
        indicators={false}
        prevIcon={<i className="fa-solid fa-angle-left"></i>}
        nextIcon={<i className="fa-solid fa-angle-right"></i>}
      >
        <Carousel.Item>
          <div className="card">
            <img
              className="card-img"
              alt=""
              src={image}
            />
            <div className="overlay"></div>
            <div className="card-link-container">
              <a
                className="card-link"
                href="as"
              >
                Get Started
              </a>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="card">
            <img
              className="card-img"
              alt=""
              src=""
            />
            <div className="overlay"></div>
            <div className="card-link-container">
              <a
                className="card-link"
                href="as"
              >
                Get Started
              </a>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="card ">
            <img
              className="card-img"
              alt=""
              src=""
            />
            <div className="overlay"></div>
            <div className="card-link-container">
              <a
                className="card-link"
                href="as"
              >
                Get Started
              </a>
            </div>
          </div>
        </Carousel.Item>


      </Carousel>
    </div>
  );
};
