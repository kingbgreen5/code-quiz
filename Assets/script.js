



//
var pageNumber = 0


var container = document.querySelector(".container");
var homepage = document.querySelector("#homepage");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var scoreCard = document.querySelector("#scoreCard");
//question1.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

console.log(homepage)
console.log(question1)
console.log(question2)
console.log(question3)
console.log(question4)
console.log(scoreCard)

function pageNumberSwitch() {
  if (pageNumber === 0){
    homepage.setAttribute("style",'display: block');
    question1.setAttribute("style",'display: none');
    question2.setAttribute("style",'display: none');
    question3.setAttribute("style",'display: none');
    question4.setAttribute("style",'display: none');
    scoreCard.setAttribute("style",'display: none');
  };
  
  if (pageNumber === 1){
    homepage.setAttribute("style",'display: none');
    question1.setAttribute("style",'display: block');
    question2.setAttribute("style",'display: none');
    question3.setAttribute("style",'display: none');
    question4.setAttribute("style",'display: none');
    scoreCard.setAttribute("style",'display: none');
    };
    
    if (pageNumber === 2){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: block');
      question3.setAttribute("style",'display: none');
      question4.setAttribute("style",'display: none');
      scoreCard.setAttribute("style",'display: none');
    };
      
    if (pageNumber === 3){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: none');
      question3.setAttribute("style",'display: block');
      question4.setAttribute("style",'display: none');
      scoreCard.setAttribute("style",'display: none');
    };
        
    if (pageNumber === 4){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: none');
      question3.setAttribute("style",'display: none');
      question4.setAttribute("style",'display: block');
      scoreCard.setAttribute("style",'display: none');
    };
          
    if (pageNumber === 5){
      homepage.setAttribute("style",'display: none');
      question1.setAttribute("style",'display: none');
      question2.setAttribute("style",'display: none');
      question3.setAttribute("style",'display: none');
      question4.setAttribute("style",'display: none');
      scoreCard.setAttribute("style",'display: block');
    };
            
    
  };

 


// Listen for any clicks within the container div
container.addEventListener("click", function(event) {
  event.preventDefault()
  var element = event.target;
// if the clicked element is a button, then increase page number by 1
  if (element.matches("button")  && pageNumber<5 )  {

    pageNumber++;
    //     proceed to the next page
    var selectedAnswer = element.getAttribute("data-letter");
    console.log(selectedAnswer);
   



    pageNumberSwitch()

  }});


  pageNumberSwitch()







/*

var imageContainer = document.querySelector(".img-container");


imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  // Check if the clicked element was an image
  if (element.matches("img")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");

    if (state === "still") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "animate";
      element.setAttribute("data-state", "animate");

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute("src", element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = "still";
      element.setAttribute("src", element.dataset.still);
    }
  }
});




 //-----creates object

  selectedAnswer: event.target.getAttribute("data-letter"),
  pageNumber + 1
  
});


//-----stores the information object as a string with the key name "info"
localStorage.setItem("info", JSON.stringify(question1));

var element = e.target;
  var selectedAnswer = element.getAttribute("data-letter");


  console.log(selectedAnswer);
  console.log("selectedAnswer " + selectedAnswer);
console.log(pageNumber)
















/*
  var element = event.target;
  var selectedAnswer = element.getAttribute("data-letter");

  
  //prevent default
  //some code which logs
  console.log(element)
  console.log(selectedAnswer)







//if (questionNumber === "1" && selectedAnswer !==A ) {

//}


  //if (currentState === "hidden") {
   // element.innerHTML = element.getAttribute("data-letter");
  //  element.setAttribute("data-state", "visible");
 // }



  // another way

  //question1answer-Saved to local storage = event.target.getAttribute("data-Letter")
  // event.target.innerHTML = event.target.getAttribute("data-number");

});
























---------------------------------------------increase and decrease the page number---------------------------
var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
count = count +1;
setCounterText()


});




// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function() {
if (count > 0) {
  count = count -1;
  setCounterText()
}});


console.log(count)
countEl.textContent = count;


*/















