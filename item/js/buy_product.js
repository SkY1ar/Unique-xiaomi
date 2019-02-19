
$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top > 205) {
        $("#buy_product_wrapper").addClass("fixed");
        // $("#buy_product_wrapper").animate({ top: 0 });
    }
    else if (top <= 140) {
        $("#buy_product_wrapper").removeClass("fixed");
    }
})

var $left = document.querySelector('.buy_pro_left');
      document.body.onscroll = function(){
        var top = document.documentElement.scrollTop;
          if (top > 140 && top < 1100){
               $left.style.position = 'fixed';
               $left.style.top = "80px";
          }else if(top = 70){
              $left.style.position = 'relative';
              $left.style.top = "60px";
          }
      }












