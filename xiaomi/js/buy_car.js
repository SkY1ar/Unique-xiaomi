var shopCar = (function(){
    var $itemRow = document.querySelector('.item-table');
    return{
        init(){
            this.event();
            this.getData();
        },
        event(){
            var _this = this;
            $itemRow.onclick = function(e){
                 e = e || window.event;
                 var target = e.target || e.srcElement;
                 if(target.nodeName === 'BUTTON'){
                      var index = target.parentNode.parentNode.getAttribute('index');
                      _this.data.splice(index,1);
                      _this.insertData(_this.data);
                      localStorage.xiaomilist = JSON.stringify(_this.data);  
                 }
           }
           $itemRow.onchange = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName === 'INPUT'){
                var index = target.parentNode.getAttribute('index');
                _this.data[index].count = target.value;
                _this.insertData(_this.data);
                localStorage.xiaomilist = JSON.stringify(_this.data); 
            }
           }
        },
        getData(){
           var xiaomilist = localStorage.xiaomilist || '[]';
           xiaomilist = JSON.parse(xiaomilist);
           this.insertData(xiaomilist);
        },
        insertData(data){
            this.data = data;
            var arr = [];
            for(var i = 0; i < data.length; i++){
                arr.push(`
                <div class='item-row' index = '${i}'>
                <div class="col col-img"><a href=""><img src="${data[i].src}" /></a></div>
                <div class="col col-name"><h2>${data[i].name}  ${data[i].version} ${data[i].color}</h2></div>
                <div class="col col-price">${parseInt(data[i].price)}元</div>
                <div class="col col-num" index = '${i}'><input class="count" type="number" value="${data[i].count}" /></div>
                <div class="col col-total">${parseInt(data[i].price)*data[i].count}元</div>
                <div class="col col-action"><button>删除</button></div>
                </div>`)
            }
            $itemRow.innerHTML = arr.join('');
        }
    }
}())
shopCar.init();