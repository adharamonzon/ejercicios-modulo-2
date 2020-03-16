function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}

function getChihuahuaImage() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
const btnRat = document.querySelector('.js-rat');
btn.addEventListener('click', getDogImage);
btnRat.addEventListener('click', getChihuahuaImage);
