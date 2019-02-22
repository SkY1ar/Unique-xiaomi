var sort = (function() {
    var $btn = document.querySelector('.btn-buy');
    var $flag = document.querySelector('.flag-true');
    var $btnn = document.querySelector('.btn-like')
    var timer = 0;
    return {
        init() {

            this.event();
        },
        event() {
            clearInterval(timer);
            const self = this;
            $btn.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'I') {
                    $flag.style.display = 'block';
                }
                timer = setInterval(() => {
                    $flag.style.display = 'none';
                }, 2000);
            }
            $btnn.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'I') {
                    alert('请先登录');
                }
            }
        }
    }
}())