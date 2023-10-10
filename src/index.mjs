import { getTemplate } from './utils/dynamic-email-template/dynamic-email-template.mjs';

const template = `
  Hello {{ user.username }}!
  Currency: {{ currencyFormat currency "$ #,###.00" }}
  DateTime: {{ datetimeFormat datetime "LLL dd yyyy" }}
  Number: {{ numberFormat number "#,##0.####" }}
  Percentage: {{ percentageFormat percentage "0" }}
`;
const context = {
  user: {
    username: 'Nhan Nguyen',
  },
  currency: 1234567.890,
  datetime: new Date().toISOString(),
  number: 1234567.890,
  percentage: 99,
};

const html = getTemplate(template, context);
console.log('Your Template:', html);
