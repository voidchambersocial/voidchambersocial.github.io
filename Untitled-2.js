let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}// JavaScript Document

document.getElementById("subscriptionForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.querySelector("input[name='mail']").value;
            
            // Validate email address here (basic validation)
            if (validateEmail(email)) {
                // Save the email to local storage (example)
                saveEmailToLocalStorage(email);
                alert("Thank you for subscribing!");
                // You can also send the email to an API or perform other actions here
            } else {
                alert("Please provide a valid email address.");
            }
        });

        function validateEmail(email) {
            // Basic email validation using a regular expression
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(email);
        }

        function saveEmailToLocalStorage(email) {
            // Example: Store the email in local storage
            const existingEmails = JSON.parse(localStorage.getItem("subscribers")) || [];
            existingEmails.push(email);
            localStorage.setItem("subscribers", JSON.stringify(existingEmails));
        }