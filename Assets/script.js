var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
 //-----creates object
 var question1 = {
  selectedAnswer: event.target.getAttribute("data-letter")

};


//-----stores the information object as a string with the key name "info"
localStorage.setItem("info", JSON.stringify(question1));



  console.log(selectedAnswer);
  console.log("selectedAnswer " + selectedAnswer);






});








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
*/