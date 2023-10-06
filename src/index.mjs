import Handlebars from 'handlebars';
import { DateTime } from 'luxon';

console.log('========== Begin ==========\n');

Handlebars.registerHelper('dateFormat', (...args) => {
  const [datetime, pattern] = args;
  return DateTime.fromISO(datetime).toFormat(pattern);
});

const template = `\nHello {{user.username}}!\nToday is {{dateFormat now "yyyy LLL dd"}}`;
const context = {
  user: {
    username: 'Nhan Nguyen',
  },
  now: new Date().toISOString(),
};
const html = Handlebars.compile(template)(context);

console.log('Your Template:', html);

console.log('\n========== End ==========');
