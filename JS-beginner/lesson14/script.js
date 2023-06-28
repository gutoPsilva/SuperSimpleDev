let todos = [{
  title: 'Get groceries',
  dueDate: '2021-10-04',
  id: 'id1'
}, {
  title: 'Wash car',
  dueDate: '2021-02-03',
  id: 'id2'
}, {
  title: 'Make dinner',
  dueDate: '2021-03-04',
  id: 'id3'
}];

// Creates a todo
function createTodo(title, dueDate) {
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });
}

// Deletes a todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    // If the id of this todo matches idToDelete, return false
    // For everything else, return true
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
}

function toggleTodo(todoId, checked) {
  todos.forEach(function(todo){
    if (todo.id === todoId){
      todo.isDone = checked;
    }
  });
}

// Controller
function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  createTodo(title, dueDate);
  render();
  console.log(todos);
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

function checkTodo(event){
  const checkBox = event.target;
  const todoId = checkBox.dataset.todoId;
  const checked = checkBox.checked;

  toggleTodo(todoId, checked);
}

// View
function render() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.textContent = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style = 'margin-left: 12px';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.onchange = checkTodo;
    checkBox.dataset.todoId = todo.id;

    if(todo.isDone){
      checkBox.checked = true;
    }else{
      checkBox.checked = false;
    }

    element.prepend(checkBox);
    element.appendChild(deleteButton);
    todoList.appendChild(element);
  });
}

render();