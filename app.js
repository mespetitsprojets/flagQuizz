var inputField = document.getElementById("inputField");
var showFlag = document.getElementById("showFlag");
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");
var answerOutput = document.getElementById("answerOutput");
var randomNom;
var pointTotal=0;
var point;
var inputText;

// https://flagsapi.com/#quick

initPlay();

function initPlay(){
  var random = Math.floor(Math.random() * tableau.length);
  var randomCode = tableau[random].code;
    randomNom = tableau[random].nom;
  var myFlag = document.getElementById('myFlag');
  myFlag.src = "https://flagsapi.com/" + randomCode + "/flat/64.png";
  pointTotal = 0;
  point = 0;
  answerOutput.innerHTML = "";
  score.innerHTML = "Points : " + point + " / " + pointTotal;

}

function play(){
var random = Math.floor(Math.random() * tableau.length);
var randomCode = tableau[random].code;
  randomNom = tableau[random].nom;
var myFlag = document.getElementById('myFlag');
myFlag.src = "https://flagsapi.com/" + randomCode + "/flat/64.png";

  if(pointTotal >= 5){
  answerOutput.innerHTML = "";
  score.innerHTML = "Satisfait ? Ton score final est de " + point + " / " + "5 !";
  }

}

function submit(){  
  var inputTextA = inputField.value;
  inputText = Convert(inputTextA);
  if(inputText != ""){
  pointTotal++;
  searchFlag();
  }
 }

function searchFlag(){
  if(pointTotal <= 5 && randomNom.toUpperCase() == inputText.toUpperCase()){
    answerOutput.innerHTML = "Bien joué ! C'est bien " + randomNom;
    point++;
  }

  else if(inputField.value != ""){
    answerOutput.innerHTML = "Faux ! La réponse était : " + randomNom;
  }
  inputField.value = "";
  score.innerHTML = "Points : " + point + " / " + pointTotal;
  play();
}

function answer(){
  answerOutput.innerHTML = "La réponse était : " + randomNom;
  pointTotal = 0;
  point = 0;
  score.innerHTML = "Remise à zéro ! On recommence ?";
}

function Convert(string){
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// appuyer sur Entrée simule cliquer sur le bouton createTask
inputField.addEventListener("keypress", function(event)
{
  if (event.keyCode == 13) { // keyCode 13 pour Entrée
    event.preventDefault(); 
    submit();
  }
});