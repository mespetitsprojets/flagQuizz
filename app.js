
var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

// Load tasks from localStorage
window.onload = function(){
  // on crée un tableau vide pour y stocker nos valeurs
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(function(task) {
    createTask(task);
  });
};

// appuyer sur Entrée simule cliquer sur le bouton createTask
inputField.addEventListener("keypress", function(event)
{
  if (event.keyCode == 13) { // keyCode 13 pour Entrée
    event.preventDefault(); 
    document.getElementById("addToDo").click();
  }
});

// on crée une fonction pour quand on clique sur le bouton +
addToDoButton.onclick = function(){
  if(inputField.value != ""){
    createTask(inputField.value);
    // on sauvegarde les taches dans le localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(inputField.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // on vide la case inputField
    inputField.value="";
  }
}

//fonction clearAll pour supprimer toutes les taches et vider le localStorage
clearAll.onclick = function(){
  // tant que toDoContainer a un enfant, on supprime cet enfant
  while(toDoContainer.firstChild){
    toDoContainer.removeChild(toDoContainer.firstChild);
  }
  // on supprime toutes les valeurs du tableau localStorage
  localStorage.removeItem('tasks'); 
}

// on crée une fonction editTask pour editer une tache
function editTask(paragraph){
  var paragraphTextElement = paragraph.firstChild;
  var paragraphText = paragraphTextElement.textContent;

  var newparagraphText = prompt("Oops, je rectifie:", paragraphText);

  if( newparagraphText != ""){
    // Update task in localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskIndex = tasks.indexOf(paragraphText);
    if (taskIndex > -1) {
      tasks[taskIndex] = newparagraphText;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // on affiche les nouvelles valeurs dans la page web
    paragraphTextElement.textContent = newparagraphText;
  }
}

//on crée une fonction createTask pour créer une nouvelle tache
function createTask(taskText) {
  var paragraph = document.createElement('div');
  var taskContainer = document.createElement('div');

  paragraph.innerHTML = taskText;

  toDoContainer.appendChild(taskContainer);

  var toggleButton = document.createElement("button");
  toggleButton.onclick = function() {
    paragraph.classList.toggle('paragraph_click');
    toggleButton.classList.toggle('toggleButton_click');
  };

  var editButton = document.createElement("button");
  editButton.innerHTML='<ion-icon name="create-outline"></ion-icon>'
  editButton.onclick = function(){
    editTask(paragraph);
  };

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<ion-icon style ="color:midnightblue" name="close-outline"></ion-icon>'
  deleteButton.onclick = function(){
    toDoContainer.removeChild(taskContainer);
    // Remove task from localStorage
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskIndex = tasks.indexOf(taskText);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // on imbrique les elements enfants dans la variable taskContainter
  taskContainer.appendChild(toggleButton);
  taskContainer.appendChild(paragraph);
  taskContainer.appendChild(editButton);
  taskContainer.appendChild(deleteButton);

  // on applique les style css à chaque élément
  taskContainer.classList.add('task_container');
  toggleButton.classList.add('toggleButton','pointer');
  paragraph.classList.add('paragraph_style');
  editButton.classList.add('editButton','pointer');
  deleteButton.classList.add('deleteButton','pointer');
}