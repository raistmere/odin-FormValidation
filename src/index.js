// DOM References
const emailInput = document.querySelector("#emailInput");
const emailError = document.querySelector(".emailError");
const countryInput = document.querySelector("#countryInput");
const countryError = document.querySelector(".countryError");
const zipCodeInput = document.querySelector("#zipCodeInput");
const zipCodeError = document.querySelector(".zipCodeError");
const passwordInput = document.querySelector("#passwordInput");
const passwordError = document.querySelector(".passwordError");
const confirmPasswordInput = document.querySelector("#confirmPasswordInput");
const confirmPasswordError = document.querySelector(".confirmPasswordError");
const submitButton = document.querySelector(".submitButton");

// RegExp variables
const emailRegExp = /^([a-zA-Z\.-]+)(@[a-zA-Z-]+)(\.[a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;
const zipCodeRegExpList = [
    {
        countryName: "USA",
        format: /^([0-9]{5})$/
    },
    {
        countryName: "Mexico",
        format: /^([0-9]{5})$/
    },
    {
        countryName: "Canada",
        format: /^([a-zA-z]{1})([0-9]{1})([a-zA-Z]{1})([\t\n\r\s])([0-9]{1})([a-zA-Z]{1})([0-9]{1})$/
    },
];
const passwordRegExp = /^([a-zA-Z1-9!@#$%^&*]{8,12})$/;


//Variables
const validationChecklist = [0 /**Email */, 0 /**Country */, 0 /**Zip Code */, 0 /**Password */, 0 /**Confirm Password */];

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

// Country input validation check using event listener
// Country input validation represent index [1] in validationChecklist
countryInput.addEventListener("change", function(e)
{
    let isValid = countryInput.selectedIndex === 0? false : true;

    if(isValid)
    {
        // Update classes to reflect the validity.
        countryError.classList.add("hidden");
        countryInput.classList.remove("invalid");
        countryInput.classList.add("valid");

        // Because the input is valid, we want to set the validationChecklist[1] to true
        validationChecklist[1] = 1; // 1 for true
    }
    else
    {
        // Update classes to reflect the validity
        countryError.classList.remove("hidden");
        countryInput.classList.remove("valid");
        countryInput.classList.add("invalid");

        // Set the error textContent to show what the error was.
        countryError.textContent = "Please select a country";

        // Because the input is invalid, we want to set the validationChecklist[1] to false
        validationChecklist[1] = 0; // 0 for true
    }

    // This allows us to refresh the zip code input to notify the user if there is an error
    // when the country changes.
    zipCodeInput.dispatchEvent(new Event("change"));
});

// Zip Code input validation check using event listener
// Zip Code input validation represent index [2] in validationChecklist
zipCodeInput.addEventListener("change", function(e)
{
    let country = zipCodeRegExpList.find((element) => element.countryName === countryInput.value);
    console.log(country);
    let isValid = country.format.test(zipCodeInput.value);

    if(isValid)
    {
        // Update classes to reflect the validity.
        zipCodeError.classList.add("hidden");
        zipCodeInput.classList.remove("invalid");
        zipCodeInput.classList.add("valid");

        // Because the input is valid, we want to set the validationChecklist[2] to true
        validationChecklist[2] = 1; // 1 for true
    }
    else
    {
        // Update classes to reflect the validity
        zipCodeError.classList.remove("hidden");
        zipCodeInput.classList.remove("valid");
        zipCodeInput.classList.add("invalid");

        // Set the error textContent to show what the error was.
        zipCodeError.textContent = `Please enter a valid ${countryInput.value} Zip Code`;

        // Because the input is invalid, we want to set the validationChecklist[2] to false
        validationChecklist[2] = 0; // 0 for true
    }
});

// Password input validation check using event listener
// Password input validation represent index [3] in validationChecklist
passwordInput.addEventListener("change", function(e)
{
    let isValid = passwordRegExp.test(passwordInput.value);

    if(isValid)
    {
        // Update classes to reflect the validity.
        passwordError.classList.add("hidden");
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");

        // Because the input is valid, we want to set the validationChecklist[3] to true
        validationChecklist[3] = 1; // 1 for true
    }
    else
    {
        // Update classes to reflect the validity
        passwordError.classList.remove("hidden");
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("invalid");

        // Set the error textContent to show what the error was.
        passwordError.textContent = "Please enter valid password of 8+ length \n(a-zA-Z / 1-9 / !@#$%^&* Allowed)";

        // Because the input is invalid, we want to set the validationChecklist[3] to false
        validationChecklist[3] = 0; // 0 for true
    }
});

// Confirm Password input validation check using event listener
// Confirm Passwordinput validation represent index [4] in validationChecklist
passwordInput.addEventListener("change", function(e)
{
    let isValid = passwordRegExp.test(passwordInput.value);

    if(isValid)
    {
        // Update classes to reflect the validity.
        passwordError.classList.add("hidden");
        passwordInput.classList.remove("invalid");
        passwordInput.classList.add("valid");

        // Because the input is valid, we want to set the validationChecklist[3] to true
        validationChecklist[3] = 1; // 1 for true
    }
    else
    {
        // Update classes to reflect the validity
        passwordError.classList.remove("hidden");
        passwordInput.classList.remove("valid");
        passwordInput.classList.add("invalid");

        // Set the error textContent to show what the error was.
        passwordError.textContent = "Please enter valid password of 8+ length \n(a-zA-Z / 1-9 / !@#$%^&* Allowed)";

        // Because the input is invalid, we want to set the validationChecklist[3] to false
        validationChecklist[3] = 0; // 0 for true
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

    console.log(`Is the form valid? ${isFormValid}`);

    return false;
});