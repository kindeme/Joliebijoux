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

