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

// Selecting DOM Elements
const input = document.querySelector(".create-text");
const addButton = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");
const checkbox = document.querySelector(".box");
const editBtn = document.querySelector(".editBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const statusdiv = document.querySelector(".status");

taskList.addEventListener("click", function (e) {
  const target = e.target;

  console.log(target, target.closest(".deleteBtn"));

  // match each button click to
  if (target.classList.contains("box")) {
    checkComplete(target);
  } else if (target.classList.contains("editBtn")) {
    editTask();
  } else if (target.closest(".deleteBtn")) {
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
    createdAt: today,
  };
  todoListTest.push(newTask);
  console.log(todoListTest);

  // render on the UI
  const listItemHtml = `
       <li class="list-item">
        <input type="checkbox" name="" id=""  class="box" />
        <span class="task-title">${newTask.title}</span>
        <button type="button" class="editBtn"><i class="fas fa-edit"></i></button>
        <button type="button" class="deleteBtn"><i class="fas fa-trash"></i></button>
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

// filter buttons
statusdiv.addEventListener("click", function (e) {
  const target = e.target;
  console.log(target);

  if (target.classList.contains("all")) {
    filterAll(todoListTest);
  } else if (target.classList.contains("completed")) {
    filterCompleted(todoListTest);
  } else if (target.classList.contains("pending")) {
    filterPending(todoListTest);
  }
  // switch (target) {
  //   case target.classList.contains("all"):
  //     filterAll(todoListTest);
  //     break;

  //   default:
  //     break;
  // }
});

//checkbox for completion
const checkComplete = function (checkbox) {
  const taskTitle = checkbox.nextElementSibling;
  const tastTitleDom = taskTitle.textContent;
  const currentIndex = getIndex(tastTitleDom);
  if (checkbox.checked) {
    todoListTest[currentIndex].status = "completed";
    taskTitle.style.textDecoration = "line-through";
    console.log(todoListTest);
  } else {
    taskTitle.style.textDecoration = "none";
    todoListTest[currentIndex].status = "pending";
    console.log(todoListTest);
  }
};

// Delete button
const deleteTask = function (button) {
  const listItem = button.closest("li");
  const tastTitleDom = listItem.children[1].textContent;
  todoListTest.pop(getIndex(tastTitleDom));
  listItem.remove();

  console.log(todoListTest);
};

// getting element from the array from the DOM
const getIndex = function (title) {
  for (let i = 0; i < todoListTest.length; i++) {
    if (title === todoListTest[i].title) {
      const index = todoListTest.indexOf(todoListTest[i]);
      return index;
    }
  }
};

// Filter
const filterAll = function (arrayOfTask) {
  clearTaskList();
  renderToUi(arrayOfTask);
};

const filterCompleted = function (arrayOfTask) {
  clearTaskList();
  const completedTask = [];
  for (let i = 0; i < arrayOfTask.length; i++) {
    if (arrayOfTask[i].status === "completed") {
      completedTask.push(arrayOfTask[i]);
    }
  }
  renderToUi(completedTask);
};

const filterPending = function (arrayOfTask) {
  clearTaskList();
  const pendingTask = [];
  for (let i = 0; i < arrayOfTask.length; i++) {
    if (arrayOfTask[i].status === "pending") {
      pendingTask.push(arrayOfTask[i]);
    }
  }
  renderToUi(pendingTask);
};

// function to render to ui
const renderToUi = function (arrayOfTask) {
  for (let i = 0; i < arrayOfTask.length; i++) {
    const listItemHtml = `
       <li class="list-item">
        <input type="checkbox" name="" id=""  class="box" />
        <span class="task-title">${arrayOfTask[i].title}</span>
        <button type="button" class="editBtn"><i class="fas fa-edit"></i></button>
        <button type="button" class="deleteBtn"><i class="fas fa-trash"></i></button>
      </li>`;

    const temp = document.createElement("div");
    temp.innerHTML = listItemHtml;
    const listItem = temp.firstElementChild;
    taskList.appendChild(listItem);
  }
};

//function to clear ui
const clearTaskList = function () {
  // //get children of the ui
  // const childrenList = taskList.children;
  // //remove each child
  // // console.log(childrenList);
  // for (let i = 0; i < childrenList.length; i++) {
  //   childrenList[i].remove();
  // }
  taskList.innerHTML = "";
};

// filterAll(todoListTest);
// filterCompleted(todoListTest);
// filterPending(todoListTest);

const todoListTest = [
  {
    id: 1,
    title: "🛠 Finish building the todo app",
    status: "pending",
    createdAt: today,
  },
  {
    id: 2,
    title: "✅ Review JavaScript event delegation",
    status: "completed",
    createdAt: today,
  },
  {
    id: 3,
    title: "🧹 Clean up CSS styles",
    status: "pending",
    createdAt: today,
  },
  {
    id: 4,
    title: "📦 Push code to GitHub",
    status: "completed",
    createdAt: today,
  },
  {
    id: undefined,
    title: undefined,
    status: undefined,
    createdAt: undefined,
  },
];
