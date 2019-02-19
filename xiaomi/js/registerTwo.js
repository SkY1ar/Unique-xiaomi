var registerTwo = (function () {
    var $nextStep = document.querySelector(".nextStep");
    var $resend_time = document.querySelector(".resend_time");
    var $btn = document.querySelector("#btn");
    var setTime;
    return {
        init() {
            this.event();
            this.showTime();
        },
         event() {
             var _this = this;
            $nextStep.onclick = function() {
                location.href = 'registerThree.html';
            }
            $btn.onclick = function() {
                _this.showTime();
            }
        },
        showTime() {
            $(document).ready(function(){
                var time=parseInt($("#time").text());
                setTime=setInterval(function(){
                    if(time<=0){
                        $resend_time.innerHTML = "重新发送";
                        clearInterval(setTime);
                        return;
                    }
                    time--;
                    $("#time").text(time);
                },1000);
            });
        }
    }
}())

















// var registerTwo = (function () {
//     var $nextStep = document.querySelector(".nextStep");
//     return {
//         init() {
//             this.event();
//         },
//         event() {
//             $nextStep.addEventListener("click", function () {
//                 location.href = 'registerThree.html';
//             }, false)
//         }
//     }
// })