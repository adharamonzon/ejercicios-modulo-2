const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: false },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];
const list = document.querySelector('.js-list');

const paintTasks = () => {
  const title = document.querySelector('.js-title');
  title.innerHTML += ` Tienes ${tasks.length} tareas`;
  for (const task of tasks) {
    list.innerHTML += `<li class="js-list-item" data-status=${task.completed}>${task.name}</li>`;
  }
};

const markDone = () => {
  debugger;
  const listItem = document.querySelectorAll('.js-list-item');
  listItem.forEach((item) => {
    if (item.dataset.status === 'true') {
      item.classList.add('completed');
    }
  });
};

paintTasks();
markDone();
