function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Введите задачу');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'delete-btn';

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);

    input.value = '';
}
