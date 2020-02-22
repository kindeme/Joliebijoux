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
document.querySelector('.drink-form').addEventListener('submit',function(e){
  e.preventDefault();
  const name = document.querySelector('.input-name').value;
  const lastName = document.querySelector('.input-lastname').value;
  const email = document.querySelector('.input-email').value;
  let value = ui.checkEmpty(name,lastName,email);

  if(value){
    let customer = new Customer(name,lastName,email);
    ui.addCustomer(customer);
    ui.showFeedBack('customer add to the list','success');
    ui.clearFields();
  }else{
    ui.showFeedBack('some form values empty','error')
  }
});
// ui.addCustomer()
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
  if(name ==="" || lastName ===" " || email === " "){
    result = false;
  } else{
    result = true;
  }
 return result;
}
UI.prototype.showFeedBack = function(text,type){
  if(type ==='success'){
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('success');
    feedback.innerText = text;
    this.removeAlert('success')
  }
  else if(type ==='error'){
    let feedback = document.querySelector('.drink-form__feedback');
    feedback.classList.add('error');
    feedback.innerText = text;
    this.removeAlert('error');

  }
}

// remove alert
UI.prototype.removeAlert = function(type){
  setTimeout(function(){
    document.querySelector('.drink-form__feedback').classList.remove(type);

  },3000)
}

// add customer
UI.prototype.addCustomer = function(customer){
  const images = [1,2,3,4];
  let random = Math.floor(Math.random() *images.length )
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `
  <img src="../image/person-${random+1}.jpg" alt="" class="person__thumbnail">
  <h4 class="person__name">${customer.name}</h4>
  <h4 class="person__lastname">${customer.lastname}</h4>`;
  document.querySelector('.drink-card__list').appendChild(div);
}

// clear fiels
UI.prototype.clearFields = function(){
document.querySelector('.input-name').value ='';
 document.querySelector('.input-lastname').value = '';
document.querySelector('.input-email').value = '';
}
// collect customer
function Customer(name, lastname, email){
  this.name = name;
  this.lastname = lastname;
  this.email = email;
}