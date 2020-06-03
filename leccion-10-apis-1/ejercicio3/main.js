'use strict';

const searchBtn = document.querySelector('.js-btn');
const userResult = document.querySelector('.js-info');

const user = {
  name: '',
  repositories: '',
  image: '',
};

function getUserData(ev) {
  ev.preventDefault();
  const input = document.querySelector('.js-input').value;

  fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => {
      user.name = data.name;
      user.repositories = data.public_repos;
      user.image = data.avatar_url;
    });
  paintUser();
}
console.log(user);

const paintUser = () => {
  let htmlCode = '';
  htmlCode += `<h4>${user.name}</h4>`;
  htmlCode += `<img src=${user.image} alt="foto de ${user.name}" title=${user.name}/>`;
  htmlCode += `<p> repositorios: ${user.repositories}`;
  userResult.innerHTML = htmlCode;
};

searchBtn.addEventListener('click', getUserData);
