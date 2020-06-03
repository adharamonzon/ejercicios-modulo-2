'use strict';

const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');

const handleclick = (ev) => {
  ev.preventDefault();
  const input = document.querySelector('.js-input').value;

  fetch(`https://api.github.com/orgs/${input}`)
    .then((response) => response.json())
    .then((data) => fetch(data.repos_url));
  console.log(data);
};

btn.addEventListener('click', handleclick);
