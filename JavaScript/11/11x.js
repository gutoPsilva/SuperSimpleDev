let todoList = JSON.parse(localStorage.getItem('todoList'))|| [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i=0; i<todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.getElementById('add1').onclick = function(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);
  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value = '';
  renderTodoList();
}