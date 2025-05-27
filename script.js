  document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  function createTask(taskText) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed", checkbox.checked);
    });
    removeBtn.addEventListener("click", () => {
      li.remove();
    });
    taskList.appendChild(li);
  }
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTask(taskText);
      taskInput.value = "";
      taskInput.focus();
    }
  });
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
});
