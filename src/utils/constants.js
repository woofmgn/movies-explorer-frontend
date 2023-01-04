const REGEXP_NAME = '^[а-яА-ЯёЁa-zA-Z -]+$';
const REGEXP_EMAIL =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const MESSAGE_EDIT_COMPLETE = 'Данные изменены';
const TIME_DURATION = 40;
const DESKTOP_CARD_QUANTITY = { cards: 16, more: 4 };
const TABLET_CARD_QUANTITY = { cards: 12, more: 3 };
const MOBILE_CARD_QUANTITY = { cards: 5, more: 2 };

export {
  REGEXP_NAME,
  REGEXP_EMAIL,
  MESSAGE_EDIT_COMPLETE,
  TIME_DURATION,
  DESKTOP_CARD_QUANTITY,
  TABLET_CARD_QUANTITY,
  MOBILE_CARD_QUANTITY,
};
