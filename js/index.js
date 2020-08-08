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
function clearSignIn(){
    document.getElementById('sign-in-e-mail').value = '';
    document.getElementById('sign-in-password').value = '';
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

class DefaultUsers{
    async getDefaultUsers(){
        try {
            let result = await fetch('users.json');
            let data = await result.json();
            let defaultUsers = data.users;
            return defaultUsers;
        } catch (error) {
            console.log(error)
        }
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

//SIGN IN

function signIn() {
    if (document.getElementsByClassName('error-sign-in')[0].innerHTML == '*') {
        alert('Invalid E-mail format. E-mail format something@something.xyz');
    } else if (document.getElementsByClassName('error-sign-in')[1].innerHTML == '*') {
        alert('Invalid password character. Password contain only letters and numbers');
    } else {
        signInForm.style.display = 'none';

        let newArrayUsers = [];
        let email = document.getElementById('sign-in-e-mail').value;
        let password = document.getElementById('sign-in-password').value;
        let activeUser = new User(undefined, undefined, email, password);
        let user = {status: 9, email: "guest"};
        let defaultUsers = new DefaultUsers();

        defaultUsers.getDefaultUsers().then((defaultUsers)=>{
            let arrayUsers = JSON.parse(localStorage.getItem('localStorageUsers')) || [];
            (arrayUsers.length === 0)?  newArrayUsers = defaultUsers: newArrayUsers = arrayUsers.concat(defaultUsers);
            return newArrayUsers;
        }).then(()=>{
            //console.log(newArrayUsers);
            for (let i = 0; i < newArrayUsers.length; i++) {
                if (activeUser.email === newArrayUsers[i].email && activeUser.password === newArrayUsers[i].password) {
                    (newArrayUsers[i].status == 0)? alert("Welcome  administrator"): alert("Welcome user");                    
                    user = newArrayUsers[i];
                }
            }    
            if (user.status == 9) {
                alert("You are not registered! Please Sign up...");
                goSignUpForm.style.display = "block";               
            } else {            
                document.getElementById('start').style.display = "block";
                goSignUpForm.style.display = "none";  
            }
            sessionStorage.setItem('user', JSON.stringify(user));
           clearSignIn();
        })
        
    }

} //End signIn function