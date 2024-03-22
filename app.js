var inputField = document.getElementById("inputField");
var showFlag = document.getElementById("showFlag");
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");
var answerOutput = document.getElementById("answerOutput");
var randomNom;
var i;

window.onload(play());

function play(){
var random = Math.floor(Math.random() * tableau.length);
var randomCode = tableau[random].code;
  randomNom = tableau[random].nom;
var myFlag = document.getElementById('myFlag');
myFlag.src = "https://flagsapi.com/" + randomCode + "/flat/64.png";
answerOutput.innerHTML = "";
showInput.innerHTML = "";
}

function submit(){  
  var inputText = inputField.value
  searchFlag();
  inputField.value = "";
 }

function searchFlag(){
  if(randomNom.toUpperCase() == inputField.value.toUpperCase()){
    answerOutput.innerHTML = "Bien joué ! C'est bien " + randomNom;
  }
  else if(inputField.value != ""){
    answerOutput.innerHTML = "Faux !";
  }
}

function answer(){
  answerOutput.innerHTML = "La réponse était : " + randomNom;
}