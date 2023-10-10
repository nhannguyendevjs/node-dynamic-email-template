import Handlebars from 'handlebars';
import { currencyFormat } from './helpers/currency-format.mjs';
import { datetimeFormat } from './helpers/datetime-format.mjs';
import { numberFormat } from './helpers/number-format.mjs';
import { percentageFormat } from './helpers/percentage-format.mjs';

Handlebars.registerHelper('currencyFormat', currencyFormat);
Handlebars.registerHelper('datetimeFormat', datetimeFormat);
Handlebars.registerHelper('numberFormat', numberFormat);
Handlebars.registerHelper('percentageFormat', percentageFormat);

const getTemplate = (template, context) => Handlebars.compile(template)(context);

export {
  getTemplate,
}
