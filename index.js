"use strict";

const todoList = [
  {
    id: 1,
    title: "Visit grandma on my way back from work",
    status: "pending",
    createdAt: " ",
  },
  {
    id: 2,
    title: "pick the kids from school",
    status: "done",
    createdAt: " ",
  },
];

// Selecting the input field and button
const input = document.querySelector(".create-text");
const addButton = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

// Function to add a new task
addButton.addEventListener("click", function () {
  event.preventDefault();
  let inputText = input.value.trim();
  if (inputText === "") {
    alert("the field is empty");
    return;
  }

  const newTask = {
    id: todoList.length + 1,
    title: inputText,
    status: "pending",
    createdAt: "",
  };
  todoList.push(newTask);
  console.log(todoList);

  // render on the UI
  const listItemHtml = `
  <li class="list-item">
        <input type="checkbox" name="" id="" />
        ${newTask.title}
        <button type="submit">Edit</button>
        <button type="submit">Delete</button>
      </li>`;

  const temp = document.createElement("div");
  temp.innerHTML = listItemHtml;
  const listItem = temp.firstElementChild;
  taskList.appendChild(listItem);

  // clear the input field
  // let clear = input.value;
  // clear = "cleared";
  // console.log(clear);

  input.value = "";
});
