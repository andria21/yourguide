import React, {Fragment} from "react";
import { CardItem } from "../card-item/card-item.component";
import '../cards-directory/cards-directory.styles.scss';

export const CardContainer = ({ collection, title }) => {
    return (
        <div className="carousel-container">
            {
                collection.map(collection => {
                   
                    return (
                        <Fragment>
                            <CardItem collection={collection}/>
                            <CardItem collection={collection}/>
                            <CardItem collection={collection}/>
                        </Fragment>
                    )
                })
            }

        </div>
    )
}