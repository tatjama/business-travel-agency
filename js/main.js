//HUMBURGER MENU
function nav() {
    var x = document.getElementById("my-top-nav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}
//CHECK USER
checkActiveUser();

function checkActiveUser() {
    //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
    //U ZAVISNOSTI OD STATUSA OTVARAJU SE OPCIJE KORISNIKU
    let activeUser = JSON.parse(sessionStorage.getItem('user')) || {};
    console.log(activeUser);
    const messageEl = document.getElementById('message');
    const providersEl = document.getElementById('providers');
    const chooseDestinationButton = document.getElementById('choose-destination');
    chooseDestinationButton.addEventListener('click', chooseDestination);

    if (activeUser.status == 0) {
        messageEl.innerHTML =
            'Hello  <span >' + activeUser.name + " " + activeUser.surname + '</span> Your status is Administrator';
        providersEl.style.display = "block";
    } else if (activeUser.status == 1) {
        messageEl.innerHTML = 
        'Hello  <span >' + activeUser.name + " " + activeUser.surname + '</span> Your status is User';
       
        providersEl.style.display = "none";
    } else {
        alert('Unauthorized user...');
        document.getElementById('my-top-nav').style.display = "none";
        messageEl.innerHTML = '<a href = "../index.html" >Sign Up</a>';
    }
}

function chooseDestination(){
    alert('you choose destination!')
}

//SIGN OUT
function signOut() {
    let activeUser = {
        status: 9,
        email: "guest"
    };
    sessionStorage.setItem('user', JSON.stringify(activeUser));
    //console.log(activeUser);
}
