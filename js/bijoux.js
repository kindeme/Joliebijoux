// hide preloader
// all the images scripts links have finished loading

// window event list

eventListener();
function eventListener(){
  const ui = new UI();
window.addEventListener('load',function(){
 ui.hidePreloader();
});
//nav btn
document.querySelector('.header__navBtn').addEventListener('click',function(){
 ui.showNav();
});
// control the video
document.querySelector('.header__switch-container__video__switch').addEventListener('click',function(){
 ui.videoControls();
});
document.querySelector('.drinkk-form').addEventListener('.submit',function(e){
  e.preventDefault();
  const name = document.querySelector('.input-name').value;
  const lastName = document.querySelector('.input-lastname').value;
  const email = document.querySelector('.input-email').value;
  let value = ui.checkEmpty(name,lastName,email);
  if(value){

  }else{
    ui.showFeedBack('some form values empty','error')
  }
});
}



//  UI constructor
function UI(){}
//  hide function
UI.prototype.hidePreloader = function(){
  document.querySelector('.preloader').style.display = 'none';
}
//  show function 
UI.prototype.showNav = function(){
  document.querySelector('.header__nav').classList.toggle('nav__show');
}
//  control video
// play and pause
UI.prototype.videoControls = function(){
  let btn = document.querySelector('.header__switch-container__video__switch-btn');
  if(!btn.classList.contains('btnSlide')){
    btn.classList.add('btnSlide');
    document.querySelector('.header__video__item').pause();
  } else{
    btn.classList.remove('btnSlide');
    document.querySelector('.header__video__item').play();
  }
}

UI.prototype.checkEmpty = function(name,lastName,email){
  let result;
  if(name ===" " || lastName ===" " || email ===" "){

    result = false;
  } else{
    result = true;
  }
  return result;
}
UI.prototype.showFeedBack = function(text,type){
  if(type ==='success'){

  }else if(type ==='error'){
    let feedback = documment.querySelector('.drink-form__feedback');
    feedback.innerText = text;l

  }
}
