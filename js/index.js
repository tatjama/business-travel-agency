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
//remove  * when input field is on focus
function clearOnFocus(a, b) {
    document.getElementsByClassName(a)[b].innerHTML = '';
}
function clearSignUp() {
    document.getElementById('sign-up-name').value = '';
    document.getElementById('sign-up-surname').value = '';
    document.getElementById('sign-up-e-mail').value = '';
    document.getElementById('sign-up-password').value = '';
    document.getElementById('address1').value = '';
    document.getElementById('address2').value = '';
    document.getElementById('phone1').value = '';
    document.getElementById('phone2').value = '';
    document.getElementById('sign-up-password-r').value = '';
    document.getElementById('status').value = '1';
}

//SIGN UP         
//funkcija prikuplja podatke iz forme u HTML-u i smesta u objekat sa nazivom noviKorisnik.
//potom ubacuje metodom push objekat noviKorisnik u niz nizKorisnika gde ga pamti
//Istovremeno sakriva dugme Pokupi  da ne bismo mogli greskom da prepisemo jednog korisnika drugim 
// Inicijalizujemo promenljivu nizKorisnika kao niz u koji smestamo dobijene objekte
      
class User{
    constructor(name, surname, email, password, address1, address2, phone1, phone2){
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.password = password,
        this.address1 = address1,
        this.address2 = address2,
        this.phone1 = phone1,
        this.phone2 = phone2,
        this.status = 1
    }

    static checkDoesUserExist(user, arrayUsers){
        arrayUsers.forEach(element => {
            if (element.email === user.email) {
                alert('We alredy have that user in DB.')
                document.getElementById('sign-up-e-mail').value = '';
                user.email = '';
            }        
        })
    }

}

function signUp() {
    var arrayUsers = JSON.parse(localStorage.getItem('localStorageUsers')) || [];    
    let name = document.getElementById('sign-up-name').value.toUpperCase();
    let surname = document.getElementById('sign-up-surname').value.toUpperCase();
    let email = document.getElementById('sign-up-e-mail').value;
    let password = document.getElementById('sign-up-password').value;
    let passwordR = document.getElementById('sign-up-password-r').value;
    let address1 = document.getElementById('address1').value;
    let address2 = document.getElementById('address2').value;
    let phone1 = document.getElementById('phone1').value;
    let phone2 = document.getElementById('phone2').value;   

    if (name == '' || surname == '' || email == '' || password == '' ||
        passwordR == '' || address1 == '' || phone1 == '' || 
        document.getElementsByClassName('error-sign-up')[0].innerHTML != '' ||
        document.getElementsByClassName('error-sign-up')[1].innerHTML != '' ||
        document.getElementsByClassName('error-sign-up')[2].innerHTML != '' ||
        document.getElementsByClassName('error-sign-up')[3].innerHTML != '' ||
        document.getElementsByClassName('error-sign-up')[4].innerHTML != '' ||
        document.getElementsByClassName('error-sign-up')[5].innerHTML != '' ||
        document.getElementsByClassName('error-sign-up')[7].innerHTML != '') {        
        alert('invalid input')
    } else if(password !== passwordR) {
        alert('Repeat password is not equal password')
    } else { 

        const user = new User(name, surname, email, password, address1, address2, phone1, phone2);
        User.checkDoesUserExist(user, arrayUsers);        
       
        if (user.email !== '') {        
            arrayUsers.push(user);
            localStorage.setItem('localStorageUsers', JSON.stringify(arrayUsers));
            clearSignUp();
            signUpForm.style.display = 'none';
            goSignUpForm.style.display = "block";
            goSignInForm.style.display = "none";
            signInForm.style.display = "block";
        }

    }

} //end SIGN UP function