// DOM References
const emailBox = document.querySelector(".emailBox");
const emailInput = document.querySelector("#emailInput");
const emailError = document.querySelector(".emailError");
const submitButton = document.querySelector(".submitButton");

// RegExp variables
const emailRegExp = /^([a-zA-Z\.-]+)(@[a-zA-Z-]+)(\.[a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;


//Variables
const validationChecklist = [0];

// Email input validation check using event listener
// Email input validation represent index [0] in validationChecklist
emailInput.addEventListener("change", function(e)
{
    let isValid = emailRegExp.test(emailInput.value);

    if(isValid)
    {
        // Update classes to reflect the validity.
        emailError.classList.add("hidden");
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");

        // Because the input is valid, we want to set the validationChecklist[0] to true
        validationChecklist[0] = 1; // 1 for true
    }
    else
    {
        // Update classes to reflect the validity
        emailError.classList.remove("hidden");
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");

        // Set the error textContent to show what the error was.
        emailError.textContent = "Please enter a valid email adress (ex: name@domain.com)";

        // Because the input is invalid, we want to set the validationChecklist[0] to false
        validationChecklist[0] = 0; // 0 for true
    }
});


// This event listener handles what happens when the form is submit.
// We want to make sure that input fields in the form are valid. If so, then thumbs up.
// else display (x) icon for the invalid input fields just incase live inline validation is ignored.
submitButton.addEventListener("click", function(e)
{
    e.preventDefault();

    // Check the validationChecklist to see if any of the values is a 0 (for false)
    let isFormValid = true // Default is true and the foreach loop will check to see if the form is false
    validationChecklist.forEach(element => {
        if(element === 0) isFormValid = false;
    });

    return false;
});