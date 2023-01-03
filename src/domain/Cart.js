import { Voucher } from "./Voucher";

const Cart = {
  create: (props = {}) => ({
    items: props.items || [],
    voucher: props.voucher,
  }),
};

export const addToCart = (cart) => (product) => {
  const updatedItems = [...cart.items, product];
  return { ...cart, items: updatedItems };
};

export const removeFromCart = (cart) => (product) => {
  const newCartItems = cart.items.filter((item) => item.id !== product.id);
  return { ...cart, items: newCartItems };
};

export const calculateSubtotal = (cart) => {
  return cart.items.reduce((prev, curr) => prev + curr.price, 0);
};

export const calculateShipping = (cart) => {
  const shipping = { value: 0 };
  const STANDARD_KILOS_SHIP = 10;

  const totalKgPerOrder = cart.items.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  const aboveTenKilosShipping = () => {
    const VALUE_PER_EXCESS = 7;

    const excess = totalKgPerOrder - STANDARD_KILOS_SHIP;
    const value = Math.floor((excess / 5) * VALUE_PER_EXCESS);

    shipping.value = value;
    return value;
  };

  if (calculateSubtotal(cart.items) > 400) {
    return shipping.value;
  }

  if (totalKgPerOrder <= STANDARD_KILOS_SHIP) {
    shipping.value = 30;
    return shipping.value;
  } else {
    aboveTenKilosShipping();
  }
};

export const calcDiscount = (cart) => Voucher.calcDiscount(cart);

export const _calculateTotal = (cart) => {
  return cart.subtotal + cart.shippingCost - cart.discount;
};

export { Cart };
