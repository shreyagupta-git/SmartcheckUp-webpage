// script.js


// Newsletter form submission
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = this.querySelector("input[type='email']");
  if (emailInput.value.trim() === "") {
    alert("Please enter a valid email.");
  } else {
    alert("Thanks for subscribing!");
    emailInput.value = "";
  }
}); 
function toggleMenu(){
    const nav=document.getElementById('navMenu');
    nav.classList.toggle('show');
}