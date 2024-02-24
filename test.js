const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const deleteAllBtn = document.getElementById('deleteAll');
const addTaskBtn = document.getElementById('addTaskBtn');

const addTask = (taskText) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskSpan.style.textDecoration = 'line-through';
        } else {
            taskSpan.style.textDecoration = 'none';
        }
    });
};

addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText == '') {
        alert('You didn\'t add any task.');
    } else {
        addTask(taskText);
        taskInput.value = '';
    }
});

deleteAllBtn.addEventListener('click', () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
});
