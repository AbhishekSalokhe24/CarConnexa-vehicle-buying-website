let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{

    if(Window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');

    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{

    if(Window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');

    }
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('log-active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('log-active');
}

document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm=>{
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerHeight - e.pageX * speed)/90;
        let y = (window.innerHeight - e.pageY * speed)/90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
};

document.querySelector('.home').onmouseleave = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm=>{
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerHeight - e.pageX * speed)/90;
        let y = (window.innerHeight - e.pageY * speed)/90;

        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
};



var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  grabCursor:true,
  centeredSlides:true,
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
});


var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  grabCursor:true,
  centeredSlides:true,
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
});
  

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  grabCursor:true,
  centeredSlides:true,
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        },
});

