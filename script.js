$(document).ready(function () {
  // Initialize Swipers
  var swiperOne = new Swiper(".one", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  var swiperTwo = new Swiper(".two", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  var swiperThree = new Swiper(".three", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  var swiperFour = new Swiper(".four", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  // Tab Navigation
  $(".tab_item").click(function () {
    var tabIndex = $(this).data("tab");
    $(".tab_item").removeClass("active");
    $(this).addClass("active");
    $(".tab_inner").removeClass("active").addClass("hidden");
    $(".tab_inner.n" + tabIndex)
      .removeClass("hidden")
      .addClass("active");

    if (tabIndex === 1) {
      swiperOne.update();
    } else if (tabIndex === 2) {
      swiperTwo.update();
    } else if (tabIndex === 3) {
      swiperThree.update();
    } else if (tabIndex === 4) {
      swiperFour.update();
    }
  });
});
