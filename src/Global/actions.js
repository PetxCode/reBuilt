import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
  details: null,
};

const actions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },

    viewDetail: (state, { payload }) => {
      state.details = payload;
    },

    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload.id);
    },

    addToCart: (state, { payload }) => {
      const cartValue = state.cart.findIndex((el) => el.id === payload.id);

      if (cartValue >= 0) {
        state.cart[cartValue].QTY += 1;
      } else {
        const addCart = { ...payload, QTY: 1 };
        state.cart.push(addCart);
      }
    },

    handleQTY: (state, { payload }) => {
      const cartValue = state.cart.findIndex((el) => el.id === payload.id);
      // let viwAData = state.cart[cartValue].QTY;
      if (state.cart[cartValue].QTY >= 1) {
        state.cart[cartValue].QTY -= 1;
      } else if (state.cart[cartValue].QTY === 1) {
        state.cart = state.cart.filter((item) => item.id !== payload.id);
      }
    },

    totalValue: (state, { payload }) => {
      let { totalCost, totalQTY } = state.cart.reduce(
        (displayItem, displayCart) => {
          const { price, QTY } = displayCart;
          const totalPrice = price * QTY;

          displayItem.totalQTY += QTY;
          displayItem.totalCost += totalPrice;

          return displayItem;
        },
        { totalCost: 0, totalQTY: 0 }
      );

      state.totalValuePrice = totalCost;
      state.totalValueQTY = totalQTY;
    },
  },
});

export const {
  addProduct,
  removeFromCart,
  addToCart,
  handleQTY,
  totalValue,
  viewDetail,
} = actions.actions;
export default actions.reducer;
