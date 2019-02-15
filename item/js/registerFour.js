var registerFour = (function () {
    var $btn = document.querySelector(".btn");
    var $password = document.querySelector("#password");
    var $rePassword = document.querySelector("#rePassword");
    var $iAll = document.querySelectorAll("i");
    
    return {
        init() {
            this.event();
        },
         event() {
            $password.onblur = function () {
                var $tip = document.querySelector(".tip");
                var $ul = document.querySelector(".tip ul");
                var $i = document.querySelector("#i-one");
                if (this.value == "") {
                    $tip.style.display = "block";
                    $i.innerHTML = "密码不能为空";
                    $i.className = "bg-danger";
                    $password.style.border = "1px solid #e8e8e8";
                    console.log($password.style.border)
                    return;
                }
                var reg = /^\w{8,16}$/;
                if (reg.test(this.value)) {
                    $i.innerHTML = "验证成功";
                    $i.className = "bg-success";
                    $ul.style.display = "none";
                } else {
                    $tip.style.display = "block";
                    $i.innerHTML = "格式错误，请输入8~16位，数字、字母、字符至少包含两种的密码";
                    $i.className = "bg-danger";
                    $password.style.border = "1px solid #e8e8e8";
                }
                $rePassword.onblur();
            }
        
            $rePassword.onblur = function () {
                var $tip2 = document.querySelector(".tip2");
                var $ul = document.querySelector(".tip2 ul");
                var $i = document.querySelector("#i-two");
                if (this.value == "") {
                    $tip2.style.display = "block";
                    $i.innerHTML = "密码不能为空";
                    $i.className = "bg-danger";
                    $rePassword.style.border = "1px solid #e8e8e8";
                    return;
                }
                if (this.value == $password.value) {
                    $i.innerHTML = "验证成功";
                    $i.className = "bg-success";
                    $ul.style.display = "none";
                } else {
                    $tip2.style.display = "block";
                    $i.innerHTML = "两次密码输入不一致";
                    $i.className = "bg-danger";
                    $rePassword.style.border = "1px solid #e8e8e8";
                }
            }

            $btn.onclick = function () {
                for (let j = 0; j < $iAll.length; j++) {
                    if ($iAll[j].className != "bg-success") {
                        $password.focus();
                        return;
                    }
                }
                alert("小米账号注册成功");
            }
        }
    }
}())
