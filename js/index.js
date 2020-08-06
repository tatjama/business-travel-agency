const signInForm = document.getElementById("sign-in-form"); 
const signUpForm = document.getElementById("sign-up-form");
const goSignUpForm = document.getElementById('go-sign-up-form');
const goSignInForm = document.getElementById('go-sign-in-form');
//pop-up SIGN IN
function showSignInForm() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    goSignUpForm.style.display = "block";
    goSignInForm.style.display = "none";
}


function sakrijLoginFormu() {


}
//pop-up SIGN UP
function showSignUpForm() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    goSignUpForm.style.display = "none";
    goSignInForm.style.display = "block";

}

function hideSignUpForm() {
    signUpForm.style.display = "none";
}