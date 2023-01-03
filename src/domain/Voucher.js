const percentDiscount = (value) => value;
const fixedDiscount = (value) => value;
const shippingDiscount = (value) => 0;

const Voucher = {
  calculateDiscount: (voucher = "") => {
    const discountValue = /#(\d+).+/.exec(voucher)[1];

    switch (voucher) {
      case voucher.match(/OFF/):
        return percentDiscount(discountValue);

      case voucher.match(/DOLLARS/):
        return fixedDiscount(voucher);

      case voucher.match(/SHIPIT/):
        return shippingDiscount();

      default:
        return 0;
    }
  },
};

export { Voucher };
