window.onload = function(){



let rowButton = document.querySelectorAll(".content-row__button");
let popupBg = document.querySelectorAll(".popup-bg");
let popupClose = document.querySelectorAll(".popup-close");
let typeBtn = document.querySelectorAll(".type__btn");
let checkbox = document.querySelectorAll(".checkbox");
for (let i = 0; i < rowButton.length; i++) {
  rowButton[i].onclick = function(){
    document.getElementById('popupBtn').classList.add('active');
	document.getElementsByTagName('body')[0].classList.add('lock');
  };
}

for (let i = 0; i < typeBtn.length; i++) {
  typeBtn[i].onclick = function(){
    document.getElementById('popupType').classList.add('active');
	document.getElementsByTagName('body')[0].classList.add('lock');
  };
}

for (let i = 0; i < popupBg.length; i++) {
  popupBg[i].onclick = function(){
  	let popup = document.querySelectorAll('.popup');
    for (var j = 0; j < popupBg.length; j++){
    	popup[j].classList.remove('active');
    }
	document.getElementsByTagName('body')[0].classList.remove('lock');
  };
}

for (let i = 0; i < popupClose.length; i++) {
  popupClose[i].onclick = function(){
  	let popup = document.querySelectorAll('.popup');
    for (var j = 0; j < popupBg.length; j++){
    	popup[j].classList.remove('active');
    }
	document.getElementsByTagName('body')[0].classList.remove('lock');
  };
}

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].onclick = function(){
  	let input = checkbox[i].querySelector('input');
    checkbox[i].classList.toggle('active');
    if(checkbox[i].classList.contains('active')){
    	input.setAttribute('checked',true);
    }else{
    	input.setAttribute('checked',false);
    }
  };
}


function videoplay(button) {
    let par = button.parentNode;
    let videoId = button.getAttribute('data-video');
    par.innerHTML = '<iframe src="//www.youtube.com/embed/' + videoId + '?autoplay=1" scrolling="no" style="width: 100%; height: 100%;" allow="autoplay"></iframe>';
}

}


$(document).ready(function(){









})