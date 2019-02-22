var registerOne = (function () {
    var $tel = document.querySelector("#tel");
    var $btn = document.querySelector(".btn");
    var $agree = document.querySelector(".agree i");
    var $no_agree = document.querySelector(".agree em");
    var $tip2 = document.querySelector(".tip2");
    var $span2 = document.querySelector(".tip2 span");
    var $form = document.querySelector('form');
    return {
        init() {
            this.event();
        },
         event() {
            var _this = this;
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
                _this.getRom( );
                sendAjax('php/test.php', {
                    type: 'POST',
                    data: {
                        username:  $form['telephone'].value
                    },
                    success(data) {
                        console.log(data);
                        let { code, msg } = JSON.parse(data);
                        if (code == "200") {
                            alert(msg);
                        } else if(reg.test($tel.value)){
                            alert("验证成功");
                            location.href = 'registerTwo.html';
                        }
                    }
                })
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
        },
        getRom( ){
            var obj = {};
            obj.phone = $tel.value;
            var str = '';
            for(var i = 0;i < 4;i++){
                var num = Math.floor(Math.random()*10)
                str += num
            }
            obj.code = str;
            this.setData(obj)
        },
        setData(data){
            var register = localStorage.register || '[]';
            register = JSON.parse(register)
            for(var i = 0;i < register.length;i++){
                if(register[i].phone == data.phone ){
                   register[i].code = data.code;
                    break
                }
            }
            if(i == register.length){
               register.push(data);
            }
            localStorage.register = JSON.stringify(register);
        }
    }
}())




var yanzheng = (function(){
    var $btn = document.querySelector('.btn')
    return {
        init(){
            this.event()
        },
        event(){
            $btn.on
        }
    }
}())




