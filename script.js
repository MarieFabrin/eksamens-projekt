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
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        document.getElementById("main-navbar").style.height = "15vh";
        document.querySelector(".logo img").style.height = "5vh";

    }else{
        document.getElementById("main-navbar").style.height = "20vh";
        document.querySelector(".logo img").style.height = "7vh";
    }
}

/* validate kontakt felt */
function sendsvar() {
    const navn = document.getElementById('navn').value;
    const tlf = document.getElementById('tlf').value;
    const email = document.getElementById('email').value;
    const besked = document.getElementById('besked').value;
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
