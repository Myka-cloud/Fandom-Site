const menu = document.querySelector('.HB-menu')
const close = document.querySelector('.Close-Btn')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
});

const splash = document.querySelector('.splash');
      
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
});


var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
    spaceBetween: 30,
    slidesPerView: "auto",
    centered: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
// when window width is <= 499px

920: {
    slidesPerView: 1,
    spaceBetweenSlides: 20
},
1200: {
  slidesPerView: 1,
  spaceBetweenSlides: 5
}
// when window width is <= 999px

}

  });

  var menuitem = document.getElementById("menuitem");
        menuitem.style.maxHeight = "0px";
    
        function menutoggle() {
          if (menuitem.style.maxHeight == '0px') {
            menuitem.style.maxHeight = "200px"
          } else {
            menuitem.style.maxHeight = "0px"
          }
        }
    
        window.addEventListener("scroll", function() {
          var header = document.querySelector("header");
          header.classList.toggle("sticky", window.scrollY > 50);
        });

        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: false,
          responsive: {
            414: {
              items: 1
            },
            600: {
              items: 2
            },
            1000: {
              items: 4
            }
          }
        });

        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: false,
          responsive: {
            411: {
              items: 1
            },
            768: {
              items: 2
            },
            1000: {
              items: 4
            }
          }
        })



  
