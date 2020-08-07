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

//Validation 

function validEMail(a, b, c) {
    let val = document.getElementById(a).value;
    if (!(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(val)) || (val == '')) {
        document.getElementsByClassName(c)[b].innerHTML = '*';
    }
}
function validPassword(a, b, c) {
    let val = document.getElementById(a).value;
    if ((/[\W_]/.test(val)) || (val == '')) {
        document.getElementsByClassName(c)[b].innerHTML = '*';
    }
}
function validName(a, b, c) {
    let val = document.getElementById(a).value;
    if ((/[^A-Za-zČčĆćŠšĐđ]+$/.test(val)) || (val == '')) {
        document.getElementsByClassName(c)[b].innerHTML = '*';
    }
}
function validPhone(a, b, c) {
    let val = document.getElementById(a).value;
    if (!(/[0-9]/.test(val)) || (val == '')) {
        document.getElementsByClassName(c)[b].innerHTML = '*';
    }
}
//brise * kada je onfocus polje u koje treba da unesemo ispravku
function clearOnFocus(a, b) {
    document.getElementsByClassName(a)[b].innerHTML = '';
}

