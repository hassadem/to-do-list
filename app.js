const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value;

  const listItem = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.innerText = taskText;

  //button to remove the task
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';

  removeButton.addEventListener('click', function() {
    listItem.remove();
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(removeButton);

  taskList.appendChild(listItem);
  taskInput.value = '';
}

//event listener when the button click
addButton.addEventListener('click', addTask);

//when press enter
taskInput.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    addTask();
  }
});
