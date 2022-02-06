const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todoArr = [];

const TODOARR_KEY = "todoArr";

function saveTodoArr() {
  localStorage.setItem(TODOARR_KEY, JSON.stringify(todoArr));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todoArr = todoArr.filter((value) => value.id !== parseInt(li.id));
  saveTodoArr();
  li.remove();
}

function showTodo(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;

  span.addEventListener(
    "mouseover",
    () => {
      span.innerText = "✖";
      //span.setAttribute("style", "opacity: 40%");
    },
    false
  );
  span.addEventListener(
    "mouseout",
    () => {
      span.innerText = todoObj.text;
      //span.setAttribute("style", "opacity: 90%");
    },
    false
  );
  span.addEventListener("click", deleteTodo);
  /*
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
*/

  li.appendChild(span);
  //  li.appendChild(button);
  todoList.appendChild(li);
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoArr.push(newTodoObj);
  showTodo(newTodoObj);
  saveTodoArr();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodoArr = localStorage.getItem(TODOARR_KEY);

if (savedTodoArr) {
  const parsedTodoArr = JSON.parse(savedTodoArr);
  todoArr = parsedTodoArr;
  parsedTodoArr.forEach(showTodo);
}
