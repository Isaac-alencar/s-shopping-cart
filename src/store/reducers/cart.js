import { useDispatch, useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

import {
  addToCart,
  removeFromCart,
  calculateShipping,
  calculateSubtotal,
} from "../../domain/Cart";
import { Voucher } from "../../domain/Voucher";

import { cartSelectors } from "../selectors";

const initialState = {
  items: [],
  voucher: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      addToCart(state)(action.payload);
    },
    remove: (state, action) => {
      removeFromCart(state)(action.payload);
    },
  },
});

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelectors);

  const { add, remove } = cartSlice.actions;

  const subtotal = calculateSubtotal(cart);
  const shippingValue = calculateShipping(cart);
  const discount = Voucher.calcDiscount(cart);

  return {
    cart,
    subtotal,
    shippingValue,
    discount,
    addToCart: () => dispatch(add()),
    removeFromCart: () => dispatch(remove()),
  };
};

export default cartSlice.reducer;
