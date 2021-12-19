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



let timer; 
let x = 1800;


backtime(); 

function backtime(){

     formTimer.innerHTML = x;  
        x--;

	if (x < 0) {
	    clearTimeout(timer);
	}
	else {
	    timer = setTimeout(backtime, 1000);
	}
}



