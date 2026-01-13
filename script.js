/* navbar + footer */
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
  });

  fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });
  

/*navbar minimize on scroll*/
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var logo = document.querySelector("#logo img")
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        document.getElementById("main-navbar").style.height = "15vh";
        logo.style.height = "12vh";

    }else{
        document.getElementById("main-navbar").style.height = "20vh";
        logo.style.height = "15vh";
    }
}

/* pop up */
function lukPopup() {
    document.querySelector(".popup").style.display = "none";
}

/* dropdown menu */
var menuOpen = false;
function openMenu(){
    if (menuOpen) {
        var displayMode = "none";
        menuOpen = false;
    }
    else {
        var displayMode = "block";
        menuOpen = true;
    }
    document.querySelector(".dropdown-content").style.display = displayMode;

}

/* validate kontakt felt */
function sendsvar() {
    var navn = document.getElementById('navn').value;
    var tlf = document.getElementById('tlf').value;
    var email = document.getElementById('email').value;
    var besked = document.getElementById('besked').value;
    if (navn == '') {
        alert('Navn skal udfyldes');
    }
    if (tlf == '' && email == '') {
        alert('Telefon nr og/eller email skal udfyldes');
    }
    if (besked == '') {
        alert('Besked skal udfyldes');
    }
}