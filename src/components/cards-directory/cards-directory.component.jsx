import { CardItem } from "../card-item/card-item.component";
import "./cards-directory.styles.scss";


const CardDirectory = () => {
  return (
    <section id="cards-directory">
      <h1 className="cards-directory-title">FIND YOUR DREAM TOURS</h1>
      <h2 >4 STAR TOURS</h2>
      <h3><i class="fa-solid fa-star"> </i><i class="fa-solid fa-star"> </i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h3>
      <div className="carousel-container">
      <CardItem />
      <CardItem />
      <CardItem />
      </div>
      <h2>5 STAR TOURS</h2>
      <h3><i class="fa-solid fa-star"> </i><i class="fa-solid fa-star"> </i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h3>
      <div className="carousel-container">
      <CardItem />
      <CardItem />
      <CardItem />
      </div>
      <h2>VIP TOURS</h2>
      <div className="carousel-container">
      <CardItem />
      <CardItem />
      <CardItem />
      </div>
      
      
    </section>
  );
};

export default CardDirectory;
