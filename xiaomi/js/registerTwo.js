var registerTwo = (function () {
    var $nextStep = document.querySelector(".nextStep");
    var $resend_time = document.querySelector(".resend_time");
    var $btn = document.querySelector("#btn");
    var $readySend = document.querySelector('.readySend em');
    var $test = document.querySelector('.test');
    var setTime;
    return {
        init() {
            this.event();
            this.showTime();
            this.getData();
        },
         event() {
             var _this = this;
            $nextStep.onclick = function() {
                if($test.value == _this.data.code){
                    location.href = 'registerThree.html';
                }else{
                    alert('验证码错误') 
                }
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
        },
        getData(){
            var register = localStorage.register || '[]';
            register = JSON.parse(register);
            var obj=register.pop()
            this.insertData(obj);
         },
         insertData(data){
             console.log(data.code)
            this.data = data;
            $readySend.innerHTML = data.phone;
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