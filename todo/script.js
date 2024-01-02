function addTask() {
    const taskInput = document.getElementById('task');
    const deadlineInput = document.getElementById('deadline');
    const taskList = document.getElementById('task-list');

    if (taskInput.value === '' || deadlineInput.value === '') {
        alert('Please enter both task and deadline.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<strong>Task:</strong> ${taskInput.value}<br><strong>Deadline:</strong> ${deadlineInput.value}
    <button onclick="removeTask(this)">Remove</button>`;

    taskList.appendChild(taskItem);

    // Clear input fields
    taskInput.value = '';
    deadlineInput.value = '';
}

function removeTask(button) {
    const taskList = document.getElementById('task-list');
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
