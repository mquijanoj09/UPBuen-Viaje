export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es", {
    style: "currency",
    currency: "cop",
    maximumFractionDigits: 0,
  })
    .format(price)
    .toLowerCase();
};
