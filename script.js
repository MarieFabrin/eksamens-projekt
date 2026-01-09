window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        document.getElementById("navbar").style.height = "120px";
        document.getElementById("logo").style.height = "80px";

    }else{
        document.getElementById("navbar").style.height = "190px";
        document.getElementById("logo").style.height = "100px";
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

// Get the modal
var modal = document.querySelector(".popUp");

// Get the <span> element that closes the modal
var btn = document.querySelector(".popUpX");

console.log(modal)

// When the user clicks on <span> (x), close the modal
btn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

