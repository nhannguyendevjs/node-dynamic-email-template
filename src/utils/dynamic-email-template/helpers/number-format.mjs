import numbro from 'numbro';

const numberFormat = (...args) => {
  const [value, pattern] = args;
  return numbro(value).format(pattern);
};

export {
  numberFormat,
}
