AOS.init();

$(".swiper-wrapper").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  // arrows: false,
  // vertical: true,
  autoplaySpeed: 2000,
  dots: true,
  swipe:true,
  swipeToSlide: true,
  responsive:[
    {
      breakpoint:1200,
      settings:{
        slidesToShow: 3
      }
    },
    {
      breakpoint:1024,
      settings:{
        slidesToShow: 2.4
      }
    },
    {
      breakpoint:700,
      settings:{
        slidesToShow: 2
      }
    },
    {
      breakpoint:540,
      settings:{
        slidesToShow: 1
      }
    }
  ]
  });

  $(".header-btn").on("click",function(){
    $(".nav-list-hamburger").slideToggle();
    $(".top-line, .center-line, .bottom-line").toggleClass("open");
  })

$('.question-part').on('click', function(){
    // $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  // 変数宣言と代入
var pageTop = $("#page-top");
// ボタン非表示
pageTop.hide();


// 80pxスクロールしたらボタン表示
$ (window).scroll(function () {
    if ($(this).scrollTop() > 80) {
    // 0.3秒でフェードイン
    pageTop.fadeIn(300);
} else {
    // 0.3秒でフェードアウト
    pageTop.fadeOut(300);
}
});
// 0.5秒でページトップへ戻る
pageTop.click(function () {
    $("body, html").animate({ scrollTop: 0}, 500);
    return false;
})



