'use strict';

const times = [56, 9, 45, 28, 35];

const mediaTime = times.reduce((acc, time) => acc + time);
const result = mediaTime / 5;
console.log(mediaTime);
console.log(result);
