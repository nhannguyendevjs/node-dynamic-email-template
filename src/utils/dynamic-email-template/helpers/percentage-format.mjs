import numbro from 'numbro';

const percentageFormat = (...args) => {
  const [value, pattern] = args;
  return `${numbro(value).format(pattern)}%`;
};

export {
  percentageFormat,
}
