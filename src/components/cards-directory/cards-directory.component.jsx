import React, { useContext, useState, useEffect } from "react";
import { CardItem } from "../card-item/card-item.component";
import "./cards-directory.styles.scss";
import { CollectionContext } from "../../context/collection/collection.context";

const CardDirectory = () => {

  const { collectionMap } = useContext(CollectionContext);

  const [ image, setImage ] = useState("");
  const [ image1, setImage1 ] = useState("");
  const [ image2, setImage2 ] = useState("");

  useEffect(() => {
    collectionMap.fivestar?.map(item => {
      return setImage(item.imageUrl);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionMap.fourstar])

  
  // propsis magivrad unda gamovikeno context ezpz
  

  return (
    <section id="cards-directory">
      <h1 className="cards-directory-title">FIND YOUR DREAM TOURS</h1>
      <h2>4 STAR TOURS</h2>
      <h3>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>
      <div className="carousel-container">
        <CardItem image={image} />
        <CardItem image={image} />
        <CardItem />
      </div>

      <h2>5 STAR TOURS</h2>
      <h3>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>
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
