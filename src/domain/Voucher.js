import { calculateShipping, calculateSubtotal } from "./Cart";

const percentDiscount = (amount, cart) => {
  return (amount / 100) * calculateSubtotal(cart);
};

const shippingDiscount = (voucher, cart) => {
  const subtotal = calculateSubtotal(cart);
  if (subtotal >= voucher.minValue) return calculateShipping(cart);
};

const Voucher = {
  calcDiscount: (cart) => {
    switch (cart.voucher.type) {
      case "percentual":
        return percentDiscount(cart.voucher.amount, cart);
      case "fixed":
        return cart.voucher.amount;
      case "shipping":
        return shippingDiscount(cart.voucher, cart);
      default:
        return 0;
    }
  },
};

export { Voucher };
