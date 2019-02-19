var swiper = (function() {
    var obj,
        $bannerBox,
        $tipBox,
        $tipAll,
        $prevBtn,
        $nextBtn,
        imgWidth,
        index = 0,
        timer = null;
    return {
        init(ele) {
            //相当于给一个对象添加了一个属性
            if (typeof ele == "string") {
                obj = document.querySelector(ele);
            }
            imgWidth = obj.clientWidth;
            //获取上一页按钮
            $prevBtn = obj.querySelector(".ui-prev");
            //获取下一页按钮
            $nextBtn = obj.querySelector(".ui-next");
            $bannerBox = obj.querySelector(".list");
            //获取点击条
            // $tipBox = document.querySelector('.ui-pager');
            $tipBox = obj.querySelector('.ui-pager');
            console.log($tipBox);
            $tipAll = $tipBox.children;
            //给所有小圆点添加index
            for (let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].index = i;
            }
            var $firstImg = $bannerBox.firstElementChild;
            var $lastImg = $bannerBox.lastElementChild;
            $bannerBox.appendChild($firstImg.cloneNode(true));
            $bannerBox.insertBefore($lastImg.cloneNode(true), $firstImg);
            $bannerBox.style.left = -imgWidth + "px";
            this.event();
            // this.autoPlay();
        },
        event() {
            const self = this;
            $tipBox.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === "LI") {
                    index = target.index;
                    self.showImage();
                }
            }
            $prevBtn.onclick = function() {
                index--;
                self.showImage();
                self.autoPlay();
            }
            $nextBtn.onclick = function() {
                index++;
                self.showImage();
                self.autoPlay();
            }
        },
        showImage() {
            console.log(index);
            //展示对应的图片
            //获取对应的小圆点
            if (index < 0) {
                $bannerBox.style.left = -($tipAll.length + 1) * imgWidth + "px";
                index = $tipAll.length - 1; //展示最后一张
            } else if (index > $tipAll.length - 1) {
                $bannerBox.style.left = 0;
                index = 0;
            }
            for (let i = 0; i < $tipAll.length; i++) {
                $tipAll[i].classList.remove("active");
            }
            $tipAll[index].classList.add("active");
            move($bannerBox, { left: -(index + 1) * imgWidth }, 500)
        },
        autoPlay() {
            var self = this;
            clearInterval(timer);
            timer = setInterval(() => {
                index++;
                self.showImage();
            }, 2000);
        }
    }
}())