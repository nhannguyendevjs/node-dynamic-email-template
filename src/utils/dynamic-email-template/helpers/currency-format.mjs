import numbro from 'numbro';

const currencyFormat = (...args) => {
  const [value, pattern] = args;
  return numbro(value).format(pattern);
};

export {
  currencyFormat,
}
