document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      addTodoItem(todoText);
      todoInput.value = "";
    }
  });

  function addTodoItem(text) {
    const listItem = document.createElement("li");
    listItem.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    listItem.innerHTML = `
        <span>${text}</span>
        <div>
          <button class="btn btn-success btn-sm mr-2 complete-btn">Selesai</button>
          <button class="btn btn-danger btn-sm delete-btn">Hapus</button>
        </div>
      `;
    todoList.appendChild(listItem);

    const completeButton = listItem.querySelector(".complete-btn");
    completeButton.addEventListener("click", function () {
      listItem.classList.toggle("completed");
    });

    const deleteButton = listItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });
  }
});
