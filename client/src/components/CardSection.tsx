// import React, { useState } from "react";
import "../styles/cardSection.css";

import { FaEdit } from "react-icons/fa";
import Image from "../assets/restaurant-background.jpg";
import { BsPlusSquare } from "react-icons/bs";
import { useCart } from "react-use-cart";

interface Props {
  name?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  price?: number;
  // onEdit: (name: string, description: string) => void;
}

const CardSection: React.FC<Props> = ({ name, description, item, price }) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="card-section-container ">
        <img src={Image} alt="food" />
        <div className="text-area">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <h2 className="foodtitle">{name}</h2>
        <p className="foodtext">{description}</p>

        <div className="price">
          <p>N{price}</p>
          <BsPlusSquare
            onClick={() => addItem(item)}
            className="desktop-icons"
          />
        </div>
        <div className="mobile-icons">
          <FaEdit /> <BsPlusSquare onClick={() => addItem(item)} />
        </div>
      </div>
    </>
  );
};

export default CardSection;


