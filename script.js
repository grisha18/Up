const productNameRowButton = document.querySelector('.product-name-row__button button');
const formBlockTwo = document.querySelector('.form-block__two');
const formTimer = document.querySelector('.form-timer');
const productNameButton = document.querySelector('.product-name-button');
const productTwoRowButton = document.querySelector('.product-two-row__button');


productNameRowButton.addEventListener('click', ()=>{

        formBlockTwo.scrollIntoView();

})

productNameButton.addEventListener('click', ()=>{

        formBlockTwo.scrollIntoView();
})

productTwoRowButton.addEventListener('click', ()=>{

        formBlockTwo.scrollIntoView();
})


document.getElementById("phone-input").addEventListener("input", allowOnlyDigits);

function allowOnlyDigits() {  
  if (this.validity.valid) {
    this.setAttribute('current-value', this.value.replace(/[^\d]/g, ""));
  }
  this.value = this.getAttribute('current-value');
}

var timer;

  function backTime(minutes, seconds) {
    var seconds = 60;
    var mins = minutes

    function tick() {

      var current_minutes = mins - 1
      seconds--;
      formTimer.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        timer = setTimeout(tick, 1000);
      } else {

        if (mins > 1) {

          setTimeout(function() {
            backTime(mins - 1);
          }, 1000);

        }
      }
    }
    tick();
  }

 backTime(30);




