export const formatPrice = (price: number) => {
  return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const unformatPrice = (formattedPrice: string) => {
  return parseFloat(formattedPrice.replace(/,/g, ''));
};
