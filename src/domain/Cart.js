import { Voucher } from "./Voucher";

const Cart = {
  create: (props = {}) => ({
    items: props.items || [],
    subtotal: _calculateSubtotal(props.items),
    shippingCost: _calculateShipping(props.items),
    discount: _calculateDiscount(props.items),
    total: _calculateTotal(),
  }),
  addToCart:
    (cart) =>
    (inlineProduct = {}) => {
      return [cart.items, ...inlineProduct];
    },
  removeFromCart:
    (cart) =>
    (inlineProduct = {}) => {
      return cart.items.filter((item) => item.id !== inlineProduct.id);
    },
};

function _calculateSubtotal(cartItems = []) {
  return cartItems.reduce((prev, curr) => prev + curr.price, 0);
}

function _calculateShipping(cartItems = []) {
  const shipping = { value: 0 };
  const STANDARD_KILOS_SHIP = 10

  const totalKgPerOrder = cartItems.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  const aboveTenKilosShipping = () => {
    const VALUE_PER_EXCESS = 7

    const excess = totalKgPerOrder - STANDARD_KILOS_SHIP;
    const value = Math.floor((excess / 5) * VALUE_PER_EXCESS);

    shipping.value = value;
    return value;
  };

  if (_calculateSubtotal(cartItems) > 400) {
    return shipping.value;
  }

  if (totalKgPerOrder <= STANDARD_KILOS_SHIP) {
    shipping.value = 30;
    return shipping.value;
  } else {
    aboveTenKilosShipping();
  }
}

function _calculateDiscount (voucher) {
  return Voucher.calculateDiscount(voucher);
}

function _calculateTotal (cart) {
  return  cart.subtotal + cart.shippingCost - cart.discount 
}

export { Cart };
