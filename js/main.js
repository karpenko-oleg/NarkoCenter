const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // буллеты
      clickable: true,

      // динамические буллеты
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      // возможность перетаскивать скролл
      draggable: true,
    },
    // ВКЛЮЧЕНИЕ/ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
    simulateTouch: true,

    // ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
    touchRatio: 1,

    // УГОЛ СРАБАТЫВАНИЯ СВАЙПА
    touchAngle: 45,

    // КУРСОРПЕРЕТАСКИВАНИЯ
    grabCursor: true,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // управление клавиатурой
    keyboard: {
      // включить.выключить
      enabled: true,
      // включить.выключить только когда слайдер в пределах вьюпорта
      onlyUnViewport:true,
      // включить.выключить управление клавишами 
      pageUPDown:true,
    }
  });

  const swiperlicense = new Swiper('.swiper-license', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // буллеты
      clickable: true,
      // динамические буллеты
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',

      // возможность перетаскивать скролл
      draggable: true,
    },

    slidesPerView: 4.2,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 2
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 2
      },
      390: {
        slidesPerView: 1.5,
        spaceBetween: 5
      },
      400: {
        slidesPerView: 1.7,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.2,
        spaceBetween: 15
      },
      580: {
        slidesPerView: 2.7,
        spaceBetween: 15
      },
      680: {
        slidesPerView: 3.1,
        spaceBetween: 15
      },
      // when window width is >= 820px
      820: {
        slidesPerView: 3.8,
        spaceBetween: 20
      },
      // when window width is <= 970px
      970: {
        slidesPerView: 4.2,
        spaceBetween: 20
      }
    },

    // ВКЛЮЧЕНИЕ/ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
    simulateTouch: true,

    // ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
    touchRatio: 1,

    // УГОЛ СРАБАТЫВАНИЯ СВАЙПА
    touchAngle: 45,

    // КУРСОРПЕРЕТАСКИВАНИЯ
    grabCursor: true,

    // переключение при клике на слайд
    slideToClickedSlide: true,

    // управление клавиатурой
    keyboard: {
      // включить.выключить
      enabled: true,
      // включить.выключить только когда слайдер в пределах вьюпорта
      onlyUnViewport:true,
      // включить.выключить управление клавишами 
      pageUPDown:true,
    }

    // // Управление колесом мыши
    // mousewheel:{
    //   // чувствительность колеса мыши
    //   sensitivity: 1,
    //   // класс объекта на котором будет срабатывать прокрутка мышью
    //   eventsTarget: ".image-slider"
    // },

    // Автовысота
    // autoHeight: true,
});


// accordion*************************
document.querySelectorAll('.question__accordion_button').forEach((el) => {
  el.addEventListener('click',() => {

    let content = el.nextElementSibling;
    // console.log(content)

    if(content.style.maxHeight) {
        document.querySelectorAll('.question__accordion_button_text').forEach((el) => el.style.maxHeight = null)
    } else{
      document.querySelectorAll('.question__accordion_button_text').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  }
  )
})

// pop-up********************************

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.question__ask_button');
let closePopupButton = document.querySelector('.popup__closse_img');

openPopupButtons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () =>{
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) =>{
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

const slideKoments = new Swiper('.swiper-koments', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // буллеты
    clickable: true,

    // динамические буллеты
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    // возможность перетаскивать скролл
    draggable: true,
  },
  slidesPerView: 2.2,
  // ВКЛЮЧЕНИЕ/ОТКЛЮЧЕНИЕ ПЕРЕТАСКИВАНИЯ НА ПК
  simulateTouch: true,

  // ЧУВСТВИТЕЛЬНОСТЬ СВАЙПА
  touchRatio: 1,

  // УГОЛ СРАБАТЫВАНИЯ СВАЙПА
  touchAngle: 45,

  // КУРСОРПЕРЕТАСКИВАНИЯ
  grabCursor: true,

  // переключение при клике на слайд
  slideToClickedSlide: true,

  // управление клавиатурой
  keyboard: {
    // включить.выключить
    enabled: true,
    // включить.выключить только когда слайдер в пределах вьюпорта
    onlyUnViewport:true,
    // включить.выключить управление клавишами 
    pageUPDown:true,
  }
});