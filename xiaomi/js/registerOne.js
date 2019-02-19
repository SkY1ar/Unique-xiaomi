var registerOne = (function () {
    var $tel = document.querySelector("#tel");
    var $btn = document.querySelector(".btn");
    var $agree = document.querySelector(".agree i");
    var $no_agree = document.querySelector(".agree em");
    var $tip2 = document.querySelector(".tip2");
    var $span2 = document.querySelector(".tip2 span");
    return {
        init() {
            this.event();
        },
         event() {

            $tel.onblur = function () {
                var $tip = document.querySelector(".tip");
                var $span = document.querySelector(".tip span");
                if ($tel.value == "") {
                    $tel.focus();
                    $tip.style.display = "block";
                    $span.innerHTML = "请输入手机号码";
                    $tel.style.border = "1px solid #ff6666";
                    return;
                }
                var reg = /^1\d{10}$/;
                if (reg.test($tel.value)) {
                    $tip.style.display = "none";
                    $tel.style.border = "1px solid #e8e8e8";
                } else {
                    $tip.style.display = "block";
                    $span.innerHTML = "手机号码格式错误";
                    $tel.style.border = "1px solid #ff6666";
                }
            }
            
            $agree.onclick = function () {
                $agree.style.display = "none";
                $no_agree.style.display = "block";
                $tip2.style.display = "none";
            }
            $no_agree.onclick = function () {
                $agree.style.display = "block";
                $no_agree.style.display = "none";
                $tip2.style.display = "none";
            }
            $btn.addEventListener("click", function() {
                var reg = /^1\d{10}$/;
                if(reg.test($tel.value)) {
                    alert("验证成功");
                    location.href = 'registerTwo.html';
                }
            },false)

            $btn.addEventListener("click", function() {
                var $tip2 = document.querySelector(".tip2");
                var $span2 = document.querySelector(".tip2 span");
                if ( $no_agree.style.display = "block") {
                    $tip2.style.display = "block";
                    $span2.innerHTML = "请您同意用户条款";
                    $agree.style.display = "none";
                    return;
                }  
            },false)
        }
    }
}())








