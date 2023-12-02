export const formatPrice = (price: number) => {
  return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const parseCurrency = (value: string | undefined) => {
  if (!value) return 0;
  const parsedValue = parseFloat(value.replace(/\$\s?|(,*)/g, ''));
  return isNaN(parsedValue) ? 0 : parsedValue;
};

export const urlToFile = (url: string, filename: string, mimeType: string): Promise<File> => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok for ${url}`);
      }
      return response.blob();
    })
    .then((blob) => new File([blob], filename, { type: mimeType }));
};
