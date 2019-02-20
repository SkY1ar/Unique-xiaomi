var xiaomi = (function() {
    var $inp = document.querySelector('.seacher-txt');
    var $keywordslist = document.querySelector('.keywordslist');
    var $keyWords = document.querySelector('.seacher-word');
    var $seacherTxt = document.querySelector('.seacher-txt');
    var $seacherSub = document.querySelector('.seacher-sub');
    console.log($keywordslist)
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $inp.onfocus = function() {
                var val = this.value;
                if(val == '') {
                    _this.show()
                } else {
                    $seacherTxt.classList.add('txt-border');
                    $seacherSub.classList.add('sub-border');
                }
            }
            $inp.oninput = function() {
                var val = this.value;
                if(val == ''){
                    _this.show()
                }else{
                    $keywordslist.style.display = 'block';
                    $seacherTxt.classList.add('txt-border');
                    $seacherSub.classList.add('sub-border');
                    _this.getJson(val);
                }
            }
            $inp.onblur = function() {
                    _this.hidden()
            }
            $keywordslist.onclick = function(e) {
                console.log('click');
                e = e || window.event;
                // 获取目标元素
                var target = e.target || e.srcElement;
                if(target.nodeName === 'LI') {
                    console.log(1);
                    var text = target.innerHTML;
                    $inp.value = text;
                }
            }
        },
        show() {
            $keywordslist.style.display = 'block';
            $keywordslist.innerHTML = `
            <ul>
                            <li><a href="#">小米6x<span>约有6件</span></a></li>
                            <li><a href="#">小米MIX 2S<span>约有5件</span></a></li>
                            <li><a href="#">黑鲨游戏手机<span>约有3件</span></a></li>
                            <li><a href="#">红米NOTE 5<span>约有6件</span></a></li>
                            <li><a href="#">红米5A<span>约有13件</span></a></li>
                            <li><a href="#">小米电视4C<span>约有5件</span></a></li>
                            <li><a href="#">电视32英寸<span>约有3件</span></a></li>
                            <li><a href="#">笔记本pro<span>约有5件</span></a></li>
                            <li><a href="#">空气净化器<span>约有11件</span></a></li>
                            <li><a href="#">净水器<span>约有8件</span></a></li>
                        </ul>`
            $keyWords.style.display = 'none';
            $seacherTxt.classList.add('txt-border');
            $seacherSub.classList.add('sub-border');
        },
        hidden() {
            $keywordslist.style.display = 'none';
            $keyWords.style.display = 'block';
            $seacherTxt.classList.remove('txt-border');
            $seacherSub.classList.remove('sub-border');
        },
        getJson(val) {
            var url = 'https://search.mi.com/search/expand';
            sendJsonp(url, {
                keyword: val,
                jsonpcallback: "xiaomi.insertData"
            })
        },
        insertData(data) {
            console.log(data);
            $keywordslist.innerHTML = '';
            var $ul = document.createElement('ul')
            for( i in data){
               var $li = document.createElement('li');
               $li.innerHTML = `
            <li><a href="#">${data[i].Key}<span>约有${data[i].Rst}件</span></a></li>`
               $ul.appendChild($li);
            }
            $keywordslist.appendChild($ul);
        }
    }
}())


var nav = (function(){
    var num = 0;
    return {
        init(){
            this.event()
        },
        event(){
            const _this = this;
            $(document).ready(function () {
                $('.header-nav .show').hover(function () {
                    $(".header-nav-mean").show( );
                }, function () {
                    $(".header-nav-mean").hide( );
                });

                $(".header-nav-mean").hover(function () {
                    $(this).show( );
                }, function () {
                    $(this).hide();
                });
            })
            $('.header-nav .leave li').on('mouseenter',function(){
                var flag = true
                $(this).siblings().each(function(){
                    if($(this).hasClass('nav-active')){
                        flag = false;
                    };
                })
                if(flag){
                    $(this).addClass('nav-active');
                }
                if($(this).hasClass('nav-active')){
                    $(this).children('a').css('color','#ff6700');
                    num = $(this).index();
                    if (num < 8){
                        _this.getJson();
                    }
                }                                                                                                         
            })
            $('.header-nav .leave li a').on('mouseenter',function(){
                $(this).parent('li').siblings().children('a').css('color','#333');
                $(this).parent('li').addClass('nav-active').siblings().removeClass('nav-active');
                if( $(this).parent('li').hasClass('nav-active')){
                    $(this).css('color','#ff6700')
                    num = $(this).parent('li').index();
                    if (num < 8){
                        _this.getJson();
                    }
                }
            })
            $('.header-nav .leave').on('mouseleave',function(){
                $(this).children('li').removeClass('nav-active');
                $(this).find('a').css('color','#333');
            })  
        },
        getJson(){
            const _this = this;
           $.getJSON('json/data.json',function(data){
               _this.insertData(data)
           })
        },
        insertData(data){
            $('.nav-mean').empty();
            var $ul = $('<ul></ul>')
            for (attr in data.data[num].main){
                if(data.data[num].main[attr].i == ""){
                    var $li = $(`<li>
                    <div><a href="">
                        <img class='border-right' src="${data.data[num].main[attr].src}">
                        <p>${data.data[num].main[attr].title}</p></a>
                    </div>
                    <p>${data.data[num].main[attr].price}</p>
                    </li>`)
                    $ul.append($li);
                }else{
                    var $li = $(`<li>
                    <i>${data.data[num].main[attr].i}</i>
                    <div><a href="">
                        <img class='border-right' src="${data.data[num].main[attr].src}">
                        <p>${data.data[num].main[attr].title}</p></a>
                    </div>
                    <p>${data.data[num].main[attr].price}</p>
                    </li>`)
                    $ul.append($li);
                }
            }
            $('.nav-mean').append($ul);
        }
    }
}())


var bannerSwiper = (function () {
    var $tipBox = document.querySelector('#tip-box');
    var $tipAll = $tipBox.children;
    var $imgAll = document.querySelectorAll('#img-box li');
    var index = 0;
    var timer = null;
    for (let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].index = i;
            };
    return {
        init() {
            this.event();
            this.autoPlay( );
        },
        event() {
            const self = this;
            $tipBox.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    index = target.index;
                    self.showImage( );
                    self.autoPlay( );
                }
            }

        },
        showImage( ) {
            if(index > $tipAll.length - 1){
                index = 0;
            }else if(index < 0){
                index = $tipAll.length - 1;
            }
            for (let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].classList.remove('current');
                // $imgAll[i].style.display = 'none';
                move($imgAll[i],'opacity',0,1000,function(obj){
                    obj.style.display = 'none';
                })
            }
            $imgAll[index].style.display = 'block';
            move($imgAll[index],'opacity',100,1000);
            $tipAll[index].classList.add('current');
        },
        autoPlay( ){
        clearInterval(timer);
        timer = setInterval(() => {
              index++;
              this.showImage(index);
          },5000)
        }
    }
}());


var bannerNav = (function(){
    var num = 0;
    return {
        init(){
            this.event()
        },
        event(){
            const _this = this;
            $('.banner-nav-mean .mean-title li').on('mouseenter',function(){
                        num = $(this).index();
                        _this.getJson();
            })
            $(document).ready(function () {
                $('.banner-nav-mean .mean-title li a').hover(function () {
                    $('.banner-nav-list').show( );
                }, function () {
                    $('.banner-nav-list').hide( );
                });

                $('.banner-nav-list').hover(function () {
                    $(this).show( );
                }, function () {
                    $(this).hide();
                });
            }) 
        },
        getJson(){
            const _this = this;
           $.getJSON('json/data2.json',function(data){
                _this.insertData(data)
           })
        },
        insertData(data){
            if (num == 0 || num == 1 || num == 3 || num == 9){
                $('.banner-nav-list').css("width","992px")
            }
            if (num == 2 || num == 4 || num == 5 || num == 8){
                $('.banner-nav-list').css("width","530px") 
            }
            if (num == 6 || num == 7){
                $('.banner-nav-list').css("width","795px") 
            }
            $('.banner-nav-list').empty();
            for (attr in data.data[num].main){
                var $ul = $(`<ul class="list-main ${data.data[num].main[attr]}"></ul>`);
                for (i in data.data[num].main[attr].list){
                    var $li = (`<li><a href="">
                    <img src="${data.data[num].main[attr].list[i].src}"  />
                    <span>${data.data[num].main[attr].list[i].title}</span>
                    </a></li>`)
                $ul.append($li); 
                }
                $('.banner-nav-list').append($ul);
            }
        }
    }
}())