const tarefas = [
    { nome: "Formar logo por favor", categoria: "estudos", realizada: false },
    { nome: "Me tornar uma Lenda Pirata no Sea of Thieves", categoria: "lazer", realizada: false }
];

const taskListElement = document.querySelector('ul#lista-tarefas');

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