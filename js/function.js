function setProjectItemHeight(){var e=$(".owl-item");e.height(e.width()/1.774)}$(document).ready(function(){$("#preloader").fadeOut(1e3);var e=$(".projects");e.owlCarousel({loop:!1,nav:!1,dots:!1,smartSpeed:1400,margin:30,autoplay:!0,autoplayTimeout:1e4,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:2}}}),e.on("wheel",".owl-stage",function(t){t.originalEvent.deltaY<0?e.trigger("prev.owl"):e.trigger("next.owl"),t.preventDefault(),t.stopPropagation()}),setProjectItemHeight(),$(window).resize(function(){setTimeout(function(){setProjectItemHeight()},500)}),$(document).keyup(function(t){37==t.keyCode||65==t.keyCode?e.trigger("prev.owl.carousel",[700]):39!=t.keyCode&&68!=t.keyCode||e.trigger("next.owl.carousel",[700])}),$(".about__link").click(function(){$(document).height()-$(window).height()!=$(document).scrollTop()&&$("html, body").animate({scrollTop:$("#projects").position().top},800)})});