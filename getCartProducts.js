// import { updateCartValue } from "./updateCardValue";

// export const getCartProductFromLS=()=>{
// let cardProducts=localStorage.getItem("cartProductLS");
// if(!cardProducts){
//     return[];
// }

// cardProducts=JSON.parse(cartProducts);

// updateCartValue(cartProducts);

// return cartProducts;
// };


import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);

  //update the cart button value
  updateCartValue(cartProducts);

  return cartProducts;
};