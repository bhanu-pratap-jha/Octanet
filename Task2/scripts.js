
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');
    taskDetails.innerHTML = `
        <strong>${taskInput}</strong> 
        <br>
        Due: ${dueDate} | Priority: ${priority} | Category: ${category}
    `;
    taskItem.appendChild(taskDetails);

    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('complete');
    });
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskActions);
    taskList.appendChild(taskItem);

    // Clear input fields after adding task
    document.getElementById('taskInput').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('category').value = '';
});
