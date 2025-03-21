$(document).ready(function () {
  // Initialize Swipers
  var swiperProtein = new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true
  });

  // Tab Navigation
  $(function(){
    $('.tab_inner').hide();
    $('.tab_item > a').click(function () {
      $('.tab_inner').hide().filter(this.hash).fadeIn();
      $('.tab_item > a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
  });
});
