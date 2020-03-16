'use strcit';
//
const peras = {
  maxNumber: 15,
  minNumber: 5,
  actualNumber: 9,
  initialNumber: 5,
  inc: function() {
    this.actualNumber += 3;
  },
  dec: function() {
    this.actualNumber -= 1;
  },
  restore: function() {
    this.actualNumber = this.initialNumber;
  }
};

peras.inc();

peras.dec();

peras.restore();

console.log(peras.actualNumber);

const header = document.querySelector('.header');

const form = document.querySelector('.form');
