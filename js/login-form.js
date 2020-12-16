'use strict'

/* remind password form */

document.querySelector('.login-form__remind').addEventListener('click', function(){
    document.querySelector('.login-block__wrapper').classList.add('not-active');
    document.querySelector('.remind-block__wrapper').classList.add('flex-active');
});

document.querySelector('.login-form__registration').addEventListener('click', function(){
    document.querySelector('.login-block').classList.add('not-active');
    document.querySelector('.registration').classList.add('is-active');
});