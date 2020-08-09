//HUMBURGER MENU
function nav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//CHECK USER
checkActiveUser();

function checkActiveUser() {
    //vadi niz iz local S i parsira u JavaScript, smesta u promenljivu nizKorisnika
    //U ZAVISNOSTI OD STATUSA OTVARAJU SE OPCIJE KORISNIKU
    let activeUser = JSON.parse(sessionStorage.getItem('user')) || {};
    console.log(activeUser);

    if (activeUser.status == 0) {
        document.getElementById('message').innerHTML =
            'Hello  <span id = "trenutnoUlogovani">' + activeUser.name + " " + activeUser.surname + '</span> Your status is Administrator';
        document.getElementById('providers').style.display = "block";
    } else if (activeUser.status == 1) {
        document.getElementById('message').innerHTML = 
        'Hello  <span id = "trenutnoUlogovani">' + activeUser.name + " " + activeUser.surname + '</span> Your status is User';
       
        document.getElementById('providers').style.display = "none";
    } else {
        alert('Neovlasceni korisnik...');
        document.getElementById('myTopnav').style.display = "none";
        document.getElementById('message').innerHTML = '<a href = "../index.html" >Sign Up</a>';
    }
}

//SIGN OUT
function signOut() {
    let activeUser = {
        status: 9,
        email: "guest"
    };
    //praznimo localStoridze
    //localStorage.removeItem('trenutnoulogovanikorisnik');
    //smesta trenutno ulogovanog korisnika u localStoride
    sessionStorage.setItem('user', JSON.stringify(activeUser));
    console.log(activeUser);
}
