"use strict";


/*-----------------------------------------------
|   Pre-loader
-----------------------------------------------*/
$.holdReady(true);
$($('main section')[0]).imagesLoaded({
  background: '.background-holder'
}, function () {
  $.holdReady(false);
});
Utils.$document.ready(function () {
  var $preloader = $('#preloader');
  $preloader.addClass('loaded');
  setTimeout(function () {
    $preloader.remove();
  }, 800);
});
/*-----------------------------------------------
|   Documentation and Component Navigation
-----------------------------------------------*/

Utils.$document.ready(function () {
  var $componentNav = $('#components-nav');

  if ($componentNav.length) {
    var loc = window.location.href;

    var _loc$split = loc.split('#');

    loc = _loc$split[0];
    var location = loc.split('/');
    var url = location[location.length - 2] + "/" + location.pop();
    var urls = $componentNav.children('li').children('a');

    for (var i = 0, max = urls.length; i < max; i += 1) {
      var dom = urls[i].href.split('/');
      var domURL = dom[dom.length - 2] + "/" + dom.pop();

      if (domURL === url) {
        var $targetedElement = $(urls[i]);
        $targetedElement.removeClass('color-5');
        $targetedElement.addClass('fw-700');
        break;
      }
    }
  }
});
/*-----------------------------------------------
|   Table collation
-----------------------------------------------*/

Utils.$document.ready(function () {
  var $tableCollation = $('.table-collation');

  if ($tableCollation.length) {
    $tableCollation.each(function () {
      var $this = $(this);
      $this.tableCollation({
        /* myClass:'table-responsive' */
      });
    });
  }
});
/*-----------------------------------------------
|   Nav burger Panel
-----------------------------------------------*/

Utils.$document.ready(function () {
  var znavContainer = $('.znav-container');
  var navBurger = $('.nav-burger');
  var navBurgerPanel = $('.nav-burger-panel');
  navBurgerPanel.css({
    top: znavContainer.height(),
    height: "calc(100vh - " + znavContainer.height() + "px)"
  });
  navBurger.click(function () {
    navBurgerPanel.toggleClass('nav-burger-panel-collapsed');
    navBurger.toggleClass('is-active');
  });
});
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/

Utils.$document.ready(function () {
  var backgroundOnScrollTransparent = $('.background-on-scroll-transparent');
  backgroundOnScrollTransparent.css({
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: 'background-color 0.3s ease-in-out'
  });

  if (backgroundOnScrollTransparent.length) {
    var windowHeight = Utils.$window.height();
    Utils.$window.scroll(function () {
      var scrollTop = Utils.$window.scrollTop();
      var alpha = scrollTop / windowHeight * 2;
      alpha >= 0.6 && (alpha = 0.6);
      backgroundOnScrollTransparent.css({
        'background-color': "rgba(0, 0, 0, " + alpha + ")"
      });
    }); // Top navigation background toggle on mobile

    backgroundOnScrollTransparent.on('show.bs.collapse hide.bs.collapse', function () {
      return backgroundOnScrollTransparent.toggleClass('background-black');
    });
  }
});
/*-----------------------------------------------
|   Shuffle
-----------------------------------------------*/

Utils.$document.ready(function () {
  var filterContainer = $('.filter-container');
  var filterMenu = $('.filter-menu');

  if (filterMenu.length) {
    var shuffleInstance = new Shuffle(filterContainer, {
      itemSelector: '.filter-item'
    });
    shuffleInstance.filter('header');
    filterMenu.on('click', '.item', function (e) {
      var $this = $(e.target);
      var filterValue = $this.data('filter');
      $this.siblings().removeClass('active');
      $this.addClass('active');
      shuffleInstance.filter(filterValue);
    });
  }
});

// Our code Ari saf tech

setTimeout(() => {
  var a = document.querySelector("#svg-main");
  a.style.visibility = "visible";

}, 400)


$(document).ready(function () {

  $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 100) {

          $(".p6").css("visibility", "visible");
          $(".c7").css("visibility", "visible");

      }
      else {
          $(".p6").css("visibility", "hidden");
          $(".c7").css("visibility", "hidden");

      }

      if (scroll >= 80) {

          $(".p5").css("visibility", "visible");
          $(".c6").css("visibility", "visible");
          console.log("1");
      }
      else {
          $(".p5").css("visibility", "hidden");
          $(".c6").css("visibility", "hidden");

      }

      if (scroll >= 60) {

          $(".p4").css("visibility", "visible");
          $(".c5").css("visibility", "visible");
          console.log("1");
      }
      else {
          $(".p4").css("visibility", "hidden");
          $(".c5").css("visibility", "hidden");

      }


      if (scroll >= 40) {

          $(".p3").css("visibility", "visible");
          $(".c4").css("visibility", "visible");

      }
      else {
          $(".p3").css("visibility", "hidden");
          $(".c4").css("visibility", "hidden");

      }

      if (scroll >= 20) {

          $(".p2").css("visibility", "visible");
          $(".c3").css("visibility", "visible");



      }
      else {
          $(".p2").css("visibility", "hidden");
          $(".c3").css("visibility", "hidden");


      }
      if (scroll >= 1) {

          $(".p1").css("visibility", "visible");
          $(".c2").css("visibility", "visible");
          $(".c1").css("visibility", "visible");


      }
      else {
          $(".p1").css("visibility", "hidden");
          $(".c2").css("visibility", "hidden");
          $(".c1").css("visibility", "hidden");


      }

      var scrollCounter = $(window).scrollTop();


      if (scrollCounter < 1) {

          $(".numInc").html("000,000,000");
          $(".numInc").css("visibility", "hidden");
          $('.numInc').counterUp({
              delay: 10
          });


      }
      if (scrollCounter >= 1) {

          $(".numInc").html("000,000,000");
          $(".numInc").css("visibility", "visible");
          $('.numInc').counterUp({
              delay: 10
          });


      }


      if (scrollCounter >= 20) {

          $(".numInc").html("020,000,000");


      }

      if (scrollCounter >= 40) {

          $(".numInc").html("040,000,000");
         

      }

      if (scrollCounter >= 60) {

          $(".numInc").html("060,000,000");
          

      }
      if (scrollCounter >= 80) {

          $(".numInc").html("080,000,000");
         

      }
      if (scrollCounter >= 100) {

          $(".numInc").html("100,000,000");
          // $('.numInc').counterUp({
         
          // });

      }
      var scrolllr = $(window).scrollTop();
      if (scrollCounter >= 10) {

        $(".lt").css({
          "transform":"translateX(-200vh)",
           "transition":"10s"
        });

        $(".rt").css({
          "transform":"translateX(0vh)",
           "transition":"10s"
        });
    }
      
    if (scrollCounter <10) {

      $(".lt").css({
        "transform":"translateX(0vh)",
         "transition":"10s"
      });

      $(".rt").css({
        "transform":"translateX(200vh)",
         "transition":"10s"
      });
  }
  });
  

});


