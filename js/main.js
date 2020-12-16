"use strict";

/* authorisation form */

if(document.clientWidth < 1200){
  document.querySelector('.header__login').addEventListener('click', function(){
    document.querySelector('.form-bg').classList.add('is-active');
    document.body.style.overflow = "hidden";
  });
}

document.querySelector('.header__mobile-login').addEventListener('click', function(){
  document.querySelector('.form-bg').classList.add('is-active');
  document.body.style.overflow = "hidden";
});

document.querySelector('.form-bg').addEventListener('click', function(e){
  if(e.target.classList.contains('form-bg')){
    document.querySelector('.form-bg').classList.remove("is-active");
    document.body.style.overflow = "initial";
  }
});

document.getElementById('registrationForm').addEventListener('click', function(){
  document.querySelector('.login-form').classList.add('not-active');
  document.querySelector('.registration-form').classList.add('is-active');
});

/* registration form */

/* request form */

document.getElementById('requestButton').addEventListener('click', function(){
  document.querySelector('.dark-bg').classList.add("is-active");
  document.body.style.overflow = "hidden";
});

document.querySelector('.dark-bg').addEventListener('click', function(e){
  if(e.target.classList.contains('dark-bg')){
    document.querySelector('.dark-bg').classList.remove("is-active");
    document.body.style.overflow = "initial";
  }
});

document.getElementById('requestSelector').addEventListener('click', function(){
  document.querySelector('.request__selector').classList.toggle("is-active");
});

document.querySelectorAll('.request__selector-item').forEach(item => item.addEventListener('click', function(){
  document.getElementById('requestDirection').value = item.innerText;
  document.querySelector('.request__selector').classList.remove("is-active");
}));

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

/* slider */

window.onload = function () {
  let count = 1;
  let multiItemSlider = (function () {
    return function (selector, config) {
      let _mainElement = document.querySelector(selector), // основный элемент блока
        _sliderWrapper = _mainElement.querySelector(".slider__wrapper"), // обертка для .slider-item
        _sliderItems = _mainElement.querySelectorAll(".slider__item"), // элементы (.slider-item)
        _sliderControls = document.querySelectorAll(".slider__control"), // элементы управления
        _sliderControlLeft = document.querySelector(".slider__control_left"), // кнопка "LEFT"
        _sliderControlRight = document.querySelector(".slider__control_right"), // кнопка "RIGHT"
        _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
        _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
        _positionLeftItem = 0, // позиция левого активного элемента
        _transform = 0, // значение транфсофрмации .slider_wrapper
        _step = (_itemWidth / _wrapperWidth) * 100, // величина шага (для трансформации)
        _items = []; // массив элементов

      // наполнение массива _items
      _sliderItems.forEach(function (item, index) {
        _items.push({ item: item, position: index, transform: 0 });
      });

      if(document.documentElement.clientWidth < 992){
        document.querySelectorAll(".slider__img")[1].style.height = "180px";
        document.querySelectorAll(".slider__img")[1].style.width = "130px";
        document.querySelectorAll(".slider__link")[1].style.top = "0px";
      } else{
        document.querySelectorAll(".slider__img")[1].style.height = "280px";
        document.querySelectorAll(".slider__img")[1].style.width = "200px";
        document.querySelectorAll(".slider__link")[1].style.top = "0px";
      }

      let position = {
        getItemMin: function () {
          let indexItem = 0;
          _items.forEach(function (item, index) {
            if (item.position < _items[indexItem].position) {
              indexItem = index;
            }
          });
          return indexItem;
        },
        getItemMax: function () {
          let indexItem = 0;
          _items.forEach(function (item, index) {
            if (item.position > _items[indexItem].position) {
              indexItem = index;
            }
          });
          return indexItem;
        },
        getMin: function () {
          return _items[position.getItemMin()].position;
        },
        getMax: function () {
          return _items[position.getItemMax()].position;
        },
      };
      
      let _transformItem = function (direction) {
        let nextItem;
        if (direction === "right") {
          if(document.documentElement.clientWidth < 992){
            document.querySelectorAll(".slider__img")[count].style.height = "138px";
            document.querySelectorAll(".slider__img")[count].style.width = "100px";    
            document.querySelectorAll(".slider__link")[count].style.top = "45px"; 
          } else{
            document.querySelectorAll(".slider__img")[count].style.height = "250px";
            document.querySelectorAll(".slider__img")[count].style.width = "180px";    
            document.querySelectorAll(".slider__link")[count].style.top = "60px"; 
          }

          if (count > document.querySelectorAll(".slider__img").length - 1) {
            count = 0;
          }

          if (count == document.querySelectorAll(".slider__img").length - 1) {
            count = -1;
          }

          _positionLeftItem++;

          if (_positionLeftItem + _wrapperWidth / _itemWidth - 1 > position.getMax()) {
            nextItem = position.getItemMin();
            _items[nextItem].position = position.getMax() + 1;
            _items[nextItem].transform += _items.length * 100;
            _items[nextItem].item.style.transform = "translateX(" + _items[nextItem].transform + "%)";
          }

          count++;

          if(document.documentElement.clientWidth < 992){
            document.querySelectorAll(".slider__img")[count].style.height = "180px";
            document.querySelectorAll(".slider__img")[count].style.width = "130px";            
            document.querySelectorAll(".slider__link")[count].style.top = "0px";
          } else{
            document.querySelectorAll(".slider__img")[count].style.height = "280px";
            document.querySelectorAll(".slider__img")[count].style.width = "200px";            
            document.querySelectorAll(".slider__link")[count].style.top = "0px";
          }

          _transform -= _step;
        }

        if (direction === "left") {
          if(document.documentElement.clientWidth < 992){
            document.querySelectorAll(".slider__img")[count].style.height = "138px";
            document.querySelectorAll(".slider__img")[count].style.width = "100px";    
            document.querySelectorAll(".slider__link")[count].style.top = "45px"; 
          } else{
            document.querySelectorAll(".slider__img")[count].style.height = "250px";
            document.querySelectorAll(".slider__img")[count].style.width = "180px";    
            document.querySelectorAll(".slider__link")[count].style.top = "60px"; 
          }

          if (count < 0) {
            count = document.querySelectorAll(".slider__img").length - 1;
          }

          if (count == 0) {
            count = document.querySelectorAll(".slider__img").length;
          }

          _positionLeftItem--;

          if (_positionLeftItem < position.getMin()) {
            nextItem = position.getItemMax();
            _items[nextItem].position = position.getMin() - 1;
            _items[nextItem].transform -= _items.length * 100;
            _items[nextItem].item.style.transform = "translateX(" + _items[nextItem].transform + "%)";
          }
          count--;

          if(document.documentElement.clientWidth < 992){
            document.querySelectorAll(".slider__img")[count].style.height = "180px";
            document.querySelectorAll(".slider__img")[count].style.width = "130px";            
            document.querySelectorAll(".slider__link")[count].style.top = "0px";
          } else{
            document.querySelectorAll(".slider__img")[count].style.height = "280px";
            document.querySelectorAll(".slider__img")[count].style.width = "200px";            
            document.querySelectorAll(".slider__link")[count].style.top = "0px";
          }

          _transform += _step;
        }
        _sliderWrapper.style.transform = "translateX(" + _transform + "%)";
      };

      // обработчик события click для кнопок "назад" и "вперед"
      let _controlClick = function (e) {
        if (e.target.classList.contains("slider__control")) {
          e.preventDefault();
          let direction = e.target.classList.contains("slider__control_right") ? "right" : "left";
          _transformItem(direction);
        }
      };

      let _setUpListeners = function () {
        // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для события click
        _sliderControls.forEach(function (item) {
          item.addEventListener("click", _controlClick);
        });
      };

      // инициализация
      _setUpListeners();

      return {
        right: function () {
          // метод right
          _transformItem("right");
        },
        left: function () {
          // метод left
          _transformItem("left");
        },
      };
    };
  })();

  multiItemSlider(".slider-dekst");

  
};


/* FAQ */

const faqQuestionsText = [
  'Каждое занятие является неотъемлемой частью курса, поэтому мы не видим необходимости в проведении пробных занятий. Если у Вас есть сомнения, то наша команда поможет вам подобрать нужный курс. Пройдите наше тестирование.',
  'Такие вопросы решаются индивидуально с преподавателем. Мы можем предоставить запись занятия или преподаватель дает индивидуально материал для изучения.',
  'Мы начинаем занятия по мере формирования групп. Для получения актуальной информации, свяжитесь с нами по телефону или электронной почте.',
  'Вы можете узнать расписание по телефону. Обычно занятия на протяжении всего курса проходят в одно и тоже время.',
  'Да. Вы можете самостоятельно выбрать этот формат обучения.',
  'Продолжительность одного занятия составляет 3 часа.',
  'Оплата вносится ежемесячно, согласно договору.'
]

let faqQuestions = document.getElementById('questions')

let selectedQuestion

let notationText = document.getElementById('notationText')

const childrenFaqQuestions = []

for(let i of faqQuestions.children){
  childrenFaqQuestions.push(i.innerText)
}

if( document.documentElement.clientWidth <= '767' ) {
  let id

  faqQuestions.onclick = function (event) {
      let target = event.target

      if(target.tagName === 'LI'){

              id = childrenFaqQuestions.indexOf(target.innerText)

              if(id === -1){
                  if( target.classList.contains('FAQ__question__active') ){
                      target.classList.remove('FAQ__question__active')
                  }

                  target.querySelector('p').remove()
                  return
              }

              target.innerHTML += `<p>${faqQuestionsText[id]}</p>`

              target.classList.add('FAQ__question__active')

              for(let i of target.parentNode.children){
                  if(i === target){
                      continue
                  }

                  if(i.querySelector('p') === null){
                      i.classList.remove('FAQ__question__active')
                      continue
                  }

                  i.querySelector('p').remove()
                  i.classList.remove('FAQ__question__active')
              }

          }
  }
}
else {
  let faqNotation = document.getElementById('FAQ-notation')

  faqQuestions.children[0].classList.add('FAQ__question__active')

  faqQuestions.onclick = function (event) {
      let target = event.target

      let id = childrenFaqQuestions.indexOf(target.innerText)
      while (target !== this) {

          if (target.tagName === 'LI') {
              findAndChange(target, id)

              return
          }

          target = target.parentNode
      }
  }

  function findAndChange(node, id) {
      faqQuestions.children[0].classList.remove('FAQ__question__active')

      if (selectedQuestion) {
          selectedQuestion.classList.remove('FAQ__question__active')
      }

      selectedQuestion = node
      selectedQuestion.classList.add('FAQ__question__active')
      notationText.innerText = faqQuestionsText[id]
  }
}




