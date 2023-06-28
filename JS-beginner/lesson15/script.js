// Model
let todos;
const savedTodos = JSON.parse(localStorage.getItem('todos'));

if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [{
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
}

// Creates a todo
function createTodo(title, dueDate) {
  const id = '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  });

  saveTodos();
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
  
  saveTodos();
}

function setEditing(todoId){
  todos.forEach(function(todo){
    if(todo.id === todoId){
      todo.isEditing = true;
    }
  });

  saveTodos();
}

function updateTodo(todoId, newTitle, newDate){
  todos.forEach(todo => {
    if(todoId == todo.id){
      todo.title = newTitle;
      todo.dueDate = newDate;
      todo.isEditing = false;
    }
  });

  saveTodos();
}

function saveTodos(){
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Controller
function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  createTodo(title, dueDate);
  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

// Edits a todo
function onEdit(event){
  const editButton = event.target;
  const todoId = editButton.dataset.id;

  setEditing(todoId);
  render();
}

function onUpdate(event){
  const updateButton = event.target;
  const todoId = updateButton.dataset.id;

  const textbox = document.getElementById('edit-title-' + todoId);
  const newTitle = textbox.value;

  const datePicker = document.getElementById('edit-date-' + todoId);
  const newDate = datePicker.value;

  updateTodo(todoId, newTitle, newDate);
  render();
}

// View
function render() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');

    if(todo.isEditing === true){
      const textBox = document.createElement('input');
      textBox.type = 'text';
      textBox.id = 'edit-title-' + todo.id;
      element.appendChild(textBox);

      const datePicker = document.createElement('input');
      datePicker.type = 'date';
      datePicker.id = 'edit-date-' + todo.id;
      element.appendChild(datePicker);

      const updateButton = document.createElement('button');
      updateButton.textContent = 'Update';
      updateButton.dataset.id = todo.id;
      updateButton.onclick = onUpdate;
      element.appendChild(updateButton);

    }else{
      element.textContent = todo.title + ' ' + todo.dueDate;
      
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.style = 'margin-left: 12px';
      editButton.onclick = onEdit;
      editButton.dataset.id = todo.id;
      element.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.style = 'margin-left: 12px';
      deleteButton.id = todo.id;
      deleteButton.onclick = deleteTodo;
      element.appendChild(deleteButton);
    }

    todoList.appendChild(element);
  });
}

render();