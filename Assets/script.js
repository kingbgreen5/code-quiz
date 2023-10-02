var pageNumber = 0
var score = 0
var timer=''


var correct1="A"//correct answers
var correct2="B"
var correct3="C"
var correct4="D"

var selected1=''  //user selected answers
var selected2=''
var selected3=''
var selected4=''






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





//                                                            Functions
// CREATES SCORES IN LIST ELEMENT
function renderScores() {
  scoreList.innerHTML = "";  
  // creates new li for every score in the array
  for (var i = 0; i < scoreArray.length; i++) {
    var playerInitials = scoreArray[i];
    var li = document.createElement("li");
    li.textContent = playerInitials
    li.setAttribute("data-index", i);
    scoreList.appendChild(li);
  }
}


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

document.getElementById("clearScores").addEventListener("click", function(){        // Deletes scores when clear scores is pressed
 
scoreArray=[]
localStorage.clear("Scores", JSON.stringify(scoreArray));

storeScores();
renderScores();
});





function showScore(){                                                 // combines score and timer to give you the total time
  var totalScore = score+timer
  displayScore.textContent= totalScore
}


function setTime() {                                                  // Timer logic, when Timer runs out, takes you to score screen.
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    timer--;
    timeEl.textContent = timer;
    if(timer=== 0) {                                                 // Stops execution of action at set interval
      clearInterval(timerInterval);                               // Calls function to send user to score screen
      pageNumber=5;
      console.log(score)
      showScore()                            
      pageNumberSwitch()
    }

    if(pageNumber=== 5) {                                  //stops timer at page 5                                       
      clearInterval(timerInterval);
      // Calls function to send user to score screen
      showScore()
      pageNumberSwitch()
      
    }
console.log(timer)
  }, 1000);
}

function pageNumberSwitch() {                                   //defines pageNumberSwitch Logic. Causes pages to be displayed or not based on pageNumber
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



viewScores.addEventListener("click", function(event) {              // When View Scores button is clicked, send user to end screen
      pageNumber= 6;
      pageNumberSwitch();
      });
      

  



container.addEventListener("click", function(event) {                    // Listen for any clicks within the container div, if user clicks on a button it will generally take you to the next page, excepption is clearScores button
  event.preventDefault()                                                // Also when a button is clicked, grabs the letter value of that answer and inserts it into a variable, then checks if that answer was correct 
  var element = event.target
  var elementId= event.target.id
  console.log(element)


if (element.matches("button")  && pageNumber==6 && elementId !="clearScores" )  {   // High Score screen: when button is clicked returns user to welcome screen
  pageNumber=pageNumber - 6;
  var element = '';
  pageNumberSwitch();
}

if (element.matches("button")  && pageNumber==5 )  {              // Enter Initials Page
  
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

  storeScores();
  renderScores(); // Stores initials and the corresponding score in local storage and updates the list
  pageNumber++;
  pageNumberSwitch();

}



if (element.matches("button")  && pageNumber==4 )  {
  var selectedAnswer = element.getAttribute("data-letter");
  var selected4= selectedAnswer
  console.log("Question 4: " + selected4)
  if(selected4==correct4){                        
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
  if(selected3==correct3){          
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
    if(selected2==correct2){              
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
  console.log("Question 1: " + selected1) // records selected answers to variables corresponding to each question
    if(selected1==correct1){           
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



  });


  /////Runs on page start
  pageNumberSwitch()
  showScore()

// Calls init to retrieve data and render it to the page on load
init()











