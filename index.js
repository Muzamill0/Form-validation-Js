const form = document.getElementById("form");
const nameInputElement = document.getElementById("name");
const emailInputElement = document.getElementById("email");
const passwordInputElement = document.getElementById("password");
const password2InputElement = document.getElementById("password2");



form.addEventListener("submit", function(e){
    e.preventDefault();
    nameInputValue = nameInputElement.value;
    nameError = document.getElementById("name-error");

    if(nameInputValue == "" || nameInputValue == undefined){
        nameError.innerText = "Please enter Your Name";
    } else{
        nameError.innerText = "";
    }

    emailInputValue = emailInputElement.value;
    emailError = document.getElementById("email-error");



    if(emailInputValue == "" || emailInputValue == undefined){
        emailError.innerText = "Please enter Your Email";
    } else{
        emailError.innerText = "";
    }

    passwordInputValue = passwordInputElement.value;
    passError = document.getElementById("password-error");



    if(passwordInputValue == "" || passwordInputValue == undefined){
        passError.innerText = "Please enter Your Password";
    } else{
        passError.innerText = "";
        passwordInputElement.value = "";
    }
    password2InputValue = password2InputElement.value;
    pass2Error = document.getElementById("password2-error");



    if(password2InputValue == "" || password2InputValue == undefined){
        pass2Error.innerText = "please ReEnter Password ";
    }else if(password2InputValue !== passwordInputValue){
        pass2Error.innerText = "Password does't Match";
        password2InputElement.value = "";
    } else{
        pass2Error.innerText = "";
        password2InputElement.value = "";
    }
});

