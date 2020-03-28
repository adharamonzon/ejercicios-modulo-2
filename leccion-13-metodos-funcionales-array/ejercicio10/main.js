'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];
// a) econtrar al usuario con el pin 5232
/* const user = users.find(user => user.pin === 5232);
console.log(user);
 */

//b) borrar al usuario del pin 5232 del array de usuarios

const user = users.findIndex(user => user.pin === 5232);
console.log(user);
users.splice(user);
console.log(users);
