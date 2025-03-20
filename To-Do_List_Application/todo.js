let tasks = [];
// If editingId is set, we're editing an existing task
let editingId = null;

// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add or Update a Task
addTaskBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (text === '') return;

  if (editingId) {
    // Edit mode: update existing task
    const index = tasks.findIndex(t => t.id === editingId);
    if (index !== -1) {
      tasks[index].text = text;
    }
    editingId = null; // Reset edit mode
  } else {
    // Create a new task
    const task = {
      id: Date.now(),
      text,
      completed: false
    };
    tasks.push(task);
  }

  // Clear input and re-render
  taskInput.value = '';
  renderTasks();
});

// Render tasks in the DOM
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Task text
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add('completed');
    }
    // Toggle completed on click
    span.addEventListener('click', () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // Buttons (Edit / Delete)
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // Edit Button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener('click', () => {
      // Load the task text into the input for editing
      editingId = task.id;
      taskInput.value = task.text;
    });

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => {
      tasks = tasks.filter(t => t.id !== task.id);
      renderTasks();
    });

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);
    taskList.appendChild(li);
  });
}

// Initial render
renderTasks();