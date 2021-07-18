const taskInput= document.querySelector('#new-task');
const tasks = document.querySelector('.tasks');
const apagarTudo = document.querySelector('.btn-apagar-tudo');
const apagarConcluidos = document.querySelector('.btn-apagar-concluidos');

const createCustomElement = (el, className, innerText = '') => {
  element = document.createElement(el);
  if (Array.isArray(className)) {
    className.forEach((classe) => element.classList.add(classe));
  } else {
    element.classList.add(className);
  }
  element.innerText = innerText;
  return element;
}

const selfCompleteTask = (e) => {
  const el = e.target;
  el.parentElement.parentElement.classList.toggle('task-completed');
}

const selfDeleteTask = (e) => {
  const el = e.target;
  tasks.removeChild(el.parentElement);
}

const createTaskStructure = (inputValue) => {
  const task = createCustomElement('div', 'task');
  task.addEventListener('dblclick', () => {
    task.classList.toggle('task-completed');
  });
  const iconTaskContainer = createCustomElement('div', 'icon-task-container');
  const checkIcon = (createCustomElement('i', ['far', 'fa-check-circle']));
  checkIcon.addEventListener('click', selfCompleteTask);
  iconTaskContainer.appendChild(checkIcon);
  iconTaskContainer.appendChild(createCustomElement('div', 'task-name', inputValue));
  task.appendChild(iconTaskContainer);
  const delIcon = createCustomElement('i', ['far', 'fa-trash-alt']);
  delIcon.addEventListener('click', selfDeleteTask);
  task.appendChild(delIcon);
  return task;
}

const newTask = (e) => {
  if (e.keyCode !== 13 && (e.button !== 0)) return;
  if (!taskInput.value) { alert('Digite algo para adicionar'); return; }
  tasks.appendChild(createTaskStructure(taskInput.value));
  taskInput.value = '';
}

const removeConcluidos = () => {
  const concluidos = document.querySelectorAll('.task-completed');
  if (!concluidos) return;
  Array.from(concluidos).forEach((el) => {
    tasks.removeChild(el);
  })
}

window.onload = () => {
  document.querySelector('.btn-new-task').addEventListener('click', newTask);
  document.addEventListener('keyup', newTask);
  apagarTudo.addEventListener('click', () => {
    while (tasks.children.length > 0) {
      tasks.removeChild(tasks.firstElementChild);
    }
  });
  apagarConcluidos.addEventListener('click', removeConcluidos)
}