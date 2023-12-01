export const formatPrice = (price: number) => {
  return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const parseCurrency = (value: string | undefined) => {
  if (!value) return 0;
  const parsedValue = parseFloat(value.replace(/\$\s?|(,*)/g, ''));
  return isNaN(parsedValue) ? 0 : parsedValue;
};
