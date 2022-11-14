// BEGIN FORM TRANSITION JS
document.addEventListener("DOMContentLoaded", () => {
// Event listeners execute a function based on a condition, the DOMContentLoaded condition just means the page is loaded. For our function, we use an arrow function to define it right here, because we will only use it once
    const loginForm = document.querySelector("#login");
    // Grabs the entire login form and stores it in a variable
    const signupForm = document.querySelector("#signup");
    // Grabs the entire signup form and stores it in a variable

    document.querySelector("#signup-link").addEventListener("click", () => {
    // Selects the <a> with the ID "signup-link". An <a> must have an "onclick" attribute by default. An event listener for this onclick attribute is added, and the arrow function defined below is executed.
    // If the href wasn't removed from the <a> #signup-link is referencing, we would need to add .preventDefault to both of the elements so that the page doesn't refresh everytime we switch forms
        loginForm.classList.add("form-hidden");
        // Adds the class "form-hidden", which has display: hidden, which causes any element to not display, to the login form. This causes the login form to be hidden.
        signupForm.classList.remove("form-hidden");
        // Removes the class "form-hidden" from the signup form, which causes the signup form to display.
    });

    // The process above is repeated below, but in reverse. The login form is shown, and the signup form is hidden.
    document.querySelector("#login-link").addEventListener("click", () => {
        loginForm.classList.remove("form-hidden");
        signupForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e=> {
    // The form button has the type submit, which this event listner can pick up, then execute a function the element
        e.preventDefault();
        // Execute the preventDefault function
    });

    signupForm.addEventListener("submit", e=> {
        // The form button has the type submit, which this event listner can pick up, then execute a function the element
            e.preventDefault();
            // Execute the preventDefault function
    });
});
// END FORM TRANSITION JS

// START SIGN UP
var userAccounts = [
    {
        username: "dave",
        password: "cassie"
    }
];

console.log(userAccounts)

function createUserAccount() {
    var newUsername = document.querySelector("#new-username").value;
    var newPassword = document.querySelector("#new-password").value;

    var newUserAccount = {
        username: newUsername,
        password: newPassword
    };

    userAccounts.push(newUserAccount);
    console.log(userAccounts);
}


// END SIGN UP


// START LOG IN
function verifyUserAccount() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    for(i=0; i<userAccounts.length; i++) {
        if(username == userAccounts[i].username && password == userAccounts[i].password) {
            console.log("Yes");
            window.location.href = "home.html";
        }
        else {
            document.querySelector("#login-error").classList.remove("form-hidden");
        }
    }
}
// END LOG IN