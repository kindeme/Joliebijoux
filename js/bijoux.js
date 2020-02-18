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
})
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
// control the video
// document.querySelector('.header__switch-container__video__switch').addEventListener('click',function({})
