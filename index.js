"use strict";

const today = new Date().toDateString();
const todoList = [
  {
    id: 1,
    title: "HARRY DUNNIE working on this application",
    status: "pending",
    createdAt: today,
  },
  {
    id: undefined,
    title: undefined,
    status: undefined,
    createdAt: undefined,
  },
];

// Selecting the input field and button
const input = document.querySelector(".create-text");
const addButton = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");
const checkbox = document.querySelector(".box");
const editBtn = document.querySelector(".editBtn");
const deleteBtn = document.querySelector(".deleteBtn");

taskList.addEventListener("click", function (e) {
  const target = e.target;

  // const getTaskTitle = function (target) {
  //   const sibling = target.parentNode.childNodes;
  //   for (brothers of sibling)
  //     if (brothers.tagname == "span") {
  //       const TaskTitle = brothers.textContent;
  //       return TaskTitle;
  //     }
  // };

  console.log(target);

  // Function to add a new task
  if (target.classList.contains("box")) {
    checkComplete(target);
  } else if (target.classList.contains("editBtn")) {
    editTask();
  } else if (target.classList.contains("deleteBtn")) {
    deleteTask(target);
  } else {
    console.log("what is clicked?");
  }
});

// function to add Task
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
        <input type="checkbox" name="" id=""  class="box" />
        <span class="task-title">${newTask.title}</span>
        <button type="button" class="editBtn">Edit</button>
        <button type="button" class="deleteBtn">Delete</button>
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

//checkbox for completion

const checkComplete = function (checkbox) {
  const taskTitle = checkbox.nextElementSibling;
  const tastTitleDom = taskTitle.textContent;
  const currentIndex = getIndex(tastTitleDom);
  if (checkbox.checked) {
    todoList[currentIndex].status = "completed";
    taskTitle.style.textDecoration = "line-through";
    console.log(todoList);
  } else {
    taskTitle.style.textDecoration = "none";
    todoList[currentIndex].status = "pending";
    console.log(todoList);
  }
};

// Delete button
const deleteTask = function (button) {
  const listItem = button.parentNode;
  const tastTitleDom = listItem.children[1].textContent;
  todoList.pop(getIndex(tastTitleDom));
  listItem.remove();
  console.log(todoList);
};

// getting element from the array from the DOM
const getIndex = function (title) {
  for (let i = 0; i < todoList.length; i++) {
    if (title === todoList[i].title) {
      const index = todoList.indexOf(todoList[i]);
      return index;
    }
  }
};
