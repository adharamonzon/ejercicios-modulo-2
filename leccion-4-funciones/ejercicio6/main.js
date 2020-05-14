'use strict';

const getEl = (text) => {
  const get = document.querySelector(text);
  if (get === null) {
    console.error(`no existe ningún elemento con clase, id o tag llamado ${get}`);
  } else {
    console.log(get);
  }
  return get;
};
getEl('.js-texto');
//el correcto .js-text
