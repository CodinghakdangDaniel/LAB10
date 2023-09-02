var noBtn = document.getElementById('noBtn');
var yesBtn = document.getElementById('yesBtn');

const data = prompt('What is your name?');
if (data.length > 6) {
      noBtn
    }
    else {
        yesBtn
    }


var modal= document.getElementById('myModal');

yesBtn.onclick = function() {
    modal.style.display = "block";
}
const closeBtn = modal.querySelector(".close")

closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
