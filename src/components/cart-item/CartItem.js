import React from "react";
import {
  CartItemContainer,
  DetailsContainer,
  CartImageContainer,
  Name,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartImageContainer src={imageUrl} />
      <DetailsContainer>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </DetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
