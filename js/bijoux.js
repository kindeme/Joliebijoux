// hide preloader
// all the images scripts links have finished loading

// window event list
window.addEventListener('load',function(){
  document.querySelector('.preloader').style.display = 'none';
});
//nav btn
document.querySelector('.header__navBtn').addEventListener('click',function(){
  document.querySelector('.header__nav').classList.toggle('nav__show');

})