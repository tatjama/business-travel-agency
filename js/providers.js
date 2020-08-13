const providersListEl = document.getElementById('providers-list');
const showProviderDetailEl = document.querySelector('.show-provider-detail');
const showProviderEditEl = document.querySelector('.show-provider-edit');

// proveriti ovu funkciju
function showTransportation() {
    providersListEl.style.display = "block";
}

function showProviderDetail() {

    showProviderDetailEl.style.display = "block";
}

function closeProviderDetail() {

    showProviderDetailEl.style.display = "none";
    
}

function showProviderEdit() {
    showProviderEditEl.style.display = "block"
}
function closeProviderEdit(){
    showProviderEditEl.style.display = "none";
}