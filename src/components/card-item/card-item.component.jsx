import "./card-item.styles.scss";
import Carousel from "react-bootstrap/Carousel";

export const CardItem = () => {
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
              src="https://images.unsplash.com/photo-1652770089295-591efc901e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <div className="overlay"></div>
            <h5 className="card-title">Card title</h5>
            <div className="card-link-container">
              <a
                className="card-link"
                href="https://www.instagram.com/p/CpeoKVaKu1N/"
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
              src="https://images.unsplash.com/photo-1621281753971-668ad0dad6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <div className="overlay"></div>
            <h5 className="card-title">Card title</h5>
            <div className="card-link-container">
              <a
                className="card-link"
                href="https://www.instagram.com/p/CpeoKVaKu1N/"
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
              src="https://images.unsplash.com/photo-1629811436471-dc73dd807ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            />
            <div className="overlay"></div>
            <h5 className="card-title">Card title</h5>
            <div className="card-link-container">
              <a
                className="card-link"
                href="https://www.instagram.com/p/CpeoKVaKu1N/"
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
              src="https://images.unsplash.com/photo-1667211585787-ff178c7c868c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            />
            <div className="overlay"></div>
            <h5 className="card-title">Card title</h5>
            <div className="card-link-container">
              <a
                className="card-link"
                href="https://www.instagram.com/p/CpeoKVaKu1N/"
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
