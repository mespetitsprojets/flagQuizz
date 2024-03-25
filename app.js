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
  score.innerHTML = "Manche en 5 points. Prêt ?";
  inputField.value = "";
}

function play(){
var random = Math.floor(Math.random() * tableau.length);
var randomCode = tableau[random].code;
  randomNom = tableau[random].nom;
var myFlag = document.getElementById('myFlag');
myFlag.src = "https://flagsapi.com/" + randomCode + "/flat/64.png";

  if(pointTotal >= 5){
  answerOutput.innerHTML = "";
  score.innerHTML = "Tu as eu " + point + " bonne(s) réponse(s) sur " + pointTotal + " !";
  }

}

function submit(){
  var inputTextA = inputField.value;
  inputText = Convert(inputTextA);
    if(inputText != ""){
    searchFlag();
    }
 }

function searchFlag(){
  if(pointTotal < 5){
    if(randomNom.toUpperCase() == inputText.toUpperCase()){
      answerOutput.innerHTML = "Bien joué !";
      point++;
    }

    else {
      answerOutput.innerHTML = "Non, c'était : " + randomNom;
    }

    pointTotal++;
    inputField.value = "";
    score.innerHTML = "";
    play();
  }
  else inputField.value = "Rejouer !";
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