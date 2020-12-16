'use strict';

/* authorisation form */

document.querySelector('.header__login').addEventListener('click', function(){
  document.querySelector('.form-bg').classList.add('is-active');
  document.body.style.overflow = 'hidden';
});

document.querySelector('.header__mobile-login').addEventListener('click', function(){
  document.querySelector('.form-bg').classList.add('is-active');
  document.body.style.overflow = 'hidden';
});

document.querySelector('.form-bg').addEventListener('click', function(e){
  if(e.target.classList.contains('form-bg')){
    document.querySelector('.form-bg').classList.remove('is-active');
    document.body.style.overflow = 'initial';
  }
});

document.getElementById('registrationForm').addEventListener('click', function(){
  document.querySelector('.login-form').classList.add('not-active');
  document.querySelector('.registration-form').classList.add('is-active');
});

/* registration form */



/* tray menu dropdown */
document.querySelector('.header__menu-button-img').addEventListener('click', function(){
  document.querySelector('.tray-bg').classList.toggle('is-active');
});

document.querySelector('.tray-bg').addEventListener('click', function(e){
  if(e.target.classList.contains('tray-bg')){
    document.querySelector('.tray-bg').classList.remove('is-active');
  }
})

document.getElementById('trayDropdown').addEventListener('click', function(){
    document.querySelector('.tray__dropdown').classList.toggle('is-active');
});