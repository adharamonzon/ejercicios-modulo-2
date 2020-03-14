/*  DEMO 1:
function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = data.result;
    });
}
document.body.addEventListener('click', getEmoji);
 */
//DEMO 2:
function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);
