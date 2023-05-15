const todoList = [{
  name:'make dinner',
  dueDate: '2022-12-22'
}, {
  name:'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    // const todoName = todoObject.name;
    // const todoDueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>   
      <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.getElementById('add1').onclick = function(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  // todoList.push({name: name, dueDate: dueDate})
  todoList.push({name, dueDate});

  inputElement.value = '';
  renderTodoList();
}