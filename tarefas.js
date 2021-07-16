const tarefas = [
    { nome: "Formar logo por favor", categoria: "estudos", realizada: false },
    { nome: "Me tornar uma Lenda Pirata no Sea of Thieves", categoria: "lazer", realizada: false }
];

// Elementos estáticos da página
const taskListElement = document.querySelector('ul#lista-tarefas');
const taskNameElement = document.querySelector('input#nova-tarefa-nome');
const taskCategoryElement = document.querySelector('select#nova-tarefa-categoria');

const insereTarefaNaPagina = (tarefa) => {
    const taskElement = document.createElement('li');
    
    taskElement.classList.add('item-tarefa');
    taskElement.classList.add(`categoria-${tarefa.categoria}`);
    if(tarefa.realizada)
        taskElement.classList.add('marcado');    
    
    const textElement = document.createElement('p');
    textElement.innerHTML = tarefa.nome;

    taskElement.appendChild(textElement);
    taskListElement.appendChild(taskElement);
}

taskListElement.innerHTML = '';
tarefas.forEach( insereTarefaNaPagina );

const criaNovaTarefa = () => {
    const novaTarefa = { nome: taskNameElement.value, categoria: taskCategoryElement.value, realizada: false };
    tarefas.push(novaTarefa);
    insereTarefaNaPagina(novaTarefa);

    taskNameElement.value = '';
    taskNameElement.focus();
}