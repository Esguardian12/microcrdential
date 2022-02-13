let game1 = document.querySelector('#game1').innerHTML;
let game2 = document.querySelector('#game2').innerHTML;
let game3 = document.querySelector('#game3').innerHTML;
let price1 = document.querySelector('#price1').innerHTML;
let price2 = document.querySelector('#price2').innerHTML;
let price3 = document.querySelector('#price3').innerHTML;

let bagBtn = document.querySelector('#bag1');
let bagBtn2 = document.querySelector('#bag2');
let bagBtn3 = document.querySelector('#bag3');


bagBtn.addEventListener('click',()=>{
	localStorage.setItem('game1', game1)
	localStorage.setItem('price1', price1)
})
bagBtn2.addEventListener('click',()=>{
	localStorage.setItem('game2', game2)
	localStorage.setItem('price2', price2)
})
bagBtn3.addEventListener('click',()=>{
	localStorage.setItem('game3', game3)
	localStorage.setItem('price3', price3)
})