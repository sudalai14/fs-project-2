// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");

// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const task = taskInput.value;
  const date = dateInput.value;

  if (task && date) {
    const newTask = {
      task,
      date
    };

    tasks.push(newTask);
    updateTaskList();
    taskInput.value = "";
    dateInput.value = "";
  }
}

// Function to update the task list on the UI
function updateTaskList() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<b>${task.task}</b> - ${task.date} <button onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(listItem);
  });
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

// Initial task list update
updateTaskList();
