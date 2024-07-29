{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}

document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');
    let loginBtn = document.querySelector('#login-btn');
    let loginFormContainer = document.querySelector('.login-form-container');
    let goBackBtn = document.querySelector('#backNow');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
        console.log("Menu button clicked");
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }

    loginBtn.onclick = () => {
        loginFormContainer.classList.toggle('active');
        console.log("Login button clicked");
    }

    goBackBtn.onclick = () => {
        loginFormContainer.classList.remove('active');
        console.log("Go Back button clicked");
    }
});

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
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
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
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
      1040: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
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
      1040: {
        slidesPerView: 3,
      },
    },
  });
  
  $(document).ready(function() {
    $('.get-quote-btn').click(function(e) {
      e.preventDefault();
      var modelId = $(this).data('model-id');
      openQuoteForm(modelId);
      scrollToQuoteForm(); // Call the function to scroll to the quote form
    });
    function openQuoteForm(modelId) {
      $('#modelId').val(modelId);
      $('#quote-form').slideDown(); // Use slideDown to show the quote form with sliding effect
    }

    function scrollToQuoteForm() {
      var targetOffset = $('#quote-form').offset().top;
      var headerHeight = $('.navbar').outerHeight(); // Adjust if you have a fixed header
      var extraHeight = 90;
    
      $('html, body').animate({
        scrollTop: targetOffset - headerHeight - extraHeight // Adjusted offset considering header height
      }, 1000);
    }
  });
