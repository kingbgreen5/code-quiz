var pageNumber = 0
var score = 0
var timer=''


var container = document.querySelector(".container");
var homepage = document.querySelector(".homepage");
var question1 = document.querySelector(".question1");
var question2 = document.querySelector(".question2");
var question3 = document.querySelector(".question3");
var question4 = document.querySelector(".question4");
var initials  = document.querySelector(".enterInitials")
var scoreCard = document.querySelector(".scoreCard");
var forwardPg = document.getElementById("pg+1");
var input = document.querySelector("#input");
var form = document.querySelector("#form");
var scoreList = document.querySelector("#scoreList");
var viewScores =document.querySelector("#viewScores")
var rightWrongMsg =document.querySelector("#right-wrong");
var timeEl = document.querySelector("#timeDisplay");
var displayScore = document.querySelector('#displayScore');
var scoreArray = [];

// CREATES SCORES IN LIST ELEMENT
function renderScores() {
  scoreList.innerHTML = "";  
  // Render a new li for each SCORE
  for (var i = 0; i < scoreArray.length; i++) {
    var playerInitials = scoreArray[i];
    var li = document.createElement("li");
    li.textContent = playerInitials
    li.setAttribute("data-index", i);
    scoreList.appendChild(li);
  }
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored scores from localStorage
  var storedScores = JSON.parse(localStorage.getItem("Scores"));
  if (storedScores !== null) {
    scoreArray = storedScores;
  }

  renderScores();
}

function storeScores() {                                                //Saves scores as json string
  localStorage.setItem("Scores", JSON.stringify(scoreArray));
}

/////////////////////////////////////////////////
document.getElementById("clearScores").addEventListener("click", function(){        // Deletes scores
 
scoreArray=[]
localStorage.clear("Scores", JSON.stringify(scoreArray));

storeScores();
renderScores();
});




//////                                                  FLAGGED FOR POSSIBLE DELETION
// Add click event to todoList element
scoreList.addEventListener("click", function(event) {
  var element = event.target;
  // Checks if element is a button
  if (element.matches("#clearScores") === true) {
   
    var index = element.parentElement.getAttribute("data-index");
    scoreArray.splice(index, 1);

    // Store updated scores in localStorage
    storeScores();
    renderScores();
  }
});

// Calls init to retrieve data and render it to the page on load
init()




////////////////////////////////////////////////////////////////////////////////////////




//correct answers
var correct1="A"
var correct2="B"
var correct3="C"
var correct4="D"

var selected1=''
var selected2=''
var selected3=''
var selected4=''

function showScore(){
  var totalScore = score+timer
  displayScore.textContent= totalScore
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timer--;
    timeEl.textContent = timer;

    if(timer=== 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to send user to score screen
      pageNumber=5;
      console.log(score)
      showScore()
      pageNumberSwitch()
      
    }
    //stops timer at score screen
    if(pageNumber=== 5) {     //stops timer at page 5
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to send user to score screen
      showScore()
      pageNumberSwitch()
      
    }
console.log(timer)
  }, 1000);
}

function pageNumberSwitch() {                                   //defines pageNumberSwitch Logic
  if (pageNumber === 0){
    homepage.setAttribute("style",'display: block');
    question1.setAttribute("style",'display: none');
    question2.setAttribute("style",'display: none');
    question3.setAttribute("style",'display: none');
    question4.setAttribute("style",'display: none');
    initials.setAttribute("style",'display: none');
    scoreCard.setAttribute("style",'display: none');
    console.log(pageNumber)
  };
  
  if (pageNumber === 1){
    homepage.setAttribute("style",'display: none');
    question1.setAttribute("style",'display: block');
    question2.setAttribute("style",'display: none');
    question3.setAttribute("style",'display: none');
    question4.setAttribute("style",'display: none');
    initials.setAttribute("style",'display: none');
    scoreCard.setAttribute("style",'display: none');
    console.log(pageNumber)
    };
    
    if (pageNumber === 2){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: block');
      question3.setAttribute("style",'display: none');
      question4.setAttribute("style",'display: none');
      initials.setAttribute("style",'display: none');
      scoreCard.setAttribute("style",'display: none');
      console.log(pageNumber)
    };
      
    if (pageNumber === 3){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: none');
      question3.setAttribute("style",'display: block');
      question4.setAttribute("style",'display: none');
      initials.setAttribute("style",'display: none');
      scoreCard.setAttribute("style",'display: none');
      console.log(pageNumber)
    };
        
    if (pageNumber === 4){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: none');
      question3.setAttribute("style",'display: none');
      question4.setAttribute("style",'display: block');
      initials.setAttribute("style",'display: none');
      scoreCard.setAttribute("style",'display: none');
      console.log(pageNumber)
    };
          
    if (pageNumber === 5){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: none');
      question3.setAttribute("style",'display: none');
      question4.setAttribute("style",'display: none');
      initials.setAttribute("style",'display: block');
      scoreCard.setAttribute("style",'display: none');
      console.log(pageNumber)
    };

      if (pageNumber === 6){
        homepage.setAttribute("style",'display: none');
        question1.setAttribute("style",'display: none');
        question2.setAttribute("style",'display: none');
        question3.setAttribute("style",'display: none');
        question4.setAttribute("style",'display: none');
        initials.setAttribute("style",'display: none');
        scoreCard.setAttribute("style",'display: block');
        
    
      };



    };



viewScores.addEventListener("click", function(event) {   // When View Scores button is clicked, send user to end screen
      pageNumber= 6;
      pageNumberSwitch();
      });
      

  



// Listen for any clicks within the container div
container.addEventListener("click", function(event) {
  event.preventDefault()
  var element = event.target
  var elementId= event.target.id
  console.log(element)
// if the clicked element is a button, then increase page number by 1

// records selected answers to variables corresponding to each question
//order must be reversed to prevent opperation racing through all pages.


if (element.matches("button")  && pageNumber==6 && elementId !="clearScores" )  {// High Score screen: when button is clicked returns user to welcome screen
  pageNumber=pageNumber - 6;
  var element = '';
  pageNumberSwitch();
}

if (element.matches("button")  && pageNumber==5 )  {  // Enter Initials Page
  
  var totalScore = score+timer
  var initialsPlusTotalScore = input.value.trim() + " "+ totalScore ;
  var checkForInitials = input.value.trim()
  // Return from function early if submitted is blank
  if (checkForInitials === "") {
    return;
  }
  // Add new scores to scoreArray, clear the input
  scoreArray.push(initialsPlusTotalScore);
  input.value = "";
  rightWrongMsg.textContent = "";
  // Stores initials and the corresponding score in local storage and updates the list
  storeScores();
  renderScores();
  pageNumber++;
  pageNumberSwitch();

}



if (element.matches("button")  && pageNumber==4 )  {
  var selectedAnswer = element.getAttribute("data-letter");
  var selected4= selectedAnswer
  console.log("Question 4: " + selected4)
  if(selected4==correct4){              //logic which will govern how the score is added to
    score=score+25;
    console.log(score)
    rightWrongMsg.textContent = "Correct!";
  }else{
    //subtract from timer
      timer=timer-5
      rightWrongMsg.textContent = "Incorrect!";
  }
  pageNumber++;
  pageNumberSwitch()
}


if (element.matches("button")  && pageNumber==3 )  {
  var selectedAnswer = element.getAttribute("data-letter");
  var selected3= selectedAnswer
  console.log("Question 3: " + selected3)
  if(selected3==correct3){              //logic which will govern how the score is added to
    score=score+25;
    console.log(score)
    rightWrongMsg.textContent = "Correct!";
  }else{//subtract from timer
    timer=timer-5
    rightWrongMsg.textContent = "Incorrect!";
  }
  pageNumber++;
  pageNumberSwitch()
}


if (element.matches("button")  && pageNumber==2 )  {
  var selectedAnswer = element.getAttribute("data-letter");
  var selected2= selectedAnswer
  console.log("Question 2: " + selected2)
    if(selected2==correct2){              //logic which will govern how the score is added to
      score=score+25;
      console.log(score)
      rightWrongMsg.textContent = "Correct!";
    }else{
      timer=timer-5
      rightWrongMsg.textContent = "Incorrect!";
  }
  pageNumber++;
  pageNumberSwitch()
}



if (element.matches("button")  && pageNumber==1 )  {
  var selectedAnswer = element.getAttribute("data-letter");
  var selected1= selectedAnswer
  console.log("Question 1: " + selected1)
    if(selected1==correct1){              //logic which will govern how the score is added to
      score=score+25;
      console.log(score)
      rightWrongMsg.textContent = "Correct!";
      
    }else{
      timer=timer-5
      rightWrongMsg.textContent = "Incorrect!";
    }
  pageNumber++;
  pageNumberSwitch()
}

if (element.matches("button")  && pageNumber==0 )  {
  console.log("Page " + pageNumber);
  timer= 30;
  score=0;
  setTime();
// set timer function
  pageNumber++;
  pageNumberSwitch()
  }




// records selected answers to variables corresponding to each question















  });







  /////Runs on pag start
  pageNumberSwitch()
  console.log(pageNumber)


  showScore()











