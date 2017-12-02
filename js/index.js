$(window).on('load', function(){
  TweenMax.to(".top__image--up", .5, {top: 0, left: -300, opacity: 1});
  TweenMax.to(".top__image--down", .5, {left: -300, bottom: -350, opacity: 1, delay: .3});
  TweenMax.from(".Line", 3, {transform: "rotate(300deg)"});
  TweenMax.to(".top__image-inner--up, .top__image-inner--down, .top__right", 1, {opacity: 1, delay: 1});
});

