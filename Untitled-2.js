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
// Retrieve JSON data from local storage
const storedData = localStorage.getItem("subscribers");

// Check if there's any data in local storage
if (storedData) {
    // Parse the JSON data into a JavaScript object
    const subscribers = JSON.parse(storedData);

    // Create a string to hold the list of subscriber emails
    let subscriberList = "";

    // Loop through the subscribers and add each email to the list
    subscribers.forEach((email, index) => {
        // Add a comma and space after each email (except the last one)
        if (index === subscribers.length - 1) {
            subscriberList += email;
        } else {
            subscriberList += email + ", ";
        }
    });

    // Insert the list into the HTML element with the id "subscriberList"
    const subscriberListElement = document.getElementById("subscriberList");
    if (subscriberListElement) {
        subscriberListElement.textContent = "List of Subscribers: " + subscriberList;
    } else {
        console.log("HTML element with id 'subscriberList' not found.");
    }
} else {
    console.log("No subscriber data found in local storage.");
}