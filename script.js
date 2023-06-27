const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== '') {
    addTodoItem(todoText);
    input.value = '';
  }
});

function addTodoItem(todoText) {
  const listItem = document.createElement('li');
  const todoLabel = document.createElement('label');
  const checkbox = document.createElement('input');
  const todoTextSpan = document.createElement('span');
  const deleteButton = document.createElement('button');
  
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    todoTextSpan.classList.toggle('completed', checkbox.checked);
  });
  
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });
  
  todoTextSpan.textContent = todoText;
  
  todoLabel.appendChild(checkbox);
  todoLabel.appendChild(todoTextSpan);
  
  listItem.appendChild(todoLabel);
  listItem.appendChild(deleteButton);
  
  todoList.appendChild(listItem);
}
