const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
const list = document.querySelector('.js-list');

const paintTasks = () => {
  debugger;
  for (const task of task) {
    list.innerHTML = `<li>${task.name}</li>`;
  }
};
