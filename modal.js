var submitEl = document.querySelector("#sendBtn");
var nameInput = document.querySelector("#petName");
var messageInput = document.querySelector("#message");
var submissionResponseEl = document.querySelector("#response");
var petNameVal = localStorage.getItem("Pet Name")
console.log(petName);

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var response = "Thank you for your submission, " + nameInput.value + " We are excited to share your story!";
  submissionResponseEl.textContent = response;


})
