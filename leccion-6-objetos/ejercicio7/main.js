'use strict';

const user = {};

const job = 'developer';

user['firstname'] = 'Juan';
user.lastname = 'García';
user['age'] = 29;
user.job = job;

console.log(user);

user.name = 'Tino';
user.age += 1;

console.log(user);
