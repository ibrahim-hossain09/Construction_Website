let navbar = document.querySelector('.header .navbar');
let menuButton = document.querySelector("#menu-btn");
let searchBar = document.querySelector('.header .search_form');
let searchButton = document.querySelector('#search-btn');
let loginBar = document.querySelector('.header .login_form');
let loginButton = document.querySelector('#login-btn');
let infoBar = document.querySelector('.contact_info');
let infoButton = document.querySelector('#info-btn');
let infoCloseButton = document.querySelector('#close-contact-info');
let body = document.querySelector('#body');









menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    loginBar.classList.remove('active');
});

searchButton.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  navbar.classList.remove('active');
  loginBar.classList.remove('active');
});

loginButton.addEventListener('click', () => {
  loginBar.classList.toggle('active');
  navbar.classList.remove('active');
  searchBar.classList.remove('active');
});

infoButton.addEventListener('click', () => {
  infoBar.classList.toggle('active');
  navbar.classList.remove('active');
  searchBar.classList.remove('active');
  loginBar.classList.remove('active');
});

infoCloseButton.addEventListener('click', () => {
  infoBar.classList.remove('active');
});



window.onscroll = () => {
    navbar.classList.remove('active');
  searchBar.classList.remove('active');
  loginBar.classList.remove('active');
  infoBar.classList.remove('active');
};

var experience = setInterval(projectDone, 10);
var project = setInterval(project, 10);
var client = setInterval(client, 10);
var workers = setInterval(workers, 10);

let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 1;


function projectDone() {
  count1++;
  document.querySelector('#number1').innerHTML = count1 + '+';
  //stop at given condition
  if (count1 == 15) {
    clearInterval(experience);
  }
}

function project() {
  count2++;
  document.querySelector('#number2').innerHTML = count2 + '+';
  //stop at given condition
  if (count2 == 1500) {
    clearInterval(project);
  }
}

function client() {
  count3++;
  document.querySelector('#number3').innerHTML = count3 + '+';
  //stop at given condition
  if (count3 == 790) {
    clearInterval(client);
  }
}

function workers() {
  count4++;
  document.querySelector('#number4').innerHTML = count4 + '+';
  //stop at given condition
  if (count4 == 450) {
    clearInterval(workers);
  }
}



 var swiper = new Swiper('.home_slider', {
  loop: true,
  grabCursor:true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

 
 lightGallery(document.querySelector('.projects .box-container'));

  var swiper = new Swiper('.reviews-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      640: {
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

    var swiper = new Swiper('.blogs-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        640: {
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

    var swiper = new Swiper('.logo-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      breakpoints: {
        450: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
      },
    });