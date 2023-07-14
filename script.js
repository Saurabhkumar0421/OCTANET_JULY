document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value.trim();
    if (todoText !== '') {
      addTodoItem(todoText);
      todoInput.value = '';
    }
  });
  
  function addTodoItem(todoText) {
    var todoList = document.getElementById('todo-list');
    var li = document.createElement('li');
    li.innerHTML = '<span>' + todoText + '</span>' +
      '<button onclick="deleteTodoItem(this)">Delete</button>';
    todoList.appendChild(li);
  }
  
  function deleteTodoItem(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }
  