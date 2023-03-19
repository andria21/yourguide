import React, { useContext} from "react";
import { CardItem } from "../card-item/card-item.component";
import "./cards-directory.styles.scss";
import { CollectionContext } from "../../context/collection/collection.context";
import { CardContainer } from "../card-container/card-container.component";

const CardDirectory = () => {

  const { collectionMap } = useContext(CollectionContext);

  return (
    <section id="cards-directory">
      <h1 className="cards-directory-title">FIND YOUR DREAM TOURS</h1>

      {Object.keys(collectionMap).map((title) => {
        const collection = collectionMap[title];
    
        return (
          <CardContainer title={title} collection={collection} />
        )
      })}

      <h2>4 STAR TOURS</h2>
      <h3>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>

      <h2>5 STAR TOURS</h2>
      <h3>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>

      <h2>VIP TOURS</h2>

    </section>
  );
};

export default CardDirectory;
