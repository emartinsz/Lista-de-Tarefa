// Selecionar elementos
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Adicionar evento ao botão
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Criar novo item da lista
        const li = document.createElement('li');
        li.textContent = taskText;

        // Criar botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.style.marginLeft = '10px';

        // Adicionar evento para remover tarefa
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        // Adicionar evento para marcar como concluído
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Adicionar botão ao item da lista
        li.appendChild(deleteButton);

        // Adicionar item à lista
        taskList.appendChild(li);

        // Limpar campo de entrada
        taskInput.value = '';
    }
});
