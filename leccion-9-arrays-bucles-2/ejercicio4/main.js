const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

const ulList = document.createElement('ul');

let taskItem = document.createElement('li');

ulList.appendChild(taskItem);

function writeTask() {
  debugger;
  for (let i = 0; i < 3; i++) {
    const task = tasks[i];
    if (task.completed === true) {
      taskItem.innerHTML = tasks['completed'];
    }
  }
}
writeTask();
/* console.log(tasks[i].completed); */
